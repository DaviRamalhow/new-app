<template>
    <div class="flex flex-col">
        <label class="text-2xl font-sans font-semibold py-2 px-2" :for=props.name2>{{props.name2}}</label>
        <input id="password" name="password" type="password" autocomplete="current-password"
                placeholder="password" required
                class="mx-2 font-sans text-xl border border-solid border-blue-300 rounded-lg w-full focus:border-indigo-300 px-2">
        <p v-if="errMsg">{{ errMsg }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";


const errMsg = ref("");
const props = defineProps({
  name2: String,
});
</script>

<style scoped>

</style>
