import React from 'react';
import { Img, A, StringInterpolator } from '../helpers';

export const PatrickItem = ({ image, link, text, alt }) => (
    <div className="patrick-item">
        <A href={link}>
            <Img src={image} alt={alt} />
            <StringInterpolator text={text} />
        </A>
    </div>
);
