import {createRouter, createWebHistory} from 'vue-router'
import Movie from './Movie'
import MovieDetail from './MovieDetail'
import NotFound from './NotFound'

export default createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({top: 0}),
    routes: [
        {
            path: '/',
            component: Movie,
        }, 
        {
            path: '/movies/:id',
            name: 'MovieDetail',
            component: MovieDetail
        },
        {
            path: '/:notFound(.*)',
             component: NotFound
        }
    ]
})