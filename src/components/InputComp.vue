<template>

    <div class="flex flex-col">
        <label class="text-2xl font-sans font-semibold py-2 px-2" forr=props.name>{{label}}</label>
        <input type="text" class="mx-2 font-sans text-xl border border-solid border-blue-300 rounded-lg w-full focus:border-indigo-300 px-2" :placeholder=placeholder>
    </div>

</template>

<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { computed, ref, toRefs } from "vue";

defineProps({
  label: String,
  placeholder: String,
  auth: Boolean,
});

const rules = computed(()=> {
  return{
    username: { required, minLength:minLength(3)},
    email: {required, email},
    password: {required},
  };
});

const formData = ref({
  username:"",
  email: "",
  password: "",
  confirmPassword: "",
});

const v$ = useVuelidate(rules, formData);

const submitForm = async () => {
  const result = await v$.value.$validate();
  if(result) {
    alert("sucess, form submitted");
    
  } else {
    alert("failed to submit");
  }
};

</script>

<style scoped>

</style>