<script>
  import { user, posts } from "../../store/store.js";
  import { get } from "svelte/store";
  import { onMount } from "svelte";

  let backendUrl;

  onMount(async () => {
    backendUrl = `http://${window.location.hostname}:3001/`;
    await fetchPosts();
  });

  async function fetchPosts() {
    try {
      const response = await fetch(`${backendUrl}getPosts`);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();

      // Assuming each post object should have a comments array and likes count
      data.posts.forEach((post) => {
        post.comments = [];
        post.likes = 0;
      });
      posts.set(data.posts);  // Update the posts store with the array of posts
      console.log(data)
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
}

  let openedCommentsPostId = 0;
  let newComment = "";

  function addComment(postId) {
    const postsData = get(posts);
    const postIndex = postsData.findIndex((post) => post.id === postId);
    if (postIndex !== -1) {
      const updatedPost = { ...postsData[postIndex] };
      updatedPost.comments.push({
        commenter: `${get(user).firstName} ${get(user).lastName}`,
        comment: newComment,
      });
      postsData[postIndex] = updatedPost;
      posts.set(postsData);
      newComment = "";
    }
  }

  function addLike(postId) {
    const postsData = get(posts);
    const postIndex = postsData.findIndex((post) => post.id === postId);
    if (postIndex !== -1) {
      postsData[postIndex].likes += 1;
      posts.set(postsData);
    }
  }
</script>

<div>
  <header class="flex items-center justify-between p-4 border-b blur-effect">
    <div>
      <a href="/home" class="hidden text-2xl font-bold md:inline-block"
        >HackMe</a
      >
    </div>

    <div class="flex items-center">
      <span class="mx-2">{$user.firstName} {$user.lastName}</span>
      <img
        src={$user.avatar}
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

  <main class="p-4">
    <section class="m-8 w-full max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold mb-4">News Feed</h1>
  
      <ul>
        {#each $posts as post (post.id)}
          <li class="mb-4 p-4 rounded border">
            <h2 class="text-lg font-semibold">{post.author}</h2>
            <p class="text-gray-600">{@html post.content}</p>
            <button class="mt-2 text-blue-500" on:click={() => addLike(post.id)}>
              Like ({post.likes})
            </button>
            <button
              class="mt-2 ml-4 text-blue-500"
              on:click={() =>
                openedCommentsPostId =
                  openedCommentsPostId === post.id ? 0 : post.id
              }
            >
              Commentaires
            </button>
            {#if openedCommentsPostId === post.id}
              <ul class="mt-2">
                {#each post.comments as comment}
                  <li class="text-sm text-gray-500">
                    {comment.commenter}: {@html comment.comment}
                  </li>
                {/each}
              </ul>
              <input
                class="mt-2 p-2 rounded border"
                type="text"
                placeholder="Add a comment..."
                bind:value={newComment}
              />
              <button
                class="mt-2 ml-2 text-blue-500"
                on:click={() => addComment(post.id)}
              >
                Add
              </button>
            {/if}
          </li>
        {/each}
      </ul>
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
  .blur-effect {
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  background: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  }
</style>
