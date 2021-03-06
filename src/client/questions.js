import API from './http'

export default {
    /**
     * Retrives all questions from specified quiz
     * @param {int} quizId
     */
    getAll(quizId) {
        return API.get(`test-quiz.php?action=questions&quizId=${quizId}`)
    }
}