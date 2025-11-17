import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: "0.0.0.0", // Makes it accessible on the network
    port: 5173, // Change if needed
    strictPort: true, // Ensures it doesn't switch ports
  },
});
