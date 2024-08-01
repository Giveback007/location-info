<script lang="ts">
    import Sidebar from "../components/Sidebar.main.svelte";
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet } = $props();
</script>

<Sidebar />
<main class="ml-16 pl-1 pr-1">
{@render children()}
</main>