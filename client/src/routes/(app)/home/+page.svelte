<script>
  import { user, posts } from "../../../store/store.js";
  import { get } from "svelte/store";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  let backendUrl;
  let loading = true;

  onMount(async () => {
    backendUrl = `http://${window.location.hostname}:3001/`;
    await fetchPosts();
  });

  async function fetchPosts() {
    loading = true;
    try {
      const response = await fetch(`${backendUrl}getPosts`,
      {
        method: "GET",
        credentials: "include",
      });
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      posts.set(data.posts);
      loading = false;
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }

  let openedCommentsPostId = 0;
  let newComment = "";

  async function addComment(postId) {
    try{

      console.log(postId, newComment);

      const response = await fetch(`${backendUrl}addComment`, {
      method: "POST",
      credentials: "include",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({ "post_id": postId, "content": newComment }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      console.log(data);
    }
    catch (error) {
      console.error(
      "There has been a problem with your comment",
      error
      );
    }
  }

  // function addComment(postId) {
  //   const postsData = get(posts);
  //   const postIndex = postsData.findIndex((post) => post.id === postId);
  //   if (postIndex !== -1) {
  //     const updatedPost = { ...postsData[postIndex] };
  //     updatedPost.comments.push({
  //       commenter: `${get(user).firstname} ${get(user).lastname}`,
  //       comment: newComment,
  //     });
  //     postsData[postIndex] = updatedPost;
  //     posts.set(postsData);
  //     newComment = "";
  //   }
  // }

  function addLike(postId) {
    fetch(`${backendUrl}likePost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postId }),
    })
      .then(() => {
        const postsData = get(posts);
        const postIndex = postsData.findIndex((post) => post.id === postId);
        if (postIndex !== -1) {
          postsData[postIndex].likes += 1;
          posts.set(postsData);
        }
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }
</script>

<main class="p-4 mt-16">
  <section class="m-8 w-full max-w-2xl mx-auto">
    <div class="flex justify-between mb-6">
      <h1 class="text-3xl font-bold">News Feed</h1>
      <a class="px-4 py-2 rounded bg-primary text-white" href="/write">Write a Blog</a>
    </div>
    
    {#if loading}
      <div class="text-center py-4">
          Loading...
      </div>
    {:else}
      <ul>
        {#each $posts as post (post.post_id)}
          <li class="mb-4 p-4 rounded border">
            <div class="flex items-center mb-2">
              <img
                src={backendUrl + "avatar/" + post.avatar}
                alt="Author avatar"
                class="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h2 class="text-lg font-semibold">{post.title}</h2>
                <span class="text-sm text-gray-400"
                  >by {post.first_name} {post.last_name}</span
                >
              </div>
            </div>
            <p class="text-gray-600">{@html post.content}</p>
            <button class="mt-2 text-blue-500" on:click={() => addLike(post.post_id)}>
              Like ({post.like_count})
            </button>
            <button
              class="mt-2 ml-4 text-blue-500"
              on:click={() =>
                (openedCommentsPostId =
                  openedCommentsPostId === post.post_id ? 0 : post.post_id)}
            >
              Commentaires
            </button>
            {#if openedCommentsPostId === post.post_id}
              <ul class="mt-2">
                {#each post.comments as comment}
                  <li class="text-sm text-gray-500">
                    {comment.first_name} {comment.last_name}: {@html comment.content}
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
                on:click={() => addComment(post.post_id)}
              >
                Add
              </button>
            {/if}
          </li>
        {/each}
      </ul>
    {/if}
  </section>
</main>
