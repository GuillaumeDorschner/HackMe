<script>
  import { onMount } from "svelte";
  import { user } from "../../../store/store.js";
  import Popup from "../../../components/Popup.svelte";
  import { goto } from "$app/navigation";

  let backendUrl;
  let userForm = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };
  let file;

  $: {
    if (user !== undefined) {
      userForm = $user;
    }
  }
  
  onMount(() => {
    backendUrl = `http://${window.location.hostname}:3001/`;
  });

  let popup = { show: false, type: '', title: '', message: '' };

  function showPopup(type, title, message) {
    popup = { show: true, type, title, message };
    setTimeout(() => popup.show = false, 5000);
  }

  async function logout() {
    try {
      const response = await fetch(`${backendUrl}logout`, {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      user.set({});
      goto("/login");
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
    }
  }

  async function handleFileChange(event) {
    try {
      file = event.target.files[0];
      await uploadAvatar();
    } catch (err) {
      console.error(err);
    }
  }

  async function handleSaveChanges() {
    try {
      await updateUser();
      user.set(userForm);
      showPopup('success', 'Success', 'Profile updated successfully');
    } catch (err) {
      console.error(err);
      showPopup('error', 'Error', err.message || "Failed to save changes");
    }
  }

  async function updateUser() {
    const response = await fetch(`${backendUrl}updateUser`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userForm)
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to save changes");
    }
  }

  async function uploadAvatar() {
    try {
      const formData = new FormData();
      formData.append("avatar", file, file.name);
      const imgResponse = await fetch(`${backendUrl}updateUserAvatar`, {
        method: "POST",
        credentials: "include",
        body: formData
      });
      if (!imgResponse.ok) throw new Error("Failed to upload image");
      showPopup('success', 'Success', 'Avatar uploaded successfully');
    } catch (err) {
      console.error(err);
      showPopup('error', 'Error', 'Failed to upload avatar');
    }
  }

  async function deleteUser() {
    try {
      const response = await fetch(`${backendUrl}deleteUser`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!response.ok) throw new Error("Failed to delete user");
      goto("/");
      showPopup('success', 'Success', 'User deleted successfully');
    } catch (err) {
      console.error(err);
      showPopup('error', 'Error', 'Failed to delete user');
    }
  }
</script>

<main>
  {#if popup.show}
    <Popup type={popup.type} title={popup.title} message={popup.message} />
  {/if}
</main>


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

      {#if popup.show}
        <Popup type={popup.type} title={popup.title} message={popup.message} />
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