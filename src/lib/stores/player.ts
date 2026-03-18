import { writable } from 'svelte/store';
import type { Article } from '$lib/types';

interface PlayerState {
    currentArticle: Article | null;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
}

function createPlayerStore() {
    const { subscribe, set, update } = writable<PlayerState>({
        currentArticle: null,
        isPlaying: false,
        currentTime: 0,
        duration: 0,
        volume: 1
    });

    return {
        subscribe,
        play: (article: Article) => update(state => ({
            ...state,
            currentArticle: article,
            isPlaying: true
        })),
        pause: () => update(state => ({ ...state, isPlaying: false })),
        toggle: () => update(state => ({ ...state, isPlaying: !state.isPlaying })),
        setTime: (time: number) => update(state => ({ ...state, currentTime: time })),
        setDuration: (duration: number) => update(state => ({ ...state, duration })),
        setVolume: (volume: number) => update(state => ({ ...state, volume }))
    };
}

export const player = createPlayerStore(); 