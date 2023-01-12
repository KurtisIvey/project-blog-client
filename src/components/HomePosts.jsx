import React, { useEffect } from "react";
import Footer from "./small_components/Footer";
import Navbar from "./small_components/Navbar";

const HomePosts = () => {
  useEffect(() => {
    document.title = "Blog | Home";
  }, []);
  return (
    <div>
      <Navbar />
      <h2>Home</h2>
      <Footer />
    </div>
  );
};

export default HomePosts;
