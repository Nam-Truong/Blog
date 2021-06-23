
const BLOG_PORT = process.env.BLOG_PORT
const isProduction = process.env.NODE_ENV === "production"

module.exports = {

   publicPath: '/',
   devServer: {
      port: BLOG_PORT
   },

   transpileDependencies: [
     'vuetify'
   ],
   outputDir: 'docs',
   assetsDir: isProduction ? 'static' : 'assets'
}
