<template>
  <div>
    <div v-if="error.statusCode === 404">
      <h1>Page not found</h1>
      <img class="img" src="../assets/IMG_CryingKid.jpg">
    </div>
    <h1 v-else>An error occurred</h1>
    <h1>Please go to <NuxtLink to="/">Home Page</NuxtLink></h1>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>

<style scoped>
.img {
  height: 30%;
  width: 30%;
}
</style>