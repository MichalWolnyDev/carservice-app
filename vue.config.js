module.exports = {
    devServer: {
        proxy: 'https://wsb.hexagos.net/'
    },
    css: {
        loaderOptions: {
            scss: {
                prependData: `
                    @import "@/assets/scss/_variables.scss";
                    @import "@/assets/scss/_global.scss";
                    @import "@/assets/scss/_title.scss";
                `
            }
        }
    }
}