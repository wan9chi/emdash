import { defineConfig } from "vite-plus";

export default defineConfig({
	run: {
		tasks: {
			"copy-lexicons": {
				command: "node scripts/copy-lexicons.mjs",
				untrackedEnv: ["_"],
			},
			bundle: {
				command: "tsdown",
				untrackedEnv: ["_"],
				input: [{ auto: true }, "!dist", "!dist/**"],
				output: ["dist/**"],
			},
		},
	},
});
