import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";

const manifest: Partial<ManifestOptions> = {
  name: "Magic 8 Ball",
  short_name: "Magic 8 Ball",
  start_url: "https://8ballwilltellyou.netlify.app/",
  icons: [
    {
      src: "/icon-72x72.png",
      sizes: "72x72",
      type: "image/png",
    },
    {
      src: "/icon-96x96.png",
      sizes: "96x96",
      type: "image/png",
    },
    {
      src: "/icon-128x128.png",
      sizes: "128x128",
      type: "image/png",
    },
    {
      src: "/icon-144x144.png",
      sizes: "144x144",
      type: "image/png",
    },
    {
      src: "/icon-152x152.png",
      sizes: "152x152",
      type: "image/png",
    },
    {
      src: "/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/icon-384x384.png",
      sizes: "384x384",
      type: "image/png",
    },
    {
      src: "/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
    {
      src: "/maskable_icon_x192.png",
      sizes: "196x196",
      type: "image/png",
      purpose: "maskable",
    },
    {
      src: "/logo-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any",
    },
  ],
  theme_color: "#242424",
  background_color: "#242424",
  display: "standalone",
  orientation: "portrait-primary",
  display_override: ["window-controls-overlay", "minimal-ui", "browser"],
  categories: ["entertainment", "lifestyle"],
  description:
    "Have a question? Get the answer quick by adding this app to your home screen!",
  screenshots: [
    {
      src: "screenshot1.png",
      sizes: "1080x1920",
      label: "Magic 8 Ball, the legendary fortune teller",
      type: "image/png"
    },
    {
      src: "screenshot2.png",
      sizes: "1080x1920",
      label: "Sometimes you'll have to ask again",
      type: "image/png"
    },
  ],
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      manifest: manifest,
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ],
});
