import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    movies: [
      { id: 1,title: 'Blade Runner', genre: 'Sci-fi', score: 0 },
      { id: 2, title: 'Requiem for a Dream', genre: 'Drama', score: 0 },
      { id: 3, title: 'Alien', genre: 'Sci-fi', score: 0 },
      { id: 4, title: 'Ex Machina', genre: 'Sci-fi', score: 0 },
      { id: 5, title: 'Annihilation', genre: 'Sci-fi', score: 0 },
      { id: 6, title: 'Good Will Hunting', genre: 'Drama', score: 0 },
      { id: 7, title: 'American History X', genre: 'Drama', score: 0 },
      { id: 8, title: 'Marriage Story', genre: 'Drama', score: 0 },
      { id: 9, title: '2001: A Space Odyssey', genre: 'Sci-fi', score: 0 },
      { id: 10, title: 'Taxi Driver', genre: 'Drama', score: 0 },
      { id: 11, title: 'Léon: The Professional', genre: 'Drama', score: 0 },
      { id: 12, title: '12 Monkeys', genre: 'Sci-fi', score: 0 },
    ]
  },
  // Procesar los datos antes de usarlos
  getters: {
    getMoviesByGenre() {
      return function(genre) {
        // Películas por género
        let moviesByGenre = store.state.movies.filter(movie => movie.genre == genre);
        // Las ordenamos por su id
        moviesByGenre.sort((movie1, movie2) => movie1.id - movie2.id);
        return moviesByGenre;
      }
    }
  },
  // Modificar el estado de nuestro Store
  mutations: {
    addMovieScore(state, idMovie) {
      // 1. Nos traemos la película
      const movieEncontrada = state.movies.find(movie => movie.id == idMovie);

      // 2.Modificar la pelicula encontrada (forma mutada)
      // movieEncontrada.score = movieEncontrada.score + 1;
      
      // 3. Forma Inmutada
      const movieActualizada = {
        ...movieEncontrada,
        score: movieEncontrada.score + 1
      }
      state.movies = [
        ...state.movies.filter(movie => movie.id != idMovie),
        movieActualizada
      ]
    },
    substractMovieScore(state, idMovie) {
      // 1. Nos traemos la película
      const movieEncontrada = state.movies.find(movie => movie.id == idMovie);

      // 2.Modificar la pelicula encontrada (forma mutada)
      // movieEncontrada.score = movieEncontrada.score - 1;

      // 3. Forma Inmutada
      const movieActualizada = {
        ...movieEncontrada,
        score: movieEncontrada.score - 1
      }
      state.movies = [
        ...state.movies.filter(movie => movie.id != idMovie),
        movieActualizada
      ]
    }
  },
  // Hacer llamadas asíncronas (que no bloqueen) y después hacer una mutación
  // actions: {}
})

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
