import { resolve } from 'path'
import AntdScssThemePlugin from '@igor-lemon/antd-scss-theme-plugin'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'antd02',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  alias: {
    images: resolve(__dirname, './assets/images'),
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // babel-plugin-import로 변경
    // 'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/components/form'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@Nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  vue: {
    transpileDependencies: ['vuex-module-decorators'],
  },

  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: false,
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es',
            style: true,
          },
        ],
      ],
    },
    env: {},
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
    transpile: ['ant-design-vue'],
    extend(config, { loaders }) {
      // https://github.com/igor-lemon/antd-scss-theme-plugin
      const plugins = [].concat(config.plugins)
      // TODO scss 테마 파일 위치 지정
      plugins.push(new AntdScssThemePlugin('~theme.scss'))
      config.plugins = plugins

      loaders.less = AntdScssThemePlugin.themify(loaders.less)
    },
  },

  generate: {
    dir: 'dist',
    exclude: [], // string or RegExp
    fallback: '404.html',
  },
}
