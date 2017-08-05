import Vue from 'vue'
import app from '../src/App.vue'

describe("test app.vue", () => {
	it('aaaa', () => {
		let vm = new Vue(app).$mount()
		console.log("vm", vm.msg)
		expect(vm.msg).toEqual('Welcome to Your Vue.js App')
	})
})