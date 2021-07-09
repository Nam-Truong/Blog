export default {

    server: {
        port: 80, // default: 3000
        host: '0.0.0.0', // default: localhost,
        timing: false
    },

    buildModules: [
        '@nuxt/typescript-build',
        
        // Simple usage
        '@nuxtjs/vuetify',
    ],

    vuetify: {
        /* module options */
    },

    modules: ['@nuxt/content'],

    generate: {
        dir: 'docs',
    },

    head: {
        link: [
          { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
        ]
    },
   
    plugins: ['~plugins/vuetify.ts'],

    components: true,

    content: {
        nestedProperties: ['author.name']
      },
    
    // static: {
    //     prefix: true
    // },

    target: 'static'
}