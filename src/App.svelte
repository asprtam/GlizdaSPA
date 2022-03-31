<script>
	import { onMount } from 'svelte';
	import Page from './Scripts/page.js';
	import Hero from './Components/hero/hero.svelte';

	onMount(() => {
		const page = new Page();
		page.init();
		console.log(page.animatedElements);
	});
</script>

<style>
	h1 {
		font-family: Unifraktur;
	}
</style>
<Hero></Hero>