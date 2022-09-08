import React from "react";
import { useParams } from "react-router-dom";

const ReadPost = () => {
  let { id, title } = useParams();
  title = title?.replace(/-/g, " ");

  return (
    <div>
      <h1>{id}</h1>
      <h1>{title}</h1>
    </div>
  );
};

export default ReadPost;
