'use client';
import React from 'react'

const Button = ({ buttonContent, style, onClick, className }) => {
    const defaultStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    return (
        <button className={`${defaultStyle} ${style} ${className}`} onClick={onClick}>
            {buttonContent}
        </button>

    )
}

export default Button;


