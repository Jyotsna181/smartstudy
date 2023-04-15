import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Course from "./pages/Courses";
import Teacher from "./pages/Teachers";
import Price from "./pages/Price";
import Review from "./pages/review";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="course" element={<Course />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="price" element={<Price />} />
          <Route path="review" element={<Review />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
