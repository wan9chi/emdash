import { defineConfig } from "vite-plus";

export default defineConfig({
	run: {
		tasks: {
			bundle: {
				command: "tsdown",
				untrackedEnv: ["_"],
				input: [{ auto: true }, "!dist", "!dist/**"],
				output: ["dist/**"],
			},
		},
	},
});
