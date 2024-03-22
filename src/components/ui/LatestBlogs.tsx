import BlogCard from "./BlogCard";
import LatestBlogCard from "./LatestBlogCard";

const LatestBlogs = ({ blogs }) => {
  return (
    <div className="w-[90%] mx-auto ">
      <h1 className="text-center text-4xl mt-5">
        Latest Blogs From <span className="text-accent">Blogiz</span>
      </h1>
      <p className="text-center text-xl w-2/4 mx-auto">
        <i className="text-gray-400 ">
          Dive into the fascinating world of quantum computing, where unlocking
          unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-2 gap-4 mt-5 mb-5">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-5 mb-5">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
