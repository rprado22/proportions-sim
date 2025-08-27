import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change {REPO_NAME} if repo name changes
export default defineConfig({
  plugins: [react()],
  base: "/proportions-sim/",
});
