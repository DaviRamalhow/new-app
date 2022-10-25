<template>
  <div class="text-center bg-slate-900 " >
    <nav class="py-7">
      <router-link to="/" class="px-2">Home</router-link> <router-link to="/about" class="px-2">About</router-link>
    </nav>
    <router-view class="intro-x" v-slot="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </router-view>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
nav {
  a {
    font-weight: bold;
    color: rgb(83, 83, 83);

    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>