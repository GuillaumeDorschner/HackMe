<script>
  import { onMount } from "svelte";
  import "../../app.css";
  
  let user = {
    firstName: "Guillaume",
    lastName: "Dorschner",
    username: "gdorschner",
    email: "guillaume@example.com",
    password: "********",
    avatar: "https://",
  };

  function saveChanges() {
    // call backend
    console.log("Changes saved:", user);
  }
</script>

<div>
  <header class="flex items-center justify-between p-4 border-b blur-effect">
    <div>
      <a href="/home" class="text-2xl font-bold">HackMe</a>
    </div>

    <div class="flex items-center">
      <span class="mx-2">{user.firstName} {user.lastName}</span>
      <img src={user.avatar} alt="User avatar" class="mx-2 w-10 h-10 rounded-full" />
    </div>
  </header>

  <main class="p-4">
    <section class="m-8 w-full max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold mb-4">Settings</h1>

      <form on:submit|preventDefault={saveChanges}>
        <div class="mb-4">
          <label for="firstName" class="block text-sm font-medium text-gray-600">First Name</label>
          <input id="firstName" type="text" bind:value={user.firstName} class="mt-1 p-2 w-full" />
        </div>

        <div class="mb-4">
          <label for="lastName" class="block text-sm font-medium text-gray-600">Last Name</label>
          <input id="lastName" type="text" bind:value={user.lastName} class="mt-1 p-2 w-full" />
        </div>

        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-600">Username</label>
          <input id="username" type="text" bind:value={user.username} class="mt-1 p-2 w-full" />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
          <input id="email" type="email" bind:value={user.email} class="mt-1 p-2 w-full" />
        </div>

        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
          <input id="password" type="password" bind:value={user.password} class="mt-1 p-2 w-full" />
        </div>

        <div class="mb-4">
          <label for="avatar" class="block text-sm font-medium text-gray-600">Profile Picture URL</label>
          <input id="avatar" type="text" bind:value={user.avatar} class="mt-1 p-2 w-full" />
        </div>

        <div>
          <button type="submit" class="px-4 py-2 rounded bg-primary text-white">Save Changes</button>
        </div>
      </form>
    </section>
  </main>
</div>

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
    margin-top: 60px; /* Height of the header */
  }
</style>
