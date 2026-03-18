import type { Article } from '$lib/types';

export const articles: Article[] = [
    {
        title: "Article with Media",
        slug: "some-article",
        description: "An article demonstrating media embedding capabilities",
        date: "2024-03-20",
        category: "Tutorial",
        tags: ["media", "tutorial"],
        readingTime: "5 min read"
    },
    {
        title: "Bill Lumbergh",
        slug: "bill-lumbergh",
        description: "He's going to need you to go ahead and come in on Saturday, but there's a lot more to the story than you think.",
        date: "2024-02-24",
        category: "Episodes",
        tags: ["management", "office-culture"],
        episodeNumber: 5,
        audioUrl: "/audio/episode-5.mp3"
    },
    {
        title: "Shooter McGavin",
        slug: "shooter-mcgavin",
        description: "When golf-obsessed terrorists kidnapped his family and held them hostage in exchange for a Golden Jacket, Shooter had no choice but to win the tour at any cost.",
        date: "2024-02-17",
        category: "Episodes",
        tags: ["sports", "golf"],
        episodeNumber: 4,
        audioUrl: "/audio/episode-4.mp3"
    },
    // Add more episodes...
]; 