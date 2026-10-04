// Structured data for Complementarity-First Foundational Release I.
//
// Everything here is transcribed from the release overview paper
// (CF-OV1, doi:10.5281/zenodo.21926095) — the branch grouping, the four
// recommended reading paths (its Table "Recommended reading navigation"),
// and the twelve-row open-problem ledger with its exact frozen statuses.
//
// Statuses are deliberately NOT collapsed into a single "open" bucket: the
// release's anti-flattening rule requires OPEN, OPEN/HOLD and NOT YET
// PERFORMED to stay distinguishable.

import type { Locale } from '../i18n';

type L10n = Record<Locale, string>;

const pick = (locale: Locale, v: L10n) => v[locale] ?? v.en;

/* ------------------------------------------------------------------ */
/* Release-level facts                                                 */
/* ------------------------------------------------------------------ */

export const RELEASE = {
	/** Records in Release I: 9 technical papers + 1 overview. */
	records: 10,
	technical: 9,
	/** Public-manuscript pages across the nine technical papers. */
	technicalPages: 245,
	/** Open-problem ledger split (CF-OV1 Table: open-problem ledger). */
	open: 9,
	openHold: 2,
	notYetPerformed: 1,
};

/* ------------------------------------------------------------------ */
/* Branches                                                            */
/* ------------------------------------------------------------------ */

export interface Branch {
	key: string;
	category: string;
	title: L10n;
	blurb: L10n;
}

export const BRANCHES: Branch[] = [
	{
		key: 'foundation',
		category: 'cf-foundation',
		title: {
			en: 'Foundation',
			'zh-cn': '基础',
			'zh-tw': '基礎',
		},
		blurb: {
			en: 'The primitive completed relation, four classification criteria, and the evidence discipline every other paper inherits. Its central results are negative: elementary independence models show what the primitive does not determine.',
			'zh-cn': '原始的“已完成关系”、四条分类判据，以及其余各篇论文共同继承的证据纪律。其核心结论是否定性的：初等独立性模型表明该原语并不决定什么。',
			'zh-tw': '原始的「已完成關係」、四條分類判準，以及其餘各篇論文共同繼承的證據紀律。其核心結論是否定性的：初等獨立性模型表明該原語並不決定什麼。',
		},
	},
	{
		key: 'quantum',
		category: 'cf-quantum',
		title: {
			en: 'Quantum foundations',
			'zh-cn': '量子基础',
			'zh-tw': '量子基礎',
		},
		blurb: {
			en: 'A premise-controlled reconstruction audit plus three focused studies: readout of the two-rebit tomographic defect, certificate-relative objectivity under a noninjective public interface, and the resource cost of records without a free thermodynamic arrow.',
			'zh-cn': '一份前提受控的重构审计，加上三项聚焦研究：双实比特层析缺陷的读出、非单射公共接口下的凭证相对客观性，以及在没有免费热力学箭头的情况下维持记录的资源代价。',
			'zh-tw': '一份前提受控的重構稽核，加上三項聚焦研究：雙實位元斷層缺陷的讀出、非單射公共介面下的憑證相對客觀性，以及在沒有免費熱力學箭頭的情況下維持紀錄的資源代價。',
		},
	},
	{
		key: 'gravity',
		category: 'cf-gravity',
		title: {
			en: 'Gravity',
			'zh-cn': '引力',
			'zh-tw': '重力',
		},
		blurb: {
			en: 'The paired-incidence and transport architecture, then two deliberately distinct local Regge descendants — one asking what local data suffice for a nonzero response, the other what symmetry forces a response to vanish exactly.',
			'zh-cn': '配对关联与输运架构，随后是两个刻意区分的局域 Regge 后继结果——一个追问哪些局域数据足以确定非零响应，另一个追问何种对称性迫使响应精确为零。',
			'zh-tw': '配對關聯與輸運架構，隨後是兩個刻意區分的局域 Regge 後繼結果——一個追問哪些局域資料足以確定非零響應，另一個追問何種對稱性迫使響應精確為零。',
		},
	},
	{
		key: 'synthesis',
		category: 'cf-synthesis',
		title: {
			en: 'Synthesis',
			'zh-cn': '综合',
			'zh-tw': '綜合',
		},
		blurb: {
			en: 'A finite dual-pair carrier and a common BF-type kernel host both branches — but they require different variation spaces. That gap is named rather than papered over: the variation-space selector obstruction.',
			'zh-cn': '有限对偶载体与共同的 BF 型内核同时容纳两个分支——但它们需要不同的变分空间。这一缺口被明确命名而非掩饰：变分空间选择子障碍。',
			'zh-tw': '有限對偶載體與共同的 BF 型內核同時容納兩個分支——但它們需要不同的變分空間。這一缺口被明確命名而非掩飾：變分空間選擇子障礙。',
		},
	},
	{
		key: 'overview',
		category: 'cf-overview',
		title: {
			en: 'Overview',
			'zh-cn': '总览',
			'zh-tw': '總覽',
		},
		blurb: {
			en: 'The release-level map: paper map, dependency graph, evidence classification, artifact register and open-problem ledger. It maps the corpus without becoming a scientific premise of it.',
			'zh-cn': '发布层级的地图：论文图谱、依赖关系图、证据分级、成果登记与未决问题清单。它为整个语料库绘制地图，但不成为其中任何论文的科学前提。',
			'zh-tw': '發布層級的地圖：論文圖譜、相依關係圖、證據分級、成果登記與未決問題清單。它為整個語料庫繪製地圖，但不成為其中任何論文的科學前提。',
		},
	},
];

export const branchTitle = (locale: Locale, b: Branch) => pick(locale, b.title);
export const branchBlurb = (locale: Locale, b: Branch) => pick(locale, b.blurb);

/* ------------------------------------------------------------------ */
/* Reading paths (CF-OV1: navigation only, NOT provenance)             */
/* ------------------------------------------------------------------ */

export interface ReadingPath {
	key: string;
	name: L10n;
	/** Paper slugs in recommended order. */
	steps: string[];
}

export const READING_PATHS: ReadingPath[] = [
	{
		key: 'orientation',
		name: { en: 'Orientation', 'zh-cn': '入门', 'zh-tw': '入門' },
		steps: [
			'cf-10-release-i-overview',
			'cf-01-relational-unity',
			'cf-02-complementarity-before-quantum',
			'cf-06-tcg-paired-incidence',
			'cf-09-unified-dynamics',
		],
	},
	{
		key: 'quantum',
		name: { en: 'Quantum', 'zh-cn': '量子', 'zh-tw': '量子' },
		steps: [
			'cf-10-release-i-overview',
			'cf-01-relational-unity',
			'cf-02-complementarity-before-quantum',
			'cf-03-two-rebit-readout',
			'cf-04-certificate-objectivity',
			'cf-05-relational-time',
			'cf-09-unified-dynamics',
		],
	},
	{
		key: 'gravity',
		name: { en: 'Gravity', 'zh-cn': '引力', 'zh-tw': '重力' },
		steps: [
			'cf-10-release-i-overview',
			'cf-01-relational-unity',
			'cf-06-tcg-paired-incidence',
			'cf-07-h2r-regge-transfer',
			'cf-08-six-sector-reynolds',
			'cf-09-unified-dynamics',
		],
	},
	{
		key: 'short',
		name: { en: 'Technical short', 'zh-cn': '技术速览', 'zh-tw': '技術速覽' },
		steps: [
			'cf-10-release-i-overview',
			'cf-02-complementarity-before-quantum',
			'cf-06-tcg-paired-incidence',
			'cf-09-unified-dynamics',
		],
	},
];

export const pathName = (locale: Locale, p: ReadingPath) => pick(locale, p.name);

/* ------------------------------------------------------------------ */
/* Open-problem ledger (CF-OV1, exact frozen statuses)                 */
/* ------------------------------------------------------------------ */

export type OpenStatus = 'OPEN' | 'OPEN/HOLD' | 'NOT YET PERFORMED';

export interface OpenProblem {
	id: string;
	status: OpenStatus;
	problem: L10n;
	owners: string[];
}

export const OPEN_PROBLEMS: OpenProblem[] = [
	{
		id: 'OP-01',
		status: 'OPEN',
		owners: ['CF-F1', 'CUD-U1'],
		problem: {
			en: 'Generative composition from the primitive completed relation',
			'zh-cn': '从原始“已完成关系”出发的生成性复合',
			'zh-tw': '從原始「已完成關係」出發的生成性複合',
		},
	},
	{
		id: 'OP-02',
		status: 'OPEN',
		owners: ['CFQF-Q4', 'CUD-U1'],
		problem: {
			en: 'Probability and Born-rule selector',
			'zh-cn': '概率与玻恩规则的选择子',
			'zh-tw': '機率與玻恩規則的選擇子',
		},
	},
	{
		id: 'OP-03',
		status: 'OPEN',
		owners: ['CFQF-Q4'],
		problem: {
			en: 'Purification, nonseparable completion, and entanglement genesis',
			'zh-cn': '纯化、不可分离完成与纠缠的起源',
			'zh-tw': '純化、不可分離完成與糾纏的起源',
		},
	},
	{
		id: 'OP-04',
		status: 'OPEN',
		owners: ['TCG-F1', 'CUD-U1'],
		problem: {
			en: 'Coherence of dual exchange, Jordan orthocomplement, and gravity parity (O31)',
			'zh-cn': '对偶交换、Jordan 正交补与引力宇称的一致性（O31）',
			'zh-tw': '對偶交換、Jordan 正交補與重力宇稱的一致性（O31）',
		},
	},
	{
		id: 'OP-05',
		status: 'OPEN',
		owners: ['CF-F1', 'TCG-F1', 'CUD-U1'],
		problem: {
			en: 'Carrier, dimension, real structure, orientation, and scale selection',
			'zh-cn': '载体、维数、实结构、定向与标度的选择',
			'zh-tw': '載體、維數、實結構、定向與尺度的選擇',
		},
	},
	{
		id: 'OP-06',
		status: 'OPEN',
		owners: ['TCG-F1', 'CUD-U1'],
		problem: {
			en: 'Global transport and physical helix selector',
			'zh-cn': '整体输运与物理螺旋相位选择子',
			'zh-tw': '整體輸運與物理螺旋相位選擇子',
		},
	},
	{
		id: 'OP-07',
		status: 'OPEN',
		owners: ['TCG-F1', 'CUD-G1', 'CUD-G2', 'CUD-U1'],
		problem: {
			en: 'Arbitrary-mesh, global-gluing, and continuum gravity closure',
			'zh-cn': '任意网格、整体粘合与连续极限引力的闭合',
			'zh-tw': '任意網格、整體黏合與連續極限重力的閉合',
		},
	},
	{
		id: 'OP-08',
		status: 'OPEN',
		owners: ['TCG-F1'],
		problem: {
			en: 'Global logarithm branches, action groupoid, and nonlinear off-shell completion',
			'zh-cn': '整体对数分支、作用量广群与非线性离壳完成',
			'zh-tw': '整體對數分支、作用量廣群與非線性離殼完成',
		},
	},
	{
		id: 'OP-09',
		status: 'OPEN/HOLD',
		owners: ['CUD-U1'],
		problem: {
			en: 'Variation-space / history selector, including O20b',
			'zh-cn': '变分空间／历史选择子（含 O20b）',
			'zh-tw': '變分空間／歷史選擇子（含 O20b）',
		},
	},
	{
		id: 'OP-10',
		status: 'OPEN/HOLD',
		owners: ['CF-F1', 'CUD-U1'],
		problem: {
			en: 'Absolute constants and parameter-free empirical prediction',
			'zh-cn': '绝对常数与无自由参数的经验预测',
			'zh-tw': '絕對常數與無自由參數的經驗預測',
		},
	},
	{
		id: 'OP-11',
		status: 'OPEN',
		owners: ['CFQF-Q2'],
		problem: {
			en: 'Architecture-independent record maintenance and arrow theorems',
			'zh-cn': '与架构无关的记录维持与时间箭头定理',
			'zh-tw': '與架構無關的紀錄維持與時間箭頭定理',
		},
	},
	{
		id: 'OP-12',
		status: 'NOT YET PERFORMED',
		owners: ['ALL'],
		problem: {
			en: 'External scholarly validation and independent replication',
			'zh-cn': '外部学术评审与独立复现',
			'zh-tw': '外部學術評審與獨立複現',
		},
	},
];

export const problemText = (locale: Locale, p: OpenProblem) => pick(locale, p.problem);

/* ------------------------------------------------------------------ */
/* Release overview abstract (CF-OV1, verbatim)                        */
/* ------------------------------------------------------------------ */
//
// The English text is the CF-OV1 abstract word for word, with one omission:
// the self-referential paragraph beginning "This article supplies the
// release-wide paper map…" is dropped, because it describes what the overview
// ARTICLE does and reads oddly as homepage copy. The complete, unabridged
// abstract remains on the paper page (cf-10-release-i-overview).
//
// Otherwise no wording is changed. The source is one continuous paragraph;
// it is split here at sentence boundaries only, for on-screen readability.

export const RELEASE_ABSTRACT: L10n[] = [
	{
		en: 'Complementarity-First Foundational Release I is a ten-record research release consisting of nine technical papers and this overview. The technical corpus comprises 245 date-neutral public-manuscript pages and spans a conceptual-formal primitive, four quantum-foundations studies, a paired-incidence and transport architecture for finite/local gravity, two distinct local Regge descendants, and a source-controlled Unified Dynamics synthesis.',
		'zh-cn': '互补性优先基础性发布 I 是一次包含十条记录的研究发布，由九篇技术论文与本份总览构成。技术语料共 245 页日期中立的公开正文，涵盖一份概念-形式原语、四项量子基础研究、一套用于有限／局域引力的配对关联与输运架构、两个彼此不同的局域 Regge 后继结果，以及一份来源受控的统一动力学综合。',
		'zh-tw': '互補性優先基礎性發布 I 是一次包含十條紀錄的研究發布，由九篇技術論文與本份總覽構成。技術語料共 245 頁日期中立的公開正文，涵蓋一份概念-形式原語、四項量子基礎研究、一套用於有限／局域重力的配對關聯與輸運架構、兩個彼此不同的局域 Regge 後繼結果，以及一份來源受控的統一動力學綜合。',
	},
	{
		en: 'The foundational paper defines a completed relation with internal role distinction and shows by elementary independence models that the primitive does not itself determine probability, continuity, geometry, dynamics, or complex quantum theory. The quantum branch separates a conditional reconstruction audit from three focused problems: readout of the two-rebit tomographic defect, certificate-relative operational objectivity under a noninjective public interface, and the resource requirements for records and finite autonomous maintenance without a free thermodynamic arrow.',
		'zh-cn': '基础论文定义了一个带有内部角色区分的已完成关系，并通过初等独立性模型表明：该原语本身并不决定概率、连续性、几何、动力学，或复数量子理论。量子分支把一项条件性重构审计与三个聚焦问题区分开来：双实比特层析缺陷的读出、非单射公共接口下的凭证相对操作客观性，以及在没有免费热力学箭头的情况下维持记录与有限自主运作所需的资源。',
		'zh-tw': '基礎論文定義了一個帶有內部角色區分的已完成關係，並透過初等獨立性模型表明：該原語本身並不決定機率、連續性、幾何、動力學，或複數量子理論。量子分支把一項條件性重構稽核與三個聚焦問題區分開來：雙實位元斷層缺陷的讀出、非單射公共介面下的憑證相對操作客觀性，以及在沒有免費熱力學箭頭的情況下維持紀錄與有限自主運作所需的資源。',
	},
	{
		en: 'The gravity branch begins only after a rank-two paired-chiral carrier, Lorentzian real structure, orientation, affine displacement sector, and transport law are selected; common-coframe data then arise only conditionally through the admitted simplicity, gluing, and nondegeneracy chain, after which the branch reaches conditional Palatini–Regge structure and exact finite periodic endpoints but not arbitrary-mesh or continuum closure. Two later gravity papers address different questions: descriptor-local H2/H2R transfer and a conditional curved-Regge identity, versus an intrinsic six-sector Reynolds cancellation mechanism for local zero germs.',
		'zh-cn': '引力分支只有在选定秩二配对手征载体、洛伦兹实结构、定向、仿射位移部分与输运律之后才开始；共同标架数据随后也只是有条件地经由所采纳的单纯性、粘合与非退化链条而出现，此后该分支抵达条件性的 Palatini–Regge 结构与精确的有限周期端点，但并未抵达任意网格或连续极限的闭合。其后两篇引力论文处理的是不同的问题：描述子局域的 H2／H2R 迁移与一个条件性弯曲 Regge 恒等式，对比一个针对局域零胚的内禀六扇区 Reynolds 相消机制。',
		'zh-tw': '重力分支只有在選定秩二配對手徵載體、勞侖茲實結構、定向、仿射位移部分與輸運律之後才開始；共同標架資料隨後也只是有條件地經由所採納的單純性、黏合與非退化鏈條而出現，此後該分支抵達條件性的 Palatini–Regge 結構與精確的有限週期端點，但並未抵達任意網格或連續極限的閉合。其後兩篇重力論文處理的是不同的問題：描述子局域的 H2／H2R 遷移與一個條件性彎曲 Regge 恆等式，對比一個針對局域零胚的內稟六扇區 Reynolds 相消機制。',
	},
	{
		en: 'Unified Dynamics organizes controlled quantum and gravity descendants around a finite dual-pair carrier and a common BF-type kernel while retaining a variation-space obstruction, open complement-operation coherence, no absolute scale, and no Level-4 prediction. The strongest defensible conclusion is therefore a disciplined finite/local reconstruction architecture with exact technical advances, explicit failures, and auditable selectors. Release I is not a completed theory of physics, a continuum unification, a derivation of the Born rule or complex scalars from primitive complementarity, a quantized-gravity result, or an externally peer-reviewed and independently replicated corpus.',
		'zh-cn': '统一动力学围绕一个有限对偶载体与一个共同的 BF 型内核来组织受控的量子与引力后继结果，同时保留了变分空间障碍、尚未解决的补运算一致性、没有绝对标度，也没有第四层级的预测。因此，最强的可辩护结论是一套有纪律的有限／局域重构架构，其中既有精确的技术进展，也有明确的失败与可审计的选择子。发布 I 并不是一套完成的物理理论、一次连续极限的统一、从原始互补性出发对玻恩规则或复标量的推导、一项量子化引力的结果，也不是一份经过外部同行评审与独立复现的语料库。',
		'zh-tw': '統一動力學圍繞一個有限對偶載體與一個共同的 BF 型內核來組織受控的量子與重力後繼結果，同時保留了變分空間障礙、尚未解決的補運算一致性、沒有絕對尺度，也沒有第四層級的預測。因此，最強的可辯護結論是一套有紀律的有限／局域重構架構，其中既有精確的技術進展，也有明確的失敗與可稽核的選擇子。發布 I 並不是一套完成的物理理論、一次連續極限的統一、從原始互補性出發對玻恩規則或複純量的推導、一項量子化重力的結果，也不是一份經過外部同行評審與獨立複現的語料庫。',
	},
];

export const abstractText = (locale: Locale, p: L10n) => pick(locale, p);

/* ------------------------------------------------------------------ */
/* Foundational Release II (CF-OV2, 2026-08-26)                        */
/* ------------------------------------------------------------------ */
//
// Release II extends selected Release-I threads into time and
// electromagnetism. It does NOT revise Release I retroactively — a later
// result may illuminate an earlier open problem without changing what the
// earlier paper proved (CF-OV2).
//
// Structure is by arc rather than by provenance edges: unlike CF-OV1,
// Release II's overview does not publish a frozen edge ledger, so the
// grouping here follows its own arc description and is deliberately
// presented as a grouped index, not as a provenance graph.

export const RELEASE_II = {
	records: 8,
	preprints: 7,
	datasets: 1,
	published: '2026-08-26',
};

export interface ReleaseIIArc {
	key: string;
	category: string;
	papers: string[];
	title: L10n;
	blurb: L10n;
	/** What the arc explicitly does NOT establish, per its own papers. */
	boundary?: L10n;
}

export const RELEASE_II_ARCS: ReleaseIIArc[] = [
	{
		key: 'time',
		category: 'cf-time',
		papers: [
			'cf-11-complementarity-first-time',
			'cf-12-complement-twisted-duality',
			'cf-13-quantum-clocks',
		],
		title: { en: 'Time', 'zh-cn': '时间', 'zh-tw': '時間' },
		blurb: {
			en: 'Whether a relation-first theory forces more than one timelike dimension, how a one-time carrier reaches singlet completion and exchange dynamics, and how relational interval, clock phase, redshift and matter coupling come apart.',
			'zh-cn': '关系优先的理论是否会迫使出现不止一个类时维度；单一时间载体如何抵达单态完成与交换动力学；以及关系性间隔、时钟相位、红移与物质耦合如何彼此分离。',
			'zh-tw': '關係優先的理論是否會迫使出現不止一個類時維度；單一時間載體如何抵達單態完成與交換動力學；以及關係性間隔、時鐘相位、紅移與物質耦合如何彼此分離。',
		},
		boundary: {
			en: 'Conditional throughout. Spacetime is not derived from bare complementarity, and the absolute time scale remains unresolved.',
			'zh-cn': '全程均为条件性结果。时空并非由裸互补性推导而来，绝对时间标度仍未解决。',
			'zh-tw': '全程均為條件性結果。時空並非由裸互補性推導而來，絕對時間尺度仍未解決。',
		},
	},
	{
		key: 'electromagnetism',
		category: 'cf-electromagnetism',
		papers: [
			'cf-14-complementarity-before-electromagnetism',
			'cf-15-conditional-maxwell-reconstruction',
			'cf-16-radiation-helicity-quantization',
		],
		title: { en: 'Electromagnetism', 'zh-cn': '电磁学', 'zh-tw': '電磁學' },
		blurb: {
			en: 'From a conditional one-time-plus-three-space balance for two-form sectors, through a step-by-step Maxwell reconstruction with an exact Abelian descendant, to radiation, helicity and quantization.',
			'zh-cn': '从二形式部分的条件性「一时加三空」平衡出发，经由逐步的 Maxwell 重构（含一个精确的阿贝尔后继），抵达辐射、螺旋度与量子化。',
			'zh-tw': '從二形式部分的條件性「一時加三空」平衡出發，經由逐步的 Maxwell 重構（含一個精確的阿貝爾後繼），抵達輻射、螺旋度與量子化。',
		},
		boundary: {
			en: 'Stops at the QED boundary: no vacuum, matter, renormalization, infrared dressing, or full quantum electrodynamics is claimed.',
			'zh-cn': '止步于 QED 边界：不主张真空、物质、重整化、红外缀饰，也不主张完整的量子电动力学。',
			'zh-tw': '止步於 QED 邊界：不主張真空、物質、重整化、紅外綴飾，也不主張完整的量子電動力學。',
		},
	},
	{
		key: 'evidence',
		category: 'cf-dataset',
		papers: ['cf-17-electromagnetism-certificates-archive'],
		title: { en: 'Evidence archive', 'zh-cn': '证据存档', 'zh-tw': '證據存檔' },
		blurb: {
			en: 'Exact certificates, claim-to-evidence maps and verification tools for the three electromagnetism papers. The only Release II record published as a Zenodo Dataset.',
			'zh-cn': '三篇电磁学论文的精确证书、主张—证据对照与验证工具。这是发布 II 中唯一以 Zenodo 数据集形式发布的记录。',
			'zh-tw': '三篇電磁學論文的精確證書、主張—證據對照與驗證工具。這是發布 II 中唯一以 Zenodo 資料集形式發布的紀錄。',
		},
	},
	{
		key: 'overview2',
		category: 'cf-overview',
		papers: ['cf-18-release-ii-overview'],
		title: { en: 'Overview', 'zh-cn': '总览', 'zh-tw': '總覽' },
		blurb: {
			en: 'Dependencies, theorem ownership, countermodels, nonclaims, reproducibility structure and the selectors that remain open across all eight records.',
			'zh-cn': '覆盖全部八条记录的依赖关系、定理归属、反模型、非主张、可复现结构，以及仍然未决的选择子。',
			'zh-tw': '涵蓋全部八條紀錄的相依關係、定理歸屬、反模型、非主張、可重現結構，以及仍然未決的選擇子。',
		},
	},
];

/* ------------------------------------------------------------------ */
/* Foundational Release III — Waves A and B                            */
/* ------------------------------------------------------------------ */
//
// Wave A opens Release III and Wave B extends it into gauge geometry, twistor
// incidence and finite Lorentzian connection selection. Like Release II, the
// release is grouped rather than drawn as a provenance tree: no frozen edge
// ledger has been published for it, so a graph here would invent structure the
// corpus does not assert.

export const RELEASE_III = {
	records: 6,
	preprints: 5,
	datasets: 1,
	waves: {
		A: { records: 3, preprints: 2, datasets: 1, published: '2026-09-03' },
		B: { records: 3, preprints: 3, datasets: 0, published: '2026-09-08' },
	},
};

export const RELEASE_III_ARCS: ReleaseIIArc[] = [
	{
		key: 'ric',
		category: 'cf-ric',
		papers: [
			'cf-19-reciprocal-internal-complementarity',
			'cf-20-synthetic-taichi-biphoton',
		],
		title: {
			en: 'Wave A — Reciprocal internal complementarity',
			'zh-cn': 'A 波——互反内在互补性',
			'zh-tw': 'A 波——互反內在互補性',
		},
		blurb: {
			en: 'A conditional route from Taichi-like mutual inclusion to a Schrödinger normal form, an exact separability-to-entanglement orbit, and a finite Born-form readout — then a source-complete synthetic biphoton model that tests whether a recognizable quantum image determines the entanglement behind it.',
			'zh-cn': '一条从太极式互含通往薛定谔标准形、一条从可分到最大纠缠的精确轨道，以及有限玻恩型读出的条件性路径；随后以一个源完备的合成双光子模型检验：一幅可辨认的量子图像是否确定其背后的纠缠。',
			'zh-tw': '一條從太極式互含通往薛丁格標準形、一條從可分到最大糾纏的精確軌道，以及有限玻恩型讀出的條件性路徑；隨後以一個源完備的合成雙光子模型檢驗：一幅可辨認的量子圖像是否確定其背後的糾纏。',
		},
		boundary: {
			en: 'Conditional throughout, and the picture is not the proof. No density-operator trace rule, general instruments, one actual outcome, or objective chance is established — and the visible Taichi eyes are shown not to be an entanglement witness.',
			'zh-cn': '全程均为条件性结果，且图像不构成证明。不确立密度算符迹规则、一般仪器、单一实际结果或客观机遇——并且文中表明，可见的太极之眼并不构成纠缠见证。',
			'zh-tw': '全程均為條件性結果，且圖像不構成證明。不確立密度算符跡規則、一般儀器、單一實際結果或客觀機遇——並且文中表明，可見的太極之眼並不構成糾纏見證。',
		},
	},
	{
		key: 'evidence3',
		category: 'cf-dataset',
		papers: ['cf-21-ric-exact-checks-archive'],
		title: { en: 'Wave A — Evidence archive', 'zh-cn': 'A 波——证据存档', 'zh-tw': 'A 波——證據存檔' },
		blurb: {
			en: 'Frozen fixtures, deterministic scripts, archived outputs, claim-to-evidence crosswalks and a unified verifier for both Wave A papers. Published as a Zenodo Dataset.',
			'zh-cn': '为第一波两篇论文提供冻结的固定装置、确定性脚本、归档输出、主张—证据对照与统一验证器。以 Zenodo 数据集形式发布。',
			'zh-tw': '為第一波兩篇論文提供凍結的固定裝置、確定性腳本、歸檔輸出、主張—證據對照與統一驗證器。以 Zenodo 資料集形式發布。',
		},
		boundary: {
			en: 'Holds no experimental data from the motivating 2023 biphoton experiment. Its numbers apply to the frozen synthetic model only, and the mock protocol shows software ordering rather than experimental certification.',
			'zh-cn': '不包含作为动机的 2023 年双光子实验的任何实验数据。其数值仅适用于那个冻结的合成模型，模拟协议展示的是软件流程的次序，而非实验认证。',
			'zh-tw': '不包含作為動機的 2023 年雙光子實驗的任何實驗資料。其數值僅適用於那個凍結的合成模型，模擬協定展示的是軟體流程的次序，而非實驗認證。',
		},
	},
	{
		key: 'comparison',
		category: 'cf-ric',
		papers: [
			'cf-22-reciprocal-electromagnetism',
			'cf-23-reciprocal-twistor-incidence',
			'cf-24-reciprocal-lorentzian-connections',
		],
		title: {
			en: 'Wave B — The geometry of comparison',
			'zh-cn': 'B 波——比较之几何',
			'zh-tw': 'B 波——比較之幾何',
		},
		blurb: {
			en: 'RIC–EM, RIC–TI and RIC–LC address localized phase comparison, positive-record transport of incidence-plane supports, and action-level connection selection under independent connection variation.',
			'zh-cn': 'RIC–EM、RIC–TI 与 RIC–LC 分别研究局域相位比较、关联平面支撑的正记录传输，以及独立联络变分下的作用量层级联络选择。',
			'zh-tw': 'RIC–EM、RIC–TI 與 RIC–LC 分別研究局域相位比較、關聯平面支撐的正記錄傳輸，以及獨立聯絡變分下的作用量層級聯絡選擇。',
		},
		boundary: {
			en: 'Carrier, localization, transport, reality, action and boundary data remain explicit inputs where required; the three typed structures are not identified, and no unified continuum theory is claimed.',
			'zh-cn': '载体、局域化、输运、实结构、作用量与边界数据，在需要之处仍是明确输入；三类结构并未被认定为同一对象，也没有提出统一的连续理论。',
			'zh-tw': '載體、局域化、輸運、實結構、作用量與邊界資料，在需要之處仍是明確輸入；三類結構並未被認定為同一對象，也沒有提出統一的連續理論。',
		},
	},
];

export const arcIITitle = (locale: Locale, a: ReleaseIIArc) => pick(locale, a.title);
export const arcIIBlurb = (locale: Locale, a: ReleaseIIArc) => pick(locale, a.blurb);
export const arcIIBoundary = (locale: Locale, a: ReleaseIIArc) =>
	a.boundary ? pick(locale, a.boundary) : undefined;



/* ------------------------------------------------------------------ */
/* Foundational Release IV (CF-OV4, 2026-10-03)                        */
/* ------------------------------------------------------------------ */
//
// Fourteen papers plus an overview, grouped into the five branches the
// overview itself names: source refresh; magnetic-core completion and
// local monopole dynamics; orientation-twisted composition and reciprocal
// cells; nonlinear superconducting response; and Feynman composition,
// configuration histories and low-energy interfaces.
//
// Like Releases II and III this is a grouped index rather than a drawn
// provenance graph: no frozen edge ledger is published for Release IV, so
// a graph here would invent structure the corpus does not assert. The
// overview is explicit that cross-branch comparisons identify imports
// WITHOUT assigning a common physical carrier to mathematically different
// models, so the arcs below are kept separate rather than merged.

export const RELEASE_IV = {
	records: 15,
	preprints: 15,
	datasets: 0,
	papers: 14,
	published: '2026-10-03',
};

export const RELEASE_IV_ARCS: ReleaseIIArc[] = [
	{
		key: 'refresh',
		category: 'cf-refresh',
		papers: [
			'cf-25-autonomous-source-refresh',
			'cf-26-record-preserving-validation',
			'cf-27-exact-preparation-source-law',
		],
		title: {
			en: 'Autonomous source refresh',
			'zh-cn': '自主源刷新',
			'zh-tw': '自主源刷新',
		},
		blurb: {
			en: 'A one-use exchange in a supplied autonomous Hamiltonian model, where the completed swap depends on spatial area rather than entering speed; then a record-preserving composition theorem that retains the apparatus state, and a separation of the intended model from the exact piecewise source and its floating-point execution.',
			'zh-cn': '在给定的自主哈密顿模型中完成一次性交换，其完成度取决于空间面积而非进入速度；随后给出保留装置状态的记录保持式复合定理，并把"意图中的模型"与精确分段源及其浮点执行区分开来。',
			'zh-tw': '在給定的自主哈密頓模型中完成一次性交換，其完成度取決於空間面積而非進入速度；隨後給出保留裝置狀態的記錄保持式複合定理，並把「意圖中的模型」與精確分段源及其浮點執行區分開來。',
		},
		boundary: {
			en: 'A correct exchange is not a rearmed apparatus. Physical rearming, all-input linear control, complete two-use validation, global floating-program accuracy, and primitive selection of the carrier and interactions all remain outside these theorems.',
			'zh-cn': '一次正确的交换并不等于装置已重新就绪。物理层面的再次待命、全输入线性控制、完整的两次使用验证、全局浮点程序精度，以及载体与相互作用的原初选择，均不在这些定理之内。',
			'zh-tw': '一次正確的交換並不等於裝置已重新就緒。物理層面的再次待命、全輸入線性控制、完整的兩次使用驗證、全域浮點程式精度，以及載體與交互作用的原初選擇，均不在這些定理之內。',
		},
	},
	{
		key: 'magnetic',
		category: 'cf-magnetic',
		papers: [
			'cf-28-reciprocal-magnetic-charge',
			'cf-29-all-angular-positivity',
			'cf-30-constrained-charge-monopole-dynamics',
		],
		title: {
			en: 'Magnetic charge and local dynamics',
			'zh-cn': '磁荷与局部动力学',
			'zh-tw': '磁荷與局部動力學',
		},
		blurb: {
			en: 'Complex first-Chern-class cancellation does not remove the same-rank reciprocal extension obstruction; a certificate-qualified smooth core follows, then all-angular nonnegativity and coercivity modulo a collective space, and finally a full nonlinear Gauss projection with regular local evolution on a positive time interval.',
			'zh-cn': '复第一陈类的相消并不能消除同秩的互反延拓障碍；随后给出带证书限定的光滑核，再给出全角向非负性以及模去集体空间的强制性，最后得到完整的非线性高斯投影与正时间区间上的正规局部演化。',
			'zh-tw': '複第一陳類的相消並不能消除同秩的互反延拓障礙；隨後給出帶證書限定的光滑核，再給出全角向非負性以及模去集體空間的強制性，最後得到完整的非線性高斯投影與正時間區間上的正規局部演化。',
		},
		boundary: {
			en: 'Energy control is not a mass gap: the kinetic spectrum still reaches zero. The action, coupling, physical mass scale, nonlinear orbital stability, and any monopole abundance are not selected or predicted.',
			'zh-cn': '能量控制并不等于能隙：动能谱仍可达到零。作用量、耦合、物理质量标度、非线性轨道稳定性，以及磁单极子的丰度，均未被选定或预言。',
			'zh-tw': '能量控制並不等於能隙：動能譜仍可達到零。作用量、耦合、物理質量標度、非線性軌道穩定性，以及磁單極子的豐度，均未被選定或預言。',
		},
	},
	{
		key: 'cells',
		category: 'cf-cells',
		papers: [
			'cf-31-orientation-twisted-composition',
			'cf-32-reciprocal-quantum-cells',
			'cf-33-twisted-o2-holonomy',
		],
		title: {
			en: 'Composition, cells, and transport',
			'zh-cn': '复合、胞腔与输运',
			'zh-tw': '複合、胞腔與輸運',
		},
		blurb: {
			en: 'Orientation labels that look redundant in isolation turn out to be needed once systems are composed; a bounded reciprocal plane carries compatible elliptic, metric and symplectic geometry without fixing an action scale; and admitting reflections makes the transport group O(2), with sign-twisted Bianchi closure and a reflection that survives around an annulus.',
			'zh-cn': '在孤立系统中看似冗余的取向标签，一旦系统被组合起来便成为必需；有界互反平面承载相容的椭圆、度量与辛几何，却并不因此固定作用量标度；而容许反射则使输运群成为 O(2)，带有符号扭曲的比安基闭合，以及绕圆环域一周仍然保留的反射。',
			'zh-tw': '在孤立系統中看似冗餘的取向標籤，一旦系統被組合起來便成為必需；有界互反平面承載相容的橢圓、度量與辛幾何，卻並不因此固定作用量標度；而容許反射則使輸運群成為 O(2)，帶有符號扭曲的比安基閉合，以及繞圓環域一周仍然保留的反射。',
		},
		boundary: {
			en: 'A change of presentation is not a new physical theory, and a geometric cell is not a quantum state space. No quantum state cone, tensor product, minimum action, instrument, probability law, or arbitrary-mesh/continuum invariance follows. Two papers carry a partial Lean 4.19.0 formalization, not full-paper verification.',
			'zh-cn': '更换表述方式并不构成新的物理理论，几何胞腔也不是量子态空间。文中不导出量子态锥、张量积、最小作用量、仪器、概率定律，也不导出任意网格或连续极限下的不变性。其中两篇带有部分 Lean 4.19.0 形式化，而非全文验证。',
			'zh-tw': '更換表述方式並不構成新的物理理論，幾何胞腔也不是量子態空間。文中不導出量子態錐、張量積、最小作用量、儀器、機率定律，也不導出任意網格或連續極限下的不變性。其中兩篇帶有部分 Lean 4.19.0 形式化，而非全文驗證。',
		},
	},
	{
		key: 'superconductivity',
		category: 'cf-superconductivity',
		papers: ['cf-34-superconducting-nonlinear-contrast'],
		title: {
			en: 'Superconducting response',
			'zh-cn': '超导响应',
			'zh-tw': '超導響應',
		},
		blurb: {
			en: 'Two explicitly specified models give identical linear density response when their first two moments agree, while the diagonal cubic response reaches the fourth moment. For a fixed two-tone, same-incident-field comparison, computer-assisted enclosures certify a nonzero selected seventh-degree optical coefficient.',
			'zh-cn': '两个被明确指定的模型，在前二阶矩一致时给出完全相同的线性密度响应，而对角三阶响应则触及四阶矩。对于固定的双音、同一入射场比较，计算机辅助的包含区间认证了一个选定的七阶光学系数非零。',
			'zh-tw': '兩個被明確指定的模型，在前二階矩一致時給出完全相同的線性密度響應，而對角三階響應則觸及四階矩。對於固定的雙音、同一入射場比較，電腦輔助的包含區間認證了一個選定的七階光學係數非零。',
		},
		boundary: {
			en: 'A certified mathematical contrast is not a measured signal. The bounds hold at very small normalized amplitudes and do not establish practical detectability, universal band identification, or a derivation of the superconducting interaction from complementarity.',
			'zh-cn': '一个经认证的数学区分并不是被测得的信号。这些界只在非常小的归一化振幅下成立，并不确立实际可探测性、普适的能带识别，也不构成从互补性推导超导相互作用。',
			'zh-tw': '一個經認證的數學區分並不是被測得的訊號。這些界只在非常小的歸一化振幅下成立，並不確立實際可偵測性、普適的能帶識別，也不構成從互補性推導超導交互作用。',
		},
	},
	{
		key: 'composition',
		category: 'cf-composition',
		papers: [
			'cf-35-complementary-transport-feynman',
			'cf-36-configuration-space-histories',
			'cf-37-fine-structure-memory',
			'cf-38-local-low-energy-interfaces',
		],
		title: {
			en: 'Feynman composition and effective dynamics',
			'zh-cn': '费曼复合与有效动力学',
			'zh-tw': '費曼複合與有效動力學',
		},
		blurb: {
			en: 'Serial algebra, coherent addition and quadratic readout are separated and then re-earned under stated conditions; a conditional one-dimensional bridge reaches configuration-space histories; eliminating fine coordinates leaves coherent memory and an induced metric rather than noise; and local low-energy selection is shown to carry a quantitative spatial cost.',
			'zh-cn': '串行代数、相干相加与二次读出先被分开，再在所陈述的条件下逐一重新获得；一座条件性的一维桥梁通向位形空间中的历史；消去精细坐标留下的是相干记忆与诱导度规，而非噪声；而局部低能筛选则被证明要付出定量的空间代价。',
			'zh-tw': '串行代數、相干相加與二次讀出先被分開，再在所陳述的條件下逐一重新獲得；一座條件性的一維橋梁通向位形空間中的歷史；消去精細座標留下的是相干記憶與誘導度規，而非雜訊；而局部低能篩選則被證明要付出定量的空間代價。',
		},
		boundary: {
			en: 'Every step stays conditional. Carriers, couplings, measure, preparation, clock, action scale, and the empirical probability interface remain supplied rather than derived, and no continuum or all-mode operator-norm limit is claimed.',
			'zh-cn': '每一步都保持条件性。载体、耦合、测度、制备、时钟、作用量标度，以及经验概率接口，均为给定而非导出；文中也不主张任何连续极限或全模式的算子范数收敛。',
			'zh-tw': '每一步都保持條件性。載體、耦合、測度、製備、時鐘、作用量標度，以及經驗機率介面，均為給定而非導出；文中也不主張任何連續極限或全模式的算子範數收斂。',
		},
	},
	{
		key: 'overview4',
		category: 'cf-overview',
		papers: ['cf-39-release-iv-overview'],
		title: {
			en: 'Release overview',
			'zh-cn': '发布总览',
			'zh-tw': '發布總覽',
		},
		blurb: {
			en: 'The synthesis across all five branches: a source-attributed release map of what each construction composes, what it infers, and where those boundaries lie.',
			'zh-cn': '跨越全部五个分支的综合：一张标注来源的发布地图，说明每个构造复合了什么、推出了什么，以及这些边界落在何处。',
			'zh-tw': '跨越全部五個分支的綜合：一張標註來源的發布地圖，說明每個構造複合了什麼、推出了什麼，以及這些邊界落在何處。',
		},
		boundary: {
			en: 'Cross-branch comparison identifies genuine imports without assigning a common physical carrier to mathematically different models. Analytic arguments, finite certificates, historical replays and partial formalization keep separate evidentiary roles.',
			'zh-cn': '跨分支比较识别出真正的引入关系，但并不为数学上不同的模型指派一个共同的物理载体。解析论证、有限证书、历史重放与部分形式化，各自保持独立的证据角色。',
			'zh-tw': '跨分支比較識別出真正的引入關係，但並不為數學上不同的模型指派一個共同的物理載體。解析論證、有限證書、歷史重放與部分形式化，各自保持獨立的證據角色。',
		},
	},
];



/* ------------------------------------------------------------------ */
/* Provenance graph (CF-OV1, exact frozen 26-edge ledger)              */
/* ------------------------------------------------------------------ */
//
// A provenance edge points from a CONTROLLING SOURCE toward the paper it
// controls. These are NOT the reading-navigation arrows above — CF-OV1 is
// explicit that the two systems must never be merged into one unlabelled
// graph, so they stay in separate structures here.
//
// The graph is a DAG, not a tree: CFQF-Q2 and CFQF-Q3 each have two
// parents, and CUD-U1 / CF-OV1 are fan-in nodes with eight and nine
// sources. The tree view below picks a primary parent for nesting and
// records every remaining edge as a `also` annotation, so no edge is lost.

export type EdgeClass =
	| 'conceptual-foundation'
	| 'relational-foundation'
	| 'quantum-reconstruction-context'
	| 'quantum-foundations-context'
	| 'two-rebit-observability-context'
	| 'parent-gravity-architecture'
	| 'synthesis-input'
	| 'release-map-input';

export const EDGE_LABELS: Record<EdgeClass, L10n> = {
	'conceptual-foundation': {
		en: 'conceptual foundation',
		'zh-cn': '概念基础',
		'zh-tw': '概念基礎',
	},
	'relational-foundation': {
		en: 'relational foundation',
		'zh-cn': '关系性基础',
		'zh-tw': '關係性基礎',
	},
	'quantum-reconstruction-context': {
		en: 'quantum-reconstruction context',
		'zh-cn': '量子重构语境',
		'zh-tw': '量子重構語境',
	},
	'quantum-foundations-context': {
		en: 'quantum-foundations context',
		'zh-cn': '量子基础语境',
		'zh-tw': '量子基礎語境',
	},
	'two-rebit-observability-context': {
		en: 'two-rebit observability context',
		'zh-cn': '双实比特可观测性语境',
		'zh-tw': '雙實位元可觀測性語境',
	},
	'parent-gravity-architecture': {
		en: 'parent gravity architecture',
		'zh-cn': '母引力架构',
		'zh-tw': '母重力架構',
	},
	'synthesis-input': {
		en: 'synthesis input',
		'zh-cn': '综合输入',
		'zh-tw': '綜合輸入',
	},
	'release-map-input': {
		en: 'release-map input',
		'zh-cn': '发布图谱输入',
		'zh-tw': '發布圖譜輸入',
	},
};

export const edgeLabel = (locale: Locale, e: EdgeClass) => pick(locale, EDGE_LABELS[e]);

export interface TreeNode {
	/** Paper slug, matching the content-collection id. */
	id: string;
	/** Edge class connecting this node to its parent in the tree. */
	via: EdgeClass;
	/** Additional real provenance edges not represented by the nesting. */
	also?: { fromCode: string; via: EdgeClass }[];
	children?: TreeNode[];
}

/** The eight tree edges. Fan-in nodes are held separately below. */
export const PROVENANCE_TREE: TreeNode = {
	id: 'cf-01-relational-unity',
	via: 'conceptual-foundation',
	children: [
		{
			id: 'cf-02-complementarity-before-quantum',
			via: 'conceptual-foundation',
			children: [
				{ id: 'cf-03-two-rebit-readout', via: 'quantum-reconstruction-context' },
				{
					id: 'cf-04-certificate-objectivity',
					via: 'quantum-reconstruction-context',
					also: [{ fromCode: 'CFQF-Q1', via: 'two-rebit-observability-context' }],
				},
				{
					id: 'cf-05-relational-time',
					via: 'quantum-foundations-context',
					also: [{ fromCode: 'CF-F1', via: 'relational-foundation' }],
				},
			],
		},
		{
			id: 'cf-06-tcg-paired-incidence',
			via: 'conceptual-foundation',
			children: [
				{ id: 'cf-07-h2r-regge-transfer', via: 'parent-gravity-architecture' },
				{ id: 'cf-08-six-sector-reynolds', via: 'parent-gravity-architecture' },
			],
		},
	],
};

/** Fan-in nodes: too many sources to nest without misrepresenting the graph. */
export const FAN_IN: { id: string; via: EdgeClass; sources: number }[] = [
	{ id: 'cf-09-unified-dynamics', via: 'synthesis-input', sources: 8 },
	{ id: 'cf-10-release-i-overview', via: 'release-map-input', sources: 9 },
];

/** Total directed edges in the frozen ledger — used to assert nothing is dropped. */
export const TOTAL_EDGES = 26;

/** CSS modifier for a status pill. */
export function statusClass(status: OpenStatus): string {
	if (status === 'OPEN') return 'op-open';
	if (status === 'OPEN/HOLD') return 'op-hold';
	return 'op-none';
}
