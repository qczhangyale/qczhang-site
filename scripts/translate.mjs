#!/usr/bin/env node
/**
 * Auto-translate English content (papers, blog posts) to zh-cn and zh-tw.
 *
 * Usage:
 *   node scripts/translate.mjs                 # translate all unchanged files
 *   node scripts/translate.mjs --force         # re-translate every file
 *   node scripts/translate.mjs --dry-run       # show plan without API calls
 *   node scripts/translate.mjs --locale zh-cn  # only one locale
 *   node scripts/translate.mjs <path>          # one specific file
 *
 * Requires:
 *   ANTHROPIC_API_KEY environment variable
 *
 * Override mechanism:
 *   - If a Chinese variant file lacks `auto: true` frontmatter, it's
 *     treated as a manual override and never overwritten.
 *   - If `auto: true` and `sourceHash` matches the English source, skip.
 *   - Otherwise, regenerate.
 */

import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname, basename, extname, relative, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import Anthropic from '@anthropic-ai/sdk';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const LOCALES = [
	{ code: 'zh-cn', name: 'Simplified Chinese (zh-CN, 简体中文)' },
	{ code: 'zh-tw', name: 'Traditional Chinese (zh-TW, 繁體中文)' },
];

const CONTENT_DIRS = ['src/content/papers', 'src/content/blog'];

// CLI args
const args = process.argv.slice(2);
const FLAG_FORCE = args.includes('--force');
const FLAG_DRY = args.includes('--dry-run');
const localeIdx = args.indexOf('--locale');
const ONLY_LOCALE = localeIdx >= 0 ? args[localeIdx + 1] : null;
const explicitFiles = args.filter((a) => !a.startsWith('--') && a !== ONLY_LOCALE && !a.match(/^(zh-cn|zh-tw)$/));

const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey && !FLAG_DRY) {
	console.error('✗ ANTHROPIC_API_KEY environment variable not set.');
	console.error('  Set it in your shell, or use --dry-run to preview without translating.');
	process.exit(1);
}

const client = apiKey ? new Anthropic({ apiKey }) : null;

const TRANSLATION_GLOSSARY = `
Translation glossary (use these consistently):

  English term                          → zh-cn                            → zh-tw
  ────────────────────────────────────────────────────────────────────────────────
  twistor                               → 扭量                              → 扭量
  twistor space                         → 扭量空间                          → 扭量空間
  Penrose's projective twistor space    → 彭罗斯射影扭量空间                → 彭羅斯射影扭量空間
  configuration space                   → 构型空间                          → 構型空間
  chamber                               → 腔室                              → 腔室
  invariant                             → 不变量                            → 不變量
  structural invariant                  → 结构不变量                        → 結構不變量
  fine-structure constant               → 精细结构常数                      → 精細結構常數
  electron Yukawa coupling              → 电子 Yukawa 耦合                  → 電子 Yukawa 耦合
  cosmological constant                 → 宇宙学常数                        → 宇宙學常數
  gravitational coupling                → 引力耦合                          → 重力耦合
  Newton's constant                     → 牛顿常数                          → 牛頓常數
  Cabibbo scenario                      → 卡比博情景                        → 卡比博情境
  Cabibbo-scenario regularity           → 卡比博情景式规律                  → 卡比博情境式規律
  Fubini–Study volume                   → Fubini–Study 体积                 → Fubini–Study 體積
  factorial                             → 阶乘                              → 階乘
  Fibonacci                             → 斐波那契                          → 費波那契
  golden ratio                          → 黄金比例                          → 黃金比例
  weak mixing angle                     → 弱混合角                          → 弱混合角
  baryon-to-photon ratio                → 重子-光子数比                     → 重子-光子數比
  baryon asymmetry                      → 重子不对称                        → 重子不對稱
  Planck length                         → 普朗克长度                        → 普朗克長度
  Planck mass                           → 普朗克质量                        → 普朗克質量
  spin-1 fifth force                    → 自旋-1 第五力                     → 自旋-1 第五力
  short-range gravity                   → 短程引力                          → 短程重力
  Yukawa-fifth-force bound              → Yukawa 第五力实验限                → Yukawa 第五力實驗限
  fine-tuning problem                   → 微调问题                          → 微調問題
  hierarchy problem                     → 等级问题                          → 等級問題
  multiverse                            → 多重宇宙                          → 多重宇宙
  anthropic                             → 人择                              → 人擇
  free parameter                        → 自由参数                          → 自由參數
  Standard Model                        → 标准模型                          → 標準模型
  general relativity                    → 广义相对论                        → 廣義相對論
  research marathon                     → 研究马拉松                        → 研究馬拉松
  research program                      → 研究计划                          → 研究計畫
  predictive ledger                     → 预测清单                          → 預測清單
  no-go theorem                         → 不可行定理                        → 不可行定理
  on-shell                              → 壳上                              → 殼上
  recasting                             → 重写 / 重新表达                   → 重寫 / 重新表達
  super-twistor space                   → 超扭量空间                        → 超扭量空間
  Calabi–Yau                            → Calabi–Yau                        → Calabi–Yau
  Berezinian                            → Berezinian                        → Berezinian

Names of physicists (Penrose, Witten, Nambu, Atiyah, Lenz, Sakharov, Geraci,
Venugopalan, Gratta, Tegmark, Ladyman, French, etc.): keep in English.

Names of journals (Physical Review, Nature, etc.): keep in English.

Names of software / databases (Zenodo, DESI, Euclid, Planck, ESPRESSO, CODATA,
PDG, ACT, SPT, WMAP): keep in English.

DOIs, references like [Zhang 2026a], URLs: preserve verbatim.
`;

const buildSystemPrompt = (locale, isBlogPost) => {
	const localeName = LOCALES.find((l) => l.code === locale).name;

	return `You are translating a scientific website article from English to ${localeName}.

This is for the website qczhang.com — a research site about Twistor Configuration Geometry (TCG) and the Configurable Universe research program. The author is Q.C. Zhang.

CRITICAL RULES:

1. Output ONLY the translated markdown file content. No preamble, no explanation, no triple-backtick wrapper. Begin with --- (the YAML frontmatter delimiter).

2. Frontmatter handling:
   - Preserve the EXACT structure (--- ... ---) and all field keys in English.
   - Translate the value of: description${isBlogPost ? ', title' : ''}.
   - ${isBlogPost ? 'Translate title.' : "Keep 'title' and 'shortTitle' in English (they are scientific publication titles)."}
   - Preserve verbatim: doi, date, order, category, precision, keyFormula, pubDate, updatedDate, pinned, heroImage.
   - Add two new frontmatter fields at the bottom (before the closing ---):
       auto: true
       sourceHash: "{HASH_PLACEHOLDER}"

3. Body translation rules:
   - Translate prose (paragraphs, list items, headings).
   - Preserve UNCHANGED: $...$ inline math, $$...$$ display math, fenced code blocks (\`\`\`...\`\`\`), inline code (\`...\`), markdown links [text](url) — translate only the visible text inside [].
   - Preserve markdown structure: ## headings, **bold**, *italic*, > blockquote, lists, etc.
   - Citations like [Zhang 2026a] preserve verbatim.
   - DOI URLs and Zenodo links preserve verbatim.

4. Use the glossary below for technical terms. Be consistent.

${TRANSLATION_GLOSSARY}

5. Style:
   - Match the source register (academic, careful, honest about limitations).
   - Use full-width Chinese punctuation (,。;:?!) where appropriate.
   - Use ASCII parentheses around English-language inserts.
   - Avoid awkward translation-ese; aim for native-feeling Chinese prose.

OUTPUT FORMAT: the complete translated markdown file, starting with ---. Nothing before, nothing after.`;
};

function md5(s) {
	return createHash('md5').update(s).digest('hex').slice(0, 16);
}

/** Parse simple YAML frontmatter — extract `auto:` and `sourceHash:` if present. */
function parseFrontmatter(content) {
	const m = content.match(/^---\n([\s\S]*?)\n---/);
	if (!m) return null;
	const fm = m[1];
	const auto = /^auto:\s*true\b/m.test(fm);
	const hashMatch = fm.match(/^sourceHash:\s*["']?([a-f0-9]+)["']?/m);
	return { auto, sourceHash: hashMatch?.[1] ?? null };
}

async function walk(dir) {
	const out = [];
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = join(dir, entry.name);
		// zh-cn/ and zh-tw/ hold OUTPUT, not English sources. Descending into
		// them made the script plan Chinese-to-Chinese translations.
		if (entry.isDirectory()) {
			if (LOCALES.some((l) => l.code === entry.name)) continue;
			out.push(...(await walk(full)));
		} else if (entry.isFile() && /\.(md|mdx)$/.test(entry.name)) out.push(full);
	}
	return out;
}

function isLocaleVariant(filename) {
	// Matches both conventions: `foo.zh-cn.md` and `zh-cn/foo.md`.
	return /\.(zh-cn|zh-tw)\.(md|mdx)$/.test(filename) || /\/(zh-cn|zh-tw)\//.test(filename);
}

function localePathFor(englishPath, locale) {
	// Repo convention is a locale SUBDIRECTORY next to the English file:
	//   src/content/blog/foo.md  ->  src/content/blog/zh-cn/foo.md
	// (src/i18n resolves the sibling form too, but every existing translation
	// uses the subdirectory form, so new output must match it.)
	return join(dirname(englishPath), locale, basename(englishPath));
}

async function translateFile(englishPath, locale) {
	const sourceContent = await readFile(englishPath, 'utf8');
	const sourceHash = md5(sourceContent);
	const targetPath = localePathFor(englishPath, locale);

	// Decide whether to skip
	if (existsSync(targetPath)) {
		const existing = await readFile(targetPath, 'utf8');
		const fm = parseFrontmatter(existing);
		if (!fm?.auto) {
			return { status: 'skip', reason: 'manual override (no `auto: true`)', path: targetPath };
		}
		if (!FLAG_FORCE && fm.sourceHash === sourceHash) {
			return { status: 'skip', reason: 'sourceHash matches (unchanged)', path: targetPath };
		}
	}

	if (FLAG_DRY) {
		return { status: 'plan', path: targetPath, hash: sourceHash };
	}

	const isBlog = englishPath.includes('/content/blog/');
	const systemPrompt = buildSystemPrompt(locale, isBlog).replace('{HASH_PLACEHOLDER}', sourceHash);

	const stream = client.messages.stream({
		model: 'claude-opus-5',
		// Long-form posts translate to well over 8192 output tokens, and on
		// Claude Opus 5 adaptive thinking is on by default and draws from the
		// same budget — an 8192 cap truncated long articles mid-translation.
		// Streaming keeps a large cap from hitting the SDK HTTP timeout.
		max_tokens: 32000,
		system: systemPrompt,
		messages: [{ role: 'user', content: sourceContent }],
	});
	const response = await stream.finalMessage();

	if (response.stop_reason === 'max_tokens') {
		throw new Error(
			`translation truncated (hit max_tokens) for ${englishPath} → ${locale}; raise max_tokens`,
		);
	}

	let translated = response.content
		.filter((b) => b.type === 'text')
		.map((b) => b.text)
		.join('');

	// Clean up: ensure starts with ---
	translated = translated.trim();
	if (!translated.startsWith('---')) {
		// Strip any preamble before first ---
		const idx = translated.indexOf('---');
		if (idx > 0) translated = translated.slice(idx);
	}
	if (!translated.endsWith('\n')) translated += '\n';

	// Sanity check — make sure the model preserved sourceHash
	if (!translated.includes(sourceHash)) {
		// Insert it ourselves as a safety net
		translated = translated.replace(/^---\n([\s\S]*?)\n---/, (_, fm) => {
			let body = fm;
			if (!/^auto:/m.test(body)) body += '\nauto: true';
			if (!/^sourceHash:/m.test(body)) body += `\nsourceHash: "${sourceHash}"`;
			return `---\n${body}\n---`;
		});
	}

	await mkdir(dirname(targetPath), { recursive: true });
	await writeFile(targetPath, translated, 'utf8');
	return { status: 'wrote', path: targetPath, hash: sourceHash };
}

async function main() {
	console.log(`Translation script — qczhang.com\n`);
	console.log(`Mode: ${FLAG_DRY ? 'DRY-RUN' : FLAG_FORCE ? 'FORCE' : 'incremental'}`);
	if (ONLY_LOCALE) console.log(`Locale: ${ONLY_LOCALE} only`);
	console.log();

	const files = explicitFiles.length
		? explicitFiles.map((f) => resolve(f))
		: (await Promise.all(CONTENT_DIRS.map((d) => walk(join(ROOT, d))))).flat();

	const englishFiles = files.filter((f) => !isLocaleVariant(basename(f)));
	console.log(`Found ${englishFiles.length} English source file(s).\n`);

	const targetLocales = ONLY_LOCALE
		? LOCALES.filter((l) => l.code === ONLY_LOCALE)
		: LOCALES;

	let counts = { wrote: 0, skip: 0, plan: 0, error: 0 };

	for (const englishPath of englishFiles) {
		const rel = relative(ROOT, englishPath);
		console.log(`◇ ${rel}`);
		for (const { code: locale } of targetLocales) {
			try {
				const result = await translateFile(englishPath, locale);
				const targetRel = relative(ROOT, result.path);
				const symbol = result.status === 'wrote' ? '✓' : result.status === 'plan' ? '→' : '·';
				const detail = result.status === 'skip' ? ` (${result.reason})` : '';
				console.log(`  ${symbol} ${locale}: ${targetRel}${detail}`);
				counts[result.status]++;
			} catch (err) {
				console.log(`  ✗ ${locale}: ERROR — ${err.message}`);
				counts.error++;
			}
		}
	}

	console.log();
	console.log(`Summary: ${counts.wrote} written, ${counts.skip} skipped, ${counts.plan} planned, ${counts.error} errors.`);
}

main().catch((err) => {
	console.error('Fatal:', err);
	process.exit(1);
});
