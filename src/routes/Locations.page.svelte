<script lang="ts">
    import { makeUrl, wait } from "../utils/utils";
    import PageLoader from "../components/PageLoader.svelte";
    import SearchList from "../components/SearchList.svelte";
    import { geoId, locations } from "../store/app.store";
    import LocationCard from "../components/LocationCard.svelte";
    import { onMount } from "svelte";

    let locs = $state<GeoCodeLoc[]>([])
    let geoLocsPromise: Promise<GeoCodeLoc[]> | null = $state(null);
    let isOpen = $state(true);
    // let inputVal = $state('');

    // async function searchWiki(search: str, limit: num = 10) {
    //     const url3 = makeUrl('https://api.wikimedia.org/core/v1/wikipedia/en/search/page', {
    //         q: search,
    //         limit: limit + '',
    //     })

    //     const res = await fetch(url3);
    //     const { pages } = await res.json() as WikiPageSearch;

    //     return pages;
    // }

    async function searchGeo(search: str): Promise<GeoCodeLoc[]> {
        const url = makeUrl('https://api.openweathermap.org/geo/1.0/direct', {
            q: search,
            limit: '5',
            appid: keys.openWeather
        })

        if (!url) throw new Error('BAD URL'); // TODO: ERROR msg

        const res = await fetch(url);
        const locs = await res.json() as _GeoCodeLoc[];

        return locs.map(x => ({
            ...x,
            fullName: `${x.name}, ${x.state ? `${x.state}, ` : ''}${x.country}`,
            id: geoId([x.lat, x.lon])
        }));
    }

    async function handleKeydown(event: KeyboardEvent) {
        const el = event.target as HTMLInputElement;
        handleValue(el.value, event.key);
    }

    async function handleValue(val: str, key?: str) {
        // inputVal = val;
        if (!val) {
            wait(700).then(() => geoLocsPromise = null);
            isOpen = false;
        }

        if (key !== 'Enter' || !val) return;
        geoLocsPromise = searchGeo(val);
    }

    onMount(() => {
        locations.subscribe(s => locs = Object.values(s))
    })
</script>

<div>
    <div class="search-bar bg-slate-200 rounded-lg p-1 pt-0 mt-3 fixed z-40">
        <div class="relative flex items-center">
            <span class="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </span>
            <input
                type="search"
                placeholder="Search city/town name to add more"
                class="block w-full py-2.5 h-12 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                onkeydown={handleKeydown}
                oninput={(e) => handleValue((e.target as HTMLInputElement).value)}
            />
        </div>

        {#if geoLocsPromise}
            {#await geoLocsPromise}
                <PageLoader />
            {:then locs}
                {void wait(750).then(() => isOpen = true) ?? ''}
                {#if locs.length}
                    <SearchList data={locs} isOpen={isOpen} />
                {:else}
                    <h1 class="flex flex-row space-x-2 text-3xl p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                        </svg>

                        <span>No Results Found ...</span>
                    </h1>
                {/if}
            {:catch e}
                {void logErr(e) || ''}
                <h1>ERROR: {e.message}</h1>
            {/await}
        {/if}
    </div>

    <!-- Spacer -->
    <div class="h-20"></div>
    <hr class="pb-2">

    {#each locs as x}
        <LocationCard data={x} />
    {/each}
</div>

<style lang="scss">
    .search-bar {
        width: calc(100% - 4.5rem)
    }
</style>