import commonMetas from "~/commonMetas";

export const useFacebookMetas = () => {
    return {
        'og:title': commonMetas.title,
        'og:description': commonMetas.description,
        'og:type': 'website',
        'og:image': '/images/karen.webp',
    }
}