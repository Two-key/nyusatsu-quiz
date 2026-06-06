<template>
  <div>
    <h1>プレイ画面</h1>
    <pre>{{ data?.quizData.data.at(0)?.question }}</pre>
  </div>
</template>

<script setup lang="ts">
import type { QuizItem } from "#shared/types/quizItem";

definePageMeta({
  layout: "default",
});

const { data, error } = await useFetch<
  { quizData: { data: QuizItem[] } },
  { data: { stackTrace: string } }
>("/api/quiz");
console.log("error", error.value);
</script>
