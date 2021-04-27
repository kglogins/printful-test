<template>
  <div v-if="isLoading"><Loading /></div>
  <div v-else class="text-center">
    <div class="font-bold text-3xl">Thanks, {{ name }}!</div>
    <div class="mt-6">
      You responded correctly to {{ results.correct }} out of
      {{ results.total }} questions.
    </div>
  </div>
</template>

<script src="./script.js"></script>