<script>
  import { onMount } from "svelte";
  import "../../app.css";
  import { user } from '../../store/store.js';

  let showAlert = false;
  let validationError = "";

  let userForm = $user;

  function updateUser(newData) {
    user.update(u => {
      return {...u, ...newData};
    });
  }

  function saveChanges() {
    fetch("", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userForm),
    })
    .then((res) => {

      console.log("Changes saved:", userForm);
      updateUser(userForm);
    })
    .catch((err) => {
      console.error(err);
      showAlert = true;
      validationError = err.message || 'Something went wrong';
    });
  }
</script>


<div>
  <header class="flex items-center justify-between p-4 border-b blur-effect">
    <div>
      <a href="/home" class="text-2xl font-bold">HackMe</a>
    </div>

    <div class="flex items-center">
      <span class="mx-2">{$user.firstName} {$user.lastName}</span>
      <img
        src={$user.avatar}
        alt="User avatar"
        class="mx-2 w-10 h-10 rounded-full"
      />
    </div>
  </header>

  <main class="p-4">
    <section class="m-8 w-full max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold mb-4">Settings</h1>

      <a
        class="text-blue-500 hover:text-blue-700 inline-flex items-center"
        href="/home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-4 h-4 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        back
      </a>

      <form on:submit|preventDefault={saveChanges}>
        <div class="mb-4">
          <label for="firstName" class="block text-sm font-medium text-gray-600"
            >First Name</label
          >
          <input
            id="firstName"
            type="text"
            bind:value={userForm.firstName}
            class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary transition duration-100 focus:ring"
          />
        </div>

        <div class="mb-4">
          <label for="lastName" class="block text-sm font-medium text-gray-600"
            >Last Name</label
          >
          <input
            id="lastName"
            type="text"
            bind:value={userForm.lastName}
            class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary transition duration-100 focus:ring"
          />
        </div>

        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-600"
            >Username</label
          >
          <input
            id="username"
            type="text"
            bind:value={userForm.username}
            class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary transition duration-100 focus:ring"
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-600"
            >Email</label
          >
          <input
            id="email"
            type="email"
            bind:value={userForm.email}
            class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary transition duration-100 focus:ring"
          />
        </div>

        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-600"
            >Password</label
          >
          <input
            id="password"
            type="password"
            bind:value={userForm.password}
            class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary transition duration-100 focus:ring"
          />
        </div>

        <div class="mb-4">
          <label for="avatar" class="block text-sm font-medium text-gray-600"
            >Profile Picture URL</label
          >
          <input
            id="avatar"
            type="text"
            bind:value={userForm.avatar}
            class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary transition duration-100 focus:ring"
          />
        </div>

        <div>
          <button type="submit" class="px-4 py-2 rounded bg-primary text-white"
            >Save Changes</button
          >
        </div>

        {#if showAlert}
          <div
            role="alert"
            class="rounded border-s-4 border-red-500 bg-red-50 p-4"
          >
            <strong class="block font-medium text-red-800">
              Something went wrong
            </strong>
            <p class="mt-2 text-sm text-red-700">
              {validationError}
            </p>
          </div>
        {/if}
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
    margin-top: 60px;
  }
</style>
