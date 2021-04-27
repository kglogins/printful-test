import API from "./http"

export default {
    /**
     * Submit all answers from the quiz
     * @param {int} quizId 
     * @param {array} answers 
     */
    submit(quizId, answers) {
        let url = `test-quiz.php?action=submit&quizId=${quizId}`

        url = url + answers.map(answer => `&answers[]=${answer}`).join('')

        return API.get(url)
    }
}