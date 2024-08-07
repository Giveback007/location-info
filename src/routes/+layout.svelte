<script lang="ts">
    // import { addAlert } from "../store/app.store";
    import Alerts from "../components/Alerts.svelte";
    import Sidebar from "../components/Sidebar.main.svelte";
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet } = $props();
    // let i = 0;
    // setInterval(() => {
    //     i++
    //     addAlert({
    //         title: `Title: ${i}`,
    //         text: Math.random() + ''
    //     })
    // }, 3500)
</script>

<Alerts />
<Sidebar />
<main class="ml-16 pl-1 pr-1 bg-slate-100 min-h-screen">
    {@render children()}
</main>