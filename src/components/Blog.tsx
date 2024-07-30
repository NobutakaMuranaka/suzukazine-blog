import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Blog.css";

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _links: {
    ["wp:featuredmedia"]: [
      {
        href: string;
      }
    ];
  };
}

interface BlogProps {
  post: Post;
}

export default function Blog({ post }: BlogProps) {
  const [featuredImage, setFeaturedImage] = useState<string | undefined>();

  const getImage = () => {
    if (post._links["wp:featuredmedia"]) {
      axios.get(post._links["wp:featuredmedia"][0].href).then((response) => {
        setFeaturedImage(response.data.source_url);
      });
    }
  };

  useEffect(() => {
    getImage();
  }, [post]);

  return (
    <div className="container">
      <div className="blog-container">
        <Link to={`/post/${post.id}`}>
          <p className="blog-date">
            {new Date(post.date).toLocaleDateString("ja-JP", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h2 className="blog-title">{post.title.rendered}</h2>
          <p
            className="blog-excerpt"
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          {featuredImage && (
            <img
              src={featuredImage}
              className="mask"
              alt={post.title.rendered}
            />
          )}
        </Link>
      </div>
    </div>
  );
}
