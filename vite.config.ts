import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "path";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/",
  build: {
    outDir: path.resolve(process.cwd(), "src/dist"), // 出力ディレクトリをsrc/distに設定
    assetsDir: "assets", // アセットディレクトリを設定
    rollupOptions: {
      input: {
        main: path.resolve(process.cwd(), "index.html"), // エントリーポイントを設定
      },
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  server: {
    watch: {
      usePolling: true, // ファイルの変更をポーリングで監視
    },
    open: true, // ローカルサーバー起動時にブラウザを自動で開く
  },
});
