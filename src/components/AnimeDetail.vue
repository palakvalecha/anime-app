<template>
  <div class="anime-detail">
    <!-- Close Button (top left) -->
    <button class="close-btn btn btn-light position-absolute top-0 end-0 m-2 p-1 rounded-circle shadow-sm fw-bold"

            @click="goHome">
      <span class="visually-hidden">Close</span>
      ✕
    </button>

    <!-- Banner Section -->
    

    <!-- Description Section -->
    <div class="px-3 pb-5">
      <p class="mt-3 mb-1">
        <strong>Follows the adventures</strong> of Monkey D. Luffy and his pirate crew in order to find
        the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named "One Piece".
      </p>
      <p>{{ anime.content }}</p>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { useRouter } from 'vue-router'

const anime = inject('selectedAnime')
const showHeader = inject('showHeader')
const router = useRouter()
function goHome() {
  if (showHeader) showHeader.value = true
  router.push('/')
}
</script>

<style scoped>

.close-btn {
  z-index: 1;
}
</style>