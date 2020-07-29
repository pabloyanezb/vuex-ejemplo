import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1, title: 'Blade Runner', genre: 'Sci-fi' },
      { id: 2, title: 'Léon: The Professional', genre: 'Drama' },
      { id: 3, title: 'Alien', genre: 'Sci-fi' },
      { id: 4, title: 'Ex Machina', genre: 'Sci-fi' },
      { id: 5, title: 'Annihilation', genre: 'Sci-fi' },
      { id: 6, title: 'Marriage Story', genre: 'Drama' },
      { id: 7, title: 'Good Will Hunting', genre: 'Drama' },
      { id: 8, title: 'American History X', genre: 'Drama' },
    ]
  },
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
