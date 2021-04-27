import { mapState } from 'vuex'

export default {
    name: 'ResultView',
    data: () => ({
        isLoading: true,
        results: null
    }),
    computed: {
        ...mapState(['name', 'quizId', 'answers'])
    },
    async created() {
        const resultResponse = await this.$http.submit.submit(this.quizId, this.answers)

        if (resultResponse.status == 200) {
            this.results = resultResponse.data
            this.isLoading = false
        }
    }
}