import LatestBlogCard from "@/components/ui/LatestBlogCard";
import { TBlogData } from "@/types/blogsType";

const BlogsPage = async () => {
  const blogsData = await fetch("http://localhost:8000/blogs", {
    cache: "no-store",
  }).then((res) => res.json());
  return (
    <div>
      <div className="grid grid-cols-3 justify-between w-[90%] gap-x-8 mx-auto ">
        {blogsData?.map((blog: TBlogData, idx: number) => {
          return <LatestBlogCard key={idx} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default BlogsPage;
