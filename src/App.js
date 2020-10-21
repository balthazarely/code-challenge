import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://code-challenge.spectrumtoolbox.com/api/restaurants`, {
      headers: {
        Authorization: "Api-Key q3MNxtfep8Gt ",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  return <div></div>;
}

export default App;
