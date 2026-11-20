import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CapsulTab({ text, to }) {
  return (
    <NavLink to={to} className='rounded-full py-1 px-2 items-center flex'>{text}</NavLink>
  )
}
