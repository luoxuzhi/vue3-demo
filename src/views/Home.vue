<template>
	<div class="home">
		<h1>This is an Home page</h1>
		<h1>Get count from vuex:{{ vuexGetters.count }}</h1>
		<div @click="changeMsg">click change msg in home</div>
		<about :msg="msgInHome"></about>
	</div>
</template>

<script>
	import { computed, getCurrentInstance, ref } from 'vue'
	import About from './About'
	export default {
		name: 'Home',
		components: { About },
		setup() {
			const msgInHome = ref('abc')
			const { ctx } = getCurrentInstance()
			const vuexGetters = computed(() => ctx.$store.getters)
			const changeMsg = () => {
				msgInHome.value = Math.random()
			}

			return {
				vuexGetters,
				msgInHome,
				changeMsg
			}
		}
	}
</script>
