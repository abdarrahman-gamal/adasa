import React from 'react'
import CapsulTab from '../Tab/CapsulTab'
import { Link } from 'react-router-dom'
import CapsulLink from '../Tab/CapsulLink'

export default function Nav() {
  return (
    <section className='w-full bg-neutral-950/95 py-3 fixed top-0 text-amber-50 z-50'>
      <div className='w-full max-w-7xl mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='text-amber-50'>logo</div>
          <div className='text-amber-50'>
            <div>text 1</div>
            <div>text 2</div>
          </div>
        </div>
        <div className='w-fit flex gap-1 rounded-full bg-neutral-800 border-neutral-700 border p-1 items-center'>
          <CapsulTab text="الرئيسية" to="/" />
          <CapsulTab text="المدونة" to="/blog" />
          <CapsulTab text="من نحن" to="/about" />
        </div>
        <div className='flex items-center'>
          <div className='border-2 border-amber-100 rounded-lg text-amber-200'>Serch</div>
          <div>
            <CapsulLink to="/blog" className="bg-linear-to-l primary-color px-4 py-3 hover-effect" text="ابدأ القراءة"/>
          </div>
        </div>
      </div>
    </section>
  )
}
