import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Blog from "./Blog";

interface Category {
  id: number;
  slug: string;
  name: string;
}

function Category() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [posts, setPosts] = useState([]);
  const [category, setCategory] = useState<Category | null>(null);

  const fetchCategory = () => {
    axios
      .get(
        `http://suzukazine.local/wp-json/wp/v2/categories?slug=${categoryName}`
      )
      .then((res) => {
        if (res.data.length > 0) {
          setCategory(res.data[0]);
        }
      });
  };

  const fetchPosts = (categoryId: number) => {
    axios
      .get(
        `http://suzukazine.local/wp-json/wp/v2/posts?categories=${categoryId}`
      )
      .then((res) => {
        setPosts(res.data);
      });
  };

  useEffect(() => {
    fetchCategory();
  }, [categoryName]);

  useEffect(() => {
    if (category) {
      fetchPosts(category.id);
    }
  }, [category]);

  return (
    <>
      <h2 className="text-3xl font-bold my-5 text-center">{categoryName}</h2>
      <div className="my-7">
        {posts.map((item) => (
          <Blog key={item.id} post={item} />
        ))}
      </div>
    </>
  );
}

export default Category;
