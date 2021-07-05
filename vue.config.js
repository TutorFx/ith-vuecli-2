module.exports = {
    pwa: {
        name: "ITH Pós Graduação",
        short_name: "ITH Pós Graduação",
        appleMobileWebAppCapable: true,
        themeColor: "#191A35",
        msTileColor: "#191A35",
        manifestOptions: {
          background_color: "#FFF"
        },
        start_url: "./index.html",
        display: "standalone",
        workboxOptions: {
            skipWaiting: true
        }
    },
    transpileDependencies: [
        'vuetify'
    ]
}
