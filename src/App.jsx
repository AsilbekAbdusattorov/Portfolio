import React, { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import MainLayout from "./layouts/MainLayout";
import Projects from "./pages/Projects";

const App = () => {
  const [language, setLanguage] = useState("UZ"); // Tilni boshqarish

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout language={language} setLanguage={setLanguage} />}>
        <Route index element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects language={language} />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
