<template>
  <div v-if="isLoading"><Loading /></div>
  <div v-else class="max-w-xl p-6 mx-auto text-center">
    <div class="font-bold text-3xl">Question {{ currentQuestion + 1 }}</div>
    <div class="font-medium text-lg pt-4">
      {{ questions[currentQuestion].title }}
    </div>
    <div class="my-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="answer in answers"
        :key="answer.id"
        class="p-6 rounded-md cursor-pointer"
        :class="[selectedAnswer == answer.id ? 'bg-gray-300' : 'bg-gray-200']"
        @click="selectAnswer(answer.id)"
      >
        {{ answer.title }}
      </div>
    </div>
    <ProgressBar
      :questions-total="questions.length"
      :questions-answered="currentQuestion"
      class="mt-4"
    />
    <div v-if="error" class="mt-4 font-medium">Please select an answer</div>
    <button
      @click="submitAnswer"
      class="inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md bg-gray-200 hover:bg-gray-300"
    >
      Next
    </button>
  </div>
</template>

<script src="./script.js"></script>