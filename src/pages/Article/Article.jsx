import React from 'react'

export default function Article() {
  return (
    <>

      <section className='py-16 bg-neutral-950 text-amber-50'>
        <div className='max-w-7xl mx-auto grid place-items-start grid-cols-1'>
          <div className='mb-3 border border-amber-500 bg-amber-600/20 px-3 py-1 rounded-full text-gray-300'>مميز</div>
          <h2 className='text-center mb-3 text-6xl font-bold'>مقالات مختارة</h2>
          <div className='flex justify-between w-full items-center mb-16'>
            <h3 className='text-xl text-gray-500'>محتوى منتقى لبدء رحلة تعلمك</h3>
            <CapsulLink to="/blog" text="عرض الكل" className="bg-linear-to-l primary-color px-3 py-2 hover-effect" />
          </div>
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
