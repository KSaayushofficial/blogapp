import PostCard from "@/components/postCard/PostCard";
import React from "react";

// API FETCH(Not in use):
// const getData = async ()=>{
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-cache"});

//   if(!response.ok){
//     throw new Error("Something went wrong");
//   }
//   return response.json();
// }

const BlogPage = async () => {

  // const posts = await getData();

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
        Our Latest Articles ✨
      </h1>

      {/* Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="transform transition duration-300 hover:scale-105"
          >
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
