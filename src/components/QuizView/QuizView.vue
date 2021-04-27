<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else class="max-w-xl p-6 mx-auto text-center">
    <div class="font-bold text-3xl">Question {{ currentQuestion + 1 }}</div>
    <div class="font-medium text-lg pt-4">
      {{ questions[currentQuestion].title }}
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="answer in answers" v-bind:key="answer.id" class="">
        {{ answer.title }}
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>