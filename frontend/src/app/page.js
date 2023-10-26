'use client'
import BlogCard from "@/components/BlogCard";
import { client } from "./client";
import { useEffect, useState } from "react";

export default function Home() {

  const [blogs, setBlogs] = useState();

  useEffect(() => {
    fetchBlogs();
    // createSanityDocument();
    // createBlog();
  }, [])

  const fetchBlogs = async () => {
    const blogs = await client.fetch(`*[_type == "blog"]`);
    setBlogs(blogs);
  }

  const user = {
    _type: 'blog',
    content: 'Ram Mohan',
    author: 'vinit'
  }

  // const createBlog = ()=>{
  //     client.create(user).then((res)=>{
  //       console.log(res);
  //     })
  // }
  // const createSanityDocument = async () => {
  //     const response = await fetch('https://iohg8iht.api.sanity.io/v1/data/mutate/production', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer skVqFyVOFKH35Xoa7Mv2EAxym3cYLHxYyanASZ0qLLRkWBxdbtWBCNE5bPvcmhKiH6VEBVFHht2KfKH7ZxZy3lSrhwf75wxcTkSaP2UaGCF8R0Q4tRpv4lyCqlWcDkHouYMFGy8t7FE0LiGNMuGid8afEY0EenHNkuzRpy7vnaTMFGQr117l`,
  //       },
  //       body: JSON.stringify({
  //         mutations: [
  //           {
  //             create: {
  //               _type: 'blog',
  //               content: 'Ram Mohan',
  //               author: 'vinit'
  //             },
  //           },
  //         ],
  //       }),
  //     });
  //     console.log(response);
  //   }
  return (
    <main>
      <div className="flex flex-wrap">
        {blogs &&
          blogs.map((elem) => {
            return <BlogCard key={elem._id} blog={elem} />
          })
        }
      </div>
    </main>
  )
}


