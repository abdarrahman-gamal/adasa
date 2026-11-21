import React from 'react'
import CapsulLink from '../../comonents/Tab/CapsulLink'
import ArticleCard from '../../comonents/ArticleCard/ArticleCard'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

export default function Article({ posts }) {
  const { id } = useParams()
  const article = posts[id - 1]
  return (
    <>

      <section className='mt-20 py-16 bg-neutral-950 text-amber-50'>
        <div className='max-w-7xl mx-auto grid place-items-start grid-cols-1'>
          <div className='mb-3 border border-amber-500 bg-amber-600/20 px-3 py-1 rounded-full text-gray-300'>مميز</div>
          <h2 className='text-center text-3xl font-bold mb-7 w-full'>{article.title}</h2>
          <img src={article.image} />
          <p>
            <ReactMarkdown
              components={{
                h2: ({ node, ...props }) => (
                  <h2 className="text-2xl font-bold text-amber-500 mt-8 mb-4" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="text-gray-300 leading-relaxed mb-4" {...props} />
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>
          </p>
        </div>
      </section>

    </>
  )
}
