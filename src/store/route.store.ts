import { writable } from 'svelte/store';

export type Routes = '/' | 'locations' | 'charts' | '404'

const initPath = location.hash.slice(1) || '/'
export const currentRoute = writable(initPath === 'home' ? '/' : initPath);

addEventListener('hashchange', () => {
    const hash = location.hash.slice(1) || '/';

    if (hash === 'home') {
        window.location.assign("/");
    } else {
        currentRoute.set(hash)
    }
});