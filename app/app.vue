<template>
  <div>
    <div class="fixed left-0 right-0 z-[100]">
      <Navigation />
    </div>
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navigation from "~/components/navigation.vue";

useHead({
  title: "Vesicash",
});
</script>
