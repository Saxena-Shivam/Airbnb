import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HostPage from "./pages/HostPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BlogPage from "./pages/BlogPage";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/host" element={<HostPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
