import { useEffect, useState } from "react";

const chapters = [
  {
    name: "Question 1: Introduction to SDGs",
    subchapters: ["1.1 What is SDGs?", "1.2 Characteristics of Life"],
  },
  {
    name: "Question 2: Production",
    subchapters: ["2.1 CO2 emission", "2.2 Cell Function"],
  },
  {
    name: "Question 3: Consumtion",
    subchapters: ["3.1 Water Resources", "3.2 Inheritance"],
  },
];

const Quiz = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [allQuest, setAllQuest] = useState();
  const [id, setId] = useState(0);
  const [count, setCount] = useState(0);
  const [statement, setStatement] = useState();
  const allQuestions = async () => {
    const resp = await fetch("http://localhost:5000/quiz/quizzes/");
    const data = await resp.json();
    setAllQuest(data[0].questions);
    console.log(data[0].questions);
    // console.log(allQuest);
  };
  useEffect(() => {
    allQuestions();
    // console.log(,)
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const nextQuiz = () => {
    if (count >= 3) return;
    setCount((prev) => prev + 1);
  };
  const prevQuiz = () => {
    if (count <= 0) return;
    setCount((prev) => prev - 1);
  };
  const check = (r) => {
    let correctIndex = allQuest[count]?.correctOption;

    console.log(r, allQuest[count].options[correctIndex]);
    if (r == allQuest[count].options[correctIndex]) {
      setStatement("Correct !");
    } else {
      setStatement("Wrong !");
    }
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
        <button
          onClick={toggleSidebar}
          className="w-fit p-2 rounded-md mt-4 bg-gray-200 md:hidden"
        >
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
          {allQuest ? allQuest[count]?.title : console.log()}
        </div>
        <div className="">
          {/* {allQuest ? (
            <img className="w-[200px]" src={allQuest[count]?.image} />
          ) : (
            <div></div>
          )} */}
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          {allQuest ? (
            allQuest[count]?.options.map((r) => {
              return (
                <button
                  className="px-4 py-4 border border-gray-400 rounded-md text-base md:text-lg shadow-lg cursor-pointer text-center hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => check(r)}
                >
                  {r}
                </button>
              );
            })
          ) : (
            <div></div>
          )}
          {statement == "Correct !" ? (
            <div className="bg-green-300 p-2 rounded-md">{statement}</div>
          ) : (
            <div className="bg-red-300  rounded-md">{statement}</div>
          )}
        </div>
        <div className="bottom flex justify-between px-8">
          <button
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded transition-colors duration-300 prev"
            onClick={prevQuiz}
          >
            Prev
          </button>
          <div className="prog text-gray-400">{count + 1}/4</div>
          <button
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer rounded transition-colors duration-300 next"
            onClick={nextQuiz}
          >
            Next
          </button>
        </div>
      </main>
    </section>
  );
};

export default Quiz;
