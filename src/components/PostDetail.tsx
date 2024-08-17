import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

interface Post {
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _links: {
    ["wp:featuredmedia"]: [
      {
        href: string;
      },
    ];
  };
}

function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [featuredImage, setFeaturedImage] = useState<string | undefined>();

  const fetchPost = () => {
    axios
      .get(`https://www.suzukazine.local/wp-json/wp/v2/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        if (res.data._links["wp:featuredmedia"]) {
          axios
            .get(res.data._links["wp:featuredmedia"][0].href)
            .then((response) => {
              setFeaturedImage(response.data.source_url);
            });
        }
      });
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen text-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 max-w-3xl">
      <div className="">
        <div className="">
          <h1 className="text-4xl font-bold mb-4 border-b-4 border-gray-400 pb-2">
            {post.title.rendered}
          </h1>
          {featuredImage && (
            <img
              src={featuredImage}
              alt={post.title.rendered}
              className="w-full h-auto mb-4 rounded-lg"
            />
          )}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
