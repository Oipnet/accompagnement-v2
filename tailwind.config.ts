import type { Config } from "tailwindcss";

export default <Partial<Config>> {
    theme: {
        extend: {
            colors: {
                'lily': {
                    '50': '#f9f6f8',
                    '100': '#f5eef3',
                    '200': '#eddde8',
                    '300': '#d7b2cb',
                    '400': '#cb9bba',
                    '500': '#b87ca2',
                    '600': '#a26086',
                    '700': '#894d6e',
                    '800': '#72425b',
                    '900': '#613a4f',
                    '950': '#391e2d',
                },
            },
            fontFamily: {
                'dancing-script': ['Dancing Script'],
                'roboto': ['Roboto', 'sans-serif'],
            }
        }
    }
}