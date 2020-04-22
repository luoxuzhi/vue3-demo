<template>
	<div class="home">
		<h1>This is an Home page</h1>
		<h1>Get count from vuex:{{ vuexGetters.count }}</h1>
	</div>
</template>

<script>
	import { computed, getCurrentInstance } from 'vue'
	export default {
		name: 'Home',
		setup() {
			const { ctx } = getCurrentInstance()
			const vuexGetters = computed(() => ctx.$store.getters)
			return {
				vuexGetters
			}
		}
	}
</script>
