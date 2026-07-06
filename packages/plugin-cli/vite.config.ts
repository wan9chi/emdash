import { defineConfig } from "vite-plus";

export default defineConfig({
	run: {
		tasks: {
			"generate-schema": {
				command: "node --no-warnings --experimental-strip-types scripts/gen-schema.ts",
				output: ["schemas/emdash-plugin.schema.json"],
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
