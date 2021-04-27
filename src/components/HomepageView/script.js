import {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";

export default {
    name: 'HomepageView',
    data() {
        return {
            quizzes: [],
            errors: [],
            name: null,
            selected: {
                id: null,
                title: null
            }
        }
    },
    components: {
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
        }
    },
    methods: {
        startQuiz: function () {
            if (!this.formIsValid()) {
                this.errors.push("Please provide your name")
                return;
            }

            this.$store.commit('registerUser', { name: this.name, id: this.selected.id })
        },

        formIsValid: function () {
            return this.name != null
        }
    }
};
