import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import sortData from "./components/_utility";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSeachBy] = useState(["name", "city", "genre"]);
  const [selectedState, setSelectedState] = useState("ALL");
  const [selectedGenre, setSelectedGenre] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      fetch(`https://code-challenge.spectrumtoolbox.com/api/restaurants`, {
        headers: {
          Authorization: "Api-Key q3MNxtfep8Gt ",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          setData(sortData(json));
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  // Pagnation Stuff
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // let currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
  let currentPost = data;
  // To turn pagination back on, just swtich 37-38

  const paginate = (number) => {
    setCurrentPage(number);
  };

  //Search Input
  const handleFilterInput = (e) => {
    setSearchQuery(e.toLowerCase());
  };

  const handleStateFilter = (e) => {
    setSelectedState(e.target.value);
  };

  const handleGenreFilter = (e) => {
    setSelectedGenre(e.target.value);
  };

  const search = (data) => {
    const excludeColumns = ["state"];
    let filtered = data.filter((item) => {
      return Object.keys(item).some((key) =>
        excludeColumns.includes(key)
          ? false
          : item[key].toString().toLowerCase().includes(searchQuery)
      );
    });

    // let filtered = data.filter(
    //   (data) => data.name.toLowerCase().indexOf(searchQuery) > -1
    // );

    //Filter by State
    let stateFiltered;
    if (selectedState === "ALL") {
      stateFiltered = filtered;
    } else {
      stateFiltered = filtered.filter((item) => item.state === selectedState);
    }
    // console.log(stateFiltered);
    // return stateFiltered;

    // Filter by Genre
    let genreFiltered;
    if (selectedGenre === "All") {
      genreFiltered = stateFiltered;
    } else {
      genreFiltered = stateFiltered.filter((item) =>
        item.genre.includes(selectedGenre)
      );
    }
    console.log(genreFiltered);
    return genreFiltered;
  };

  return (
    <div className="app">
      {selectedGenre}
      <Search
        handleFilterInput={handleFilterInput}
        handleStateFilter={handleStateFilter}
        handleGenreFilter={handleGenreFilter}
      />
      <Table data={search(currentPost)} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
