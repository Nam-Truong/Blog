<template>
  <div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
  }
})
export default class Home extends Vue {

  async beforeCreate() {
    this.$router.push( '/blog/Index')
  }

}
</script>
