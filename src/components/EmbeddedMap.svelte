<script lang="ts">
    import { isType, makeUrl } from "../utils/utils";
    import OvalLoader from "../icons/oval-loader.svelte";
    import { fade } from "svelte/transition";

    const {
        params,
        style = '',
        class: _class = '',
        onLoad = "loader",
    }: {
        params: Dict<str>,
        style?: str;
        class?: str;
        onLoad?: null | 'loader' | ((event: Event & {
            currentTarget: EventTarget & Element;
        }) => any);
    } = $props();

    params['key'] = keys.google.mapsEmbedded;
    const url = makeUrl('https://www.google.com/maps/embed/v1/place', params);

    let isLoading = $state(true)
</script>

<div
    style={style}
    class={_class}
>
{#if isLoading}
    <div
        transition:fade="{{delay: 500, duration: 1250}}"
        class={`p-10 w-full h-full bg-slate-200`}
    ><OvalLoader /></div>
{/if}

<iframe
    width=100%
    height=100%
    class={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
    title="Google Maps"
    loading="lazy"
    allowfullscreen={true}
    referrerpolicy="no-referrer-when-downgrade"
    src={url}
    onload={(e) => {
        isLoading = false
        if (isType(onLoad, 'function')) onLoad(e)
    }}
></iframe>
</div>