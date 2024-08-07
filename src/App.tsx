import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
import PostDetail from "./components/PostDetail";
import ContactPage from "./components/ContactPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Profile from "./components/Profile";
import Category from "./components/Category";
import NotFound from "./components/404";
import SnsShare from "./components/SnsShare";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SnsShare />
      <Footer />
    </Router>
  );
}

export default App;
