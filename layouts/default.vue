<template>
  <div id="app">
    <div id="nav">
      <NuxtLink to="/Home">Home</NuxtLink> |
      <NuxtLink to="/About">About</NuxtLink>
    </div>
    <Nuxt />
  </div>
</template>




<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.nuxt-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
