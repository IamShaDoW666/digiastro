/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
            center: true, padding: {
                DEFAULT: '1rem', sm: '1rem', lg: '1rem', xl: '1rem', '2xl': '1rem',
            },
        },
		extend: {
			colors: {
				light: {
				"hikvision": '#d7150e',
				  "primary": "#EBF3FA",
				  "secondary": "#E3EDF7",
				  "blue-dark": "#31456A",
				  "blue-light": "#7687A1",
				},
				dark: {
				  "blue-light": "#7687a1",
				},
				gray: {
				  "light-1": "#E4EBF5",
				  "light-2": "#c8d0e7",
				  "light-3": "#bec8e4",
				  "light-4": "#ffffff5e",
				  "dark": "#35393E",
				},
			  },
			  opacity: {
				0: "0",
				25: ".25",
				50: ".5",
				75: ".75",
				80: ".8",
				100: "1",
			  },
			  backgroundImage: {
				"gradient-main":
				  "linear-gradient(210.55deg, #EBF2F9 19.14%, #C6D7EB 154.68%)",
				"gradient-box-light":
				  "linear-gradient(180deg, #F1F5F8 0%, #EBF3FA 0.01%, #DDE7F3 53.92%, #E6F0F9 100%)",
				"gradient-main-dark":
				  "linear-gradient(112.71deg, #4D535C -7.06%, #171C21 50.9%, #121417 107.91%)",
				"gradient-box-dark":
				  "linear-gradient(169.29deg, #262B2F -0.68%, #16191D 74.03%)",
				"box-dark":
				  "radial-gradient(51.95% 152.6% at 26.24% -102.6%, rgba(252, 119, 23, 0.32) 0%, rgba(238, 131, 53, 0) 100%), linear-gradient(144.05deg, #32383E -69.07%, #17191C 122.22%)",
				"buttons-box-dark":
				  "linear-gradient(94.6deg, #2F3439 -72.68%, #26292E 26.94%, #17191C 185.78%)",
				"button-curved-default":
				  "radial-gradient(315.18% 315.18% at -124.11% -101.79%, #B9CCE2 11.1%, #FFFFFF 85.21%), #E3EDF7",
				"button-curved-default-dark":
				  "linear-gradient(146.19deg, #23272B -6.95%, #17191C 91.44%)",
				"button-curved-pressed-dark":
				  "linear-gradient(327.43deg, #32383E -77.68%, #17191C 87.35%)",
				"gradient-card-dark":
				  "linear-gradient(210.55deg, #353A40 -3.02%, #121416 93.08%),linear-gradient(244.98deg, rgba(80, 89, 98, 0.4) 11.49%, rgba(0, 0, 0, 0) 53.04%, rgba(0, 0, 0, 0.4) 100%)",
				"button-flat-border":
				  "linear-gradient(130.18deg, #FFFFFF 35.92%, rgba(55, 83, 111, 0.4) 190.57%)",
			  },
			  boxShadow: {
				"box-light":
				  "-16px -16px 40px rgba(255, 255, 255, 0.8), 16px 4px 64px rgba(18, 61, 101, 0.3), inset -8px -6px 80px rgba(255, 255, 255, 0.18)",
				"button-curved-default":
				  "-4px -2px 16px rgba(255, 255, 255, 0.7), 4px 2px 16px rgba(136, 165, 191, 0.38)",
				"button-curved-pressed":
				  "inset -4px -4px 16px rgba(255, 255, 255, 0.8), inset 4px 4px 12px rgba(136, 165, 191, 0.4)",
				"button-flat-nopressed":
				  "-4px -2px 16px #FFFFFF, 4px 2px 16px rgba(136, 165, 191, 0.48)",
				"button-flat-pressed":
				  "inset -3px -3px 7px #FFFFFF, inset 3px 3px 7px rgba(136, 165, 191, 0.48)",
				"box-down-light":
				  "inset -3px -3px 7px #FFFFFF, inset 2px 2px 5px rgba(136, 165, 191, 0.38)",
				"box-up":
				  "-4px -2px 16px #FFFFFF, 4px 2px 16px rgba(136, 165, 191, 0.54)",
				"box-dark":
				  "-4px -2px 16px rgba(195, 200, 205, 0.09), 4px 4px 18px rgba(0, 0, 0, 0.5)",
				"box-dark-out": "inset 2px 2px 2px rgba(26, 32, 38, 0.4)",
				"buttons-box-dark":
				  "-5px -6px 16px rgba(195, 200, 205, 0.04), 22px 22px 60px rgba(0, 0, 0, 0.5)",
				"button-curved-default-dark":
				  "-4px -4px 16px rgba(195, 200, 205, 0.06), 4px 4px 18px rgba(0, 0, 0, 0.6)",
				"button-curved-pressed-dark":
				  "-4px -2px 16px rgba(195, 200, 205, 0.07), 4px 4px 18px rgba(0, 0, 0, 0.44)",
				"sky-light":
				  "-16px 20px 40px rgba(215, 215, 215, 0.3), -2px 2px 24px rgba(22, 28, 47, 0.3), -16px 28px 120px rgba(0, 0, 0, 0.1)",
				"orange-dark":
				  "-16px 20px 40px rgba(244, 102, 0, 0.3), -2px 2px 24px rgba(255, 144, 64, 0.6), -16px 28px 120px rgba(244, 102, 0, 0.1)",
				'switcher':
				  "0px -6px 24px #FFFFFF, 0px 7px 16px rgba(104, 132, 157, 0.5)",
				'up': "0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #fff",
				'down': "inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #fff",
			  },
			  animation: {
				"fade-in": "fade-in 200ms ease-out 0s 1 normal forwards running",
				"fade-out": "fade-out 200ms ease-in 0s 1 normal forwards running",
				'expand': "expand 400ms linear 0s 1 normal forwards running",
				"slide-in": "slide-in 400ms linear 0s 1 normal forwards running",
				"slide-out": "slide-out 400ms linear 0s 1 normal forwards running",
				'collapse': "collapse 400ms linear 0s 1 normal forwards running",
			  },
		 



		},
	},
	plugins: [],
}
