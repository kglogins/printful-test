import { createStore, createLogger } from "vuex"

const store = createStore({
    state: {
        name: null,
        quizId: null,
        answers: []
    },
    mutations: {
        registerUser(state, data) {
            state.name = data.name
            state.quizId = data.id
        },
        submitAnswers(state, answers) {
            state.answers = answers
        }
    },
    getters: {
        name(state) {
            return state.name
        },
        quizId(state) {
            return state.quizId
        },
        answers(state) {
            return state.answers
        }
    },
    plugins: process.env.NODE_ENV !== "production"
        ? [createLogger()]
        : []
})

export default store;