import React from 'react';
import { PatrickItem } from './';

export const Patrick = ({ data }) => {
    const items = data.map((item, index) => (
        <PatrickItem {...item} key={index} />
    ));
    return <div id="patrick">{items}</div>;
};
