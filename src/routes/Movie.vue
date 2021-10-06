<template>
  <div 
    v-if="!$store.state.movie.isInitialize"
    class="movie-search-title">
    🔍 검색어를 입력해주세요 🔍
  </div>
  <div v-if="$store.state.movie.isInitialize">
    <div class="movie-search-title">
      <span class="movie-title">"{{ $store.state.movie.movieTitle }}"</span>&nbsp;  에 대한 검색 결과 
    </div>
    <div class="movie-search-total-results">
      <span class="movie-total-results">{{ movies.totalResults }}</span>&nbsp;개의 영화가 검색되었습니다.
    </div>
    <div class="movie-search-result">
      <ul v-if="$store.state.movie.isLoading">
        <SkeletonBox 
          v-for="index in 10"
          :key="index" />
      </ul>
      <ul v-if="!$store.state.movie.isLoading">
        <MovieItem
          v-for="movie in movies.Search"
          :key="movie.imdbID"
          :movie="movie" />
      </ul>
    </div>
    <PageButton />
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'
import SkeletonBox from '~/components/SkeletonBox'
import PageButton from '~/components/PageButton'

export default {
  components: {
    MovieItem,
    SkeletonBox,
    PageButton
  },
  computed: {
    movies() {
      return this.$store.state.movie.movies
    },
  },
  created() {
    // this.$store.dispatch('movie/searchMovies')
  }
}
</script>

<style lang="scss" scoped>
.movie-search-title {
  display: flex;
  justify-content: center;
  padding-top: 50px;
  font-size: 30px;
  .movie-title {
    font-weight: 600;
  }
}
.movie-search-total-results {
    margin: 40px 0 0 200px;
  .movie-total-results {
    font-weight: 600;
  }
}
.movie-search-result {
  margin-top: 20px;
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    overflow: auto;
  }
}
</style>