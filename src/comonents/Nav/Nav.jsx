import React from 'react'
import CapsulTab from '../Tab/CapsulTab'
import { Link } from 'react-router-dom'
import CapsulLink from '../Tab/CapsulLink'

export default function Nav() {
  return (
    <div className='w-full bg-gray-900 py-3'>
      <div className='w-full max-w-7xl mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='text-amber-50'>logo</div>
          <div className='text-amber-50'>
            <div>text 1</div>
            <div>text 2</div>
          </div>
        </div>
        <div className='w-fit flex gap-1 rounded-full bg-amber-500 p-1 items-center'>
          <CapsulTab text="home" to="/" />
          <CapsulTab text="blog" to="/blog" />
          <CapsulTab text="about" to="/about" />
        </div>
        <div className='flex items-center'>
          <div className='border-2 border-amber-100 rounded-lg text-amber-200'>Serch</div>
          <div>
            <CapsulLink to="/blog" className="bg-linear-to-l from-blue-600 to-emerald-400 " text="start read"/>
          </div>
        </div>
      </div>
    </div>
  )
}
