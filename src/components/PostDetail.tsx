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
      }
    ];
  };
}

function PostDetail() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [featuredImage, setFeaturedImage] = useState<string | undefined>();

  const fetchPost = () => {
    axios
      .get(`http://suzukazine.local/wp-json/wp/v2/posts/${id}`)
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
    return <div>Loading...</div>;
  }

  return (
    <div className="post-detail">
      <h1>{post.title.rendered}</h1>
      {featuredImage && <img src={featuredImage} alt={post.title.rendered} />}
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
}

export default PostDetail;
