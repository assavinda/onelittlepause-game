<script setup>
const ap = ref('apleo')
</script>

<template>
  <div class="flex h-screen w-screen bg-gray-500 justify-center">
    <Container>
      <div class="absolute top-1/2 left-1/2">

      </div>
      <div class="absolute top-0 left-1/2">
        <p>{{ ap }}</p>
        <button @click="ap = 'kfop'" class="bg-gray-300 border-2">
          click
        </button>
      </div>
    </Container>
  </div>
</template>

<style scoped>

</style>
