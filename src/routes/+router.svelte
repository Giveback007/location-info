<script lang="ts">
    import { onMount } from "svelte";
    import { currentRoute, type Routes } from "../store/route.store";
    import PageLoader from "../components/PageLoader.svelte";

    let lazy: Promise<any>;

    const routes: { [k in Routes]: any } = {
        '/': async () => import('./Home.page.svelte'),
        'locations': () => import('./Locations.page.svelte'),
        'charts': () => import('./Charts.page.svelte'),
        '404': () => import("./P404.page.svelte"),
    }

    onMount(() => {
        currentRoute.subscribe(async (rt) => {
            const route = routes[rt as any as Routes] || routes[404];
            lazy = route();
        })
    })
</script>

{#if lazy}
    {#await lazy}
        <PageLoader />
    {:then { default: Lazy }}
        <Lazy />
    {/await}
{/if}