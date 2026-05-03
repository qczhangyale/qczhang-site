// i18n dictionary for UI strings.
// Three locales: 'en' (default), 'zh-cn' (Simplified Chinese), 'zh-tw' (Traditional Chinese).
// Add new keys to all three blocks. Missing keys fall back to English.

export type Locale = 'en' | 'zh-cn' | 'zh-tw';

export const LOCALES: Locale[] = ['en', 'zh-cn', 'zh-tw'];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
	'en': 'EN',
	'zh-cn': '简',
	'zh-tw': '繁',
};

export const LOCALE_FULL_NAMES: Record<Locale, string> = {
	'en': 'English',
	'zh-cn': '简体中文',
	'zh-tw': '繁體中文',
};

type Dict = Record<string, string>;

const en: Dict = {
	// Site identity
	'site.brandTag': 'Twistor Configuration Geometry',
	'site.tagline': 'A research program on the dimensionless constants of physics.',

	// Nav
	'nav.home': 'Home',
	'nav.papers': 'Papers',
	'nav.posts': 'Posts',
	'nav.about': 'About',

	// Themes
	'theme.daylight': 'Daylight',
	'theme.daylightDesc': 'Daylight — cool, clear-day feel',
	'theme.warm': 'Warm',
	'theme.warmDesc': 'Warm — cream paper, navy accent',
	'theme.dark': 'Dark',
	'theme.darkDesc': 'Dark — deep canvas, blue accent',
	'theme.label': 'Color theme',

	// Language picker
	'lang.label': 'Language',

	// Homepage
	'home.eyebrow': 'A research program',
	'home.title': 'Twistor Configuration Geometry & the Configurable Universe',
	'home.tagline': "What if the dimensionless constants of physics aren't free parameters, but structural invariants of a chamber?",
	'home.cta.read': 'Read the papers',
	'home.cta.about': 'About',
	'home.startHere': 'Start here',
	'home.synthesisTitle': 'The four synthesis papers',
	'home.synthesisIntro': 'Published May 2026. Read these four together for the full program: the empirical body, the philosophical reading, the mathematical framework, and the predictive ledger.',
	'home.allPapersLink': 'See all {n} papers',
	'home.empiricalBody': 'The empirical body',
	'home.relationsTitle': 'The nine relations',
	'home.relationsIntro': 'Each row is a closed-form expression among independently-measured constants, written in a small mathematical vocabulary (low π powers, factorials, Fibonacci numbers, the golden ratio).',
	'home.factAnchorLabel': 'Empirical anchor',
	'home.factAnchorBody': 'Nine sub-percent algebraic relations across six physical sectors, spanning **124 orders of magnitude**.',
	'home.factPredLabel': 'Falsifiable prediction',
	'home.factPredBody': 'Spin-1 short-range fifth force at α_Y ≈ 1.88×10⁴, λ ≲ 5–10 μm — about 500× from current bounds.',
	'home.contactBlockTitle': 'About this site.',
	'home.contactBlockBody': "Q.C. Zhang's research site for the TCG / Configurable Universe program. All papers are on Zenodo, CC-BY-4.0.",
	'home.contactBlockOpen': 'Open to criticism, collaboration, and pointers to related work. Contact',

	// Relations table headers
	'rel.id': 'ID',
	'rel.formula': 'Relation',
	'rel.sector': 'Sector',
	'rel.precision': 'Precision',
	'rel.original': 'Original?',
	'rel.yes': 'Yes',
	'rel.twistorOrigin': 'Twistor origin',
	'rel.nambuRecast': 'Nambu, recast',

	// Papers index
	'papers.eyebrow': 'Bibliography',
	'papers.title': 'Papers',
	'papers.intro': 'All sixteen papers in the Twistor Configuration Geometry program. Published on Zenodo under CC-BY-4.0. The four synthesis papers (May 2026) are the recommended starting point; the twelve development papers are listed in research-marathon order.',
	'papers.statPapers': 'Papers',
	'papers.statRelations': 'Empirical relations',
	'papers.statOoM': 'Orders of magnitude',
	'papers.statPrediction': 'Falsifiable prediction',
	'papers.section.synthesis': 'Synthesis',
	'papers.section.synthesisSubtitle': 'May 2026 — recommended starting point',
	'papers.section.synthesisNote': 'Four consolidation papers integrating the empirical body, mathematical framework, philosophical reading, and predictive ledger.',
	'papers.section.cosmology': 'Cosmology and Gravity',
	'papers.section.cosmologySubtitle': 'Founding observations',
	'papers.section.cosmologyNote': 'The cosmological-constant relation, the η formula, the gravitational coupling, and the emergent-gravity expression containing the original spin-1 derivation.',
	'papers.section.method': 'Methodology and Groundwork',
	'papers.section.methodSubtitle': 'How and why',
	'papers.section.methodNote': 'The discovery engine and the architectural role of the electron mass.',
	'papers.section.twistor': 'Twistor Framework Discoveries',
	'papers.section.twistorSubtitle': 'April 2026 — the geometric breakthrough',
	'papers.section.twistorNote': '1/α as a chamber-weighted Fubini–Study sum, the stratified Penrose-volume integral, the electron-Yukawa closed form, the super-flag construction, lepton golden-ratio scaling, and the super-CY reading of Λ.',

	// Blog index
	'blog.eyebrow': 'Posts',
	'blog.title': 'Long-form writing',
	'blog.intro': 'Long-form writing on the Twistor Configuration Geometry program — essays, notes, and explanations.',
	'blog.section.pinned': 'Pinned',
	'blog.section.morePosts': 'More posts',
	'blog.section.latest': 'Latest',
	'blog.pinBadge': 'Pinned',
	'blog.minRead': '{n} min read',
	'blog.longRead': 'Long read',
	'blog.continueReading': 'Continue reading →',
	'blog.empty': 'No more posts yet — check back soon.',

	// Article (BlogPost layout)
	'article.eyebrow': 'Long read',
	'article.byline.by': 'By',
	'article.byline.updated': 'updated',
	'article.footer': 'This essay accompanies a sixteen-paper publication arc on Zenodo (CC-BY-4.0).',
	'article.footer.bibliography': 'See the full bibliography →',

	// About
	'about.eyebrow': 'About',
	'about.title': 'Q.C. Zhang',
	'about.lede': 'Independent researcher in theoretical physics.',
	'about.intro': "My work proposes that the dimensionless constants of physics — α, Λ, α_G, Yukawa couplings, sin²θ_W, and others — are not free parameters but structural invariants of a combinatorial geometry built on Penrose's projective twistor space CP³.",
	'about.framework': "The framework is **Twistor Configuration Geometry (TCG)**; the philosophical reading is the **Configurable Universe** — constants are chamber invariants, in the same sense that the dimension of a vector space is.",
	'about.empiricalAnchor': 'Empirical anchor',
	'about.empiricalAnchorBody': 'Nine sub-percent algebraic relations among independently-measured constants, spanning **124 orders of magnitude** across six physical sectors — none currently derivable from the Standard Model or general relativity.',
	'about.prediction': 'Falsifiable prediction',
	'about.predictionBody': 'A spin-1 mediated short-range fifth force at α_Y ≈ 1.88×10⁴, λ ≲ 5–10 μm — about 500× from current short-range gravity bounds.',
	'about.corpus': 'The corpus',
	'about.corpusBody': 'Sixteen papers on Zenodo, CC-BY-4.0: four synthesis papers (May 2026) and twelve development papers documenting the research marathon that led to the framework.',
	'about.corpusList': 'See the full list',
	'about.contact': 'Contact',
	'about.contactEmail': 'Email',
	'about.contactOpen': 'Open to criticism, collaboration, and pointers to related work.',

	// Footer
	'footer.licensed': 'Content licensed under',

	// Paper detail
	'paper.published': 'Published',
	'paper.doi': 'DOI',
	'paper.keyRelation': 'Key relation',
	'paper.openZenodo': 'Open on Zenodo',
	'paper.cta': 'Read the full paper on Zenodo (CC-BY-4.0):',
	'paper.back': '← All papers',
	'paper.backFull': '← Back to all papers',
};

const zhCN: Dict = {
	'site.brandTag': '扭量构型几何',
	'site.tagline': '关于物理学无量纲常数的研究计划。',

	'nav.home': '首页',
	'nav.papers': '论文',
	'nav.posts': '文章',
	'nav.about': '关于',

	'theme.daylight': '日光',
	'theme.daylightDesc': '日光 — 清冷、白昼感',
	'theme.warm': '暖色',
	'theme.warmDesc': '暖色 — 米色纸张、深蓝主调',
	'theme.dark': '夜晚',
	'theme.darkDesc': '夜晚 — 深色背景、蓝色主调',
	'theme.label': '配色主题',

	'lang.label': '语言',

	'home.eyebrow': '一项研究计划',
	'home.title': '扭量构型几何与可配置宇宙',
	'home.tagline': '如果物理学的无量纲常数不是自由参数,而是某个腔室的结构不变量呢?',
	'home.cta.read': '阅读论文',
	'home.cta.about': '关于',
	'home.startHere': '从这里开始',
	'home.synthesisTitle': '四篇综合论文',
	'home.synthesisIntro': '发表于 2026 年 5 月。这四篇论文一同阅读可看到完整图景:经验主体、哲学诠释、数学框架与可证伪预测清单。',
	'home.allPapersLink': '查看全部 {n} 篇论文',
	'home.empiricalBody': '经验主体',
	'home.relationsTitle': '九条经验关系',
	'home.relationsIntro': '每一行都是独立测得常数之间的闭式表达,使用极小的数学词汇(低阶 π 幂、阶乘、斐波那契数、黄金比例)写就。',
	'home.factAnchorLabel': '经验锚点',
	'home.factAnchorBody': '九条亚百分位代数关系,横跨六个物理领域,涵盖 **124 个数量级**。',
	'home.factPredLabel': '可证伪预测',
	'home.factPredBody': '自旋-1 短程第五力,α_Y ≈ 1.88×10⁴,λ ≲ 5–10 μm — 距当前实验限约 500 倍。',
	'home.contactBlockTitle': '关于本网站。',
	'home.contactBlockBody': '张庆春的 TCG / 可配置宇宙研究计划网站。所有论文均发表于 Zenodo, CC-BY-4.0 许可。',
	'home.contactBlockOpen': '欢迎批评、合作与相关研究的指引。联系方式:',

	'rel.id': '编号',
	'rel.formula': '关系式',
	'rel.sector': '领域',
	'rel.precision': '精度',
	'rel.original': '原创?',
	'rel.yes': '是',
	'rel.twistorOrigin': '扭量起源',
	'rel.nambuRecast': '南部式重写',

	'papers.eyebrow': '文献',
	'papers.title': '论文',
	'papers.intro': '扭量构型几何研究计划中的全部十六篇论文,发表于 Zenodo,CC-BY-4.0 许可。四篇综合论文(2026 年 5 月)是建议的入门起点;十二篇开发期论文按研究马拉松顺序排列。',
	'papers.statPapers': '篇论文',
	'papers.statRelations': '条经验关系',
	'papers.statOoM': '个数量级',
	'papers.statPrediction': '项可证伪预测',
	'papers.section.synthesis': '综合',
	'papers.section.synthesisSubtitle': '2026 年 5 月 — 推荐入门',
	'papers.section.synthesisNote': '四篇整合论文,综合经验主体、数学框架、哲学诠释与可证伪预测清单。',
	'papers.section.cosmology': '宇宙学与引力',
	'papers.section.cosmologySubtitle': '奠基性观察',
	'papers.section.cosmologyNote': '宇宙学常数关系、η 公式、引力耦合与涌现引力表达式(包含最初的自旋-1 推导)。',
	'papers.section.method': '方法学与基础工作',
	'papers.section.methodSubtitle': '如何与为何',
	'papers.section.methodNote': '发现引擎与电子质量的架构性角色。',
	'papers.section.twistor': '扭量框架发现',
	'papers.section.twistorSubtitle': '2026 年 4 月 — 几何突破',
	'papers.section.twistorNote': '1/α 作为腔室加权 Fubini–Study 体积之和、分层 Penrose 体积积分、电子 Yukawa 闭式、超旗构造、轻子黄金比例缩放,以及对 Λ 的超 Calabi–Yau 解读。',

	'blog.eyebrow': '文章',
	'blog.title': '长文写作',
	'blog.intro': '关于扭量构型几何研究计划的长文 — 评论、笔记与阐释。',
	'blog.section.pinned': '置顶',
	'blog.section.morePosts': '更多文章',
	'blog.section.latest': '最新',
	'blog.pinBadge': '置顶',
	'blog.minRead': '约 {n} 分钟',
	'blog.longRead': '深度长文',
	'blog.continueReading': '继续阅读 →',
	'blog.empty': '暂无更多文章 — 请稍后再来。',

	'article.eyebrow': '深度长文',
	'article.byline.by': '作者',
	'article.byline.updated': '更新于',
	'article.footer': '本文配套 Zenodo 上的十六篇论文系列(CC-BY-4.0 许可)。',
	'article.footer.bibliography': '查看完整文献列表 →',

	'about.eyebrow': '关于',
	'about.title': '张庆春',
	'about.lede': '理论物理独立研究者。',
	'about.intro': '我的工作提议:物理学的无量纲常数 — α、Λ、α_G、Yukawa 耦合、sin²θ_W 等 — 并非自由参数,而是建立在彭罗斯射影扭量空间 CP³ 上的某种组合几何的结构不变量。',
	'about.framework': '框架称为**扭量构型几何 (TCG)**;哲学诠释为**可配置宇宙** — 常数即腔室不变量,正如向量空间的维度是其结构不变量一样。',
	'about.empiricalAnchor': '经验锚点',
	'about.empiricalAnchorBody': '独立测得常数之间的九条亚百分位代数关系,横跨六个物理领域,涵盖 **124 个数量级** — 当前没有一条可从标准模型或广义相对论推导得出。',
	'about.prediction': '可证伪预测',
	'about.predictionBody': '一种自旋-1 介导的短程第五力,α_Y ≈ 1.88×10⁴,λ ≲ 5–10 μm — 距当前短程引力实验限约 500 倍。',
	'about.corpus': '文集',
	'about.corpusBody': '十六篇论文,Zenodo 发表,CC-BY-4.0 许可:四篇综合论文(2026 年 5 月)与十二篇开发期论文,记录了导致此框架的研究马拉松。',
	'about.corpusList': '查看完整列表',
	'about.contact': '联系',
	'about.contactEmail': '邮箱',
	'about.contactOpen': '欢迎批评、合作与相关研究的指引。',

	'footer.licensed': '内容采用',

	'paper.published': '发表日期',
	'paper.doi': 'DOI',
	'paper.keyRelation': '核心关系',
	'paper.openZenodo': '在 Zenodo 阅读',
	'paper.cta': '在 Zenodo 阅读完整论文(CC-BY-4.0 许可):',
	'paper.back': '← 全部论文',
	'paper.backFull': '← 返回论文列表',
};

const zhTW: Dict = {
	'site.brandTag': '扭量構型幾何',
	'site.tagline': '關於物理學無量綱常數的研究計畫。',

	'nav.home': '首頁',
	'nav.papers': '論文',
	'nav.posts': '文章',
	'nav.about': '關於',

	'theme.daylight': '日光',
	'theme.daylightDesc': '日光 — 清冷、白晝感',
	'theme.warm': '暖色',
	'theme.warmDesc': '暖色 — 米色紙張、深藍主調',
	'theme.dark': '夜晚',
	'theme.darkDesc': '夜晚 — 深色背景、藍色主調',
	'theme.label': '配色主題',

	'lang.label': '語言',

	'home.eyebrow': '一項研究計畫',
	'home.title': '扭量構型幾何與可配置宇宙',
	'home.tagline': '如果物理學的無量綱常數不是自由參數,而是某個腔室的結構不變量呢?',
	'home.cta.read': '閱讀論文',
	'home.cta.about': '關於',
	'home.startHere': '從這裡開始',
	'home.synthesisTitle': '四篇綜合論文',
	'home.synthesisIntro': '發表於 2026 年 5 月。這四篇論文一同閱讀可看到完整圖景:經驗主體、哲學詮釋、數學框架與可證偽預測清單。',
	'home.allPapersLink': '查看全部 {n} 篇論文',
	'home.empiricalBody': '經驗主體',
	'home.relationsTitle': '九條經驗關係',
	'home.relationsIntro': '每一行都是獨立測得常數之間的閉式表達,使用極小的數學詞彙(低階 π 冪、階乘、費波那契數、黃金比例)寫就。',
	'home.factAnchorLabel': '經驗錨點',
	'home.factAnchorBody': '九條亞百分位代數關係,橫跨六個物理領域,涵蓋 **124 個數量級**。',
	'home.factPredLabel': '可證偽預測',
	'home.factPredBody': '自旋-1 短程第五力,α_Y ≈ 1.88×10⁴,λ ≲ 5–10 μm — 距當前實驗限約 500 倍。',
	'home.contactBlockTitle': '關於本網站。',
	'home.contactBlockBody': '張慶春的 TCG / 可配置宇宙研究計畫網站。所有論文均發表於 Zenodo, CC-BY-4.0 授權。',
	'home.contactBlockOpen': '歡迎批評、合作與相關研究的指引。聯絡方式:',

	'rel.id': '編號',
	'rel.formula': '關係式',
	'rel.sector': '領域',
	'rel.precision': '精度',
	'rel.original': '原創?',
	'rel.yes': '是',
	'rel.twistorOrigin': '扭量起源',
	'rel.nambuRecast': '南部式重寫',

	'papers.eyebrow': '文獻',
	'papers.title': '論文',
	'papers.intro': '扭量構型幾何研究計畫中的全部十六篇論文,發表於 Zenodo,CC-BY-4.0 授權。四篇綜合論文(2026 年 5 月)是建議的入門起點;十二篇開發期論文按研究馬拉松順序排列。',
	'papers.statPapers': '篇論文',
	'papers.statRelations': '條經驗關係',
	'papers.statOoM': '個數量級',
	'papers.statPrediction': '項可證偽預測',
	'papers.section.synthesis': '綜合',
	'papers.section.synthesisSubtitle': '2026 年 5 月 — 推薦入門',
	'papers.section.synthesisNote': '四篇整合論文,綜合經驗主體、數學框架、哲學詮釋與可證偽預測清單。',
	'papers.section.cosmology': '宇宙學與重力',
	'papers.section.cosmologySubtitle': '奠基性觀察',
	'papers.section.cosmologyNote': '宇宙學常數關係、η 公式、重力耦合與湧現重力表達式(包含最初的自旋-1 推導)。',
	'papers.section.method': '方法學與基礎工作',
	'papers.section.methodSubtitle': '如何與為何',
	'papers.section.methodNote': '發現引擎與電子質量的架構性角色。',
	'papers.section.twistor': '扭量框架發現',
	'papers.section.twistorSubtitle': '2026 年 4 月 — 幾何突破',
	'papers.section.twistorNote': '1/α 作為腔室加權 Fubini–Study 體積之和、分層 Penrose 體積積分、電子 Yukawa 閉式、超旗構造、輕子黃金比例縮放,以及對 Λ 的超 Calabi–Yau 解讀。',

	'blog.eyebrow': '文章',
	'blog.title': '長文寫作',
	'blog.intro': '關於扭量構型幾何研究計畫的長文 — 評論、筆記與闡釋。',
	'blog.section.pinned': '置頂',
	'blog.section.morePosts': '更多文章',
	'blog.section.latest': '最新',
	'blog.pinBadge': '置頂',
	'blog.minRead': '約 {n} 分鐘',
	'blog.longRead': '深度長文',
	'blog.continueReading': '繼續閱讀 →',
	'blog.empty': '暫無更多文章 — 請稍後再來。',

	'article.eyebrow': '深度長文',
	'article.byline.by': '作者',
	'article.byline.updated': '更新於',
	'article.footer': '本文配套 Zenodo 上的十六篇論文系列(CC-BY-4.0 授權)。',
	'article.footer.bibliography': '查看完整文獻列表 →',

	'about.eyebrow': '關於',
	'about.title': '張慶春',
	'about.lede': '理論物理獨立研究者。',
	'about.intro': '我的工作提議:物理學的無量綱常數 — α、Λ、α_G、Yukawa 耦合、sin²θ_W 等 — 並非自由參數,而是建立在彭羅斯射影扭量空間 CP³ 上的某種組合幾何的結構不變量。',
	'about.framework': '框架稱為**扭量構型幾何 (TCG)**;哲學詮釋為**可配置宇宙** — 常數即腔室不變量,正如向量空間的維度是其結構不變量一樣。',
	'about.empiricalAnchor': '經驗錨點',
	'about.empiricalAnchorBody': '獨立測得常數之間的九條亞百分位代數關係,橫跨六個物理領域,涵蓋 **124 個數量級** — 當前沒有一條可從標準模型或廣義相對論推導得出。',
	'about.prediction': '可證偽預測',
	'about.predictionBody': '一種自旋-1 介導的短程第五力,α_Y ≈ 1.88×10⁴,λ ≲ 5–10 μm — 距當前短程重力實驗限約 500 倍。',
	'about.corpus': '文集',
	'about.corpusBody': '十六篇論文,Zenodo 發表,CC-BY-4.0 授權:四篇綜合論文(2026 年 5 月)與十二篇開發期論文,記錄了導致此框架的研究馬拉松。',
	'about.corpusList': '查看完整列表',
	'about.contact': '聯絡',
	'about.contactEmail': '電子郵件',
	'about.contactOpen': '歡迎批評、合作與相關研究的指引。',

	'footer.licensed': '內容採用',

	'paper.published': '發表日期',
	'paper.doi': 'DOI',
	'paper.keyRelation': '核心關係',
	'paper.openZenodo': '在 Zenodo 閱讀',
	'paper.cta': '在 Zenodo 閱讀完整論文(CC-BY-4.0 授權):',
	'paper.back': '← 全部論文',
	'paper.backFull': '← 返回論文列表',
};

const dictionaries: Record<Locale, Dict> = {
	'en': en,
	'zh-cn': zhCN,
	'zh-tw': zhTW,
};

/** Look up a translation key for a given locale. Falls back to English, then to the key itself. */
export function t(locale: Locale, key: string, vars?: Record<string, string | number>): string {
	let str = dictionaries[locale]?.[key] ?? dictionaries['en']?.[key] ?? key;
	if (vars) {
		for (const [k, v] of Object.entries(vars)) {
			str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v));
		}
	}
	return str;
}

/** Detect the locale from a URL pathname (e.g. '/zh-cn/papers/' → 'zh-cn'). */
export function localeFromPath(pathname: string): Locale {
	const segments = pathname.split('/').filter(Boolean);
	const first = segments[0]?.toLowerCase();
	if (first === 'zh-cn' || first === 'zh-tw') return first;
	return 'en';
}

/** Build a URL for the same page in a different locale. */
export function localizedUrl(pathname: string, target: Locale): string {
	const segments = pathname.split('/').filter(Boolean);
	const currentLocale = localeFromPath(pathname);
	// Strip current locale prefix if present
	const rest = currentLocale === 'en' ? segments : segments.slice(1);
	if (target === 'en') {
		return '/' + (rest.length ? rest.join('/') + '/' : '');
	}
	return '/' + target + '/' + (rest.length ? rest.join('/') + '/' : '');
}

// ────────────────────────────────────────────────────────────────────────────
// Content collection helpers — locale variants live in subdirectories.
// Layout:
//   src/content/blog/configurable-universe.md         (English, id: 'configurable-universe')
//   src/content/blog/zh-cn/configurable-universe.md   (id: 'zh-cn/configurable-universe')
//   src/content/blog/zh-tw/configurable-universe.md   (id: 'zh-tw/configurable-universe')
// (Same scheme for papers/.) Subdirectories are used because Astro's glob loader
// strips dots when generating URL slugs, breaking dot-suffixed filenames.
// ────────────────────────────────────────────────────────────────────────────

const LOCALE_PREFIX = /^(zh-cn|zh-tw)\//;

/** Filter to English-only entries (no `zh-cn/` or `zh-tw/` prefix on id). */
export function filterEnglishOnly<T extends { id: string }>(entries: T[]): T[] {
	return entries.filter((e) => !LOCALE_PREFIX.test(e.id));
}

/** Pick the locale-specific entry from a collection if one exists, else fall back to English. */
export function pickLocalized<T extends { id: string }>(
	entries: T[],
	englishEntry: T,
	locale: Locale,
): T {
	if (locale === 'en') return englishEntry;
	const localizedId = `${locale}/${englishEntry.id}`;
	return entries.find((e) => e.id === localizedId) ?? englishEntry;
}
