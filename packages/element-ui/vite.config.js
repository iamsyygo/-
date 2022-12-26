import path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig(async ({ command, mode }) => {
    let docsBuild = {
        base: '',
        build: {},
    };
    if (mode === 'docs') {
        docsBuild.base = './';
        docsBuild.build = {
            outDir: '../../docs/.vitepress/dist/element-ui',
        };
    } else {
        docsBuild.build = {
            rollupOptions: {
                external: ['element-ui', 'vue'],
            },
            lib: {
                entry: path.resolve(__dirname, './components/index.js'),
                name: 'seaUi',
                fileName: '@element-ui',
                formats: ['es', 'cjs', 'umd', 'iife'],
            },
        };
    }

    return {
        server: {
            port: '3031',
        },
        plugins: [vue()],
        resolve: {
            //   alias: await alias()
        },
        ...docsBuild,
    };
});
