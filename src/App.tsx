import { useState, useEffect } from "react";
import axios from "axios";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
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
      <Header />
      <div>
        {posts.map((item) => (
          <Blog post={item} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
