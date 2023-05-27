<template>
  <div
    id="theHeader"
    class="shadow-sm d-flex justity-content-evenly align-items-center px-4"
  >
    <div class="d-inline-flex gap-2">
      <div @click="toggleSidebar"><i class="fas fa-bars d-lg-none"></i></div>
      <h5 class="ms-2 mb-0">Dashboard</h5>
    </div>
    <div class="ms-auto">
      <div class="dropdown">
        <a
          class="btn dropdown-toggle rounded-5"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            style="width: 20px"
            src="../../assets/user-icon-ged747e489_640.png"
            alt=""
          />
        </a>

        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Edit profile</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Log out</a></li>
        </ul>
      </div>
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
@media (min-width: 750px) and (max-width: 1150px) {
  #theHeader {
    width: 72%;
    height: 120px;
    padding: 10px 10px !important;
  }
}
</style>
