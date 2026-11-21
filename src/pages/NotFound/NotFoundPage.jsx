import React from 'react'
import CapsulLink from '../../comonents/Tab/CapsulLink'

export default function NotFoundPage() {
    return (
        <section className='pt-16 mt-20 bg-neutral-950 text-amber-50 bg-[linear-gradient(rgba(128,128,128,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(128,128,128,0.2)_1px,transparent_1px)] bg-size-[60px_60px] min-h-screen'>
            <div className='max-w-3xl mx-auto grid place-items-center grid-cols-1'>
                <div className='mb-3 border border-amber-500 bg-amber-600/20 px-3 py-1 rounded-full text-gray-300'>عذرا الصفحة غير موجودة</div>
                <h1 className="flex justify-center items-center mb-20 text-9xl font-bold">
                    <span className="-mx-5">4️⃣</span>
                    <span className="-mx-5">0️⃣</span>
                    <span className="-mx-5">4️⃣</span>
                </h1>
                <div className='flex items-center mb-3 gap-8'>
                    <CapsulLink to="/blog" text="استكشف المقالات" className="bg-linear-to-l primary-color text-2xl px-6 py-4 hover-effect" />
                    <CapsulLink to="/about" text="اعرف المزيد" className="hover:bg-linear-to-l primary-color border border-gray-800 text-2xl px-6 py-4" /></div>
                <div className='p-20 text-9xl'> 😁 </div>
            </div>
        </section>
    )
}
