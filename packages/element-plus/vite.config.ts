import path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
// import {alias} from '../../scripts'

// @ts-ignore
export default defineConfig(async ({ command, mode }) => {
  let docsBuild = {
    base: '',
    build: {},
  };
  if (mode === 'docs') {
    docsBuild.base = './';
    docsBuild.build = {
      outDir: '../../docs/.vitepress/dist/element-plus',
    };
  } else {
    docsBuild.build = {
      rollupOptions: {
        external: ['element-plus', 'vue'],
      },
      lib: {
        entry: path.resolve(__dirname, './components/index.ts'),
        name: 'seaUi',
        fileName: '@element-plus',
        formats: ['es', 'cjs', 'umd', 'iife'],
      },
    };
  }

  return {
    server: {
      port: '3030',
    },
    plugins: [vue()],
    resolve: {
      //   alias: await alias()
    },
    ...docsBuild,
  };
});
