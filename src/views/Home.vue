<script setup>
// import { routerLink } from "vue-router";
</script>

<template>
  <div id="home" class="position-relative">
    <div class="row m-0">
      <div class="col-lg-6 col-sm-12 col-md-12 my-auto">
        <h1
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos="fade-down"
          class="fw-bold"
        >
          Make <span style="color: #e23703">Payment</span> very easy and
          effectively!
        </h1>
        <p
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos="fade-left"
          class="fs-4 my-4"
        >
          software application that allows users to store and manage their
          digital financial assets, such as money, payment cards, loyalty cards,
          and even cryptocurrencies, on their mobile devices.
        </p>
        <div
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos="fade-right"
          class="d-inline-flex gap-3"
        >
          <router-link to="/signup">
            <button class="rounded-5 fs-5 btn-outline-light btn">
              Sign up
            </button>
          </router-link>
          <router-link to="/signin">
            <button class="rounded-5 fs-5 btn-outline-light btn">
              Sign in
            </button>
          </router-link>
        </div>
      </div>
      <div class="col-lg-6 col-sm-12 justify-content-center m-auto text-center">
        <div
          class="img"
          data-aos-easing="linear"
          data-aos-duration="1500"
          data-aos="fade-up"
        >
          <img src="../assets/HomeSpewallet.svg" class="" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#home {
  display: flex;
  align-items: center;
  // height: 86vh;
  margin: auto;
  padding: 2rem;
  h1 {
    font-size: 4.2em;
    line-height: 1.1;
  }
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    border-color: #646cff;
    background-color: #ccc;
  }
  button:focus,
  button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
  .img {
    img {
      width: 75%;
      text-align: center;
    }
  }
}
@media (min-width: 990px) and (max-width: 1150px) {
  #home {
    margin: 0 auto;
    padding: 2rem;
    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }
    p {
      font-size: 1.2em;
    }
  }
}
@media (min-width: 450px) and (max-width: 689px) {
  #home {
    margin: 0 auto;
    padding: 1.5rem 1rem;
    h1 {
      font-size: 2.5em;
      line-height: 1.1;
    }
    p {
      font-size: 1.2rem;
    }
    .row {
      .col-lg-6 {
        margin-top: 40px !important;
        padding: 0 !important;
        text-align: center;
        .img {
          img {
            margin-top: 20px;
            width: 90%;
          }
        }
        // margin-top: 0px ;
      }
    }
  }
}
@media (min-width: 250px) and (max-width: 449px) {
  #home {
    margin: 0 auto;
    padding: 1rem 0.75rem;
    h1 {
      font-size: 2em;
    }
    p {
      font-size: 1rem;
    }
    .row {
      .col-lg-6 {
        margin-top: 40px !important;
        padding: 0 !important;
        text-align: center;
        .img {
          img {
            margin-top: 20px;
            width: 90%;
          }
        }
        // margin-top: 0px ;
      }
    }
  }
}
</style>

<!-- <script></script>
<template>
  <h4>I'm Home</h4>
</template> -->
