<template>
  <div class="about">
    <h1>Welcome to Nam's Blog!</h1>
    <v-text-field v-model="$store.state.counter" placeholder="Hey, this is Text-Field" disabled>  </v-text-field>
    <v-divider />
    <v-btn block elevation="2" color="primary" @click="increment()" >Increase counter</v-btn>
  
   
  </div>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
  }
})
export default class About extends Vue {


  increment() {

    this.$store.commit('increment')
  }
  

  async mounted() {
    document.title = 'Nam-Truong Blog | About'

    setTimeout(() => {
      this.$store.commit('initState')
    }, 100);
  }



  
}
</script>