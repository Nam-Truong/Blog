
const BLOG_PORT = process.env.BLOG_PORT

module.exports = {
   devServer: {
      port: BLOG_PORT
   },

   transpileDependencies: [
     'vuetify'
   ]
}
