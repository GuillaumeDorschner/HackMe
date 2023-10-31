<script>
  import { onMount } from "svelte";

  let backendUrl;

  onMount(() => {
    backendUrl = `http://${window.location.hostname}:3001/`;
  });
</script>


<main class="p-4 mt-16">
</main>