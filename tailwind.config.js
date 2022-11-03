/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				LogoColor: "#F7DF1E",
				NavbarBgColor: "#04293c",
				Navbar_text_color: "#55758a",
				bntColor: "#cd7059",
				TextColor: "#04293c",
			},
			fontFamily: {
				Poppins: ["Poppins", " sans-serif"],
				Arimo: ["Arimo", " sans-serif"],
				Roboto: ["Roboto", " sans-serif"],
			},
		},
	},
	plugins: [],
};
