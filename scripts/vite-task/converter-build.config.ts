import { defineConfig } from "vite-plus";

export default defineConfig({
	run: {
		tasks: {
			bundle: {
				command: "tsdown src/index.ts --format esm --dts --clean",
				untrackedEnv: ["_"],
				input: [{ auto: true }, "!dist", "!dist/**"],
				output: ["dist/**"],
			},
		},
	},
});
