<script>
  import { onMount } from "svelte";
  import "../../app.css";
  import { fade, fly } from "svelte/transition";
  import { goto } from "$app/navigation";

  let step = 1;
  let avatar;
  let rePassword = "********";

  let validationError = "";
  let showAlert = false;

  let user = {
    firstName: "Guillaume",
    lastName: "Dorschner",
    email: "guillaume@example.com",
    password: "********",
  };

  async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function next() {
    if (validateFields()) {
      console.log("Going to next step...");
      step = 0;
      showAlert = false;
      await sleep(805);
      step = 2;
    }
  }

  async function prev() {
    console.log("Going to previous step...");
    step = 0;
    await sleep(805);
    step = 1;
  }

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  async function login() {
    if (validateFields()) {
      console.log("login request");

      const avatarBase64 = await getBase64(avatar);

      user.avatar = avatarBase64;

      try {
        const userJson = JSON.stringify(user);

        console.log("User data:", userJson);

        const response = await fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: userJson,
        });

        if (response.ok) {
          console.log("Login successful");
          showAlert = false;
          goto("/home");
        } else {
          const errorData = await response.json();
          console.log("Login failed:", errorData.error);
          showAlert = true;
          validationError = errorData.error || "Login failed";
        }
      } catch (error) {
        console.log("Login request failed:", error);
        showAlert = true;
        validationError = "Something went wrong. Please try again later.";
      }
    }
  }

  function handleFileChange(event) {
    avatar = event.target.files[0];
    console.log("File selected:", avatar);
  }

  function validateFields() {
    showAlert = false;

    if (step == 1) {
      if (
        !user.email ||
        !user.firstName ||
        !user.lastName ||
        !user.password ||
        !rePassword
      ) {
        validationError = "All fields must be filled out.";
        showAlert = true;
        return false;
      }

      if (user.password !== rePassword) {
        validationError = "Passwords must match.";
        showAlert = true;
        return false;
      }
    } else {
      if (!avatar) {
        validationError = "Please upload a photo.";
        showAlert = true;
        return false;
      }
    }

    return true;
  }
</script>

<div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <h2
      class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl"
    >
      Sign Up
    </h2>

    <form class="mx-auto max-w-lg rounded-lg border">
      <div class="flex flex-col gap-4 p-4 md:p-8">
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

        {#if step == 1}
          <div in:fly={{ x: 20, duration: 800 }} out:fade={{ duration: 800 }}>
            <div>
              <label
                for="email"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >Email</label
              >
              <input
                bind:value={user.email}
                name="email"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                for="firstname"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >First name</label
              >
              <input
                bind:value={user.firstName}
                name="firstname"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                for="lastname"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >Last name</label
              >
              <input
                bind:value={user.lastName}
                name="lastname"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                for="email"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >Email</label
              >
              <input
                bind:value={user.email}
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
                bind:value={user.password}
                name="password"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                for="re-password"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >Re-Password</label
              >
              <input
                bind:value={rePassword}
                name="re-password"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary transition duration-100 focus:ring"
              />
            </div>
          </div>
          <button
            in:fly={{ x: 20, duration: 800 }}
            out:fade={{ duration: 800 }}
            class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
            on:click|preventDefault={() => {
              next();
            }}>Next</button
          >
        {/if}

        {#if step == 2}
          <div in:fly={{ x: 20, duration: 800 }} out:fade={{ duration: 800 }}>
            <button
              on:click|preventDefault={prev}
              class="text-blue-500 hover:text-blue-700 inline-flex items-center"
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
            </button>

            <div class="file-upload-container">
              <label
                for="picture"
                class="file-label mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Profile Picture
              </label>
              <input
                id="picture"
                type="file"
                name="picture"
                accept="image/png, image/jpeg, image/jpg, image/heic"
                class="file-input w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary transition duration-100 focus:ring"
                on:change={handleFileChange}
              />
            </div>
          </div>
          <button
            in:fly={{ x: 20, duration: 800 }}
            out:fade={{ duration: 800 }}
            class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
            on:click|preventDefault={login}>Log in</button
          >
        {/if}
      </div>

      <div class="flex items-center justify-center bg-gray-100 p-4">
        <p class="text-center text-sm text-gray-500">
          Already have an account? <a
            href="login"
            class="text-primary transition duration-100 hover:text-primary active:text-tone"
            >Login</a
          >
        </p>
      </div>
    </form>
  </div>
</div>
