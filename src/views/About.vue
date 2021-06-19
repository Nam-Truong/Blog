<template>
  <div class="about">
    <h1>Welcome to Nam's Blog!</h1>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class About extends Vue {

  async created() {
    document.title = 'Nam-Truong Blog | About'
  }
}
</script>