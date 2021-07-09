<template>
  <div>
    <img class="img" alt="Vue logo" src="../assets/IMG_5913.jpg">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
  }
})
export default class Home extends Vue {

  async mounted() {
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