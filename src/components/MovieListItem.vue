<template>
  <div>
    <v-btn class="ma-2" text icon color="blue lighten-2" @click="addMovieScore(movie.id)">
      <v-icon>mdi-thumb-up</v-icon>
    </v-btn>
    <h4>{{ movie.score }}</h4>
    <v-btn class="ma-2" text icon color="red lighten-2" @click="substractMovieScore(movie.id)">
      <v-icon>mdi-thumb-down</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "MovieListItem",
  props: {
    movie: {
      id: Number,
      score: Number,
      title: String,
      genre: String,
    },
  },
  methods: {
    ...mapMutations(["addMovieScore", "substractMovieScore"])
    // aumentarPtje(ev) {
    //   // truco para evitar que se recargue la página
    //   ev.preventDefault();
    //   // llamar a la mutación correspondiente
    //   this.$store.commit("addMovieScore", this.movie.id);
    // },
    // disminuirPtje(ev) {
    //   ev.preventDefault();
    //   this.$store.commit("substractMovieScore", this.movie.id);
    // },
  },
};
</script>

<style scoped>
.img {
  text-align: end;
}
h4 {
  display: inline;
}
</style>
