<template>
  <div class="page-btn">
    <div class="btn movie-search-prev">
      <button
        v-if="$store.state.movie.page > 1"
        class="search-btn"
        type="button"
        @click="searchPrevMovies">
        이전페이지
      </button>
    </div>
    <span>{{ movie.page }}</span>
    <div class="btn movie-search-more">
      <button
        v-if="Math.ceil(parseInt(movie.movies.totalResults) / 10) > parseInt(movie.page)"
        class="search-btn"
        type="button"
        @click="searchMoreMovies">
        다음페이지
      </button>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        movie() {
            return this.$store.state.movie
        }
    },
    methods: {
        async searchPrevMovies() {
            this.$store.commit('movie/decreasePage')
            await this.$store.dispatch('movie/searchMovies')
        },
        async searchMoreMovies() {
            this.$store.commit('movie/increasePage')
            await this.$store.dispatch('movie/searchMovies')
        }
    }
}
</script>

<style lang="scss" scoped>
.page-btn {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    span {
      margin-top: 9px;
      width: 20px;
      text-align: center;
      font-weight: 600;
    }
    .btn {
      display: flex;
      justify-content: center;
      position: relative;
      width: 100px;
      .search-btn {
          display: block;
          width: 90%;
          margin: 0;
          padding: 0;
          height: 40px;
          border: 0;
          background-color: transparent;
          color: #666;
          cursor: pointer;
          border-radius: 6px;
          &:hover {
              background-color: #666;
              color: white;
          }
      }
}   
}
</style>