import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CapsulTab({ text, to }) {
  return (
    <NavLink to={to} className='rounded-full pt-0.3 pb-1.5 px-3 flex items-center h-12 leading-none'>{text}</NavLink>
  )
}
