export default {
	run: {
		tasks: {
			"typecheck:astro": {
				command: "astro check",
				untrackedEnv: ["_"],
				input: [
					{ auto: true },
					"!.astro",
					"!.astro/**",
					{ pattern: "!**/.astro", base: "workspace" },
					{ pattern: "!**/.astro/**", base: "workspace" },
					"!node_modules/.modules.yaml",
					{ pattern: "!node_modules/.modules.yaml", base: "workspace" },
					"!node_modules/.vite",
					"!node_modules/.vite/**",
				],
				output: [],
			},
		},
	},
};
