import webpack from "webpack";

module.exports = {
  mode: "universal",

  /*
  ** Headers of the page
  */
  head: {
    title: "List Of DevOps Conferences In 2019",
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      ],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Find your next DevOps conference in 2019 from the most comprehensive list, maintained by a community of DevOps professionals. DevOps Conferences in USA, Europe, Asia and Australia &raquo;" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },

  /*
  ** Global CSS
  */
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/static/fonts/roboto.css"
  ],


  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-60153-41'
    }],
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt"
  ],

  plugins: [
    { src: "~/plugins/font-awesome" }
  ],

  /*
  ** Build configuration
  */
  build: {

    // analyze: {
    //   analyzerMode: 'static'
    // },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
      new webpack.ProvidePlugin({
        "_": "lodash"
      })
    ]
  }
};
