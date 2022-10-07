<template>
    <div class="flex items-center justify-center min-h-screen bg-slate-900">
        <div class="flex max-w-xl max-h-2xl "> 
            <div class="w-96 h-96 bg-amber-600 relative left-12">
                
            </div>
            <div class="flex flex-col z-30">
            <ui-alert soft color="danger" class="text-center mb-4 text-white">
                Invalid password or e-mail.
            </ui-alert>
            <div class="flex flex-col w-96 h-96 p-4 bg-white rounded-2xl shadow-2xl space-y-1 justify-center items-center">
            <ui-form>
                <ui-entry label="E-mail" class="py-2 font-sans text-xl font-semibold" color="Warning"/>
                <ui-entry label="Password" class="py-2 font-sans text-xl font-semibold"/>
            </ui-form>


                <div class="flex">
                    <label for="" class="px-2">Remember-me</label>
                    <input type="checkbox" class="accent-amber-400">
                </div>
                <br>
                

                <button class=" text-white mt-5 bg-gradient-to-r from-amber-300 to-orange-400 rounded-md shadow-lg font-sans text-2xl px-16 py-2 hover:bg-gradient-to-r hoaver:from-amber-100 hover:to-orange-300" submit="">Login</button>
            </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const formData = ref({
  username:"",
  email: "",
  password: "",
  confirmPassword: "",
});

</script>


<style scoped>

</style>