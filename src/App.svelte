<script lang="ts">
    import Layout from "./routes/+layout.svelte";
    import Router from "./routes/+router.svelte";
    import { wait } from "./utils/utils";

    let promise: Promise<any> = wait(2_000);


</script>

<Layout>
    <Router />
</Layout>

