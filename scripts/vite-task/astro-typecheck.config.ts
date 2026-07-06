import { defineConfig } from "vite-plus";

export default defineConfig({
	run: {
		tasks: {
			"typecheck:astro": {
				command: "astro check",
				untrackedEnv: ["_"],
				input: [
					{ auto: true },
					"!.astro",
					"!.astro/**",
					"!node_modules/.modules.yaml",
					{ pattern: "!node_modules/.modules.yaml", base: "workspace" },
					"!node_modules/.vite",
					"!node_modules/.vite/**",
				],
				output: [".astro", ".astro/**"],
			},
		},
	},
});
