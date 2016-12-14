import Vue from 'Vue'
import * as getter from './getter'
import Counter from './Counter'

console.log(getter)
console.log(Counter)
new Vue({
	el: '#app',
	render: h => h(Counter)
})

