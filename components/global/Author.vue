<template>
  <div>
    <img class="imga" :src="author.image" />
    <div>
      <h4>Author</h4>
      <p>{{ author.name }}</p>
      <p>{{ author.bio }}</p>
    </div>
  </div>
</template>


<script>
  export default {
    props: {
      author: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>
.imga {
  height: 2in !important;
  width: 2in !important;
}
</style>