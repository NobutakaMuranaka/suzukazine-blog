import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Blog from "./Blog";

interface Category {
  id: number;
  slug: string;
  name: string;
}

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  _links: any;
  date: string;
}

function Category() {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [category, setCategory] = useState<Category | null>(null);

  const fetchCategory = () => {
    axios
      .get(
        `https://suzukazine.local/wp-json/wp/v2/categories?slug=${categoryName}`
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
        `https://suzukazine.local/wp-json/wp/v2/posts?categories=${categoryId}`
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
      <div className="flex max-w-4xl my-20 m-auto flex-wrap gap-20 justify-between">
        {posts.map((item) => (
          <Blog key={item.id} post={item} />
        ))}
      </div>
    </>
  );
}

export default Category;
