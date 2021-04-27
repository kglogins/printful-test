import { createWebHistory, createRouter } from "vue-router"

import HomepageView from '../components/HomepageView/HomepageView'
import QuizView from '../components/QuizView/QuizView'
import ResultsView from '../components/ResultsView/ResultsView'
import NotFoundView from '../components/NotFoundView/NotFoundView'

import store from '../store/store'

const checkIfRegistered = (to, from, next) => {

    // if (from.name === null && to.name !== 'Homepage') {
    //     next({ name: 'Homepage' })
    // } else {
    //     next()
    // }
    if (store.name === undefined || store.quizId === undefined) {
        console.log(store.name, store.quizId)
        next({ name: "home" })
    } else {
        next()
    }

}

const routes = [
    {
        path: "/",
        name: "home",
        component: HomepageView,
    },
    {
        path: "/quiz",
        name: "quiz",
        component: QuizView,
        beforeEnter: checkIfRegistered,
    },
    {
        path: "/results",
        name: "results",
        component: ResultsView,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFoundView,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router