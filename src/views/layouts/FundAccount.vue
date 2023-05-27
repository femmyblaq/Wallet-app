<template>
  <!-- <div class="bg-danger  d-grid align-items-center"> -->
  <div id="funding">
    <div id="form-container" class="rounded-3 p-5 auto">
      <form>
        <h3>Fund Wallet</h3>
        <div class="form-group my-2">
          <label class="form-label" style="font-weight: 500" for="form2"
            >Amount</label
          >
          <input type="number" class="form-control" />
        </div>

        <div class="form-group my-2">
          <label class="form-label" style="font-weight: 500">Email</label>
          <input type="number" class="form-control" />
        </div>

        <div class="pt-1 my-4">
          <button
            class="btn btn-dark btn-lg btn-block rounded-3 w-100"
            type="button"
          >
            Fund Account
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- <ModalVue /> -->
  <!-- </div> -->
</template>
<script>
// import ModalVue from "../components/Modal.vue";
export default {
  components: {
    // ModalVue,
  },
};
</script>
<style lang="scss" scoped>
#funding {
  width: 60%;
  height: 78.7vh;
  margin: auto;
  padding: 40px;
  background-color: #fff;
  display: grid;
  align-items: center;

  #form-container {
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
  }
}
.transaction {
  width: 50%;
  height: 60%;
  margin: auto;
  padding: 0 40px;
  position: relative;
  background-color: #fff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
}
@media (min-width: 200px) and (max-width: 450px) {
  #funding {
    width: 100%;
    height: 86.5vh;
    padding: 0 !important;
  }
  .transaction {
    width: 90%;
  }
}
@media (min-width: 650px) and (max-width: 1150px) {
  #funding {
    width: 100%;
    height: 99.7vh;
    background-color: aquamarine;

    // #form-container {
    //   height: 600px;
    // }
  }
}
</style>
