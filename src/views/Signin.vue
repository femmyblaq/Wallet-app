<template>
  <div id="sign-in" class="my-auto">
    <div class="row px-5 mx-0 h-100">
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
        class="col-lg-6 mx-auto d-flex flex-column justify-content-center align-items-center"
      >
        <h1 class="text-center fw-bold mb-4">Sign In</h1>
        <div id="form-container" class="rounded-3 p-5 w-75">
          <form action="">
            <div class="form-group my-2">
              <label for="email" style="font-weight: 500">Email</label>
              <input type="email" class="form-control rounded-3" />
            </div>
            <label for="password" style="font-weight: 500">Password</label>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                aria-describedby="basic-addon2"
              />
              <span class="input-group-text" id="basic-addon2"
                ><i class="fa-solid fa-eye-slash"></i
              ></span>
            </div>
            <div
              class="bottom-form mt-4 d-flex justify-content-center flex-column"
            >
              <div
                class="btn btn lg rounded-3 boder-none fw-bold px-5 py-3 text-white"
                style="background-color: #e23703"
              >
                Sign in
              </div>
              <p class="text-center mt-3">
                <a
                  class="text-sm font-Nunito font-semibold mt-3"
                  href="/forgot-password"
                  style="color: #e23703"
                  >Forgot password?</a
                >
              </p>
              <p class="text-center mb-0">
                Don't have an account?
                <a class="" href="/signup" style="color: #e23703">Sign Up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
        class="second-col col-lg-6 d-flex justify-content-center align-items-center"
      >
        <img src="../assets/signup1DesignII.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#sign-in {
  height: 90vh;
}
#form-container {
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
}
.form-control {
  --tw-border-opacity: 1;
  border-color: rgba(209, 213, 219, var(--tw-border-opacity));
}
.btn {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
@media (min-width: 990px) and (max-width: 1150px) {
  #sign-in {
    .row {
      padding: 0 20px !important;
      .col-lg-6 img {
        height: 700px !important;
      }
    }
  }
}
@media (min-width: 250px) and (max-width: 550px) {
  #sign-in {
    height: 87.2vh;

    .row {
      height: 74.2vh !important;
      padding: 10px !important;
      .second-col {
        display: none !important;
      }
      .col-lg-6 {
        margin: auto !important;
        img {
          display: none;
        }
        #form-container {
          // height: auto !important;
          width: 100% !important;
          padding: 20px !important;
        }
      }
    }
  }
}
</style>

<!-- eye slsh unicode - f070 -->
<!-- eye unicode - f06e -->
