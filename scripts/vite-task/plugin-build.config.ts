import { defineConfig } from "vite-plus";

export default defineConfig({
	run: {
		tasks: {
			bundle: {
				command: "node node_modules/@emdash-cms/plugin-cli/dist/index.mjs build",
				untrackedEnv: ["_"],
				input: [{ auto: true }, "!dist", "!dist/**"],
				output: ["dist/**"],
			},
		},
	},
});
