import React from 'react';

export const A = ({ href = '#', newWindow = true, children, className }) => (
    <a
        className={className}
        href={href}
        rel="noreferrer nofollow"
        target={newWindow ? '_blank' : ''}
    >
        {children}
    </a>
);
