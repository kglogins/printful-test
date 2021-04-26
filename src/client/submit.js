import API from "./http"

export default {
    /**
     * Submit all answers from the quiz
     * @param {int} quizId 
     * @param {array} answers 
     */
    submit(quizId, answers) {
        let url = `?action=submit&quizId=${quizId}`

        url = answers.map(answer => url + `&answers[]=${answer}`)

        return API.get(url)
    }
}