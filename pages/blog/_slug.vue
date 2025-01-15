<template>
  <article>
    <!-- <nuxt-content :document="article" />
     -->
    <h1>{{ article.title }}</h1>
    <p>{{ article.description }}</p>
    <img class='imga' :src="article.img" :alt="article.alt" />
    <p>last updated at: {{ formatDate(article.updatedAt) }}</p>


    <nuxt-content :document="article" />

    <nav>
        <ul>
            <li v-for="link of article.toc" :key="link.id">
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
            </li>
        </ul>
    </nav>

    <author :author="article.author" />

    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
  export default {

    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug).fetch()

        const authors = await $content('authors')
        .only(['details', 'slug'])
        .fetch()
      
        const author = authors.find( author => author.slug === article.author)
        article.author = author ? author.details : article.author

        const [prev, next] = await $content('articles')
                                .only(['title', 'slug'])
                                .sortBy('createdAt', 'asc')
                                .surround(params.slug)
                                .fetch()

        return {
        article,
        prev,
        next
        }
    },

    methods: {
        formatDate(date) {
            const options = { year: 'numeric', 
                              month: 'long', 
                              day: 'numeric', 
                              hour: 'numeric', 
                              minute: 'numeric' }

            return new Date(date).toLocaleDateString('en', options)
        }
    }
  }
</script>

<style>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }

  .nuxt-content  {
    text-align: left;
    padding-left: 10%;
    padding-right: 10%;
  }

  .icon.icon-link {
    background-image: url('~assets/svg/icon-hashtag.svg');
    display: inline-block;
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
  }
</style>

<style scoped>
.imga {
  height: 2in !important;
  width: 2in !important;
}
</style>