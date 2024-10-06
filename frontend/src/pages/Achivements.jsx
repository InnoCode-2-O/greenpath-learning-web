import { useEffect, useState } from "react";

const Achivements = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const userID = JSON.parse(localStorage.getItem("user"))._id;
      const res = await fetch(
        "https://greenpath-learning-web.onrender.com/quiz/results/" + userID
      );
      console.log(res);
      const json = await res.json();
      setResults(json);
    };

    getData();
  }, []);

  const formatDate = (date) => {
    const d = new Date();

    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }

  return (
    <div className="mx-28 my-28">
      {/* <div className="font-bold text-xl ">Achivements:</div> */}
      <h1 className="font-bold text-xl my-10">My Quiz 1 Attempts:</h1>
      {results.map((result, idx) => {
        return (
          <div key={idx} className="p-3 m-1 bg-green-300 rounded-md flex justify-between">
            <div>Score: {result.score}</div>
            <div>Submitted At: <span className="font-bold">{formatDate(result.submittedAt)}</span></div>
          </div>
        );
      })}
      {/* {arr.map((r) => {
        return <div className="p-3 m-1 bg-green-300 rounded-md">{r} </div>;
      })} */}
    </div>
  );
};

export default Achivements;
