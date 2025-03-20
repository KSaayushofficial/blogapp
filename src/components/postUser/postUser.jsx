import React from 'react';

// const getData = async (userId) => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    
//   });

//   if (!response.ok) {
//     throw new Error("Something went wrong");
//   }
//   return response.json();
// }

const PostUser = async ({userId}) => {
      const user = await getData(userId);
      console.log(user);
  return (
    <div className='flex items-center gap-4'>
      {user.img && <Image
                    src={user.img}
                    height={50}
                    width={50}
                    alt="Author"
                    className="rounded-[50%] object-cover shadow-md"
                  />}
      <span className="text-gray-500 text-sm">Author</span>
      <p className="text-lg font-semibold">{user.username}</p>
    </div>
  );
}

export default PostUser