import { useState } from "react";

export default function Sidebar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  function handleClick() {
    setSidebarVisible((prevState) => !prevState);
  }

  return (
    <header className="fixed top-0 w-full h-screen z-10">
      <div className={`absolute top-0 z-10 w-full h-20 p-10 flex justify-center`}>
        <button className={`w-10 h-10 rounded-full transition-colors duration-500 ${sidebarVisible ?"bg-neutral-950" : "bg-yellow-500 delay-1000"}`} onClick={handleClick}>
        </button>
      </div>

      <ul
        className={`h-full w-full transition-all duration-1500 easeInBack px-20 py-20 flex flex-col gap-10 lg:gap-0 justify-center lg:justify-between bg-yellow-500 noto-serif text-5xl lg:text-9xl font-medium uppercase tracking-tighter ${
          sidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ transform: sidebarVisible ? "translateY(0%)" : "translateY(-100%)" }}
      >
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
    </header>
  );
}
