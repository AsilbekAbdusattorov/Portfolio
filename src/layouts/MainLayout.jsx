import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = ({ language, setLanguage }) => {
  return (
    <div className="flex flex-col bg-slate-500 text-white w-full min-h-screen">
      <Header language={language} setLanguage={setLanguage} />
      <main className="bg-slate-400 grow">
        <div>
          <Outlet />
        </div>
      </main>
      <Footer language={language} />
    </div>
  );
};

export default MainLayout;
