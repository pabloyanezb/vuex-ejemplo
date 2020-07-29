<template>
  <div id="app">
    <h1>Lista de Films</h1>
    <MovieList genre="Drama"></MovieList>
    <MovieList genre="Sci-fi"></MovieList>
  </div>
</template>

<script>
import MovieList from './components/MovieList.vue'

export default {
  name: 'App',
  components: {
    MovieList
  }
}
</script>

<style>
#app {
  display: grid;
  place-items: center;
  text-align: center;
  color: #2c3e50;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
