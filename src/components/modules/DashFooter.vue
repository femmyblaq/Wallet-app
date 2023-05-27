<template>
  <div
    id="theHeader"
    class="bg-warning shadow-sm d-flex align-items-center px-4"
  >
    <div>
      <h5 class="ms-2 mb-0 fw-light" style="color: #e23703">
        Designed by Dev Habeebdevinton
      </h5>
    </div>
    <div class="ms-auto bg-light py-2 px-2 rounded-3">
      <i class="fa-solid fa-arrow-right-from-bracket"></i>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["SIDEBAR_TOGGLE"]),
    toggleSidebar() {
      this.SIDEBAR_TOGGLE();
      console.log("sidebar toggle ");
    },
  },
};
</script>
<style lang="scss" scoped>
#theHeader {
  height: 70px;
  width: 60%;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 111;
  background-color: #fff;
  // border: 1px solid #0f0;
}
@media (min-width: 200px) and (max-width: 850px) {
  #theHeader {
    width: 100%;
    padding: 10px 10px !important;
  }
}
</style>
