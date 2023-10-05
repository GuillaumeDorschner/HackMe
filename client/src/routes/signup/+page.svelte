<script>
    import { onMount } from "svelte";
    import "../../app.css"
    import { fade, fly } from 'svelte/transition';

    let step = 1

    onMount(() => {
        function next(){
            step = 2
        }
        
        function prev(){
            step = 1
        }
        
        function login(){
            console.log("login")
        }
    })

</script>


<div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Sign Up</h2>
  
      <form class="mx-auto max-w-lg rounded-lg border">
        <div class="flex flex-col gap-4 p-4 md:p-8">

            {#if step == 1}

            <div in:fly={{ x: 20, duration: 800 }} out:fade={{ duration: 800 }}>

                <div>
                    <label for="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                <input name="email" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
        
                <div>
                    <label for="username" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">UserName</label>
                    <input name="username" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
        
                <div>
                    <label for="firstname" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">First name</label>
                    <input name="firstname" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
        
                <div>
                    <label for="lastname" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Last name</label>
                    <input name="lastname" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>
        
                <div>
                    <label for="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Email</label>
                    <input name="email" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>
                    
                    <div>
                        <label for="password" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Password</label>
                        <input name="password" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>
                    
                    <div>
                        <label for="password" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Re-Password</label>
                        <input name="password" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                    </div>
                
                </div>
                <button in:fly={{ x: 20, duration: 800 }} out:fade={{ duration: 800 }} class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base" on:click={()=>{step = 2}}>Next</button>
            {:else}
            <div in:fly={{ x: 20, duration: 800, delay: 805 }} out:fade={{ duration: 800 }}>

                <button on:click={prev} class="text-blue-500 hover:text-blue-700 inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    back
                </button>
                
                
                <div>
                    <label for="picture" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Picture Profile</label>
                    <input name="picture" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
            </div>
            
        </div>
        <button in:fly={{ x: 20, duration: 800, delay: 805 }} out:fade={{ duration: 800 }} class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base" on:click={login()}>Log in</button>
            {/if}

            
            
          
  
        </div>
  
        <div class="flex items-center justify-center bg-gray-100 p-4">
          <p class="text-center text-sm text-gray-500">Already have an account? <a href="login" class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Login</a></p>
        </div>
      </form>
    </div>
  </div>