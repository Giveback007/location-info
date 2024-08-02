// TODO: Finish implementing other types: https://merakiui.com/components/application-ui/alerts
<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { alertsState } from "../store/app.store";
    import { quintOut } from "svelte/easing";
    import { flip } from "svelte/animate";

    const dict: Dict<AlertProps> = $state({});
    const arr = $derived(Object.values(dict));

    alertsState.subscribe(s => {
        s.forEach(x => {
            if (dict[x.id]) return;

            dict[x.id] = x;
            setTimeout(() => {
                x.remove()
                delete dict[x.id]
            }, x.time || 5_000)
        })
    })
</script>

<div
    class="fixed bottom-5 right-5 z-50 flex flex-col space-y-1"
>
    {#each arr as alert (alert.id)}
    <div
        animate:flip="{{duration: 1500, easing: quintOut}}"
        in:fly="{{delay: 0, duration: 750, x: 300, y: 25, opacity: 0.5, easing: quintOut}}"
        out:fade="{{delay: 0, duration: 1000, easing: quintOut }}"
        class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800"
    >
        <div class="flex items-center justify-center w-12 bg-emerald-500">
            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
            </svg>
        </div>

        <div class="px-4 py-2 -mx-3">
            <div class="mx-3">
                <span class="font-semibold text-emerald-500 dark:text-emerald-400">{alert.title}</span>
                <p class="text-sm text-gray-600 dark:text-gray-200">Your account was registered!</p>
            </div>
        </div>

        <button class="p-0.5 m-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </div>
{/each}
</div>
