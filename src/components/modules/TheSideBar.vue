<template>
  <div id="sidebar" class="shadow-sm" :class="{ sidebar: sidebarToggle }">
    <!-- <div class="brand px-3 d-flex justify-content-between">
      <img src="../assets/" style="width: 150px" alt="" />
      <div @click="toggleSidebar" class="align-items-center d-flex">
        <i class="fas fa-angle-left mx-2 my-auto"></i>
      </div>
    </div> -->
    <img src="../../assets/DashboardDesignII.svg" class="" alt="" />
    <div class="d-flex justify-content-center">
      <div class="content d-inline-flex align-items-center my-3">
        <div class="avatar">
          <h1 class="text-light m-auto fw-bolder">HY</h1>
        </div>
        <div class="text-box ms-3">
          <h1 class="fw-bold m-0">Habeeb Yusuph</h1>
          <p>Phemmyhy@gmail.com</p>
          <h4>NGN 178.89</h4>
        </div>
      </div>
    </div>

    <div class="nav-container mt-5">
      <ul class="list-unstyled d-grid m-0 px-5">
        <router-link
          to="/FundAcct"
          class="px-5 p-y-2 text-dark"
          active-class="active"
        >
          <i class="fa-solid fa-wallet"></i>
          <!-- <span class="material-icons"> account_balance_wallet </span> -->
          <span>Fund Account</span>
        </router-link>
        <router-link
          to="/withdraw"
          class="px-5 p-y-2 text-dark"
          active-class="active"
        >
          <i class="fa-solid fa-money-bill-transfer"></i>
          <!-- <span class="material-icons"> currency_exchange </span> -->
          <span> Withdraw </span>
        </router-link>
        <router-link
          to="/transfer"
          class="px-5 p-y-2 text-dark"
          @click="logoutToggle"
        >
          <i class="fa-sharp fa-solid fa-right-left"></i>
          <!-- <span class="material-icons"> logout </span> -->
          <span> Transfer </span>
        </router-link>
        <router-link
          to="/payment"
          class="px-5 p-y-2 text-dark"
          active-class="active"
        >
          <i class="fa-solid fa-credit-card"></i>
          <!-- <span class="material-icons"> payments </span> -->
          <span>Payments</span>
        </router-link>
        <router-link
          to="/Set_pin"
          class="px-5 p-y-2 text-dark"
          active-class="active"
        >
          <i class="fa-solid fa-input-numeric"></i>
          <i class="fa-sharp fa-solid fa-input-numeric"></i>
          <!-- <span class="material-icons"> pin </span> -->
          <span>Set Pins</span>
        </router-link>
        <router-link
          to="/trransaction"
          class="px-5 p-y-2 text-dark"
          active-class="active"
        >
          <i class="fa-solid fa-clock-rotate-left"></i>
          <span>Transaction History</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["SIDEBAR_TOGGLE"]),
    toggleSidebar() {
      this.SIDEBAR_TOGGLE();
      console.log("sidebar toggle ");
    },
  },
  computed: {
    ...mapState(["sidebarToggle"]),
  },
};
</script>
<style lang="scss" scoped>
#sidebar {
  height: 100vh;
  width: 40%;
  position: fixed;
  background-color: #fff;
  // padding: 0 20px;
  z-index: 1;
  transition: 200ms ease;
  box-shadow: 0 38px 0 0 20px rgb(235 234 242 / 58%);
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #000;
    display: flex;
    place-content: center;
    h1 {
      font-size: 5rem;
    }
  }
  .nav-container {
    ul {
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      align-items: center;
      a {
        border: 2px solid #ccc;
        margin: 10px;
        height: 100px;
        width: 40px;
        margin: 20px auto;
        display: grid;
        // place-items: center;
        justify-content: space-evenly;
        color: #ccc;
        align-items: center;
        text-decoration: none;
        border-radius: 15px;
        &:hover {
          border-color: #fd7e14;
          .material-icons,
          span {
            color: #fd7e14;
          }
        }
        .material-icons {
          color: gray;
        }
      }
      a.active {
        border-color: #fd7e14;
        background-color: #f1f0f0;
        .material-icons,
        span {
          color: #fd7e14;
        }
      }
    }
  }
}

@media (min-width: 200px) and (max-width: 450px) {
  #sidebar {
    // margin-left: -40%;
    transform: translateX(-500px);
    z-index: 1111;
    width: 80%;
    .brand {
      background-color: rgb(253, 251, 251);
      padding: 15px 10px !important;
    }
    .avatar {
      width: 75px;
      height: 70px;
    }
    .content {
      padding: 0 15px;
    }

    .text-box {
      h1 {
        font-size: 1.3rem;
      }
      h4 {
        font-size: 1rem;
      }
    }
    .nav-container {
      display: none !important;
    }
  }
  .sidebar {
    transform: translateX(0) !important;
  }
}

@media (min-width: 540px) and (max-width: 750px) {
  #sidebar {
    // margin-left: -40%;
    transform: translateX(-500px);
    z-index: 1111;
    width: 80%;
    .brand {
      background-color: rgb(253, 251, 251);
      padding: 15px 10px !important;
    }
    .avatar {
      width: 75px;
      height: 70px;
    }
    .content {
      padding: 0 15px;
    }

    .text-box {
      h1 {
        font-size: 1.3rem;
      }
      h4 {
        font-size: 1rem;
      }
    }
    .nav-container {
      display: none !important;
    }
  }
  .sidebar {
    transform: translateX(0) !important;
  }
}

@media (min-width: 750px) and (max-width: 1150px) {
  #sidebar {
    z-index: 1111;
    width: 28%;
    background-color: pink;
    img {
      height: 90px;
      width: 100%;
    }
    .content {
      padding: 10px 10px;
      display: flex !important;
      width: 100% !important;
      flex-direction: column !important;
    }
    .avatar {
      width: 95px;
      height: 100px;
      border-radius: 30px !important;
      h1 {
        font-size: 2.5rem;
      }
    }

    .text-box {
      h1 {
        font-size: 1.6rem;
      }
      h4 {
        font-size: 1.2rem;
      }
    }
    .nav-container {
      // display: none !important;
      ul {
        padding: 0 10px !important;
        // height: 80%;
        grid-template-columns: repeat(2, 1fr);
        a {
          margin: 10px 0 !important;
        }
      }
    }
  }
  .sidebar {
    transform: translateX(0) !important;
  }
}
@media (min-width: 451px) and (max-width: 750px) {
  #sidebar {
    width: 60%;
    .brand {
      background-color: rgb(253, 251, 251);
      padding: 15px 10px !important;
    }
    .avatar {
      width: 75px;
      height: 70px;
    }
    .content {
      padding: 0 10px;
    }

    .text-box {
      h1 {
        font-size: 1.3rem;
      }
      h4 {
        font-size: 1rem;
      }
    }
    .nav-container {
      display: none !important;
    }
  }
  .sidebar {
    transform: translateX(0) !important;
  }
}
</style>
