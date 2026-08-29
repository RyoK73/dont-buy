import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()], // プラグイン
  test: {
    environment: "jsdom",
    globals: true, // it,expect,describeなどのグローバル化,renderの自動クリーンアップ
    setupFiles: "./src/setupTests.ts", // セットアップファイルでjs-domを事前import
    env: {
      DEBUG_PRINT_LIMIT: "100",
    },
    reporters: ["verbose"], // vitestの表示方式
  },
  resolve: { tsconfigPaths: true }, // path(@)の解決
});
