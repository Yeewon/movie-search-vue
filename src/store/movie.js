// import router from '~/routes'
export default{
    namespaced: true,
    state() {
        return {
            movieTitle: 'frozen',
            apiKey: '7035c60c', 
            page: '1',
            movies: []
        }
    },
    getters: {},
    mutations: {
        assignState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        }
    },
    actions: {
        async searchMovies({commit}, payload = {}) {
            const {movieTitle} = payload
            commit('assignState', {
                movieTitle
            })
            const {apiKey, page} = this.state.movie
            const movies = await fetch(`https://www.omdbapi.com?apikey=${apiKey}&s=${this.state.movie.movieTitle}&page=${page}`, {
                method: 'GET',
            }).then(res => res.json())
            console.log(movies)
            commit('assignState', {
                movies
            })
        }
    }
}

