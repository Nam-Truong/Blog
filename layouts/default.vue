<template>
  <v-app>
    <v-container id="app" class="grey lighten-5 mb-6">
      <v-row id="nav" justify="center">
        <v-col>
          <NuxtLink to="/Home">
            <v-card class="pa-2">
              Home
            </v-card>
          </NuxtLink>
        </v-col>
        <v-col>
          <NuxtLink to="/blog/Index">
            <v-card class="pa-2" tile>
              My Blog
            </v-card>
          </NuxtLink>
        </v-col>
        <v-col md="4">
          <NuxtLink to="/About">
            <v-card class="pa-2" tile>
              About
            </v-card>
          </NuxtLink>
        </v-col>
      </v-row>
      <v-row>
        <v-main class='main-container'>
          <Nuxt />
        </v-main>
      </v-row>
    </v-container>
  </v-app>
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
  font-size: 0.3in;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.nuxt-link-exact-active {
      color: #42b983;

      div {
        color: #42b983;
      }
    }
  }
  
}

.main-container {

  width: 80%;
  align-content: center;

  // position: relative; 
  // top: 12cm ; 
  // left: 50%;
  // transform: translate(-50%, -50%);
}
</style>
