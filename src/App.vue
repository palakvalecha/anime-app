<template>
  <div class="container my-4 d-flex justify-content-center">
    <div
      class="card one-piece-card shadow rounded-4 border-0"
      style="width: 375px"
    >
      <!-- Header -->
      <div class="card-body pb-1 pt-3 px-3" v-if="showHeader">
        <div class="d-flex align-items-start justify-content-between">
          <div>
            <small
              class="text-uppercase text-secondary fw-medium"
              style="font-size: 10px; letter-spacing: 1px"
            >
              <TodayDate />
            </small>
            <h5 class="fw-bold mt-1">Today</h5>
          </div>
          <div>
            <span
              class="badge rounded-pill bg-light text-dark px-3 py-1 fw-semibold"
              >VS</span
            >
          </div>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import TodayDate from "./components/TodayDate.vue";
import onepieceImg from "./assets/onepiece-logo.jpg";
import narutoImg from "./assets/naruto-logo.jpg";
import onepiece from "./assets/onepiece.png";
import naruto from "./assets/naruto.jpeg";

const animeList = [
  {
    title: "One Piece",
    image: onepiece,
    header: "Only I Can Call My Dream Stupid!",
    iconImage: onepieceImg,
    subtitle: "Set sail for One Piece!",
    content: "One Piece is a pirate adventure anime.",
  },
  {
    title: "Naruto",
    image: naruto,
    iconImage: narutoImg,
    subtitle: "Dream the Hokage",
    content: "Naruto is a ninja adventure anime.",
  },
];

const animeIndex = ref(0);
const selectedAnime = ref(animeList[animeIndex.value]);
const showHeader = ref(true);

function changeAnime() {
  animeIndex.value = (animeIndex.value + 1) % animeList.length;
  selectedAnime.value = animeList[animeIndex.value];
}
provide("changeAnime", changeAnime);
provide("selectedAnime", selectedAnime);
provide("showHeader", showHeader);
provide("setSelectedAnime", (anime) => {
  selectedAnime.value = anime;
});
</script>

<style scoped>
</style>