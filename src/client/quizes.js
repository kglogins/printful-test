import API from "./http"

export default {
    /**
     * Retrives all quizzes
     */
    getAll() {
        return API.get("?action=quizzes")
    }
}