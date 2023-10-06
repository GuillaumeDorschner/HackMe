<script>
  let user = {
    name: "Guillaume Dorschner",
    avatar:
      "https://www.zooplus.fr/magazine/wp-content/uploads/2019/06/comprendre-le-langage-des-chats.jpg",
  };

  let openedCommentsPostId = 0;
  let newComment = "";

  let posts = [
    {
      id: 1,
      author: "John Doe",
      content: "This is my first post!",
      timestamp: "2023-01-01T12:00:00",
      likes: 20,
      comments: [
        {
          commenter: "Jane Doe",
          comment: "Great post!",
        },
      ],
    },
    {
      id: 2,
      author: "Jane Doe",
      content: "Hello, World!",
      timestamp: "2023-01-02T12:00:00",
      likes: 35,
      comments: [
        {
          commenter: "John Doe",
          comment: "Hello to you too!",
        },
      ],
    },
    {
      id: 3,
      author: "Emily Davis",
      content: "Learning Svelte is fun!",
      timestamp: "2023-01-03T12:00:00",
      likes: 10,
      comments: [
        {
          commenter: "John Doe",
          comment: "I agree!",
        },
      ],
    },
    {
      id: 4,
      author: "Mark Green",
      content: "Happy New Year, everyone!",
      timestamp: "2023-01-01T00:00:00",
      likes: 50,
      comments: [
        {
          commenter: "Jane Doe",
          comment: "Happy New Year!",
        },
        {
          commenter: "Emily Davis",
          comment: "Wishing everyone a great year ahead!",
        },
      ],
    },
    {
      id: 5,
      author: "Sophia Lee",
      content: "Just got a new puppy!",
      timestamp: "2023-01-05T09:00:00",
      likes: 120,
      comments: [
        {
          commenter: "Jane Doe",
          comment: "So cute!",
        },
      ],
    },
    {
      id: 6,
      author: "Daniel Smith",
      content: "Anyone else love hiking?",
      timestamp: "2023-01-06T11:00:00",
      likes: 15,
      comments: [
        {
          commenter: "Emily Davis",
          comment: "Absolutely!",
        },
      ],
    },
  ];

  function addComment(postId) {
    const postIndex = posts.findIndex((post) => post.id === postId);
    if (postIndex !== -1) {
      const updatedPost = { ...posts[postIndex] };
      updatedPost.comments.push({
        commenter: user.name,
        comment: newComment,
      });
      posts[postIndex] = updatedPost;
      posts = [...posts];
      newComment = "";
    }
  }

  function addLike(postId) {
    const postIndex = posts.findIndex((post) => post.id === postId);
    if (postIndex !== -1) {
      posts[postIndex].likes += 1;
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
      <span class="mx-2">{user.name}</span>
      <img
        src={user.avatar}
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
        {#each posts as post (post.id)}
          <li class="mb-4 p-4 rounded border">
            <h2 class="text-lg font-semibold">{post.author}</h2>
            <p class="text-gray-600">{post.content}</p>
            <button
              class="mt-2 text-blue-500"
              on:click={() => addLike(post.id)}
            >
              Like ({post.likes})
            </button>
            <button
              class="mt-2 ml-4 text-blue-500"
              on:click={() =>
                (openedCommentsPostId =
                  openedCommentsPostId === post.id ? null : post.id)}
            >
              Commentaires
            </button>
            {#if openedCommentsPostId === post.id}
              <ul class="mt-2">
                {#each post.comments as comment}
                  <li class="text-sm text-gray-500">
                    {comment.commenter}: {comment.comment}
                  </li>
                {/each}
              </ul>
              <input
                class="mt-2 p-2 rounded border"
                type="text"
                placeholder="Ajoutez un commentaire..."
                bind:value={newComment}
              />
              <button
                class="mt-2 ml-2 text-blue-500"
                on:click={() => addComment(post.id)}
              >
                Ajouter
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
    margin-top: 60px; /* Height of the header */
  }
  .blur-effect {
    -webkit-backdrop-filter: blur(15px); /* ensures compatibility with Safari */
    backdrop-filter: blur(15px);
    background-color: rgba(255, 255, 255, 0.2);
  }
</style>
