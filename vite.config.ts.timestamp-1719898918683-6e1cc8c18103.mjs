// vite.config.ts
import { defineConfig } from 'file:///C:/Users/USER/Downloads/PWAs/PWA_Gagan/node_modules/.pnpm/vite@4.5.0_@types+node@20.9.0_terser@5.24.0/node_modules/vite/dist/node/index.js';
import react from 'file:///C:/Users/USER/Downloads/PWAs/PWA_Gagan/node_modules/.pnpm/@vitejs+plugin-react@4.1.1_vite@4.5.0_@types+node@20.9.0_terser@5.24.0_/node_modules/@vitejs/plugin-react/dist/index.mjs';
import { VitePWA } from 'file:///C:/Users/USER/Downloads/PWAs/PWA_Gagan/node_modules/.pnpm/vite-plugin-pwa@0.16.7_vite@4.5.0_@types+node@20.9.0_terser@5.24.0__workbox-build@7.0.0_@type_w7i6uum6az44xs335o3inffv5i/node_modules/vite-plugin-pwa/dist/index.js';
var manifestForPlugIn = {
    registerType: 'prompt',
    includeAssests: ['favicon.ico', 'apple-touc-icon.png', 'masked-icon.svg'],
    manifest: {
        name: 'tummoc',
        short_name: 'tummoc',
        description: 'Modified bus app',
        icons: [
            {
                src: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
        background_color: '#ffffff',
        theme_color: '#25414C',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
    },
};
var vite_config_default = defineConfig({
    plugins: [react(), VitePWA(manifestForPlugIn)],
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVU0VSXFxcXERvd25sb2Fkc1xcXFxQV0FzXFxcXFBXQV9HYWdhblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVVNFUlxcXFxEb3dubG9hZHNcXFxcUFdBc1xcXFxQV0FfR2FnYW5cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL1VTRVIvRG93bmxvYWRzL1BXQXMvUFdBX0dhZ2FuL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xyXG5cclxuXHJcbmNvbnN0IG1hbmlmZXN0Rm9yUGx1Z0luOiBhbnkgPSB7XHJcbiAgcmVnaXN0ZXJUeXBlOiAncHJvbXB0JyxcclxuICBpbmNsdWRlQXNzZXN0czogWydmYXZpY29uLmljbycsIFwiYXBwbGUtdG91Yy1pY29uLnBuZ1wiLCBcIm1hc2tlZC1pY29uLnN2Z1wiXSxcclxuICBtYW5pZmVzdDoge1xyXG4gICAgbmFtZTogXCJ0dW1tb2NcIixcclxuICAgIHNob3J0X25hbWU6IFwidHVtbW9jXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJNb2RpZmllZCBidXMgYXBwXCIsXHJcbiAgICBcImljb25zXCI6IFtcclxuICAgICAge1xyXG4gICAgICAgIFwic3JjXCI6IFwiL2FuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nXCIsXHJcbiAgICAgICAgXCJzaXplc1wiOiBcIjE5MngxOTJcIixcclxuICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgXCJzcmNcIjogXCIvYW5kcm9pZC1jaHJvbWUtNTEyeDUxMi5wbmdcIixcclxuICAgICAgICBcInNpemVzXCI6IFwiNTEyeDUxMlwiLFxyXG4gICAgICAgIFwidHlwZVwiOiBcImltYWdlL3BuZ1wiXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICBiYWNrZ3JvdW5kX2NvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICB0aGVtZV9jb2xvcjogJyMyNTQxNEMnLFxyXG4gICAgZGlzcGxheTogXCJzdGFuZGFsb25lXCIsXHJcbiAgICBzY29wZTogJy8nLFxyXG4gICAgc3RhcnRfdXJsOiBcIi9cIixcclxuICAgIG9yaWVudGF0aW9uOiAncG9ydHJhaXQnXHJcbiAgfVxyXG59XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBWaXRlUFdBKG1hbmlmZXN0Rm9yUGx1Z0luKV0sXHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVCxTQUFTLG9CQUFvQjtBQUM3VSxPQUFPLFdBQVc7QUFDbEIsU0FBUyxlQUFlO0FBR3hCLElBQU0sb0JBQXlCO0FBQUEsRUFDN0IsY0FBYztBQUFBLEVBQ2QsZ0JBQWdCLENBQUMsZUFBZSx1QkFBdUIsaUJBQWlCO0FBQUEsRUFDeEUsVUFBVTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLElBQ1osYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFFBQ1AsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxrQkFBa0I7QUFBQSxJQUNsQixhQUFhO0FBQUEsSUFDYixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxXQUFXO0FBQUEsSUFDWCxhQUFhO0FBQUEsRUFDZjtBQUNGO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sR0FBRyxRQUFRLGlCQUFpQixDQUFDO0FBQy9DLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
