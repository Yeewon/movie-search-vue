<template>
  <div class="movie-search-result">
    <ul>
      <li 
        v-for="movie in movies"
        :key="movie.imdbID">
        <img
          class="movie-poster"
          :src="`${movie.Poster}`" />
        <div class="movie-title">
          {{ movie.Title }}
        </div>
        <div class="movie-rate">
          출시 년도 {{ movie.Year }}
        </div>
        <div class="buttons"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    movies() {
      return this.$store.state.movie.movies.Search
    }
  },
  created() {
    // this.$store.dispatch('movie/searchMovies')
  }
}
</script>

<style lang="scss" scoped>
.movie-search-result {
    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      overflow: auto;
      li {
        width: 230px;
        height: 450px;
        margin: 0 0 0 60px;
        .movie-poster {
          width: 230px;
          height: 331px;
        }
        .movie-title {
          overflow: hidden;
          display: block;
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding: 2px 0 0 1px;
          font-size: 1.3333em;
          font-weight: 400;
        }
      }
    }
}
</style>