/**
 * Remark plugin that calculates reading time from markdown content
 * and injects it into mdsvex frontmatter.
 *
 * Uses ~200 words per minute (appropriate for technical content with
 * code blocks, which readers tend to study more carefully).
 */

const WORDS_PER_MINUTE = 200;

/**
 * Recursively extract all text content from an mdast tree node.
 * Skips code blocks since they read differently than prose, but
 * still counts them at a reduced rate.
 *
 * @param {any} node
 * @returns {{ text: string; codeText: string }}
 */
function extractText(node) {
	let text = '';
	let codeText = '';

	if (node.type === 'text' || node.type === 'inlineCode') {
		text += node.value + ' ';
	} else if (node.type === 'code') {
		// Code blocks count at roughly half speed -- readers scan rather than read
		codeText += node.value + ' ';
	}

	if ('children' in node && Array.isArray(node.children)) {
		for (const child of node.children) {
			const extracted = extractText(child);
			text += extracted.text;
			codeText += extracted.codeText;
		}
	}

	return { text, codeText };
}

/**
 * Count words by splitting on whitespace, filtering out empty strings.
 *
 * @param {string} str
 * @returns {number}
 */
function countWords(str) {
	return str.split(/\s+/).filter(Boolean).length;
}

/**
 * @returns {(tree: object, file: { data: { fm?: Record<string, unknown> } }) => void}
 */
export default function remarkReadingTime() {
	return function (tree, file) {
		const { text, codeText } = extractText(tree);

		const proseWords = countWords(text);
		// Code reads at roughly half the speed of prose
		const codeWords = countWords(codeText);
		const effectiveWords = proseWords + Math.ceil(codeWords / 2);

		const minutes = Math.max(1, Math.ceil(effectiveWords / WORDS_PER_MINUTE));

		// mdsvex stores frontmatter in file.data.fm
		if (!file.data.fm) {
			file.data.fm = {};
		}
		file.data.fm.readingTime = `${minutes} min read`;
	};
}
