<script lang="ts">
    import PocketBase from 'pocketbase';
    import { addAlert } from '../store/app.store';
    import { onMount } from 'svelte';

    interface TestPB {
        collectionId:   string;
        collectionName: string;
        created:        Date;
        id:             string;
        text:           string;
        title:          string;
        updated:        Date;
    }

    let items = $state<TestPB[]>([]);

    async function loadData() {
        items = [];
        const pb = new PocketBase(keys.pocketbase);
        const resultList = await pb.collection<TestPB>('Test').getList(1, 100);

        items = resultList.items

        addAlert({
            title: `${items.length} Items loaded`,
            text: 'PocketBase is working!'
        })
    }

    onMount(() => loadData())
</script>

<button
    onclick={() => {}}
    class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
>
    Refresh
</button>
<h1 class="text-5xl">PB-Test</h1>

{#each items as x (x.id)}
<hr>
<div>
    <h2 class="text-3xl">{x.title}</h2>
    {@html x.text}
</div>
{/each}
