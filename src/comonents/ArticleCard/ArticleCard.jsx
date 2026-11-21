import React from 'react'

export default function ArticleCard({ image, title, id }) {
    return (
        <div className='grid grid-cols-2 bg-neutral-900 rounded-2xl border-neutral-700 border overflow-hidden' id={id}>
            <img className='' src={image}/>
            <div className='p-5'>
                <h3 className='text-2xl'>
                    {title}
                </h3>
                <p><span className='text-gray-500'>إقرأ المزيد ... </span></p>
            </div>
        </div>
    )
}
