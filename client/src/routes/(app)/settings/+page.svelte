<script>
  import { onMount } from "svelte";
  import { user } from "../../../store/store.js";
  import { goto } from "$app/navigation";

  let backendUrl;
  let showAlert = false;
  let validationError = "";
  let userForm;
  let file;

  $: userForm = $user;

  onMount(() => {
    backendUrl = `http://${window.location.hostname}:3001/`;
  });

  async function logout() {
    try {
      const response = await fetch(`${backendUrl}logout`, {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const responseData = await response.json();
      user.set({}); // Réinitialiser le store user
      goto("/login");
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }

  function handleFileChange(event) {
    file = event.target.files[0];
  }

  async function handleSaveChanges() {
    try {
      await saveUserData();
      if (file) await uploadAvatar();
      console.log("Changes and image upload successful:", userForm);
      updateUser(userForm);
    } catch (err) {
      console.error(err);
      showAlert = true;
      validationError = err.message || "Something went wrong";
    }
  }

  async function saveUserData() {
    const response = await fetch(`${backendUrl}updateUser`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userForm)
    });
    if (!response.ok) throw new Error("Failed to save changes");
  }

  async function uploadAvatar() {
    const formData = new FormData();
    formData.append("avatar", file, file.name);
    const imgResponse = await fetch(`${backendUrl}updateUserAvatar`, {
      method: "POST",
      credentials: "include",
      body: formData
    });
    if (!imgResponse.ok) throw new Error("Failed to upload image");
  }

  async function deleteUser() {
    const response = await fetch(`${backendUrl}user`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!response.ok) throw new Error("Failed to delete user");
    
    goto("/");
  }
</script>

<main class="p-4 mt-16">

  <section class="m-8 w-full max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Settings</h1>

    <form on:submit|preventDefault={handleSaveChanges}>
      <div class="mb-4">
        <label for="firstname" class="block text-sm font-medium text-gray-600"
          >First name</label
        >
        <input
          id="firstname"
          type="text"
          bind:value={userForm.first_name}
          class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary transition duration-100 focus:ring"
        />
      </div>

      <div class="mb-4">
        <label for="lastname" class="block text-sm font-medium text-gray-600"
          >Last name</label
        >
        <input
          id="lastname"
          type="text"
          bind:value={userForm.last_name}
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
          placeholder="********"
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

      {#if showAlert}
      <div
        role="alert"
        class="rounded border-s-4 border-red-500 bg-red-50 p-4 mb-4"
      >
        <strong class="block font-medium text-red-800">
          Something went wrong
        </strong>
        <p class="mt-2 text-sm text-red-700">
          {validationError}
        </p>
      </div>
    {/if}

      <div class="flex justify-between">
        <button type="submit" class="px-4 py-2 rounded bg-primary text-white"
          >Save Changes</button
        >

        <button
          type="button"
          class="px-4 py-2 rounded bg-violet-500	text-white"
          on:click={logout}>Logout</button>

        </div>

      <br>

      <h1 class="text-xl font-bold mb-4">Danger Zone</h1>
        <button
          type="button"
          class="px-4 py-2 rounded bg-red-500 text-white"
          on:click={deleteUser}>Delete Account</button>
    </form>
  </section>
</main>