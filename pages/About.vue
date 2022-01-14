<template>
  <div class="about">

    <v-row style="height: 100px"></v-row>
    <h1>Welcome to Nam's Blog!</h1>

    <v-row style="height: 200px"></v-row>
    <v-btn
      color="white"
      value="feed"
      href="https://www.linkedin.com/in/namtruong2015/"
      >
      <img src="/blog/images/about/linkedin-icon.jpg" alt="linkedin icon" title="linkedin icon" width="30px" height="30px"/>
      <span>LinkedIn</span>
      
      <v-icon>Nam Truong</v-icon>
    </v-btn>
    
    <v-row style="height: 100px"></v-row>
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