'use client'
import React from 'react'
import { client } from '@/app/client';
import  imageUrlBuilder from '@sanity/image-url';

const BlogCard = ({blog}) => {
  const builder  =  imageUrlBuilder(client)
  return (
    <>
        <div className='w-60 border-2 border-black m-2'>
             {/* <img src={builder.image(blog.image.asset._ref)} alt={blog.content} /> */}
             <p>{blog.content}</p>
        </div>
    </>
  )
}

export default BlogCard