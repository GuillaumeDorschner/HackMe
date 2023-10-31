<script>
  import "../app.css";
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
      <div class="ml-4 flex">
        <a
          class="px-4 py-2 rounded bg-primary text-white flex items-center"
          href="/settings"
        >
          <img src="/settings-gear.svg" alt="Settings" class="w-6 h-6" />
        </a>

        <a class="ml-2 px-4 py-2 rounded bg-primary text-white" href="/write"
          >Write a Blog</a
        >
      </div>
    </div>
  </header>

<slot/>