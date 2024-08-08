import type { Config } from "tailwindcss";

import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts,svg}"],
	safelist: ["dark"],
	theme: {},
};

export default config;