<script>
  let user = {
    name: "Guillaume Dorschner",
    avatar: "https://",
  };

  let posts = [
    {
      id: 1,
      author: "John Doe",
      content: "This is my first post!",
    },
    {
      id: 2,
      author: "Jane Doe",
      content: "Hello, World!",
    },
    {
      id: 1,
      author: "John Doe",
      content: "This is my first post!",
    },
    {
      id: 2,
      author: "Jane Doe",
      content: "Hello, World!",
    },
    {
      id: 1,
      author: "John Doe",
      content: "This is my first post!",
    },
    {
      id: 2,
      author: "Jane Doe",
      content: "Hello, World!",
    },
    {
      id: 1,
      author: "John Doe",
      content: "This is my first post!",
    },
    {
      id: 2,
      author: "Jane Doe",
      content: "Hello, World!",
    },
    {
      id: 1,
      author: "John Doe",
      content: "This is my first post!",
    },
    {
      id: 2,
      author: "Jane Doe",
      content: "Hello, World!",
    },
    {
      id: 1,
      author: "John Doe",
      content: "This is my first post!",
    },
    {
      id: 2,
      author: "Jane Doe",
      content: "Hello, World!",
    },
    {
      id: 1,
      author: "John Doe",
      content: "This is my first post!",
    },
    {
      id: 2,
      author: "Jane Doe",
      content: "Hello, World!",
    },
    {
      id: 1,
      author: "John Doe",
      content: "This is my first post!",
    },
    {
      id: 2,
      author: "Jane Doe",
      content: "Hello, World!",
    },
    {
      id: 1,
      author: "John Doe",
      content: "This is my first post!",
    },
    {
      id: 2,
      author: "Jane Doe",
      content: "Hello, World!",
    },
    {
      id: 1,
      author: "John Doe",
      content: "This is my first post!",
    },
    {
      id: 2,
      author: "Jane Doe",
      content: "Hello, World!",
    },
    {
      id: 1,
      author: "John Doe",
      content: "This is my first post!",
    },
    {
      id: 2,
      author: "Jane Doe",
      content: "Hello, World!",
    },
  ];
</script>

<div>
  <header class="flex items-center justify-between p-4 border-b blur-effect">
    <div>
      <a href="/home" class="text-2xl font-bold">HackMe</a>
    </div>

    <div class="flex items-center">
      <span class="mx-2">{user.name}</span>
      <img
        src={user.avatar}
        alt="User avatar"
        class="mx-2 w-10 h-10 rounded-full"
      />
      <div class="ml-4 flex">
        <a class="px-4 py-2 rounded bg-primary text-white flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          />
        </a>
        <a class="ml-2 px-4 py-2 rounded bg-primary text-white">Write a Blog</a>
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
