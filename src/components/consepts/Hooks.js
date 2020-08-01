import React, { useState, useEffect } from "react";

const Hooks = () => {
  const [query, setQuery] = useState("");
  const [results2, setResults] = useState({});
  const fetcher = () => {
    fetch(`https://swapi.dev/api/people/${query}`)
      .then((res) => res.json())
      .then((json) => {
        setResults(json);
        console.log(json);
      });
  };
  return (
    <div className="main">
      <div className="mainDiv">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="enter your sw character number"
        />
        <button onClick={() => fetcher()}>Click for Character!</button>
        {/* {results2 ? <h2>{results2.name} </h2> : <div></div>} */}
      </div>
    </div>
  );
};

const Hooks2 = () => {
  const [results, queryNum, setQueryNum] = useNumHook("");
  const [clicks, setClicks] = useClicks(0);

  return (
    <div className="main">
      <div className="mainDiv">
        <h3>Enter a number bellow to see a number factor</h3>
        <input
          value={queryNum}
          onChange={(e) => setQueryNum(e.target.value)}
          placeholder="enter a number"
        />
        <button onClick={() => setClicks(clicks + 1)}>
          Click to update document file
        </button>
        {results ? <h2>{results}</h2> : <div></div>}
      </div>
    </div>
  );
};

const useNumHook = (num) => {
  const [queryNum, setQueryNum] = useState(num);
  const [results, setResults] = useState("");

  useEffect(() => {
    if (queryNum !== "") {
      fetch(`http://numbersapi.com/${queryNum}`)
        .then((res) => res.text())
        .then((json) => {
          setResults(json);
          console.log(json);
        });
    }
  }, [queryNum]);

  return [results, queryNum, setQueryNum];
};
const useClicks = (initCount) => {
  const [clicks, setClicks] = useState(initCount);

  useEffect(() => {
    document.tile = `You have clicked ${clicks} times`;
  }, [clicks]);
  return [clicks, setClicks];
};

export default Hooks2;
