<template></template>
<script></script>
<!-- <template>
  <div class="p-5 bg-success">
    <form @submit.prevent="submitForm" class="bg-light">
      <div>
        <label for="name">Name:</label>
        <input
          type="text"
          v-model="formData.name"
          :class="{ 'is-invalid': $v.formData.name.$error }"
        />
        <div v-if="!$v.formData.name.required">Name is required.</div>
      </div>

      <div>
        <label for="email">Email:</label>
        <input
          type="text"
          v-model="formData.email"
          :class="{ 'is-invalid': $v.formData.email.$error }"
        />
        <div v-if="!$v.formData.email.required">Email is required.</div>
        <div v-else-if="!$v.formData.email.email">
          Please enter a valid email address.
        </div>
      </div>

      <button type="submit" :disabled="!$v.$dirty">Submit</button>
    </form>
  </div>
</template>


<script>
import { defineComponent } from "vue";
// import { useForm, withVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default defineComponent({
  setup() {
    const { formData, submitForm, $v } = useForm({
      formData: {
        name: "",
        email: "",
      },
    });

    const validations = {
      formData: {
        name: { required },
        email: { required, email },
      },
    };

    return {
      formData,
      submitForm,
      $v,
    };
  },
});
</script>

<style>
.is-invalid {
  border: 1px solid red;
}
</style> -->
