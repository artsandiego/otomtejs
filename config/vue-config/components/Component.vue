<template>
	<div class="oto-container">
		<img class="oto-logo" src="/assets/svg/oto.svg" alt="Otomte Brand">
		<h1>{{ message }}</h1>
	</div>
</template>

<script>
export default {
	name: "component",
	data() {
		return {
			message: "Hello, Vue!"
		};
	}
};
</script>