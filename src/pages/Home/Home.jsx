import React from 'react'
import CapsulLink from '../../comonents/Tab/CapsulLink'
import ArticleCard from '../../comonents/ArticleCard/ArticleCard'

export default function Home({posts}) {
  return (
    <>
      <section className='pt-16 mt-20 bg-neutral-950 text-amber-50 bg-[linear-gradient(rgba(128,128,128,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.2)_1px,transparent_1px)] bg-size-[60px_60px] min-h-screen'>
        <div className='max-w-3xl mx-auto grid place-items-center grid-cols-1'>
          <div className='mb-3 border border-amber-500 bg-amber-600/20 px-3 py-1 rounded-full text-gray-300'>مرحباً بك في عدسة</div>
          <h1 className='text-center mb-10 text-7xl font-bold'>اكتشف <span className='text-orange-400'>فن</span><br />
            التصوير الفوتوغرافي</h1>
          <h3 className='mb-16 text-2xl text-gray-500'>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</h3>
          <div className='flex items-center mb-3 gap-8'>
            <CapsulLink to="/blog" text="استكشف المقالات" className="bg-linear-to-l primary-color text-2xl px-6 py-4 hover-effect" />
            <CapsulLink to="/about" text="اعرف المزيد" className="hover:bg-linear-to-l primary-color border border-gray-800 text-2xl px-6 py-4" /></div>
          <div className='p-20 text-9xl'> 👇 </div>
        </div>
      </section>

      <section className='py-16 bg-neutral-950 text-amber-50'>
        <div className='max-w-7xl mx-auto grid place-items-start grid-cols-1'>
          <div className='mb-3 border border-amber-500 bg-amber-600/20 px-3 py-1 rounded-full text-gray-300'>مميز</div>
          <h2 className='text-center mb-3 text-6xl font-bold'>مقالات مختارة</h2>
          <div className='flex justify-between w-full items-center mb-16'>
            <h3 className='text-xl text-gray-500'>محتوى منتقى لبدء رحلة تعلمك</h3>
            <CapsulLink to="/blog" text="عرض الكل" className="bg-linear-to-l primary-color px-3 py-2 hover-effect" />
          </div>
          <div className='grid grid-cols-1 gap-6'>

            {posts.slice(0, 3).map((post) => (
              <ArticleCard key={post.id} image={post.image} title={post.title} id={post.id} />
            ))}
          </div>
        </div>
      </section>
    </>

  )
}
