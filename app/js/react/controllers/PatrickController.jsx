import React from 'react';
import { Patrick } from '../views';
import { i18n } from '../../i18n';

export const PatrickController = ({ language, isMobile }) => {
    const data = [
        {
            image: 'images/patrick.jpg',
            link: 'http://1.com',
            text: i18n.patrick,
            alt: i18n.patrickAlt
        },
        {
            image: 'images/patrick.jpg',
            link: 'http://2.com',
            text: i18n.patrick,
            alt: i18n.patrickAlt
        },
        {
            image: 'images/patrick.jpg',
            link: 'http://3.com',
            text: i18n.patrick,
            alt: i18n.patrickAlt
        }
    ];

    return <Patrick data={data} />;
};
