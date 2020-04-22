import { createStore } from 'vuex'

export default createStore({
	state: {
		count: 0
	},
	mutations: {
		updateCount(state, num) {
			state.count = num
		}
	},
	actions: {
		setCount({ commit }, num) {
			commit('updateCount', num)
		}
	},
	getters: {
		count: (state) => state.count
	},
	modules: {}
})
