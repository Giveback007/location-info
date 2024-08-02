<script lang="ts">
    import Alerts from "../components/Alerts.svelte";
    import Sidebar from "../components/Sidebar.main.svelte";
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet } = $props();
</script>

<Alerts />
<Sidebar />
<main class="ml-16 pl-1 pr-1 bg-slate-100 min-h-screen">
    {@render children()}
</main>