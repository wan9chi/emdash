import { defineConfig } from "vite-plus";

export default defineConfig({
	run: {
		tasks: {
			"compile-locales": "lingui compile --namespace es",
			bundle: {
				command: "tsdown",
				untrackedEnv: ["_"],
				input: [{ auto: true }, "!dist", "!dist/**"],
				output: ["dist/**"],
			},
			"copy-locales": {
				command: "node ./scripts/copy-locales.js",
				untrackedEnv: ["_"],
				input: [{ auto: true }, "!dist/locales", "!dist/locales/**"],
				output: ["dist/locales/**"],
			},
			styles: {
				command: "npx @tailwindcss/cli -i src/styles.css -o dist/styles.css --minify",
				untrackedEnv: ["_"],
				input: [{ auto: true }, "!dist/styles.css"],
				output: ["dist/styles.css"],
			},
		},
	},
});
