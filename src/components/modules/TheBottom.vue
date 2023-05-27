<template>
  <div id="theBottom" class="bg-danger shadow-sm d-lg-none">
    <ul
      class="list-unstyled bg-warning d-flex m-0 justify-content-between align-items-center px-5"
    >
      <li>
        <router-link
          to="/FundAcct"
          class="px-5 p-y-2 text-dark"
          active-class="active"
        >
          <i class="fa-solid fa-wallet"></i>
          <!-- <span>Fund Account</span> -->
        </router-link>
      </li>
      <li>
        <router-link
          to="/withdraw"
          class="px-5 p-y-2 text-dark"
          active-class="active"
        >
          <i class="fa-solid fa-money-bill-transfer"></i>
          <!-- <span> Withdraw </span> -->
        </router-link>
      </li>
      <li>
        <router-link
          to="/transfer"
          class="px-5 p-y-2 text-dark"
          @click="logoutToggle"
        >
          <i class="fa-sharp fa-solid fa-right-left"></i>
          <!-- <span>Payments</span> -->
        </router-link>
      </li>
      <li>
        <router-link
          to="/payment"
          class="px-5 p-y-2 text-dark"
          active-class="active"
        >
          <i class="fa-solid fa-credit-card"></i>
          <!-- <span> Set Pins </span> -->
        </router-link>
      </li>
      <li>
        <router-link
          to="/transaction"
          class="px-5 p-y-2 text-dark"
          active-class="active"
        >
          <i class="fa-solid fa-clock-rotate-left"></i>
          <!-- <span>Transaction History</span> -->
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
#theBottom {
  height: 90px;
  // width: 60%;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1111;
  border-top: 1px solid #ccc;
  ul a {
    // background-color: aqua;
    cursor: pointer;
  }
  ul a:hover {
    border-top: 3px solid #fd7e14;
  }
  ul a.active {
    border-top: 3px solid #fd7e14;
    background-color: #f1f0f0;
  }

  .material-symbols-outlined {
    font-size: 50px;
  }
}
@media (min-width: 200px) and (max-width: 850px) {
  #theBottom {
    width: 100%;
    height: 50px !important;
    z-index: 1;

    ul {
      height: 100%;
      // width: 90%;
      padding: 0 !important;
      a {
        padding: 15px 20px !important;
        i {
          font-size: 1.5rem;
        }
      }
    }
    ul a.active {
      background-color: #f1f0f0;
      i {
        color: #fd7e14;
      }
    }
  }
  .material-icons {
    font-size: 2rem !important;
  }
}
@media (min-width: 750px) and (max-width: 1150px) {
  #theBottom {
    display: none;
  }
}
@media (min-width: 451px) and (max-width: 750px) {
  #theBottom {
    width: 100%;
    height: 200px !important;
    z-index: 1;

    ul {
      padding: 15px !important;
      display: grid !important;
      grid-template-columns: 1fr 1fr 1fr !important;
      a {
        padding: 20px 30px !important;
        margin: auto;
        border-radius: 18px;

        &__:hover {
          border: 2px solid #fd7e14;
        }
      }
      a.active {
        border: 2px solid #fd7e14;
        background-color: rgb(228, 226, 226);
      }
    }
  }
  .material-icons {
    font-size: 2rem !important;
  }
}
</style>
