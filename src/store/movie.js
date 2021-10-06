// import router from '~/routes'
export default{
    namespaced: true,
    state() {
        return {
            movieTitle: '',
            apiKey: '7035c60c', 
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
            const {apiKey, page} = this.state.movie
            const movies = await fetch(`https://www.omdbapi.com?apikey=${apiKey}&s=${this.state.movie.movieTitle}&page=${page}`, {
                method: 'GET',
            }).then(res => res.json())
            commit('assignState', {
                movies,
                isLoading: false
            })
        },
        async readMovieDetail({commit}, payload ={}){
            const {id} = payload
            const detail = await fetch(`https://www.omdbapi.com?apikey=${this.state.movie.apiKey}&i=${id}&plot=full`, {
                method: 'GET',
            }).then(res => res.json())
            commit('assignState', {
                detail
            })
        }
    }
}

