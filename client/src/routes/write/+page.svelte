<script>
  import { onMount } from "svelte";
  import "../../app.css";

  let backendUrl;

  onMount(() => {
    backendUrl = `http://${window.location.hostname}:3001/`;
  });
</script>
