import type {HorizontalNavigationLink} from "#ui/types";
import {UHorizontalNavigation} from "#components";

export const useLinks = () => {
    return [
        [{
            label: 'Accueil',
            to: '/',
        }],
        [{
            label: 'Qui suis-je ?',
            to: '/qui-suis-je',
        },
        {
            label: 'Événements',
            to: '/evenements',
        },
        {
            label: 'Services',
            to: '/services',
        },
        {
            label: 'Tarifs',
            to: '/tarifs',
        },
        {
            label: 'Contact',
            to: '/contact',
        },]
    ];
}