import { useState } from "react";

const chapters = [
  {
    name: "Chapter 1: Introduction to Biology",
    subchapters: ["1.1 What is Biology?", "1.2 Characteristics of Life"],
  },
  {
    name: "Chapter 2: Cell Biology",
    subchapters: ["2.1 Cell Structure", "2.2 Cell Function"],
  },
  {
    name: "Chapter 3: Genetics",
    subchapters: ["3.1 DNA and RNA", "3.2 Inheritance"],
  },
];

const Quiz = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 grow bg-gray-50">
      <aside className="hidden md:block mx-4 bg-white shadow-md overflow-y-auto text-left">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Module Contents</h2>
          {chapters.map((chapter, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-medium text-sm">{chapter.name}</h3>
              <ul className="mt-2 space-y-1">
                {chapter.subchapters.map((subchapter, subIndex) => (
                  <li
                    key={subIndex}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    <a href="#" className="block py-1">
                      {subchapter}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      <aside
        className={`md:hidden absolute top-0 left-0 h-full w-full text-left transition-transform duration-1000 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={toggleSidebar}
      >
        <div
          className="p-4 min-w-64 w-fit h-full bg-white shadow-md overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold mb-4">Module Contents</h2>
            <button onClick={toggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {chapters.map((chapter, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-medium text-sm">{chapter.name}</h3>
              <ul className="mt-2 space-y-1">
                {chapter.subchapters.map((subchapter, subIndex) => (
                  <li
                    key={subIndex}
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    <a href="#" className="block py-1">
                      {subchapter}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      <main className="col-span-3 flex flex-col gap-4 px-4">
        <button onClick={toggleSidebar} className="w-fit p-2 rounded-md mt-4 bg-gray-200 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        <div className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-left">
          1. Question 1
        </div>
        <div className="image grow"></div>

        <div className="grid grid-cols-2 gap-4 w-full">
          <button className="px-4 py-4 border border-gray-400 rounded-md text-base md:text-lg shadow-lg cursor-pointer text-center hover:bg-gray-100 transition-colors duration-300">
            lorem20
          </button>
          <button className="px-4 py-4 border border-gray-400 rounded-md text-base md:text-lg shadow-lg cursor-pointer text-center hover:bg-gray-100 transition-colors duration-300">
            lorem20
          </button>
          <button className="px-4 py-4 border border-gray-400 rounded-md text-base md:text-lg shadow-lg cursor-pointer text-center hover:bg-gray-100 transition-colors duration-300">
            lorem20
          </button>
          <button className="px-4 py-4 border border-gray-400 rounded-md text-base md:text-lg shadow-lg cursor-pointer text-center hover:bg-gray-100 transition-colors duration-300">
            lorem20
          </button>
        </div>

        <div className="bottom flex justify-between px-8">
          <button className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded transition-colors duration-300 prev">
            Prev
          </button>
          <div className="prog text-gray-400">3/5</div>
          <button className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded transition-colors duration-300 next">
            Next
          </button>
        </div>
      </main>
    </section>
  );
};

export default Quiz;
