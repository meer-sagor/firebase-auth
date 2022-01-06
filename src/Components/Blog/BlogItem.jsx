import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Avatar from "../UI/Avatar";

import classes from "./BlogItem.module.css";
const BlogItem = (props) => {
  const { id, title, description, picture } = props.blog;

  return (
    <Card className={classes.blog}>
      <div className={classes["blog-img"]}>
        <Avatar src={picture} alt={title} />
      </div>
      <div className={classes["blog-content"]}>
        <h1>{title}</h1>
        <p>{description.slice(0, 180)}...</p>
      </div>
      <div className={classes["blog-actions"]}>
        <Button to={`/blog-details`}>read more</Button>
      </div>
    </Card>
  );
};

export default BlogItem;
