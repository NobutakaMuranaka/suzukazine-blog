import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
