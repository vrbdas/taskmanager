<script setup>
import TheNavbar from './components/TheNavbar.vue';

</script>

<template>
  <TheNavbar></TheNavbar>
  <div class="container">
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>

</style>