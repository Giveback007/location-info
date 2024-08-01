<script lang="ts">
    import questionSVG from '../assets/question-mark-circle.svg';
    import { slide } from 'svelte/transition';

    let {
        isOpen, data
    }: {
        isOpen: bol;
        data: WikiLoc[];
    } = $props()

    log({isOpen, data})
</script>
{#if isOpen}
<div
    transition:slide="{{delay: 250, duration: 300 }}"
    class="z-20 mt-2 overflow-hidden bg-white rounded-md shadow-lg dark:bg-gray-800"
>
    <div class="py-2">
        {#each data as x}
            <div class="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
                <img class="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full" src={x.thumbnail?.url || questionSVG} alt="avatar" />
                <p class="mx-2 text-sm text-gray-600 dark:text-white">
                    <b class="font-bold">{x.title}</b>
                    <br><span class="underline">{x.description}</span>
                    <br><i>{@html x.excerpt}</i>
            </div>
        {/each}
    </div>
</div>
{/if}