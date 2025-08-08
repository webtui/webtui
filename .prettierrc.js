export default {
	bracketSameLine: true,
	semi: false,
	singleQuote: true,
	astroAllowShorthand: true,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	tabWidth: 4,
	useTabs: false,
};
