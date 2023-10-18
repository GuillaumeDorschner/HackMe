<script>
  import { goto } from "$app/navigation";
  import { user } from "../../store/store.js";
  import { onMount } from "svelte";

  let email = "";
  let password = "";
  let showAlert = false;
  let validationError = "";
  let backendUrl;

  onMount(() => {
    backendUrl = `http://${window.location.hostname}:3001/`;
  });

  async function login() {
    validateFields();
    if (!validationError) {
      try {
        const response = await fetch(`${backendUrl}login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
          validationError = "Invalid login credentials";
          showAlert = true;
          return;
        }
        const data = await response.json();
        goto("/home");
      } catch (error) {
        console.error("Erreur lors de la connexion:", error);
        validationError = "An error occurred while trying to log in.";
        showAlert = true;
      }
    }
  }

  function validateFields() {
    validationError = "";
    if (!email || !password) {
      validationError = "All fields must be filled out.";
      showAlert = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationError = "Invalid email format.";
      showAlert = true;
    }else{
      showAlert = false;
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
            class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary transition duration-100 focus:ring"
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
            class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary transition duration-100 focus:ring"
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
            class="text-primary transition duration-100 hover:text-primary active:text-tone"
            >Register</a
          >
        </p>
      </div>
    </form>
  </div>
</div>
