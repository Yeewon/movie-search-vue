<template>
  <header>
    <form 
      class="movie-search"
      @submit.prevent="searchMovies">
      <input
        v-model="movieTitle"
        class="movie-search-input"
        type="text" 
        placeholder="영화명 검색" />
      <button 
        class="movie-search-submit">
        검색
      </button>
    </form>
  </header>
</template>

<script>
export default {
  data() {
    return {
      movieTitle: ''
    }
  },
  methods: {
    searchMovies() {
      this.$store.dispatch('movie/searchMovies',{
        movieTitle: this.movieTitle
      })
    }
  }
}
</script>

<style lang="scss" scoped>
header {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #bfbfbf;
    .movie-search {
      display: flex;
      .movie-search-input {
        width: 500px;
        padding-left: 7px;
        border: 1px solid lightgray;
        border-radius: 0.1rem;
    }
      .movie-search-submit {
        display: flex;
        justify-content: center;
        cursor: pointer;
        height: 35px;
        min-width: 60px;
        border: 1px solid lightgray;
        border-left: none;
        border-radius: 0.1rem;
        padding: 8px;
      }
    }
}
</style>