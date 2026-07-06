import { defineConfig } from "vite-plus";

export default defineConfig({
	run: {
		tasks: {
			"typecheck:astro": {
				command: "astro check",
				untrackedEnv: ["_"],
				input: [{ auto: true }, "!.astro", "!.astro/**"],
				output: [".astro/**"],
			},
		},
	},
});
