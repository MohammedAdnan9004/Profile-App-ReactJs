import React, { useState } from "react";
import WelcomePage from "./component/WelcomePage.jsx";
import SignupPage from "./component/SignupPage";
import LoginPage from "./component/LoginPage";
import ProfilePage from "./component/ProfilePage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("welcome");

  const handleNavigate = (page) => setCurrentPage(page);

  switch (currentPage) {
    case "signup":
      return <SignupPage onNavigate={handleNavigate} />;
    case "login":
      return <LoginPage onNavigate={handleNavigate} />;
    case "profile":
      return <ProfilePage onNavigate={handleNavigate} />;
    default:
      return <WelcomePage onNavigate={handleNavigate} />;
  }
}
