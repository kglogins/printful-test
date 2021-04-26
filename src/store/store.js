import { createStore, createLogger } from 'vuex'

const store = createStore({
    state: {
        name: '',
        quizId: null,
        answers: []
    },
    mutations: {
        registerUser(state, data) {
            state.name = data.name
            state.quizId = data.id
        },
    },
    plugins: process.env.NODE_ENV !== 'production'
        ? [createLogger()]
        : []
})

export default store;