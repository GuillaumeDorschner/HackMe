<script>
  import { onMount } from "svelte";
  import Popup from "../../../components/Popup.svelte";

  let post = {
    title : "",
    content : ""
  };
  let backendUrl;

  onMount(() => {
    backendUrl = `http://${window.location.hostname}:3001/`;
  });

  let popup = { show: false, type: '', title: '', message: '' };

  function showPopup(type, title, message) {
    popup = { show: true, type, title, message };
    setTimeout(() => popup.show = false, 5000);
  }

  async function Upload() {
    try {
      const response = await fetch(`${backendUrl}write`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({title: post.title, content: post.content})
      });
      
      if (!response.ok) {
        throw new Error('Failed to upload post');
      }

      showPopup('success', 'Success', 'Post uploaded successfully');
    } catch(err) {
      console.error(err);
      showPopup('error', 'Error', err.message || 'Failed to upload post');
    }

    Reset();
  }

  function Reset() {
    post.title = "";
    post.content = "";
  }
</script>

<main class="p-4 mt-16">
  <section class="m-8 w-full max-w-2xl mx-auto">
    <h1 class="text-3xl font-bold mb-4">Writing Section</h1>
    
    <form on:submit|preventDefault={Upload}>
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-600">Enter the title of your post</label>
        <textarea 
          id="title" 
          bind:value={post.title} 
          rows="1" 
          class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary transition duration-100 focus:ring"
        ></textarea>
      </div>

      <div class="mb-4">
        <label for="content" class="block text-sm font-medium text-gray-600">Create a post</label>
        <textarea 
          id="content" 
          bind:value={post.content} 
          rows="10" 
          class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-primary transition duration-100 focus:ring"
        ></textarea>
      </div>

      {#if popup.show}
        <Popup type={popup.type} title={popup.title} message={popup.message} />
      {/if}

      <div class="flex justify-end">
        <button type="submit" class="px-4 py-2 rounded bg-primary text-white">Upload</button>
      </div>
    </form>
  </section>
</main>
