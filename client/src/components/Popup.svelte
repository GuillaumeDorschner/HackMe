<script>
    /**
     * Popup component in Svelte
     * 
     * @component
     * Displays a popup message.
     * 
     * @prop {string} type - The type of the popup ('success', 'warning', 'error')
     * @prop {string} title - The title of the popup message
     * @prop {string} message - The detailed message in the popup
     */
    
    import "@fortawesome/fontawesome-free/css/all.min.css";

    export let type = 'success'; // default type is 'success'
    export let title = '';
    export let message = '';
  
    $: cssClasses = {
      'success': 'border-green-100 bg-green-50',
      'warning': 'border-yellow-500 bg-yellow-50',
      'error': 'border-red-500 bg-red-50'
    }[type];
  
    $: iconClasses = {
      'success': 'text-green-600',
      'warning': 'text-yellow-600',
      'error': 'text-red-600'
    }[type];
  </script>
  
  <div role="alert" class="my-4 p-2 rounded border-s-4 {cssClasses}">
    <div class="flex items-start gap-4">
      <div class="flex-1">
        <strong class="block font-medium text-gray-900">{title}</strong>
        <p class="mt-1 text-sm text-gray-700">
            {#if type === 'success'}
                <i class="fa-regular fa-circle-check text-green-600"></i>
            {/if}
            {#if type === 'warning'}
                <i class="fa-solid fa-exclamation"></i>
            {/if}
            {#if type === 'error'}
                <i class="fa-solid fa-triangle-exclamation"></i>
            {/if}
            {message}
        </p>
      </div>
    </div>
  </div>
  