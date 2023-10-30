<script>
  import { onMount } from "svelte";
  import "../../app.css";
  import { user, posts } from "../../store/store.js";


  let backendUrl;

  onMount(() => {
    backendUrl = `http://${window.location.hostname}:3001/`;
  });

  async function logout() {
    try {
      const response = await fetch(`${backendUrl}logout`, {
        method: "POST",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const responseData = await response.json();
      console.log(responseData.message); // Logged out successfully
      user.set({}); // Réinitialiser le store user
      goto("/login");
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }
</script>

<div>
  <header class="flex items-center justify-between p-4 border-b blur-effect">
    <div>
      <a href="/home" class="hidden text-2xl font-bold md:inline-block"
        >HackMe</a
      >
    </div>

    <div class="flex items-center">
      <span class="mx-2">{$user.firstName} {$user.lastName}</span>
      <img
        src={$user.avatar_path}
        loading="lazy"
        alt="User avatar"
        class="mx-2 w-10 h-10 rounded-full"
      />
      <div class="ml-4 flex">
        <a
          class="px-4 py-2 rounded bg-primary text-white flex items-center"
          href="/settings"
        >
          <img src="/settings-gear.svg" alt="Settings" class="w-6 h-6" />
        </a>

        <a class="ml-2 px-4 py-2 rounded bg-primary text-white" href="/home"
          >Home</a
        >
      </div>
      <button
        class="ml-2 px-4 py-2 rounded bg-primary text-white"
        on:click={logout}
      >
        Logout
      </button>
    </div>
  </header>
</div>
