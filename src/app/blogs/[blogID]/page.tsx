import BlogDetails from "@/components/ui/BlogDetails";

interface BlogID {
  params: {
    blogID: string;
  };
}
// generateStaticParams() SSG Ba Static Site Generation Er Maddhome Nirdisto Koyekta Ke Static Vabe Load Kore Rakhe Build Time E.
export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const blogs = await res.json();
  return blogs.slice(0, 3).map((blog) => ({
    blogID: blog.id,
  }));
};

const DynamicBlogPage = async ({ params }: BlogID) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogID}`, {
    cache: "no-store",
  });
  const blog = await res.json();
  return (
    <div className="my-10">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default DynamicBlogPage;
