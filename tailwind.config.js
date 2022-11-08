/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				LogoColor: "#F7DF1E",
				BgColor: "#fafafa",
				Navbar_text_color: "#55758a",
				bntColor: "#cd7059",
				TextColor: "#04293c",
				lightprimary: "#ECF3FF",
			},
			fontFamily: {
				Poppins: "Poppins",
			},
		},
	},
	plugins: [],
};
