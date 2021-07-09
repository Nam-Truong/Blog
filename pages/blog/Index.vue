<template>
  <v-container>
    <v-row justify="center">
      <br>
      <NuxtLink to="/blog/ArticlesSearch">Search blog posts</NuxtLink>
    </v-row>

    <v-row style="height: 20px"></v-row>
    <v-row style="height: 20px">
      <v-divider></v-divider>
    </v-row>

    <v-row justify="center">
      <v-container>
        <v-row justify="center" v-for="article of articles" :key="article.slug">

          <v-col md='4'><img class='img' :src="article.img" /></v-col>
          <v-col md='4'>
            <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
              <h2>{{ article.title }}</h2>
            </NuxtLink>
            by {{ article.author.name }}
          </v-col>
          <v-col md='4'>
            {{ article.description }}
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
  }
})
export default class BlogIndex extends Vue {

  async mounted() {
    document.title = 'Nam-Truong Blog | Blog Posts'
  }

  async asyncData({ $content, params} : 
                    {$content: any, params: any}) {

    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()
    
    
    const authors = await $content('authors')
      .only(['details', 'slug'])
      .fetch()
    
    articles.forEach((article: any) => {

      const author = authors.find( (author: any) => author.slug === article.author)
      article.author = author ? author.details : article.author
    });
    
    return {
      articles
    }
  }
}
</script>


<style lang="scss">

.img {
  height: 40px;
  width: 20px;
}

</style>