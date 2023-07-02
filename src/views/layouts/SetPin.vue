<template>
  <div id="setPin">
    <div id="form-container" class="rounded-3 p-5 auto border-2">
      <form @submit.prevent="handleSubmit">
        <div class="form-group d-inline-flex gap-2">
          <input ref="input1" class="form-control" @input="handleInput(1)" />
          <input ref="input2" class="form-control" @input="handleInput(2)" />
          <input ref="input3" class="form-control" @input="handleInput(3)" />
          <input ref="input4" class="form-control" @input="handleInput(4)" />
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#setPin {
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
</style>

<script>
export default {
  methods: {
    handleInput(fieldNumber) {
      const nextFieldNumber = fieldNumber + 1;
      const nextFieldRef = `input${nextFieldNumber}`;

      if (this.$refs[nextFieldRef]) {
        this.$refs[nextFieldRef].focus();
      } else {
        this.submitForm();
      }
    },

    submitForm() {
      // Perform form submission logic here
      console.log("Form submitted!");
    },
  },
};
</script>
