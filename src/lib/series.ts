// Series and category metadata shared by the hubs, the bibliography, and the
// paper detail layout. Keeps human-readable category labels in one place so
// the raw slug (e.g. "cf-foundation") never leaks into a badge.

import type { Locale } from '../i18n';
import { t } from '../i18n';

export type Series = 'cf' | 'tcg';

export const SERIES_ORDER: Series[] = ['cf', 'tcg'];

/** Category slugs belonging to each series, in display order. */
export const SERIES_CATEGORIES: Record<Series, string[]> = {
	cf: [
		'cf-foundation',
		'cf-quantum',
		'cf-gravity',
		'cf-synthesis',
		'cf-time',
		'cf-electromagnetism',
		'cf-ric',
		'cf-dataset',
		'cf-overview',
	],
	tcg: ['synthesis', 'cosmology', 'method', 'twistor', 'foundations'],
};

/** Short badge label for a category slug. */
export function categoryLabel(locale: Locale, category: string): string {
	return t(locale, `cat.${category}`);
}

/** Series display name ("Complementarity-First" / "Twistor Configuration Geometry"). */
export function seriesName(locale: Locale, series: Series): string {
	return t(locale, `series.${series}.name`);
}

/** Series landing-page path, locale-prefixed. */
export function seriesHref(locale: Locale, series: Series): string {
	const prefix = locale === 'en' ? '' : '/' + locale;
	// The Complementarity-First page is the homepage; TCG has its own route.
	return series === 'cf' ? prefix + '/' : prefix + '/tcg/';
}
