import commonMetas from "~/commonMetas";

export const useBaseMetas = () => {
    return {
        'twitter:title': commonMetas.title,
        'twitter:description': commonMetas.description,
        'twitter:card': 'website',
        'twitter:image': '/images/karen.webp',
    }
}