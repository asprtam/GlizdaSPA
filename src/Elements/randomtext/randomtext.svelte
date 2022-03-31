<script>
    import { onMount } from 'svelte';
    let randomTxt;
	const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"]; 
	const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"]; 
	const allUniqueChars = [..."~!@#$%^&*()_+-=[]\{}|;:',./<>?"];
	const allNumbers = [..."0123456789"];

	const base = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha, ...allUniqueChars];

	const generator = (base, len) => {
	return [...Array(len)]
		.map(i => base[Math.random()*base.length|0])
		.join('');
	};
    onMount(() => {
        randomTxt.innerText += generator(base, 15000);
		setInterval(() => {
			randomTxt.innerText = generator(base, 15000);
		}, 100);
    });
</script>
<style>
    div {
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
	p {
		position: absolute;
		width: 150%;
		height: 110vw;
		left: -25%;
		text-align: justify;
		transition: all 0.5s ease-in-out;
		height: auto;
		bottom: -5vw;
        user-select: none;
        color:rgba(255,255,255,0.5);
        font-family: Consolas;
	}
</style>
<div>
    <p bind:this={randomTxt}></p>
</div>