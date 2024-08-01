<script lang="ts">
    import Sidebar from "../components/Sidebar.main.svelte";
    import type { Snippet } from "svelte";

    let { children }: { children: Snippet } = $props();
</script>

<Sidebar />
<main class="pl-20">
{@render children()}
</main>