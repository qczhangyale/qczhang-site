// Structural grouping for the Twistor Configuration Geometry corpus.
//
// Unlike Complementarity-First, TCG has no frozen provenance-edge ledger.
// The grouping below is transcribed from the Paper #39 structural-state
// review (doi:10.5281/zenodo.20710679), whose central organizing claim is
// the FOUR-ARC NAMED-RESIDUAL PATTERN: each of four structural arcs is
// brought to a theorem-level obstruction or conditional construction, and
// terminates in a named residual placed explicitly OUTSIDE the active
// postulate ledger.
//
// Paper #39 fixes the arc membership for the papers it cites; papers
// published after it (#40 spin-1 posture, #41 wall selection, #42 wall
// selector ledger) are placed by subject and are flagged `postReview`.
//
// #39 is explicit that the arcs sit at DIFFERENT maturity registers and
// that flattening them is a failure mode, so each arc carries its own
// closure note rather than a shared "status" word.

import type { Locale } from '../i18n';

type L10n = Record<Locale, string>;
const pick = (locale: Locale, v: L10n) => v[locale] ?? v.en;

export interface ArcGroup {
	key: string;
	/** Papers in reading order within the group. */
	papers: string[];
	title: L10n;
	blurb: L10n;
	/** Named residual(s) left outside the active ledger, if this is an arc. */
	residual?: string;
	/** Closure character — deliberately NOT normalised across arcs. */
	closure?: L10n;
	/** Papers here postdate the Paper #39 review and are placed by subject. */
	postReview?: string[];
}

export const ACTIVE_LEDGER = "P₀–P₄, P₅', P₆, P₇, P_H', P_SO(10)";

export const ARCS: ArcGroup[] = [
	{
		key: 'framework',
		papers: ['03-tcg-fpa-model', '02-configurable-universe', '04-predictions-no-go', '21-electroweak-boundary'],
		title: { en: 'Framework and ledger', 'zh-cn': '框架与公设账目', 'zh-tw': '框架與公設帳目' },
		blurb: {
			en: 'The construction itself, its philosophical reading, its predictive ledger, and the electroweak-boundary postulate update. The active ledger has been stable since the 2026-05-01 closure verdict.',
			'zh-cn': '构造本身、其哲学诠释、预测账目，以及电弱边界公设的更新。自 2026-05-01 的闭合裁定以来，活跃公设账目保持稳定。',
			'zh-tw': '構造本身、其哲學詮釋、預測帳目，以及電弱邊界公設的更新。自 2026-05-01 的閉合裁定以來，活躍公設帳目保持穩定。',
		},
	},
	{
		key: 'empirical',
		papers: [
			'01-daedalus-review',
			'09-daedalus-methodology',
			'10-electron-architect',
			'05-lambda-formula',
			'06-eta-relation',
			'07-alpha-g-formula',
			'08-emergent-gravity',
			'11-alpha-twistor-volume',
			'12-alpha-s-sin2thetaw',
			'13-electron-yukawa',
			'14-super-flag-construction',
			'15-lepton-golden-ratio',
			'16-super-cy-lambda',
		],
		title: { en: 'Empirical body', 'zh-cn': '经验主体', 'zh-tw': '經驗主體' },
		blurb: {
			en: 'The nine relations, the search method that found them, and the twistor-geometric readings that followed. This is what the framework was built to explain.',
			'zh-cn': '九条关系、发现它们的搜索方法，以及随之而来的扭量几何诠释。框架正是为解释这些而构建的。',
			'zh-tw': '九條關係、發現它們的搜尋方法，以及隨之而來的扭量幾何詮釋。框架正是為解釋這些而構建的。',
		},
	},
	{
		key: 'electron',
		papers: ['25-bulk-boundary-localization', '26-connected-residues', '27-boundary-superselection-obstruction'],
		title: { en: 'Electron arc (P₄)', 'zh-cn': '电子弧（P₄）', 'zh-tw': '電子弧（P₄）' },
		blurb: {
			en: 'The electron prefactor 1 − 1/(2π) via boundary-defect localization on the hard-core path-graph residue algebra.',
			'zh-cn': '经由硬核路径图剩余代数上的边界缺陷局域化，得到电子前因子 1 − 1/(2π)。',
			'zh-tw': '經由硬核路徑圖剩餘代數上的邊界缺陷局域化，得到電子前因子 1 − 1/(2π)。',
		},
		residual: 'P_BFV^sec',
		closure: {
			en: 'Terminates at the obstruction step; no subsequent construction test.',
			'zh-cn': '止于障碍步骤；其后没有构造性检验。',
			'zh-tw': '止於障礙步驟；其後沒有構造性檢驗。',
		},
	},
	{
		key: 'gauge',
		papers: [
			'24-spin10-envelope',
			'19-wall-deletion-pati-salam',
			'29-spin10-downstream-breaking-family',
			'30-pure-spinor-polarization',
			'31-compatible-pure-spinor-polarizations',
			'32-pure-spinor-condensation-obstruction',
			'41-wall-selection-minimal-breaking',
			'42-wall-selector-ledger-obstruction',
		],
		postReview: ['41-wall-selection-minimal-breaking', '42-wall-selector-ledger-obstruction'],
		title: { en: 'Gauge arc (envelope)', 'zh-cn': '规范弧（包络）', 'zh-tw': '規範弧（包絡）' },
		blurb: {
			en: 'The Spin(10) envelope completion of the Pati–Salam Levi sub-algebra obtained by P₇ wall deletion, down to the orientation/representative-selection component.',
			'zh-cn': '由 P₇ 壁删除所得 Pati–Salam Levi 子代数的 Spin(10) 包络完成，直至定向／代表元选择分量。',
			'zh-tw': '由 P₇ 壁刪除所得 Pati–Salam Levi 子代數的 Spin(10) 包絡完成，直至定向／代表元選擇分量。',
		},
		residual: 'X_wall-pol',
		closure: {
			en: 'Terminates at the obstruction step; no subsequent construction test.',
			'zh-cn': '止于障碍步骤；其后没有构造性检验。',
			'zh-tw': '止於障礙步驟；其後沒有構造性檢驗。',
		},
	},
	{
		key: 'hadronic',
		papers: [
			'22-hadronic-extensions',
			'28-bitwistor-pair-channels',
			'33-representation-slot-measure-obstruction',
			'34-tau-cg-specification',
			'35-hadronic-six-slot-resolution',
			'36-pair-channel-root-wall-residue-addresses',
		],
		title: { en: "Hadronic arc (P_H')", 'zh-cn': "强子弧（P_H'）", 'zh-tw': "強子弧（P_H'）" },
		blurb: {
			en: 'The Lenz reading 6π⁵ at the antisymmetric pair-channel space, through the τCG trace-selector specification to a cohomological root-wall address closure.',
			'zh-cn': '反对称对通道空间上的 Lenz 读数 6π⁵，经由 τCG 迹选择子规范，抵达上同调根壁地址的闭合。',
			'zh-tw': '反對稱對通道空間上的 Lenz 讀數 6π⁵，經由 τCG 跡選擇子規範，抵達上同調根壁位址的閉合。',
		},
		residual: 'P_pair^wall-res · P_pair^phys · P_pair^ord',
		closure: {
			en: 'Obstruction-then-construction: closure is INTERNAL to the established TCG/FPA combinatorial machinery.',
			'zh-cn': '先障碍后构造：其闭合完全在既有的 TCG／FPA 组合机制内部完成。',
			'zh-tw': '先障礙後構造：其閉合完全在既有的 TCG／FPA 組合機制內部完成。',
		},
	},
	{
		key: 'substrate',
		papers: ['37-substrate-obstruction', '38-ahs-conditional-closure'],
		title: { en: 'Substrate arc (CP³ itself)', 'zh-cn': '基底弧（CP³ 本身）', 'zh-tw': '基底弧（CP³ 本身）' },
		blurb: {
			en: 'One structural level below the corpus: can the CP³ starting datum itself be derived from a more primitive relational substrate?',
			'zh-cn': '位于整个语料库之下一个结构层级：CP³ 这一起始数据本身，能否从更原始的关系性基底推导出来？',
			'zh-tw': '位於整個語料庫之下一個結構層級：CP³ 這一起始資料本身，能否從更原始的關係性基底推導出來？',
		},
		residual: 'P^S⁴_anchor · P_ord^CP³',
		closure: {
			en: 'Obstruction-then-construction, but closure is EXTERNAL — it imports an Atiyah–Hitchin–Singer S⁴ anchor from outside the corpus. #39 insists this maturity-register asymmetry is structural content, not a flaw to smooth away.',
			'zh-cn': '同样是先障碍后构造，但其闭合是外部的——它从语料库之外引入了 Atiyah–Hitchin–Singer S⁴ 锚。#39 强调这一成熟度级差本身即结构性内容，而非应被抹平的缺陷。',
			'zh-tw': '同樣是先障礙後構造，但其閉合是外部的——它從語料庫之外引入了 Atiyah–Hitchin–Singer S⁴ 錨。#39 強調這一成熟度級差本身即結構性內容，而非應被抹平的缺陷。',
		},
	},
	{
		key: 'consolidation',
		papers: ['39-structural-state-review', '40-spin1-empirical-posture'],
		postReview: ['40-spin1-empirical-posture'],
		title: { en: 'Consolidation', 'zh-cn': '整合', 'zh-tw': '整合' },
		blurb: {
			en: 'The structural-state review that names the four-arc pattern, and the empirical-posture companion anchoring the one forward-falsifiable prediction to laboratory bounds.',
			'zh-cn': '为四弧格局命名的结构状态综述，以及把唯一可前瞻证伪的预测锚定到实验界限的经验姿态伴篇。',
			'zh-tw': '為四弧格局命名的結構狀態綜述，以及把唯一可前瞻證偽的預測錨定到實驗界限的經驗姿態伴篇。',
		},
	},
	{
		key: 'adjacent',
		papers: [
			'17-boundary-defined-null-connections',
			'18-null-boundary-response',
			'20-sdfd-spectral-dimension-flow',
			'23-parabolic-note',
		],
		title: { en: 'Adjacent workstreams', 'zh-cn': '相邻工作线', 'zh-tw': '相鄰工作線' },
		blurb: {
			en: 'Independent threads with their own Zenodo records, standing outside the four-arc structure: photon ontology and its predictive companion, spectral-dimension flow, and a parabolic A₃ note.',
			'zh-cn': '拥有各自 Zenodo 记录的独立线索，位于四弧结构之外：光子本体论及其预测伴篇、谱维数流，以及一则抛物 A₃ 笔记。',
			'zh-tw': '擁有各自 Zenodo 紀錄的獨立線索，位於四弧結構之外：光子本體論及其預測伴篇、譜維數流，以及一則拋物 A₃ 筆記。',
		},
	},
];

export const arcTitle = (locale: Locale, a: ArcGroup) => pick(locale, a.title);
export const arcBlurb = (locale: Locale, a: ArcGroup) => pick(locale, a.blurb);
export const arcClosure = (locale: Locale, a: ArcGroup) =>
	a.closure ? pick(locale, a.closure) : undefined;
