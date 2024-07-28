import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
import PostDetail from "./components/PostDetail";
import ContactPage from "./components/ContactPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />{" "}
        <Route path="/profile" element={<Profile />} />{" "}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
