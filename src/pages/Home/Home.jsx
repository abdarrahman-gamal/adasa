import React from 'react'
import CapsulLink from '../../comonents/Tab/CapsulLink'

export default function Home() {
  return (
    <section>
      <div className='max-w-3xl mx-auto grid place-items-center grid-cols-1'>
        <div className='mb-3'>مرحباً بك في عدسة</div>
        <h1 className='text-center mb-2'>اكتشف فن<br />
          التصوير الفوتوغرافي</h1>
        <h3 className='mb-4'>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</h3>
        <div className='flex items-center gap-2 mb-3'>
          <CapsulLink to="/blog" text="استكشف المقالات" className="bg-linear-to-l from-blue-600 to-emerald-400 " />
          <CapsulLink to="/about" text="اعرف المزيد" className="hover:bg-linear-to-l from-blue-600 to-emerald-400 " /></div>
        <div></div>
      </div>
    </section>
  )
}
