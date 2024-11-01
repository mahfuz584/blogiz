import { TBlogData } from "@/types/blogsType";
import React from "react";
import BlogCard from "../ui/BlogCard";
import LatestBlogCard from "../ui/LatestBlogCard";

type LatestBlogsProps = {
  blogs: TBlogData[];
};

const LatestBlogs: React.FC<LatestBlogsProps> = ({ blogs }) => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-2 justify-between w-[90%] gap-x-8 mx-auto ">
        {blogs?.slice(0, 2)?.map((blog, idx) => {
          return <LatestBlogCard key={idx} blog={blog} />;
        })}
      </div>
      <div className="grid grid-cols-3 justify-between w-[90%] gap-x-8 mx-auto mt-10">
        {blogs?.slice(3)?.map((blog, idx) => {
          return <BlogCard key={idx} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default LatestBlogs;
