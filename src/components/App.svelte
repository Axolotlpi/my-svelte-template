<script>
	export let name;
	import Router from '../routes.svelte';
	import { link } from 'svelte-routing'; //https://github.com/EmilTholin/svelte-routing for info on routing
	
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<a href="/" use:link>Go Home</a>
	<a href="page" use:link>Go to second page</a>
	<Router/>
</main>

<style>
h1 {
	color: yellow;
}
</style>