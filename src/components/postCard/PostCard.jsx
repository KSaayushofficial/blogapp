import Image from "next/image";
import Link from "next/link";
import React from "react";

const PostCard = ({post}) => {
  return (
    <div className="container mx-auto p-6">
      <div className="shadow-xl rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ">
        {/* Image Section */}
        <div className="relative w-full h-60 md:h-72">
          {post.img && <Image
            src={post.img}
            width={500} // Ensures visibility
            height={300}
            alt="Post Image"
            className="w-full h-full object-cover rounded-t-lg"
          />}
        </div>

        {/* Content Section */}
        <div className="p-6">
          <span className="text-gray-500 text-sm block mb-2">
            📅 01.01.2024
          </span>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
            {post.title}
          </h1>
          <p className="text-gray-600 mb-4">
            {post.body}
          </p>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-block text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-5 py-2 rounded-lg shadow-md"
          >
            READ MORE →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
