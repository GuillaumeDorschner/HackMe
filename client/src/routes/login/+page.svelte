<script>
  import { onMount } from "svelte";

  let email = "";
  let password = "";
  let validationError = "";
  let showAlert = false;

  function login() {
    validateFields();
    if (showAlert === false) {
      console.log("Proceed with login");
      // Call backend
    }
  }

  function validateFields() {
    showAlert = false;
    if (!email || !password) {
      validationError = "All fields must be filled out.";
      showAlert = true;
    }
  }
</script>

<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <h2
      class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl"
    >
      Login
    </h2>

    <form class="mx-auto max-w-lg rounded-lg border">
      <div class="flex flex-col gap-4 p-4 md:p-8">
        {#if showAlert}
          <div
            role="alert"
            class="rounded border-s-4 border-red-500 bg-red-50 p-4"
          >
            <strong class="block font-medium text-red-800"
              >Something went wrong</strong
            >
            <p class="mt-2 text-sm text-red-700">{validationError}</p>
          </div>
        {/if}

        <div>
          <label
            for="email"
            class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >Email</label
          >
          <input
            bind:value={email}
            name="email"
            class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div>

        <div>
          <label
            for="password"
            class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >Password</label
          >
          <input
            bind:value={password}
            name="password"
            type="password"
            class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
          />
        </div>

        <button
          class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
          on:click|preventDefault={login}>Log in</button
        >
      </div>

      <div class="flex items-center justify-center bg-gray-100 p-4">
        <p class="text-center text-sm text-gray-500">
          Don't have an account? <a
            href="signup"
            class="text-primary transition duration-100 hover:text-indigo-600 active:text-indigo-700"
            >Register</a
          >
        </p>
      </div>
    </form>
  </div>
</div>
