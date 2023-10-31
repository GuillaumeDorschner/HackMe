<script>
  import { onMount } from "svelte";

  let backendUrl;

  onMount(() => {
    backendUrl = `http://${window.location.hostname}:3001/`;
  });
</script>
