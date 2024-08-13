// components/PrivacyPolicy.tsx

import { useState, useEffect } from "react";
import axios from "axios";

interface Page {
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

function PrivacyPolicy() {
  const [page, setPage] = useState<Page | null>(null);

  const fetchPage = () => {
    // 固定ページのスラッグが "privacy-policy" であることを前提とします
    axios
      .get("https://www.suzukazine.local/wp-json/wp/v2/pages?slug=privacy-policy")
      .then((res) => {
        if (res.data.length > 0) {
          setPage(res.data[0]);
        }
      });
  };

  useEffect(() => {
    fetchPage();
  }, []);

  if (!page) {
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
            {page.title.rendered}
          </h1>
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          />
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
