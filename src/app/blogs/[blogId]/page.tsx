import BlogDetails from "@/components/ui/BlogDetails";
import React from "react";

type TParams = {
  params: {
    blogId: string;
  };
};
const BlogDetailsPage: React.FC<TParams> = async ({ params }) => {
  const { blogId } = params;
  const data = await fetch(`http://localhost:8000/blogs/${blogId}`, {
    cache: "no-store",
  }).then((res) => res.json());
  return (
    <div>
      <BlogDetails blog={data} />
    </div>
  );
};

export default BlogDetailsPage;
