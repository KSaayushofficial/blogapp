import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";
import Image from "next/image";
import React, { Suspense } from "react";

// const getData = async (slug) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
//     cache: "no-cache",
//   });

//   if (!response.ok) {
//     throw new Error("Something went wrong");
//   }
//   return response.json();
// };

export const metadata = async ({params}) => {
  const {slug} = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
}

const SinglePostPage = async ({params}) => {

  const {slug } = params;

  // const post = await getData(slug);
  const post = await getPost(slug);
  return (
    <div className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
       { post.img && <div className="relative h-[350px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/analysis.webp"
            layout="fill"
            objectFit="cover"
            alt="Blog Image"
            className=""
          />
        </div>}

        {/* Content Section */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 leading-tight">
            {post.title}
          </h1>

          {/* Author & Date Section */}
          <div className="flex items-center gap-4">
            
            <Suspense fallback={<p>Loading...</p>}>
              <PostUser userId={post.userId} />
            </Suspense>
            <div>
              <span className="text-gray-500 text-sm">Published</span>
              <p className="text-lg font-semibold">{post.createdAt.toString()}</p>
            </div>
          </div>

          {/* Blog Content */}
          <p className="text-gray-600 text-lg leading-relaxed">{post.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
