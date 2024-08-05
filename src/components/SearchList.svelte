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
    class="search-list
        overflow-y-auto
        mt-2 max-h-[85vh] bg-white rounded-md shadow-lg dark:bg-gray-800"
>
    <div>
        {#each data as x, i (i)}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <!-- svelte-ignore a11y_missing_attribute -->
            <a
                onclick={(_) => handleClick(x)}
                class="search-item mt-1 border-b-2 border-gray-100 dark:border-gray-700"
            >
                <EmbeddedMap
                    class="search-map md:h-44 md:w-1/3"
                    params={{
                        q: `${x.lat}, ${x.lon}`,
                        center: `${x.lat}, ${x.lon}`,
                        zoom: '6',
                    }}
                />
                <div class="search-text group
                    flex flex-1 items-center
                    px-4
                    transition-colors duration-300 transform
                    hover:opacity-80 hover:bg-gray-200 dark:hover:bg-gray-700
                    py-10 md:py-3"
                >
                    <h2
                        class="invisible group-hover:visible
                            md:w-full md:text-center absolute bottom-2.5 right-3 md:right-0
                            font-bold text-lg text-blue-400"
                    >Click To Add</h2>

                    <h1 class="mx-2 text-gray-600 dark:text-white">
                        <b class="font-bold text-xl">{x.name}</b>
                        <br>{x.fullName}
                        <br><span>[{x.lat}, {x.lon}]</span>
                    </h1>
                </div>
            </a>

        {/each}
    </div>
</div>
{/if}

<style lang="scss">
.search-list {
        &::-webkit-scrollbar {
            width: 0.75rem;
            // height: 1rem;
        }
        &::-webkit-scrollbar-track {
            background: #e2e8f0;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #94a3b8;    /* color of the scroll thumb */
            border-radius: 0.35rem;       /* roundness of the scroll thumb */
            border: 0.15rem solid #e2e8f0;  /* creates padding around scroll thumb */
        }
    }

    .search-item {
        // width: 100%;
        display: flex;
        flex-direction: row;
    }

    .search-text {
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        .search-item {
            flex-direction: column;
        }
    }
</style>