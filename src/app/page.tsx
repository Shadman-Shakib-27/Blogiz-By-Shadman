import LatestBlogs from "@/components/ui/LatestBlogs";
import Link from "next/link";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/blogs", {
    next: {
      revalidate: 30,
    },
    // Revalidate Mane 30 Second Por Por Refresh Hobe Auto
  });
  const blogs = await res.json();

  return (
    <>
      <LatestBlogs blogs={blogs} />
      <div className="text-center mb-4">
        <Link href="/blogs">
          <button className="btn btn-outline btn-accent">See All</button>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
