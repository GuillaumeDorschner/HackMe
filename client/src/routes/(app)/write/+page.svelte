<script>
  import { onMount } from "svelte";
  import "../../app.css";

	let Post = {
    Title : "",
    Content : ""
  }
  let backendUrl;

  onMount(() => {
    backendUrl = window.location.hostname;
  });

	function Upload() {
		console.log(Text)
    try{
      fetch(`http://${backendUrl}:3001/write`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title:Post.Title,content:Post.Content})
    });
    }
    catch(err){
      console.log(err)
    }
    
    Reset()
	}
  function Reset(){
    Post.Title = ""
    Post.Content = ""
  }
  
</script>

<header class="flex items-center justify-between p-4 border-b blur-effect s-A-bC3Hke5zSn"><div class="s-A-bC3Hke5zSn"><a href="/home" class="hidden text-2xl font-bold md:inline-block s-A-bC3Hke5zSn" data-svelte-h="svelte-492zcl">HackMe</a></div> <div class="flex items-center s-A-bC3Hke5zSn"><span class="mx-2 s-A-bC3Hke5zSn"> </span> <img loading="lazy" alt="User avatar" class="mx-2 w-10 h-10 rounded-full s-A-bC3Hke5zSn"> <div class="ml-4 flex s-A-bC3Hke5zSn"><a class="px-4 py-2 rounded bg-primary text-white flex items-center s-A-bC3Hke5zSn" href="/settings"><img src="/settings-gear.svg" alt="Settings" class="w-6 h-6 s-A-bC3Hke5zSn"></a> <a class="ml-2 px-4 py-2 rounded bg-primary text-white s-A-bC3Hke5zSn" href="/write" data-svelte-h="svelte-lcqgn8">Write a Blog</a></div></div></header>
<label for="story" class="text-3xl font-bold ml-4 s-A-bC3Hke5zSn">Writing section:</label>
<p class="text-lg font-semibold ml-4 s-A-bC3Hke5zSn">Enter the title of your post</p>
<textarea bind:value={Post.Title}  id="Title" name="Title" rows="1" cols="20" class="mt-2 p-2 rounded border ml-4 s-A-bC3Hke5zSn"></textarea>

<p class="text-lg font-semibold ml-4 s-A-bC3Hke5zSn">create a post</p>
<textarea bind:value={Post.Content} id="story" name="story" rows="10" cols="70" class="mt-2 p-2 rounded border ml-4 s-A-bC3Hke5zSn"></textarea>

<button on:click={Upload} class="ml-2 px-4 py-2 rounded bg-primary text-white s-A-bC3Hke5zSn"> Upload </button>
