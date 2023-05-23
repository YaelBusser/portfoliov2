<template>
  <div
    :class="{ 'loader-display--visible': isVisible }"
    id="loader"
    class="flex-column"
  >
    <h2>Chargement</h2>
    <breeding-rhombus-spinner
      :animation-duration="2000"
      :size="150"
      color="rgb(8, 253, 216)"
    />
  </div>
</template>

<script>
import { BreedingRhombusSpinner } from "epic-spinners";
export default {
  name: "Loader",
  components: {
    BreedingRhombusSpinner,
  },
};
</script>

<script setup>
import { computed } from "vue";
import { isLoading } from "@/router";
const isVisible = computed(() => isLoading.value);
</script>

<style scoped>
@media (max-width: 550px) {
  h2 {
    text-align: center;
  }
}
h2 {
  color: white;
  padding: 10px;
  font-size: 30px;
  font-family: "Poppins";
  letter-spacing: 1ch;
}
#loader {
  background-color: #1d1d1d;
  left: -100%;
  bottom: 0;
  right: 0;
  top: 0;
  position: fixed;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-duration: 0.8s;
  animation-name: loader;
  animation-fill-mode: forwards;
}
@keyframes loader {
  100% {
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
  }
}
#loader:not(.loader-display--visible) {
  animation-duration: 1s;
  animation-name: loaderEnd;
  animation-fill-mode: forwards;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
}
@keyframes loaderEnd {
  100% {
    margin-left: 200%;
    opacity: 0;
  }
}
</style>