<script setup>

</script>

<template>
  <component :is="this.$route.meta.layout || 'div'">
    <router-view v-model:layout.sync="layout" />
  </component>
</template>

<style scoped>

</style>
