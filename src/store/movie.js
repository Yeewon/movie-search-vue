require('dotenv').config()
const {API_ENDPOINT, API_KEY} = process.env

export default{
    namespaced: true,
    state() {
        return {
            movieTitle: '',
            page: 1,
            movies: [],
            detail: {},
            isLoading: true,
            isInitialize: false
        }
    },
    getters: {},
    mutations: {
        assignState(state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
        increasePage(state) {
            state.page += 1
        },
        decreasePage(state) {
            state.page -= 1
        },
        reset(state) {
            state.page = 1
        }
    },
    actions: {
        async searchMovies({commit}, payload = {}) {
            let { movieTitle } = payload
            if( !movieTitle ) {
                movieTitle = this.state.movie.movieTitle
            }else if( movieTitle !== this.state.movie.movieTitle ){
                commit('reset')
            }
            commit('assignState', {
                movieTitle,
                isLoading: true,
                isInitialize: true
            })
            const {page} = this.state.movie
            const movies = await fetch(`${API_ENDPOINT}?apikey=${API_KEY}&s=${this.state.movie.movieTitle}&page=${page}`, {
                method: 'GET',
            }).then(res => res.json())
            commit('assignState', {
                movies,
                isLoading: false
            })
        },
        async readMovieDetail({commit}, payload ={}){
            const {id} = payload
            const detail = await fetch(`${API_ENDPOINT}?apikey=${API_KEY}&i=${id}&plot=full`, {
                method: 'GET',
            }).then(res => res.json())
            commit('assignState', {
                detail
            })
        }
    }
}

