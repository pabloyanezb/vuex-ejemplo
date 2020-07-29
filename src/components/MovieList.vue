<template>
  <div>
    <h3>{{ genre }}</h3>
    <ul>
      <li v-for="movie in Movies" :key="movie.id">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MovieList",
  props: {
    genre: String
  },
  computed: {
    Movies() {
      return this.$store.state.movies.filter(
        (movie) => movie.genre === this.genre
      );
    },
  },
};
</script>

<style></style>
