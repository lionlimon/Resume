import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

const svgIconsConfig = {
  iconDirs: [resolve(__dirname, './src/assets/icons')],
};

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

  plugins: [
    vue(),
    createSvgIconsPlugin(svgIconsConfig),
  ],
});
