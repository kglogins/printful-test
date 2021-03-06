import API from "./http"

export default {
    /**
     * Retrive all possible answers for a question
     * @param {int} quizId 
     * @param {int} questionId 
     */
    getAll(quizId, questionId) {
        return API.get(`test-quiz.php?action=answers&quizId=${quizId}&questionId=${questionId}`)
    }
}