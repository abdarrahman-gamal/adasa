import React from 'react'
import CapsulLink from '../../comonents/Tab/CapsulLink'

export default function About() {
  return (
    <section className='pt-16 mt-20 bg-neutral-950 text-amber-50 bg-[linear-gradient(rgba(128,128,128,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.2)_1px,transparent_1px)] bg-size-[60px_60px] min-h-screen'>
      <div className='max-w-3xl mx-auto grid place-items-center grid-cols-1'>
        <div className='mb-3 border border-amber-500 bg-amber-600/20 px-3 py-1 rounded-full text-gray-300'>من نحن</div>
        <h1 className='text-center mb-10 text-7xl font-bold'>مهمتنا هي  <span className='text-orange-400'>الإعلام والإلهام</span></h1>
        <h3 className='mb-16 text-2xl text-gray-500 text-center'>مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.</h3>
        <div className='flex items-center mb-3 gap-8'>
          <CapsulLink to="/blog" text="استكشف المقالات" className="bg-linear-to-l primary-color text-2xl px-6 py-4 hover-effect" />
          <CapsulLink to="/about" text="اعرف المزيد" className="hover:bg-linear-to-l primary-color border border-gray-800 text-2xl px-6 py-4" /></div>
        <div className='p-20 text-9xl'> ☝️ </div>
      </div>
    </section>
  )
}
