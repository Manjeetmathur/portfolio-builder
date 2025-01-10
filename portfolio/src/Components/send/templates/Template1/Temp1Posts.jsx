import React from "react";
import { Link } from "react-router-dom";
import { RiExternalLinkFill } from "react-icons/ri";

const Temp1Posts = ({ post }) => {
  return (
    <div className="p-4 max-w-xs w-full mx-auto bg-gradient-to-b  from-gray-100 to-green-200">
      <div className="bg-gradient-to-b  from-gray-100 to-green-200 border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden group transform transition-all hover:scale-105 hover:shadow-xl">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-xl font-semibold text-gray-800">{post.postTitle}</h1>
          {post?.link?.length > 5 && (
            <Link to={`${post?.link}`} className="text-blue-500 hover:text-blue-700">
              <RiExternalLinkFill size={20} />
            </Link>
          )}
        </div>

        <Link to={`${post?.postImage?.imageUrl}`} className="block">
          <img
            src={`${post?.postImage?.imageUrl}`}
            alt={post.postTitle}
            className="w-full h-[250px] object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        <div className="p-4">
          <h2 className="text-sm text-gray-600">{post.postDescription.slice(0, 85)}...</h2>
        </div>
      </div>
    </div>
  );
};

export default Temp1Posts;
