interface TopicAssets {
	icon: string;
	image: string;
}

export function getTopicAssets(category: string): TopicAssets {
	const assets: Record<string, TopicAssets> = {
		algorithms: {
			icon: '🔄',
			image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&h=800&q=80'
		},
		'data structures': {
			icon: '📊',
			image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=800&h=800&q=80'
		},
		introduction: {
			icon: '📚',
			image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&h=800&q=80'
		},
		security: {
			icon: '🔒',
			image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&h=800&q=80'
		},
		'system design': {
			icon: '🏗️',
			image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=800&q=80'
		},
		arrays: {
			icon: '📋',
			image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=800&h=800&q=80'
		},
		strings: {
			icon: '📝',
			image: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?auto=format&fit=crop&w=800&h=800&q=80'
		},
		'linked lists': {
			icon: '🔗',
			image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=800&q=80'
		},
		default: {
			icon: '📘',
			image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&h=800&q=80'
		}
	};

	return assets[category.toLowerCase()] || assets.default;
} 