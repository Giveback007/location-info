<script lang="ts">
    import { slide } from 'svelte/transition';
    import EmbeddedMap from './EmbeddedMap.svelte';
    import { addAlert, locations } from '../store/app.store';

    let {
        isOpen, data
    }: {
        isOpen: bol,
        data: GeoCodeLoc[];
    } = $props()

    function handleClick(x: GeoCodeLoc) {
        locations.update(dict => {
            dict[x.id] = x;
            addAlert({
                title: `Added: ${x.name}`,
                text: x.fullName,
                type: 'success',
                time: 5000,
            })
            return dict;
        })
    }
</script>

{#if isOpen}
<div
    transition:slide="{{delay: 250, duration: 500 }}"
    class="mt-2 overflow-hidden bg-white rounded-md shadow-lg dark:bg-gray-800"
>
    <div>
        {#each data as x}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore a11y_missing_attribute -->
            <a onclick={(_) => handleClick(x)} class="search-item border-b border-gray-100 dark:border-gray-700">
                <EmbeddedMap
                    class="search-map h-40 md:w-1/3"
                    params={{
                        q: `${x.lat}, ${x.lon}`,
                        center: `${x.lat}, ${x.lon}`,
                        zoom: '6',
                    }}
                />
                <div class="search-text flex flex-1 items-center px-4 py-3 -mx-2 transition-colors duration-300 transform hover:opacity-80 hover:bg-gray-200 dark:hover:bg-gray-700">
                    <p class="mx-2 text-sm text-gray-600 dark:text-white">
                    <b class="font-bold">{x.name}</b>
                    <br>{x.fullName}
                    <br><span>[{x.lat}, {x.lon}]</span>
                </div>
            </a>

        {/each}
    </div>
</div>
{/if}

<style lang="scss">
    .search-item {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin-top: 1px;
    }

    .search-text {
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        .search-item {
            max-height: 240;
            flex-direction: column;
        }
    }
</style>