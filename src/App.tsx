import { useState, useEffect } from "react";
import axios from "axios";
import Blog from "./components/Blog";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);
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
      <div>
        <a href="https://vitejs.dev" target="_blank"></a>
        <a href="https://react.dev" target="_blank"></a>
      </div>
      <Header />
      <h1 className="text-3xl font-bold underline">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        {posts.map((item) => (
          <Blog post={item} />
        ))}
      </div>
    </>
  );
}

export default App;
