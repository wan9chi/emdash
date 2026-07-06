import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			// Resolve @emdash-cms/blocks from source for HMR
			"@emdash-cms/blocks": fileURLToPath(new URL("../src/index.ts", import.meta.url)),
		},
	},
	run: {
		tasks: {
			bundle: {
				command: "vite build",
				untrackedEnv: ["_"],
				input: [
					{ auto: true },
					"!dist",
					"!dist/**",
					"!node_modules/.vite-temp",
					"!node_modules/.vite-temp/**",
				],
				output: ["dist/**"],
			},
		},
	},
});
