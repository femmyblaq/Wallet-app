<template>
  <div id="dashboard">
    <Sidebar />
    <Dasheader />
    <MainView @click="removeSidebar" />
    <!-- <dash-footer /> -->
    <TheBottomFooter />
  </div>
</template>

<script>
import Dasheader from "../modules/TheHeader.vue";
// import DashFooter from "../modules/DashFooter.vue";
import TheBottomFooter from "../modules/TheBottom.vue";
import Sidebar from "../modules/TheSideBar.vue";
import MainView from "../modules/TheMainView.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    Dasheader,
    Sidebar,
    MainView,
    TheBottomFooter,
    // DashFooter,
  },
  methods: {
    ...mapMutations(["SIDEBAR_TOGGLE"]),
    removeSidebar() {
      this.SIDEBAR_TOGGLE();
      console.log("sidebar toggle ");
    },
  },
  computed: {
    toggleSideBar() {
      return this.$store.getters.toggleSide;
    },
  },
  created() {
    const checkScreen = this.$store.dispatch("mobileView");
    window.addEventListener("resize", checkScreen);
  },
};
</script>
<style>
#dashboard {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@media (min-width: 200px) and (max-width: 340px) {
  .main-view {
    height: 90%;
    left: 0;
    width: 100%;
  }
  #sidebar {
    width: 220px;
    z-index: 1111 !important;
  }
  .slideSide {
    margin-left: -220px !important;
  }
  .slideFooter {
    width: 15% !important;
  }
  .footerSlide {
    width: 85% !important;
  }
  .footerMenu {
    width: 85% !important;
    left: 15% !important;
  }
  #header-dash {
    width: 100%;
  }
}
@media (min-width: 340px) and (max-width: 720px) {
  .main-view {
    height: 90%;
    left: 0;
    width: 100%;
  }
  #sidebar {
    width: 280px;
    z-index: 1111 !important;
  }
  .slideSide {
    margin-left: -280px !important;
  }
  .slideFooter {
    width: 15% !important;
  }
  .footerSlide {
    width: 85% !important;
  }
  .footerMenu {
    width: 85% !important;
    left: 15% !important;
  }
  #header-dash {
    width: 100%;
  }
}
@media (min-width: 820px) and (max-width: 1180px) {
  .main-view {
    height: 100%;
    left: 37%;
    border: 1px solid black;
    width: 63%;
  }
  #header-dash {
    width: 63%;
  }
  #sidebar {
    width: 300px;
  }

  .slideSide {
    margin-left: -300px !important;
  }
  .slideFooter {
    width: 10% !important;
  }
  .footerSlide {
    width: 90% !important;
  }
  .footerMenu {
    width: 90% !important;
    left: 10% !important;
  }
}
@media (min-width: 768px) and (max-width: 819px) {
  .main-view {
    height: 100%;
    left: 39.2%;
    border: 1px solid black;
    width: 60.8%;
  }
  #header-dash {
    width: 60%;
  }
  #sidebar {
    width: 300px;
  }

  .slideSide {
    margin-left: -300px !important;
  }
  .slideFooter {
    width: 10% !important;
  }
  .footerSlide {
    width: 90% !important;
  }
  .footerMenu {
    width: 90% !important;
    left: 10% !important;
  }
}
</style>
