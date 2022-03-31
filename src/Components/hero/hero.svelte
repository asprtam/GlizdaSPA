<script>
    import Randomtext from '../../Elements/randomtext/randomtext.svelte';
</script>
<style>
    section {
		position: absolute;
		width: 100vw;
		height: 100vh;
		top: 0;
        background: #000;
	}
    h1 {
        font-family: Unifraktur;
        color: #62C3D9;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        z-index: 2;
        font-size: 10vw;
    }
</style>
<section>
    <h1>Glizda spa</h1>
    <Randomtext></Randomtext>
</section>