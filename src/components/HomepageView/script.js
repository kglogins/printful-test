import {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/vue"
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid"
import Loading from "../Loading/Loading"

export default {
    name: "HomepageView",
    data: () => ({
        isLoading: true,
        quizzes: [],
        errors: [],
        name: null,
        selected: {
            id: null,
            title: null
        }
    }),
    components: {
        Loading,
        Listbox,
        ListboxButton,
        ListboxLabel,
        ListboxOption,
        ListboxOptions,
        CheckIcon,
        SelectorIcon,
    },
    async created() {
        const getQuizzesResponse = await this.$http.quizzes.getAll()

        if (getQuizzesResponse.status == 200) {
            this.quizzes = getQuizzesResponse.data
            this.selected = this.quizzes[0]
            this.isLoading = false
        }
    },
    methods: {
        startQuiz() {
            if (!this.formIsValid()) {
                this.errors.push("Please provide your name")
                return;
            }

            this.$store.commit("registerUser", { name: this.name, id: this.selected.id })
            this.$router.push({ name: "quiz" })
        },

        formIsValid() {
            return this.name != null
        }
    }
};
