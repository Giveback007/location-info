<script lang="ts">
    import OvalLoader from '../icons/oval-loader.svelte';
    import { fade } from 'svelte/transition';
</script>

<div transition:fade={{ delay: 300, duration: 300 }}>
    <div class="bg-slate-700 opacity-50 fixed top-0 left-0 z-[48] h-screen w-screen"></div>
    <div class="fixed inset-0 flex items-center justify-center w-6/12 max-w-28 h-screen m-auto z-[47]">
        <OvalLoader/>
    </div>
</div>