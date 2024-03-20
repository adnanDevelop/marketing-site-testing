import React from "react";
import BlogHero from "../component/BlogSection/BlogHero";
import BlogCard from "../component/BlogSection/BlogCard";

const Blog = () => {
  document.title = "GoMarkho-Blog Page";

  const blogtitle = {
    title: "News & Articles",
    content: "Stay tuned for more updates!",
  };

  return (
    <main>
      <BlogHero title={blogtitle.title} content={blogtitle.content} />
      <BlogCard />
    </main>
  );
};

export default Blog;
