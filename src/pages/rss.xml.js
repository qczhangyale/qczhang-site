import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

function postLink(id) {
	const localized = id.match(/^(zh-cn|zh-tw)\/(.+)$/);
	return localized ? `/${localized[1]}/blog/${localized[2]}/` : `/blog/${id}/`;
}

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: postLink(post.id),
		})),
	});
}
