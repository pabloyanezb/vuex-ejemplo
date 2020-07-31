<template>
  <div>
    <h2>{{ genre }}</h2>
    <v-slide-group
        v-model="model"
        class="pa-4"
        :show-arrows="showArrows"
      >
        <v-slide-item v-for="movie in Movies" :key="movie.id">
          <v-card class="ma-4" height="250" width="400"> 
            <v-row class="fill-height grid-list-md" align="center" justify="center">
              <v-img
                class="white--text align-end fill-height img"
                :src="require(`../assets/${movie.id}.jpg`)"
              >
                <MovieListItem :movie="movie"></MovieListItem>
              </v-img>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
  </div>
</template>

<script>
import MovieListItem from './MovieListItem'

export default {
  components: { MovieListItem },
  name: "MovieList",
  props: {
    genre: String
  },
  computed: {
    Movies() {
     return this.$store.getters.getMoviesByGenre(this.genre);
    }
  },
  data() {
    return {
      model: null,
      showArrows: true,
      slideGroup: 0,
    } 
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
</style>
