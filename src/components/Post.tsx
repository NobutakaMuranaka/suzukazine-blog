import { useState, useEffect } from "react";
import axios from "axios";
import Blog from "./Blog";

function Post() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    // Using axios to fetch the posts
    axios.get("http://suzukazine.local/wp-json/wp/v2/posts").then((res) => {
      // Saving the data to state
      setPosts(res.data);
    });
  };

  // Calling the function on page load
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="container flex max-w-4xl my-20 m-auto flex-wrap gap-20 justify-between :block ">
        {posts.map((item) => (
          <Blog post={item} />
        ))}
      </div>
    </>
  );
}

export default Post;
