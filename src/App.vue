<template>
  <router-view class="intro-x" v-slot="{ Component, route }">
    <component :is="Component" :key="route?.meta?.layout || 'none'" />
  </router-view>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
</style>