import { writable } from 'svelte/store';

export const currentRoute = writable(location.hash.slice(1) || '/');

// Listen for hash changes
addEventListener('hashchange', () => {
    const hash = location.hash.slice(1) || '/'; // Remove the # and get the route path
    currentRoute.set(hash)
    // log({hash, e})
    if (1) {
        // route();
    } else {
        // Handle 404 - Not Found
        // document.getElementById('content').innerHTML = '<h1>Page Not Found</h1>';
    }
});