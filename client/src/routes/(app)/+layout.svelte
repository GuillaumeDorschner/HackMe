<script>
  import "../../app.css";
  import { page } from '$app/stores';
  import { user } from "../../store/store.js";
  import '@fortawesome/fontawesome-free/css/all.min.css'
</script>

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
      <div class="flex">
        {#if $page.url.pathname != "/home"}
          <a class="m-1 px-4 py-2 rounded bg-primary text-white flex items-center" href="/home">
            <i class="fa-solid fa-house"></i>
          </a>
        {/if}

        {#if $page.url.pathname != "/settings"} 
          <a class="m-1 px-4 py-2 rounded bg-primary text-white flex items-center" href="/settings">
            <i class="fa-solid fa-gear"></i>
          </a>
        {/if}
      </div>
    </div>
  </header>

<slot/>

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