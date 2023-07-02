<script>
// import { reactive } from "vue"; // "from '@vue/composition-api'" if you are using Vue <2.7
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  data() {
    return {
      v$: useVuelidate(),
      userData: {
        firstName: "",
        lastName: "",
        contact: {
          email: "femmybla@gmail.com",
        },
      },
    };
  },
  methods: {
    submitForm() {
      const formData = {
        firstName: this.userData.firstName,
        lastName: this.userData.lastName,
        email: this.userData.contact.email,
      };
      console.log("My form Data ", formData);
    },
  },

  // const state = reactive({
  //   firstName: "",
  //   lastName: "",
  //   contact: {
  //     email: "",
  //   },
  //   password: "",
  //   confirmPassword: "",
  // });
  // const rules = {
  //   firstName: { required, minLength: minLength(3) }, // Matches state.firstName
  //   lastName: { required, minLength: minLength(3) }, // Matches state.lastName
  //   contact: {
  //     email: { required, email }, // Matches state.contact.email
  //   },
  //   password: {
  //     required,
  //     minLength: minLength(6),
  //   },
  //   confirmPassword: {
  //     sameAs: sameAs("password"),
  //   },
  // };

  validations() {
    return {
      firstName: { require }, // Matches this.firstName
      lastName: { required }, // Matches this.lastName
      contact: {
        email: { required, email }, // Matches this.contact.email
      },
    };
  },
};
</script>

<template>
  <div id="sign-up" class="my-auto">
    <div class="row px-5 mx-0 h-100">
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
        class="first-col col-lg-6 col-md-5 col-sm-12 d-flex justify-content-center align-items-center"
      >
        <img src="../assets/SigninDesign1.svg" alt="" />
      </div>
      <div
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
        class="col-lg-6 col-md-7 col-sm-12 mx-auto d-flex flex-column justify-content-center align-items-center"
      >
        <h1 class="text-center fw-bold mb-4">Sign Up</h1>

        <div id="form-container" class="rounded-3 py-4 px-5 w-75">
          <form @submit.prevent="submitForm">
            <div class="form-group my-2">
              <label for="name" style="font-weight: 500">Full Name</label>
              <input
                type="text"
                v-model="userData.firstName"
                class="form-control rounded-3"
              />
              <!-- <small class="text-danger" v-if="!$v.firstName.required">
                First name is required.
              </small>
              <small class="text-danger" v-if="!$v.firstName.minLenght">
                Name must be atleast 3 characters.
              </small> -->
              <!-- <div
                class="input-errors"
                v-for="error of v$.firstName.$errors"
                :key="error.$uid"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div> -->
            </div>
            <div class="form-group my-2">
              <label for="email" style="font-weight: 500">Email</label>
              <input
                type="email"
                v-model="userData.contact.email"
                class="form-control rounded-3"
              />
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
            <label for="password" style="font-weight: 500"
              >Confirm Password</label
            >
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
              <button
                type="submit"
                class="btn btn lg rounded-3 boder-none fw-bold px-5 py-3 text-white"
                style="background-color: #e23703"
              >
                Sign Up
              </button>
              <!-- <p class="text-center mt-3">
                <a
                  class="text-sm font-Nunito font-semibold mt-3"
                  href="/forgot-password"
                  style="color: #e23703"
                  >Forgot password?</a
                >
              </p> -->
              <p class="text-center mt-4 mb-0">
                Already have an account?
                <a class="" href="/signup" style="color: #e23703">Sign In</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#sign-up {
  height: 90vh;
  .error {
    border: 2px solid #f00;
  }
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
  #sign-up {
    .row {
      padding: 0 20px !important;
      .col-lg-6 img {
        height: 700px !important;
      }
    }
  }
}
@media (min-width: 250px) and (max-width: 550px) {
  #sign-up {
    height: 87.2vh;

    .row {
      height: 74.2vh !important;
      padding: 10px !important;
      .first-col {
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

<!-- ORGE COLOR - e23703  -->
