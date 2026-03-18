import type { Chapter } from '$lib/types';

export const chapters: Chapter[] = [
	{
		title: 'Why Hash Tables Are Everywhere',
		slug: 'hash-tables-everywhere',
		chapter: 0,
		description: 'From Python dicts to database indexes to DNS caches — hash tables are the most important data structure you\'ll never think about. We dig into why they\'re fast, when they\'re slow, and the one interview question that trips everyone up.',
		date: '2026-03-18',
		category: 'Podcast',
		tags: ['hash-tables', 'data-structures', 'interviews', 'system-design'],
		audioUrl: '/audio/episode-1.mp3',
		episodeNumber: 1,
		sections: []
	},
	{
		title: 'Getting Started with Algorithms',
		slug: 'introduction',
		chapter: 1,
		description: 'A comprehensive guide to approaching algorithmic problems and mastering technical interviews.',
		date: '2024-03-20',
		category: 'Introduction',
		tags: ['fundamentals', 'problem-solving', 'interviews', 'getting-started'],
		sections: [
			{ title: 'How to Use This Guide', id: 'how-to-use' },
			{ title: 'Problem-Solving Framework', id: 'framework' }
		]
	},
	{
		title: 'Bit Manipulation Fundamentals',
		slug: 'primitive-types',
		chapter: 2,
		description: 'Master the art of bit manipulation with practical examples from real interviews.',
		date: '2024-03-21',
		category: 'Algorithms',
		tags: ['bit-manipulation', 'binary', 'optimization', 'fundamentals'],
		sections: [
			{ title: 'Counting Bits', id: 'counting-bits' },
			{ title: 'Power of Two', id: 'power-of-two' }
		]
	},
	{
		title: 'Array Techniques',
		slug: 'arrays',
		chapter: 3,
		description: 'Essential array manipulation techniques including two-pointer method and sliding window.',
		date: '2024-03-22',
		category: 'Data Structures',
		tags: ['arrays', 'two-pointer', 'sliding-window', 'optimization'],
		sections: [
			{ title: 'Two Pointer Technique', id: 'two-pointer' },
			{ title: 'Sliding Window', id: 'sliding-window' }
		]
	},
	{
		title: 'String Pattern Matching',
		slug: 'strings',
		chapter: 4,
		description: 'Deep dive into string algorithms including KMP and Rabin-Karp.',
		date: '2024-03-23',
		category: 'Algorithms',
		tags: ['strings', 'pattern-matching', 'kmp', 'rabin-karp'],
		sections: [
			{ title: 'KMP Algorithm', id: 'kmp' },
			{ title: 'Rabin-Karp', id: 'rabin-karp' }
		]
	},
	{
		title: 'Linked List Operations',
		slug: 'linked-lists',
		chapter: 5,
		description: 'Master linked list operations with practical examples and common interview questions.',
		date: '2024-03-24',
		category: 'Data Structures',
		tags: ['linked-lists', 'pointers', 'cycle-detection', 'reversal'],
		sections: [
			{ title: 'Cycle Detection', id: 'cycle-detection' },
			{ title: 'Reverse Operations', id: 'reverse' }
		]
	},
	{
		title: 'System Design: URL Shortener',
		slug: 'system-design-1',
		chapter: 6,
		description: 'Build a scalable URL shortener service from scratch.',
		date: '2024-03-25',
		category: 'System Design',
		tags: ['system-design', 'architecture', 'scalability', 'databases'],
		sections: [
			{ title: 'Requirements Analysis', id: 'requirements' },
			{ title: 'Architecture Design', id: 'architecture' },
			{ title: 'Data Model', id: 'data-model' }
		]
	},
	{
		title: 'Security: Buffer Overflow',
		slug: 'security-1',
		chapter: 7,
		description: 'Understanding and preventing buffer overflow vulnerabilities.',
		date: '2024-03-26',
		category: 'Security',
		tags: ['security', 'buffer-overflow', 'vulnerabilities', 'prevention'],
		sections: [
			{ title: 'Stack Overflow', id: 'stack-overflow' },
			{ title: 'Prevention Techniques', id: 'prevention' }
		]
	},
	{
		title: 'Dynamic Programming: Edit Distance',
		slug: 'dp-1',
		chapter: 8,
		description: 'Solving the edit distance problem using dynamic programming.',
		date: '2024-03-27',
		category: 'Algorithms',
		tags: ['dynamic-programming', 'edit-distance', 'optimization'],
		sections: [
			{ title: 'Problem Analysis', id: 'analysis' },
			{ title: 'Bottom-Up Solution', id: 'bottom-up' },
			{ title: 'Space Optimization', id: 'optimization' }
		]
	},
	{
		title: 'Trees',
		slug: 'chapter-6',
		chapter: 9,
		description: 'Traversal, balancing, and common tree problems.',
		date: '2024-03-28',
		category: 'Data Structures',
		tags: ['data-structures', 'trees', 'recursion'],
		sections: []
	},
	{
		title: 'Binary Search Trees',
		slug: 'chapter-7',
		chapter: 10,
		description: 'BST operations, balancing, and search algorithms.',
		date: '2024-03-29',
		category: 'Data Structures',
		tags: ['data-structures', 'trees', 'binary-search'],
		sections: []
	},
	{
		title: 'Heaps',
		slug: 'chapter-8',
		chapter: 11,
		description: 'Priority queues, heap operations, and applications.',
		date: '2024-03-30',
		category: 'Data Structures',
		tags: ['data-structures', 'heaps', 'priority-queues'],
		sections: []
	},
	{
		title: 'Graphs',
		slug: 'chapter-9',
		chapter: 12,
		description: 'Graph traversal, shortest paths, and connectivity.',
		date: '2024-03-31',
		category: 'Data Structures',
		tags: ['data-structures', 'graphs', 'traversal'],
		sections: []
	},
	{
		title: 'Dynamic Programming',
		slug: 'chapter-10',
		chapter: 13,
		description: 'Memoization, tabulation, and common DP patterns.',
		date: '2024-04-01',
		category: 'Algorithms',
		tags: ['dynamic-programming', 'optimization', 'algorithms'],
		sections: []
	},
	{
		title: 'Recursion',
		slug: 'chapter-11',
		chapter: 14,
		description: 'Recursive problem solving and backtracking.',
		date: '2024-04-02',
		category: 'Algorithms',
		tags: ['recursion', 'backtracking', 'algorithms'],
		sections: []
	},
	{
		title: 'Sorting and Searching',
		slug: 'chapter-12',
		chapter: 15,
		description: 'Comparison sorts, non-comparison sorts, and search algorithms.',
		date: '2024-04-03',
		category: 'Algorithms',
		tags: ['sorting', 'searching', 'algorithms'],
		sections: []
	},
	{
		title: 'Object-Oriented Programming',
		slug: 'chapter-13',
		chapter: 16,
		description: 'Design patterns and OOP principles in practice.',
		date: '2024-04-04',
		category: 'Software Design',
		tags: ['oop', 'design-patterns', 'software-design'],
		sections: []
	},
	{
		title: 'System Design and Memory Limits',
		slug: 'chapter-14',
		chapter: 17,
		description: 'Designing systems with real-world constraints.',
		date: '2024-04-05',
		category: 'System Design',
		tags: ['system-design', 'memory', 'scalability'],
		sections: []
	},
	

	{
		title: 'Bibliography',
		slug: 'references',
		chapter: 18,
		description: 'References and resources for further reading.',
		date: '2024-04-06',
		category: 'Reference',
		sections: [],
		tags: ['references', 'resources']
	}
]; 