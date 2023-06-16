import { useState } from "react";

export default function Sidebar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  function handleClick() {
    setSidebarVisible((prevState) => !prevState);
  }

  return (
    <header className={`fixed top-0 w-full h-screen z-20`}>

      <div className={`absolute left-0 z-50 w-full lg:w-auto h-auto lg:h-full flex flex-col gap-16 items-start lg:items-center transition-colors ease duration-500 p-5 border-r-0 lg:border-r-1 ${sidebarVisible ? "border-black bg-yellow-500 text-black" : "border-gray-300 text-white delay-500 bg-transparent"}`}>
        <button className={`w-10 h-10 rounded-full transition-colors ease duration-500 ${sidebarVisible ?"bg-neutral-950" : "bg-white delay-1000"}`} onClick={handleClick}>
        </button>

        <p className="text-inherits vertical-text text-xs open-sans uppercase font-light hidden lg:block">By Gathan Mahesa</p>
        <p className="text-inherits vertical-text text-xs open-sans uppercase font-light hidden lg:block">Batavia : A Timeless Heritage</p>
        <p className="text-inherits vertical-text text-xs open-sans uppercase font-light hidden lg:block">2023</p>
      </div>

      <div id = "menu" className={`h-full w-full relative transition-all duration-1500 easeInBack px-10 lg:px-32 py-20 bg-yellow-500 noto-serif text-5xl lg:text-9xl font-medium uppercase tracking-tighter flex flex-col lg:flex-row transform ${sidebarVisible ? "" : ""}`}
        style={{ transform: sidebarVisible ? "translateX(0%)" : "translateX(-100%)" }}>
        <ul className="flex flex-col h-full gap-10 lg:gap-0 justify-center lg:justify-between">
          <li>
            <a href="/" id = "nav-button" className="relative text-black">
              Overview
            </a>
          </li>
          <li>
            <a href="/" id = "nav-button" className="relative text-black">
              History
            </a>
          </li>
          <li>
            <a href="/" id = "nav-button" className="relative text-black">
              Articles
            </a>
          </li>
          <li>
            <a href="/" id = "nav-button" className="relative text-black">
              Timeline
            </a>
          </li>
        </ul>
        <div className="w-full relative flex justify-end items-end ">
          <button className={`w-52 h-52 rounded-full bg-black hidden lg:block absolute top-0 transition-tranform duration-1000 ${sidebarVisible ? "opacity-100 scale-75 delay-500" : "opacity-0 scale-0"}`} onClick={handleClick}></button>
          <a href = "/" id = "about-button" className="text-xl relative tracking-tight">About & Sources</a>
        </div>

      </div>

    </header>
  );
}
