import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import VueFetch, {$fetch} from './plugins/fetch'
import store from './store/index'
import App from './App'
import * as filters from './filters'

for (const key in filters) {
  Vue.filter(key, filters[key])
}

Vue.use(VueFetch, {
  baseUrl: 'http://localhost:3000/'
})

function main () {
  new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
  })
}

main()

