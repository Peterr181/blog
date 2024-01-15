import React, { useState } from "react";
import Post from "./Post";
import PostCreator from "./PostCreator";

const Posts = () => {
  const [isPostAdding, setIsPostAdding] = useState(false);
  const [isNewPostAdded, setNewPostAdded] = useState<number>(0);

  const handleAddPost = () => {
    setIsPostAdding(!isPostAdding);
  };

  console.log(isNewPostAdded, "Zrobilo sie jej haha");

  return (
    <div>
      <Post isNewPostAdded={isNewPostAdded} setNewPostAdded={setNewPostAdded} />

      <div className=" border-b-2 border-gray-800 ">
        <div className="flex justify-center   max-w-[1400px] mx-auto items-center p-12 ">
          {!isPostAdding ? (
            <div
              className="bg-[#141414] border border-gray-800 p-5 flex gap-3 items-center rounded-md cursor-pointer customclass "
              onClick={handleAddPost}
            >
              <button>Add Post</button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 11H13V5C13 4.73478 12.8946 4.48043 12.7071 4.29289C12.5196 4.10536 12.2652 4 12 4C11.7348 4 11.4804 4.10536 11.2929 4.29289C11.1054 4.48043 11 4.73478 11 5V11H5C4.73478 11 4.48043 11.1054 4.29289 11.2929C4.10536 11.4804 4 11.7348 4 12C4 12.2652 4.10536 12.5196 4.29289 12.7071C4.48043 12.8946 4.73478 13 5 13H11V19C11 19.2652 11.1054 19.5196 11.2929 19.7071C11.4804 19.8946 11.7348 20 12 20C12.2652 20 12.5196 19.8946 12.7071 19.7071C12.8946 19.5196 13 19.2652 13 19V13H19C19.2652 13 19.5196 12.8946 19.7071 12.7071C19.8946 12.5196 20 12.2652 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11Z"
                  fill="#FFD11A"
                />
              </svg>
            </div>
          ) : (
            <PostCreator
              setIsPostAdding={setIsPostAdding}
              setNewPostAdded={setNewPostAdded}
              mode="adding"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
