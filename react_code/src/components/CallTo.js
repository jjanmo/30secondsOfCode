import React from 'react';

const CallTo = ({ phone, color, bgColor, children }) => (
    <div style={{ backgroundColor: bgColor }}>
        <a href={`tel:${phone}`} style={{ color: color }}>
            {children}
        </a>
    </div>
);

export default CallTo;
