import React from "react";
import { useBlog } from "../../Store/BlogContext";

import BlogItem from "./BlogItem";

import classes from "./Blogs.module.css";

const Blogs = () => {
  const { blogs } = useBlog();
  const newBlogs = [];
  for (const key in blogs) {
    const blogsObj = {
      id: key,
      ...blogs[key],
    };
    newBlogs.push(blogsObj);
  }

  return (
    <section className={classes["blogs"]}>
      {newBlogs.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </section>
  );
};

export default Blogs;
