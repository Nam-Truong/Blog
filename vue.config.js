
const BLOG_PORT = process.env.BLOG_PORT

module.exports = {

   publicPath: '/Blog/',
   devServer: {
      port: BLOG_PORT
   },

   transpileDependencies: [
     'vuetify'
   ],
   outputDir: 'docs',
}
