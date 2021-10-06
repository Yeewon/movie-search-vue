<template>
  <section class="movie-detail-section">
    <img 
      class="movie-detail-poster"
      :src="`${Poster}`" />
    <div class="movie-detail">
      <div class="title">
        {{ Title }}
      </div>
      <div class="director">
        <span>감독</span> {{ Director }}
      </div>
      <div class="genre">
        <span>장르</span> {{ Genre }} 
      </div>
      <div class="released">
        <span>개봉일</span> {{ Released }}
      </div>
      <div class="actors">
        <span>출연진</span> {{ Actors }}
      </div>
      <div class="plot">
        <span>줄거리</span><br /> {{ Plot }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            Title: '',
            Poster: '',
            Director: '',
            Genre: '',
            Released: '',
            Actors: '',
            Plot: ''
        }
    },
    async created() {
        await this.$store.dispatch('movie/readMovieDetail', {
            id: this.$route.params.id
        })
        const allowProps = ['Title', 'Poster', 'Director', 'Genre', 'Released', 'Actors', 'Plot']
        allowProps.forEach(prop => {
          if(prop === 'Poster'){
            const higherPoster = this.$store.state.movie.detail.Poster.replace('SX300', 'SX700')
            this.$data.Poster = higherPoster
          }else {
            this.$data[prop] = this.$store.state.movie.detail[prop]
          }
        })
    }
}
</script>

<style lang="scss" scoped>
    .movie-detail-section {
        display: flex;
        justify-content: center;
        .movie-detail-poster {
            margin: 20px;
            width: 400px;
        }
        .movie-detail {
            margin: 20px;
            width: 500px;
            div {
                margin: 10px;
                span {
                    font-size: 15px;
                    font-weight: 700;
                }
            }
            .title {
                padding-bottom: 20px;
                font-size: 40px;
                font-weight: 700;
            }
        }
    }
</style>