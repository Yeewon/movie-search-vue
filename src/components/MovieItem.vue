<template>
  <li class="movie-item">
    <img
      class="movie-poster"
      :src="`${movie.Poster}`" 
      @click="$router.push({
        name: 'MovieDetail',
        params: {
          id: movie.imdbID
        }
      })" />
    <div class="movie-title">
      {{ movie.Title }}  
    </div>
    <div class="movie-year">
      {{ movie.Year }}
    </div>
    <div class="buttons"></div>
  </li>    
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.movie-item {   
  width: 230px;
  height: 450px;
  margin: 0 0 0 60px;
  .movie-poster {
    width: 230px;
    height: 331px;
    cursor: pointer;
    &:hover{
      opacity: .8;
    }
  }
  .movie-title {
    overflow: hidden;
    display: block;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 2px 0 0 1px;
    font-size: 1.3333em;
    font-weight: 600;
  }
}
</style>