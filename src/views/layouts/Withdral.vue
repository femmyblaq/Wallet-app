<template>
  <div id="withdraw">
    <div id="form-container" class="rounded-3 p-5">
      <form>
        <h3>Withdraw</h3>
        <div class="form-group my-2">
          <input type="number" class="form-control" />
          <label class="form-label">Amount</label>
        </div>
        <div class="form-group my-2">
          <input type="number" class="form-control" />
          <label class="form-label">Bank code</label>
        </div>
        <div class="form-group my-2">
          <input type="number" class="form-control" />
          <label class="form-label">Account Number</label>
        </div>

        <div class="pt-1 mb-4">
          <button
            class="btn btn-dark btn-lg btn-block rounded-3 w-100"
            type="button"
          >
            Withdraw
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#withdraw {
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
@media (min-width: 200px) and (max-width: 450px) {
  #withdraw {
    width: 100%;
    height: 86.5vh;
    padding: 20px;
    #form-container {
      padding: 20px !important;
    }
  }
}
@media (min-width: 650px) and (max-width: 1150px) {
  #withdraw {
    width: 100%;
    height: 99.7vh;
    padding: 20px;
    // #form-container {
    //   height: 600px;
    // }
  }
}
</style>
