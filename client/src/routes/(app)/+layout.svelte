<script>
  import "../../app.css";
  import { page } from "$app/stores";
  import { user } from "../../store/store.js";
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import { onMount } from "svelte";

  let backendUrl;
  let loading = true;

  onMount(async () => {
    backendUrl = `http://${window.location.hostname}:3001/`;
    await fetchUser();
  });

  async function fetchUser() {
    loading = true;
    try {
      const response = await fetch(`${backendUrl}currentuser`, {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      let data = await response.json();
      user.set(data.user[0]);
      loading = false;
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }
</script>

<header class="flex items-center justify-between p-4 border-b blur-effect">
  <div>
    <a href="/home" class="hidden text-2xl font-bold md:inline-block">HackMe</a>
  </div>

  <div class="flex items-center">
    {#if loading}
      <div class="text-center py-4 ml-6">Loading...</div>
    {:else}
      <span class="mx-2">{$user.first_name} {$user.last_name}</span>
      <img
        src={backendUrl + "avatar/" + $user.avatar}
        loading="lazy"
        alt="User avatar"
        class="mx-2 w-10 h-10 rounded-full"
      />
    {/if}
    <div class="flex">
      {#if $page.url.pathname != "/home"}
        <a
          class="m-1 px-4 py-2 rounded bg-primary text-white flex items-center"
          href="/home"
        >
          <i class="fa-solid fa-house" />
        </a>
      {/if}

      {#if $page.url.pathname != "/settings"}
        <a
          class="m-1 px-4 py-2 rounded bg-primary text-white flex items-center"
          href="/settings"
        >
          <i class="fa-solid fa-gear" />
        </a>
      {/if}
    </div>
  </div>
</header>

<slot />

<style>
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1000;
  }
  main {
    margin-top: 60px;
  }
  .blur-effect {
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
  }
</style>
