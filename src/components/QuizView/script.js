import { mapState } from "vuex"

export default {
    name: 'QuizView',
    data: () => {
        return {
            questions: [],
            answers: [],
            currentQuestion: 0,
            submittedAnswers: [],
            isLoading: true
        }
    },
    computed: {
        ...mapState(['name', 'quizId'])
    },
    async created() {
        await this.getNextQuestionData()
    },
    methods: {
        submitAnswer(id) {
            this.submittedAnswers.push(id)
            if (this.currentQuestion + 1 == this.questions.length()) {
                console.log("ran out of questions")
            } else {
                this.currentQuestion++
            }
            this.getNextQuestionData()
        },

        async getNextQuestionData() {
            const questionsResponse = await this.$http.questions.getAll(this.quizId)

            if (questionsResponse.status === 200) {
                this.questions = questionsResponse.data
            }

            const answersResponse = await this.$http.answers.getAll(this.quizId, this.questions[this.currentQuestion].id)

            if (answersResponse.status === 200) {
                this.answers = answersResponse.data
            }

            console.log(answersResponse)
            this.isLoading = false
        }
    },


}