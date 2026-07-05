import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  const { pathname } = useLocation();

  // Hide header and footer on authentication pages
  const hideLayout = pathname === "/signin" || pathname === "/signup";

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      {!hideLayout && <Header />}

      <main className="flex-1">
        <Outlet />
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
};

export default Layout;
