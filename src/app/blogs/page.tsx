import BlogCard from "@/components/ui/BlogCard";

const BlogsPage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    cache: "no-store",
  });
  const blogs = await res.json();
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-center text-4xl mt-5">
        All Blogs From <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-center text-xl w-2/4 mx-auto">
        <i className="text-gray-400 ">
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-4 my-10">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
