'use client';
import React from 'react';

const DateShow = () => {
    const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" })
    return (
        <div>
            {date}
            
        </div>
    );
};

export default DateShow;