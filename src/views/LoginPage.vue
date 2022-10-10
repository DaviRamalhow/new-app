<template>
    <div class="login-view flex items-center justify-center min-h-screen bg-slate-900">
        <div class="min-h- h-96 bg-amber-600 relative rounded-full left-64 blur-2xl"></div>
        <div class="flex max-w-full max-h-2xl ">

            <div class="flex flex-col z-30">
                <div class="flex items-center justify-center">
                    <ui-alert soft color="danger" class="text-center mb-4 text-white w-72">
                        Invalid password or e-mail.
                    </ui-alert>
                </div>

                <div
                    class="flex flex-col w-[350px] py-12 p-10 bg-white rounded-2xl shadow-2xl space-y-1 justify-center items-center">
                        <div class="font-sans text-xl font-bold pb-8"> SIgn In </div>
                    
                    <ui-form :submit="submitForm" v-slot="{action}">
                        <ui-entry :rules="rules.email" label="E-mail" class="py-2" color="Warning" v-model="email" />
                        <ui-entry :rules="rules.password" label="Password" class="py-2" v-model="password" />
                        <ui-h-box center>

                            <div class="flex">
                                <label for="" class="px-2 font-light">Remember-me</label>
                                <input type="checkbox" class="accent-amber-400">
                            </div>
                            <br>
                        </ui-h-box>
                        <ui-h-box center>

                            <button
                                class=" text-white mt-5 bg-gradient-to-r from-amber-300 to-orange-400 rounded-md shadow-lg font-sans text-2xl px-16 py-2 font-semibold hover:bg-gradient-to-r hoaver:from-amber-100 hover:to-orange-300"
                                submit="" @click="action">Login</button>
                        </ui-h-box>
                    </ui-form>

                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import InputComp from "../components/InputComp.vue";

const email = ref("");
const password = ref("");

const rules = {
  email: (value: string) => {
    return value && value.length || "Inavlid email";
  },
  password: (value: string) => {
    return (value && value.length) || "Inavlid password";
  },
  // username = 
};

const submitForm = () => {
  console.log("asdhashdasbudn");
};

</script>

<style>
.ui-alert {
    color: rgb(223, 223, 223);
}

.ui-button {
    border-color: white;
}

.ui-button:active,
.ui-button:focus {
    box-shadow: none;
}
</style>