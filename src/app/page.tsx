import LatestBlogs from "@/components/Home/LatestBlogs";

const HomePage = async () => {
  const blogsData = await fetch("http://localhost:8000/blogs", {
    next: {
      revalidate: 30,
    },
  }).then((res) => res.json());

  return (
    <>
      <LatestBlogs blogs={blogsData} />
    </>
  );
};

export default HomePage;
