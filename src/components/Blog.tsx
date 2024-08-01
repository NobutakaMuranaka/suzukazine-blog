import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

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
    <div className="w-96 shadow-xl rounded-md">
      <Link to={`/post/${post.id}`}>
        {featuredImage && (
          <img
            src={featuredImage}
            className="w-full h-72 object-cover rounded-t-md"
            alt={post.title.rendered}
          />
        )}
        <div className="p-4">
          <p className="text-xs mb-2">
            {new Date(post.date).toLocaleDateString("ja-JP", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h2 className="text-lg">{post.title.rendered}</h2>
        </div>
      </Link>
    </div>
  );
}
