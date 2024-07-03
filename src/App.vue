<script setup>
import NavHeader from "./components/NavHeader.vue";
// import PreLoader from "./components/PreLoader.vue";
// import { ref, RouterView } from "vue";
// const Pageloads = ref(false);
//   mounted() {
//     window.addEventListener("load", () => {
//       Pageloads = true;
//     });
//     }
</script>

<template>
  <div>
    <!-- <PreLoader v-show="!loads" class="d-none" :class="{ prel: loads }" /> -->
    <NavHeader
      v-if="
        !['Dashboard', 'Withdraw', 'Payment', 'Set_pin'].includes($route.name)
      "
    />
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

<!-- #db0552 - Primary color  -->
