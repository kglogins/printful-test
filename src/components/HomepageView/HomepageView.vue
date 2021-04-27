<template>
  <div v-if="isLoading"><Loading /></div>
  <div v-else class="text-center my-12">
    <div class="font-bold text-3xl">Technical task</div>
    <div class="mt-4">
      <input
        type="text"
        name="name"
        v-model="name"
        id="name"
        class="w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-default sm:text-sm"
        placeholder="Enter your name"
      />
    </div>
    <div class="mt-4 relative rounded-md shadow-sm">
      <Listbox as="div" v-model="selected">
        <div class="mt-1 relative">
          <ListboxButton
            class="relative w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-left cursor-default sm:text-sm"
          >
            <span class="flex items-center">
              <span class="block truncate">{{ selected.title }}</span>
            </span>
            <span
              class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition ease-in duration-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
              <ListboxOption
                as="template"
                v-for="quiz in quizzes"
                :key="quiz.id"
                :value="quiz"
                v-slot="{ active, selected }"
              >
                <li
                  :class="[
                    active ? 'text-white bg-gray-700' : 'text-gray-900',
                    'cursor-default select-none relative py-2 pl-3 pr-9',
                  ]"
                >
                  <div class="flex items-center">
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                    >
                      {{ quiz.title }}
                    </span>
                  </div>

                  <span
                    v-if="selected"
                    :class="[
                      active ? 'text-white' : 'text-gray-700',
                      'absolute inset-y-0 right-0 flex items-center pr-4',
                    ]"
                  >
                    <CheckIcon class="h-5 w-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>
    <div class="mt-4" v-if="errors.length">
      <b>Please corret the following:</b>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
    </div>
    <div class="mt-4">
      <button
        v-on:click="startQuiz()"
        class="inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md bg-gray-200 hover:bg-gray-300"
      >
        Start
      </button>
    </div>
  </div>
</template>

<script src="./script.js"></script>