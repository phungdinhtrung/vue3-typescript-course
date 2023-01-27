import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";
import AutoImport from 'unplugin-auto-import/vite'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers'

export default ({ mode }) => {
  // Load config-level env vars; in src: can use import.meta.env.VITE_APP_PORT
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [
      vue(),

      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        extensions: ['vue'],
        dirs: [
          { dir: 'src/pages', baseRoute: '' }
        ],
      }),

      // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        fullInstall: true,
        include: [path.resolve(__dirname, 'src/locales/**')],
      }),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        dts: "src/components.d.ts",
        types: [{
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        }],
        resolvers: [
          PrimeVueResolver()
        ]
      }),

      // https://github.com/antfu/unplugin-auto-import
      AutoImport({ 
        include: [
          /\.[tj]s?$/, // .ts, .js
          /\.vue$/, /\.vue\?vue/, // .vue
        ],
        imports: [
          "vue",
          "vue-router",
          "pinia",
          
        ],
        dts: "src/auto-imports.d.ts",
        dirs: [ // Folder auto imports to create global variables
          "src/composables/js",
          "src/types",
          "src/stores/**"
        ],
        vueTemplate: true,
      }),
    ],

    // Path alias
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },

    // Server
    server: {
      port: process.env.VITE_CLIENT_PORT,
      watch: {
        usePolling: true
      }
    }
  });
}

