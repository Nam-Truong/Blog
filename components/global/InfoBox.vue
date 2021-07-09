<template>
  <div class="p-4 mb-4 text-red bg-blue-500">
   <p> <slot name="info-box">default
      
    </slot> </p>
    <a :href='placeholder'>  {{ placeholder }}
      </a>
      <v-text-field :placeholder="placeholder"> </v-text-field>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {
  }
})
export default class InfoBox extends Vue {

  @Prop(String)   placeholder: string | boolean | undefined

}
</script>