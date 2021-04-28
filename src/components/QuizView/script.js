import { mapState } from "vuex"
import ProgressBar from "../ProgressBar/ProgressBar"
import Loading from "../Loading/Loading"

export default {
    name: "QuizView",
    components: {
        Loading,
        ProgressBar
    },
    data: () => ({
        isLoading: true,
        questions: [],
        answers: [],
        currentQuestion: 0,
        submittedAnswers: [],
        selectedAnswer: null,
        error: false
    }),
    computed: {
        ...mapState(["name", "quizId"])
    },
    async created() {
        const questionsResponse = await this.$http.questions.getAll(this.quizId)

        if (questionsResponse.status === 200) {
            this.questions = questionsResponse.data
        }

        await this.getNextQuestionData()
    },
    methods: {
        submitAnswer() {
            if (this.selectedAnswer === null) {
                this.error = true
                return
            }

            this.isLoading = true
            this.submittedAnswers.push(this.selectedAnswer)
            if (this.currentQuestion + 1 == this.questions.length) {
                this.$store.commit("submitAnswers", this.submittedAnswers)
                this.$router.push({ name: "results" })
                return
            }

            this.currentQuestion++
            this.getNextQuestionData()
        },

        async getNextQuestionData() {
            const answersResponse = await this.$http.answers.getAll(this.quizId, this.questions[this.currentQuestion].id)

            if (answersResponse.status === 200) {
                this.answers = answersResponse.data
            }

            this.selectedAnswer = null
            this.isLoading = false
        },

        selectAnswer(id) {
            this.selectedAnswer = id
            this.error = false
        }
    },


}