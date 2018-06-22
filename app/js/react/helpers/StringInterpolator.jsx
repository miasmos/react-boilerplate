import React from 'react';
const replace = require('react-string-replace');

const whitelistedTags = ['sup', 'sub', 'strong', 'em'];

// converts tags within {text} into react components
export const StringInterpolator = ({ text }) => {
    let result = [text];

    whitelistedTags.map(tag => {
        const regex = new RegExp(`<${tag}>(.*?)<\/${tag}>`);
        result = replace(result, regex, (match, index) => {
            const Tag = `${tag}`;
            return <Tag key={match + index}>{match}</Tag>;
        });
    });

    return result;
};
