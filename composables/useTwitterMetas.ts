import commonMetas from "~/commonMetas";

export const useTwitterMetas = () => {
    return {
        'twitter:title': commonMetas.title,
        'twitter:description': commonMetas.description,
        'twitter:card': 'website',
        'twitter:image': '/images/karen.webp',
    }
}