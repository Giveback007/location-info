import { writable } from 'svelte/store';

export type Routes = '/' | 'locations' | 'charts' | '404' | 'test' | 'ui-test'

const initPath = getHashPath()
export const currentRoute = writable(initPath === 'home' ? '/' : initPath);

addEventListener('hashchange', () => {
    const path = getHashPath()

    if (path === 'home') {
        window.location.assign("/");
    } else {
        currentRoute.set(path)
    }
});

function getHashPath() {
    if (location.pathname !== '/') {
        const path = location.pathname.replace('/', '');
        history.pushState(null, path, `/#${path}`)
    }

    return location.hash.slice(1) || '/';
}