import { writable } from 'svelte/store';


const count = writable(0, () => {
	console.log('got a subscriber');
	return () => console.log('no more subscribers');
});


count.set(1);


const unsubscribe = count.subscribe((value) => {
	console.log(value);
});

unsubscribe();