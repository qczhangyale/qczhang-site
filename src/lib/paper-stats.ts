// Paper-count helpers. Computes counts from the content collection at build
// time so that prose like "Across 42 Zenodo papers — anchored in a 38-paper
// TCG arc with 4 adjacent workstreams" stays correct as papers are added or
// recategorized. Used by:
//   - src/pages/index.astro (lead paragraph + "synthesis papers" header)
//   - src/pages/about.astro (corpus paragraph)
//   - src/pages/papers/index.astro (page intro + section notes)
//   - src/pages/index.astro (the Complementarity-First page) and src/pages/tcg/
//   - the zh-cn / zh-tw mirrors of all of the above (via t() interpolation)
//
// IMPORTANT: `order` is a sort key WITHIN a series, not a global one. The
// Complementarity-First papers are numbered 1..10 and the TCG papers 1..42,
// so every count below filters on `series` BEFORE looking at `order`.

import { getCollection } from 'astro:content';
import { filterEnglishOnly } from '../i18n';

// Adjacent-workstream paper orders WITHIN the TCG series. These sit outside
// the TCG empirical arc: they share Zenodo records and the foundations
// category but are not part of the main TCG line.
//   17, 18 — BDNC ontology pair
//   19    — wall deletion / Pati–Salam
//   20    — SDFD (spectral dimension flow)
const ADJACENT_WORKSTREAM_ORDERS = [17, 18, 19, 20];

export interface PaperCounts {
	/** Every paper on the site, both series. */
	total: number;
	/** Papers in the Complementarity-First series (Foundational Release I). */
	cf: number;
	/** Papers in the TCG series. */
	tcg: number;
	/** TCG papers in the main arc (TCG total minus adjacent workstreams). */
	tcgArc: number;
	/** TCG adjacent-workstream count. Currently 4 (TCG papers 17–20). */
	adjacent: number;
	/** Per-category counts — TCG series. */
	foundations: number;
	synthesis: number;
	cosmology: number;
	method: number;
	twistor: number;
	/** Per-category counts — Complementarity-First series. */
	cfFoundation: number;
	cfQuantum: number;
	cfGravity: number;
	cfSynthesis: number;
	cfOverview: number;
	/** Technical papers in Release I (everything except the overview). */
	cfTechnical: number;
}

/** Compute paper counts from the content collection. */
export async function getPaperCounts(): Promise<PaperCounts> {
	const papers = filterEnglishOnly(await getCollection('papers'));
	const tcgPapers = papers.filter((p) => p.data.series === 'tcg');
	const cfPapers = papers.filter((p) => p.data.series === 'cf');
	const adjacent = tcgPapers.filter((p) =>
		ADJACENT_WORKSTREAM_ORDERS.includes(p.data.order),
	).length;
	const countCat = (list: typeof papers, cat: string) =>
		list.filter((p) => p.data.category === cat).length;
	return {
		total: papers.length,
		cf: cfPapers.length,
		tcg: tcgPapers.length,
		tcgArc: tcgPapers.length - adjacent,
		adjacent,
		foundations: countCat(tcgPapers, 'foundations'),
		synthesis: countCat(tcgPapers, 'synthesis'),
		cosmology: countCat(tcgPapers, 'cosmology'),
		method: countCat(tcgPapers, 'method'),
		twistor: countCat(tcgPapers, 'twistor'),
		cfFoundation: countCat(cfPapers, 'cf-foundation'),
		cfQuantum: countCat(cfPapers, 'cf-quantum'),
		cfGravity: countCat(cfPapers, 'cf-gravity'),
		cfSynthesis: countCat(cfPapers, 'cf-synthesis'),
		cfOverview: countCat(cfPapers, 'cf-overview'),
		cfTechnical: cfPapers.length - countCat(cfPapers, 'cf-overview'),
	};
}
