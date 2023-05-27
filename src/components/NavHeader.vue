<script>
import { mapGetters } from "vuex";
// import { routerLink } from "vue-router";

export default {
  data() {
    return {};
  },
  methods: {
    toggle() {
      return this.$store.dispatch("IS_CLICKED");
    },
  },
  computed: {
    ...mapGetters(["isClicked"]),
  },
};
</script>
<template>
  <div id="navbar" class="px-5 py-3 d-flex justify-content-between">
    <div class="navlogo">
      <router-link to="/">
        <img src="../assets/spec-wallet.png" alt="" />
      </router-link>
    </div>
    <div class="navroute d-flex gap-5">
      <div class="d-flex align-items-center justify-content-end toggleBtn">
        <span
          class="button d-flex align-items-center justify-content-around"
          @click="toggle"
          ><span class="round-button" :class="{ 'inner-button': isClicked }"
            ><i class="fa-sharp fa-solid fa-brightness-low text-white"></i>
            <i class="fa-solid fa-brightness"></i></span
          ><i class="fa-solid fa-moon ms-3"></i
        ></span>
        <i class="fa-sharp fa-solid fa-brightness-low text-white"></i>
        <i class="fa-solid fa-brightness"></i>
      </div>
      <div class="routerBtn d-inline-flex gap-3">
        <router-link to="/signup">
          <button class="text-dark rounded-5 fs-5 shadow-none">Sign up</button>
        </router-link>
        <router-link to="/signin">
          <button
            style="background-color: #e23703"
            class="rounded-5 fs-5 text-light"
          >
            Sign in
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#navbar {
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
}
/* .toggleBtn {
  top: 50%;
  transform: translateY(-50%);
} */

.button {
  position: relative;
  /* top: -20px; */
  cursor: pointer;
  border: none;
  --webkit-appearance: none;
  background: #fff;
  width: 40px;
  height: 25px;
  border: 1px solid #222221;
  border-radius: 40px;
  transition: 200ms all;
}
.round-button {
  position: absolute;
  z-index: 1;
  width: 19px;
  height: 19px;
  margin-top: 2px;
  background: #303030;
  border-radius: 50%;
  top: 0;
  left: 1px !important;

  transition: 200ms ease-in-out all;
}
.inner-button {
  left: 18px !important;
  background: rgb(104, 186, 253);
}
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  /* background-color: #e23703; */
  cursor: pointer;
  transition: border-color 0.25s;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
@media (min-width: 250px) and (max-width: 449px) {
  #navbar {
    padding: 10px !important;
    .navlogo {
      img {
        width: 180px;
      }
    }
    .navroute {
      .routerBtn {
        display: none !important;
      }
    }
    button {
      padding: 0.4em 0.7em;
      font-size: 1em;
      font-weight: 500;
    }
  }
}
@media (min-width: 450px) and (max-width: 660px) {
  #navbar {
    padding: 20px !important;
    .navlogo {
      img {
        width: 180px;
      }
    }
    .navroute {
      gap: 0.5rem !important;
      .routerBtn {
        gap: 0.5rem !important;
        // display: none !important;
      }
    }
    button {
      padding: 0.4em 0.7em;
      font-size: 1em !important;
      font-weight: 500;
    }
  }
}
</style>

<!-- <script></script>
<template>
  <h4>I'm nav br</h4>
</template> -->
