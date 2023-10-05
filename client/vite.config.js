import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), "prettier-plugin-svelte",
		{
			name: 'startup-message',
			configResolved(config) {
				console.log('Frontend Server is starting on port:', config.server.port);
			}
		}
	],
	server: {
		port: process.env.PORT || 3000  // Utilisez le port de la variable d'environnement ou 3000 si la variable n'est pas définie
	  }
});
