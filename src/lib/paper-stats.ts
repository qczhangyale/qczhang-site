// Paper-count helpers. Computes counts from the content collection at build
// time so that prose like "Across 21 Zenodo papers — anchored in a 17-paper
// TCG arc with 4 adjacent workstreams" stays correct as papers are added or
// recategorized. Used by:
//   - src/pages/index.astro (lead paragraph + "synthesis papers" header)
//   - src/pages/about.astro (corpus paragraph)
//   - src/pages/papers/index.astro (page intro + section notes)
//   - src/pages/zh-cn/papers/index.astro and zh-tw/...  (via t() interpolation)

import { getCollection } from 'astro:content';
import { filterEnglishOnly } from '../i18n';

// Adjacent-workstream paper orders. These are the papers that sit outside
// the TCG empirical arc: they share Zenodo records and the foundations
// category but are not part of the seventeen-paper TCG line.
//   17, 18 — BDNC ontology pair
//   19    — wall deletion / Pati–Salam
//   20    — SDFD (spectral dimension flow)
const ADJACENT_WORKSTREAM_ORDERS = [17, 18, 19, 20];

export interface PaperCounts {
	/** Total papers across all categories. */
	total: number;
	/** Papers in the seventeen-paper TCG arc (total minus adjacent workstreams). */
	tcgArc: number;
	/** Adjacent-workstream paper count. Currently 4 (papers 17–20). */
	adjacent: number;
	/** Per-category counts. */
	foundations: number;
	synthesis: number;
	cosmology: number;
	method: number;
	twistor: number;
}

/** Compute paper counts from the content collection. */
export async function getPaperCounts(): Promise<PaperCounts> {
	const papers = filterEnglishOnly(await getCollection('papers'));
	const adjacent = papers.filter((p) =>
		ADJACENT_WORKSTREAM_ORDERS.includes(p.data.order),
	).length;
	return {
		total: papers.length,
		tcgArc: papers.length - adjacent,
		adjacent,
		foundations: papers.filter((p) => p.data.category === 'foundations').length,
		synthesis: papers.filter((p) => p.data.category === 'synthesis').length,
		cosmology: papers.filter((p) => p.data.category === 'cosmology').length,
		method: papers.filter((p) => p.data.category === 'method').length,
		twistor: papers.filter((p) => p.data.category === 'twistor').length,
	};
}
