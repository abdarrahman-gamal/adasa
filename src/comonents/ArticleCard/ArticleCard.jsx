import React from 'react'
import CapsulLink from '../Tab/CapsulLink'

export default function ArticleCard({ image, title, id }) {
    return (
        <div className='grid grid-cols-2 bg-neutral-900 rounded-2xl border-neutral-700 border overflow-hidden relative' id={id}>
            <img className='' src={image} />
            <div className='p-5'>
                <h3 className='text-2xl'>
                    {title}
                </h3>
                <p><span className='text-gray-500'>إقرأ المزيد ... </span></p>
            </div>
            <CapsulLink to={`/blog/${id}`} text="إقرأ المقال" className="bg-linear-to-l primary-color px-3 py-2 bottom-5 left-5 absolute" />
        </div>
    )
}
