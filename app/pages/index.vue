<template>
  <main>
    <h1>トップページ</h1>
    <button @click="goToPlay">クイズを始める</button>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const goToPlay = () => {
  navigateTo("/play");
};
</script>
