module.exports = {
    media: (url) => {
        let mediaMatch = /^@media-/
        if (mediaMatch.test(url)) {
            return url.replace(mediaMatch, 'https://onface.live/design/media/')
        }
        return url
    },
    package: (Component) => {
        Component.install = function(Vue) {
          Vue.component(Component.name, Component)
        }
        if (typeof window !== 'undefined' && window.Vue) {
            window.Vue.use(Component)
        }
        return Component
    }
}
