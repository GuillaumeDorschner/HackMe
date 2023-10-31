<script>
  import { onMount } from "svelte";
  import { user } from "../../../store/store.js";

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

  let showAlert = false;
  let validationError = "";

  let userForm = $user;
  let file;

  function updateUser(newData) {
    user.update((u) => {
      return { ...u, ...newData };
    });
  }

  function handleFileChange(event) {
    file = event.target.files[0];
  }

  async function saveChanges() {
    try {
      // First, send JSON data
      const response = await fetch(`${backendUrl}updateUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userForm),
      });

      if (!response.ok) {
        throw new Error("Failed to save changes");
      }

      // Then, send the image as FormData if it exists
      if (file) {
        const formData = new FormData();
        formData.append("avatar", file, file.name);

        const imgResponse = await fetch(`${backendUrl}updateUserAvatar`, {
          method: "POST",
          body: formData,
        });

        if (!imgResponse.ok) {
          throw new Error("Failed to upload image");
        }
      }

      console.log("Changes and image upload successful:", userForm);
      updateUser(userForm);
    } catch (err) {
      console.error(err);
      showAlert = true;
      validationError = err.message || "Something went wrong";
    }
  }
</script>

<main class="p-4 mt-16">

  <section class="m-8 w-full max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Settings</h1>

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
        <label for="avatar" class="block text-sm font-medium text-gray-600">
          Profile Picture
        </label>
        <input
          id="avatar"
          type="file"
          accept="image/*"
          on:change={handleFileChange}
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