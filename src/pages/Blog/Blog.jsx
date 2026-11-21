import React from 'react'
import CapsulLink from '../../comonents/Tab/CapsulLink'
import ArticleCard from '../../comonents/ArticleCard/ArticleCard'

export default function Blog({ posts }) {
  return (
    <>

      <section className='mt-20 py-16 bg-neutral-950 text-amber-50'>
        <div className='max-w-7xl mx-auto grid place-items-start grid-cols-1'>
          <div className='mb-3 border border-amber-500 bg-amber-600/20 px-3 py-1 rounded-full text-gray-300'>مدونتنا</div>
          <h2 className='text-center mb-3 text-6xl font-bold'>استكشف مقالاتنا</h2>
          <h3 className='text-xl text-gray-500 mb-16'>اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</h3>
          <div className='grid grid-cols-1 gap-6'>

            {posts.map((post) => (
              <ArticleCard key={post.id} image={post.image} title={post.title} id={post.id} />
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
