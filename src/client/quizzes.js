import API from "./http"

export default {
    /**
     * Retrives all quizzes
     */
    getAll() {
        return API.get("test-quiz.php?action=quizzes")
    }
}