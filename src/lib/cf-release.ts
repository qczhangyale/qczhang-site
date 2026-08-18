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
