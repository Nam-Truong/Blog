<template>
  <div class="home">
    <img class="img" alt="Vue logo" src="../assets/IMG_5913.jpg">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class Home extends Vue {

  async created() {
    document.title = 'Nam-Truong Blog | Home'
  }
}
</script>

<style scoped>
.img {
  height: 30%;
  width: 30%;
}
</style>