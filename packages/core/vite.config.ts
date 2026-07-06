import { defineConfig } from "vite-plus";

export default defineConfig({
	run: {
		tasks: {
			bundle: {
				command: "tsdown",
				untrackedEnv: ["_"],
				input: [
					{ auto: true },
					"!dist",
					"!dist/**",
					"!node_modules/emdash/dist",
					"!node_modules/emdash/dist/**",
				],
				output: ["dist/**"],
			},
		},
	},
});
