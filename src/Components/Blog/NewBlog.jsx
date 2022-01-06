import React, { useState } from "react";

import Input from "../UI/Input";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./NewBlog.module.css";
import { useBlog } from "../../Store/BlogContext";

const NewBlog = () => {
  const { blogs, setBlogs } = useBlog();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const blogSubmitHandler = (event) => {
    event.preventDefault();
    const newBlog = {
      id: Math.random().toString(),
      title,
      description,
    };
    setBlogs(newBlog);
  };
  console.log(blogs);
  return (
    <Card className={classes.form}>
      <form onSubmit={blogSubmitHandler}>
        <Input
          element="input"
          type="text"
          label="Title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          type="text"
          label="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Button>Add Blog</Button>
      </form>
    </Card>
  );
};

export default NewBlog;
