<template>
<!-- Image -->
    <img :src="anime.image" @click="goToDetail" class="img-fluid mx-3 rounded-4" style="box-shadow: 0 4px 12px rgba(0,0,0,0.1);" alt="One Piece Banner">
 
    <!-- Footer -->
    <div class="card-body pt-3 pb-4 px-3 d-flex justify-content-between align-items-center border-top mt-2">
      <div class="d-flex align-items-center">
        <img :src="anime.iconImage" class="rounded me-2" style="width: 40px; height: 40px;" alt="Icon">
        <div>
          <div class="fw-semibold">{{ anime.title }}</div>
          <small class="text-muted">{{anime.subtitle}}</small>
        </div>
      </div>
      <div class="text-end">
        <button @click="changeAnime" class="btn btn-light px-3 py-1 rounded-pill fw-semibold shadow-sm text-primary small-btn">
      REFRESH
    </button>
    <br />
    <small class="text-muted d-block mt-1" style="font-size: 10px;">In-App Purchase</small>
      </div>
    </div>
</template>

<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";

const anime = inject("selectedAnime");
const changeAnime = inject("changeAnime");
const showHeader = inject('showHeader')
const router = useRouter();
function goToDetail() {
  showHeader.value = false
  router.push("/anime-detail");
}
</script>

<style scoped>


</style>