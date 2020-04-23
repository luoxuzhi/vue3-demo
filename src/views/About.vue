<template>
	<div class="about">
		<h1 ref="DOMRef">This is an about page</h1>
		<h1 @click="plusCount">innerCount:{{ innerCount }}</h1>
		<h1>reactive num:{{ num }}</h1>
		<h1>vuex count:{{ vuexCount }}</h1>
		<h1>msg from parent:{{ msg }}</h1>
	</div>
</template>
<script>
	import { ref, getCurrentInstance, computed, onMounted, reactive, toRefs, watch } from 'vue'
	export default {
		props: {
			msg: [String, Number]
		},
		setup(props) {
			const innerCount = ref(0)
			const { ctx } = getCurrentInstance()

			const DOMRef = ref(null)

			const state = reactive({
				num: 0
			})

			const plusCount = () => {
				innerCount.value++
				state.num++
				// dispatch innerCount.value或者innerCount都可以，why？
				// ctx.$store.dispatch('setCount', innerCount.value)
				ctx.$store.dispatch('setCount', innerCount)
			}

			const vuexCount = computed(() => ctx.$store.getters.count)

			// 经过ref/computed返回的值都是包装过的，在js中取出来的时候要通过.value
			onMounted(() => {
				// console.log('ctx.$store :>> ', ctx.$store)
				// console.log('ctx :>> ', ctx)
				console.log('innerCount :>> ', innerCount)
				console.log('vuexCount :>> ', vuexCount)
				console.log('state :>> ', state)
				console.log('ctx.$refs.DOMRef :>> ', ctx.$refs.DOMRef)
				// ctx.$refs.DOMRef.style.color = 'red'
				innerCount.value = vuexCount.value
			})

			// watch()
			// () => innerCount.value,
			// (newVal) => {
			// 	console.log('newVal :>> ', newVal)
			// }

			watch(
				() => props.msg,
				(newMsg) => console.log('newMsg', newMsg)
			)

			return {
				...toRefs(state),
				vuexCount,
				innerCount,
				plusCount,
				DOMRef
			}
		}
	}
</script>
