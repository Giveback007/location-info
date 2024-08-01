<script lang="ts">
    import Sidebar from "./components/sidebar/Sidebar.main.svelte";
    import { makeUrl } from "./utils/utils";

    // import { page } from '$app/stores';
    import { onMount } from "svelte";
    import { SvelteURL } from 'svelte/reactivity'
    import { currentRoute } from "./store.svelte";

    // Update the currentRoute store when the route changes


    async function testWiki(search: str) {
        const url3 = makeUrl('https://api.wikimedia.org/core/v1/wikipedia/en/search/page', {
            q: search,
            limit: '10',
        })

        const y = await fetch(url3);
        const { pages } = await y.json() as WikiPageSearch

        wikiSearch = pages
    }

    async function testWeather(search: str) {
        console.clear();

        const url = makeUrl('http://api.openweathermap.org/geo/1.0/direct', {
            q: search,
            limit: '5',
            appid: keys.openWeather
        })

        if (!url) return logErr('BAD URL'); // TODO: ERROR msg

        const x = await fetch(url);
        const y = await x.json() as GeoCodeLOC[];

        locs = y
    }

    let promise: Promise<any>;

    let locs: GeoCodeLOC[] = $state([]);
    let wikiSearch: WikiPageInfo[] = $state([]);

    async function handleKeydown(event: KeyboardEvent) {
        if (event.key !== 'Enter') return;
        const el = event.target as HTMLInputElement;
        const val = el.value;
        if (!val) return; // TODO: user error msg

        testWeather(val)
    }
</script>

<Sidebar />
<main class="pl-20">

<!-- <h1>{url}</h1> -->
    <!-- <Modal/> -->
    {#each locs as { name, state, country }}
        <br>
        <button
            onclick={() => {
                testWiki(`${name}, ${state}, ${country}`)
            }}
        >{name}, {state}, {country}</button>
    {/each}

    <hr>

    {#each wikiSearch as item}
        <br>
        <h1>{item.title}</h1>
        <h2>{item.description}</h2>
        <p>{@html item.excerpt}</p>
    {/each}


    {#await promise}
        <h1>Loading ...</h1>
    {:then search}
        {#each search as s}
            <div>
                <h1>{s.title}</h1>
                <img src={s.thumbnail?.url} />
            </div>
        {/each}
    {:catch e}
        <h1>ERROR: {e.message}</h1>
    {/await}

    <div>
        <div class="relative flex items-center mt-2">
            <span class="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </span>
            <input
                type="email"
                placeholder="Search city/town name"
                class="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onkeydown={handleKeydown}
            />
        </div>
    </div>
</main>

<style>
</style>
