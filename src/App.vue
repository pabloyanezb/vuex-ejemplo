<template>
  <v-app>
    <div class="app white--text">
      <MovieList genre="Sci-fi"></MovieList>
      <MovieList genre="Drama"></MovieList>
    </div>
  </v-app>
</template>

<script>
import MovieList from './components/MovieList';

export default {
  name: 'App',

  components: {
    MovieList,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.app {
  padding-top: 2rem;
  background-color: rgb(12, 12, 12);
}
.theme--light.v-icon {
    color: #e0e0e0;
}
.theme--light.v-icon.v-icon.v-icon--disabled {
    color: #e0e0e032 !important;
}
</style>
