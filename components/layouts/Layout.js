import Head from "next/head";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Layout = ({ title, children }) => {
  const [sidebarClosed, setSidebarClosed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const sidebarLessPathnames = ["/videos/[id]",];
    if(window.screen.width < 800 || sidebarLessPathnames.includes(router.pathname)) {
      setSidebarClosed(true);
    }
  }, [router.pathname]);


  return (
    <div className="dark">
      <Head>
        <title>{title && `${title} -`}  NexTube </title>
        <meta name="description" content="A video streaming app where you can share your videos" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="bg-gray-100  h-min-screen">
        <Topbar setSidebarClosed={setSidebarClosed} />

        <div className="body-wrapper flex ">
          <Sidebar sidebarClosed={sidebarClosed} />

          <div className="content container mx-auto px-10 py-5 flex-grow min-h-screen">{children}</div>
        </div>
      </div>
    </div>
  );
};

Layout.prototype = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Layout;