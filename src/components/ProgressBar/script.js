export default {
    name: "ProgressBar",
    props: {
        questionsTotal: Number,
        questionsAnswered: Number
    },
    computed: {
        getWidth() {
            return this.questionsAnswered === 0 ? 0 : this.questionsAnswered / this.questionsTotal * 100;
        }
    }
}