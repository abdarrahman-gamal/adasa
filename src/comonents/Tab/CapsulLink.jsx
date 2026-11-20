import React from 'react'
import { Link } from 'react-router-dom'

export default function CapsulLink({to, text, className}) {
    return (
        <Link to={to} className={`rounded-full py-1 px-2 items-center flex ${className}`}>{text}</Link>
    )
}
