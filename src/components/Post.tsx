import { useState, useEffect } from "react";
import axios from "axios";
import Blog from "./Blog";

function Post() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    // Using axios to fetch the posts
    axios.get("https://suzukazine.local/wp-json/wp/v2/posts").then((res) => {
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
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl my-20 m-auto p-2 sm:p-0">
        {posts.map((item) => (
          <div key={item.id} className="flex justify-center">
            <Blog post={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Post;
