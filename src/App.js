import React, { useState, useEffect } from "react";
import "./App.css";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import sortData from "./components/utilities/utility.jsx";

const App = () => {
  // State Hooks
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("All");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedAttire, setSelectedAttire] = useState("All");
  const [paginationOn, setPaginationOn] = useState(true);

  //======== Initializing the data ========//
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

  //======== Pagination Stuff ========//
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPost;

  // Toggle Pagination Button
  const togglePagination = () => {
    setPaginationOn(!paginationOn);
  };

  if (paginationOn) {
    currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
  } else {
    currentPost = data;
  }

  const paginate = (number) => {
    setCurrentPage(number);
  };

  //======== Search Input & handlers ========//
  const handleFilterInput = (e) => {
    setSearchQuery(e.toLowerCase());
  };

  const handleStateFilter = (e) => {
    setSelectedState(e.target.value);
  };

  const handleGenreFilter = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleAttireFilter = (e) => {
    setSelectedAttire(e.target.value);
  };

  sort;

  //======== Search Filter ========//
  const search = (data) => {
    const excludeColumns = ["telephone", "state"];
    let stateFiltered;
    let genreFiltered;
    let attireFiltered;

    let filtered = data.filter((item) => {
      return Object.keys(item).some((key) =>
        excludeColumns.includes(key)
          ? false
          : item[key].toString().toLowerCase().includes(searchQuery)
      );
    });

    //Filter by State
    if (selectedState === "All") {
      stateFiltered = filtered;
    } else {
      stateFiltered = filtered.filter((item) => item.state === selectedState);
    }
    // Filter by Genre
    if (selectedGenre === "All") {
      genreFiltered = stateFiltered;
    } else {
      genreFiltered = stateFiltered.filter((item) =>
        item.genre.includes(selectedGenre)
      );
    }

    // Filter by Attire
    if (selectedAttire === "All") {
      attireFiltered = genreFiltered;
    } else {
      attireFiltered = genreFiltered.filter((item) =>
        item.attire.includes(selectedAttire)
      );
    }

    return attireFiltered;
  };

  return (
    <div className="app">
      <Search
        handleFilterInput={handleFilterInput}
        handleStateFilter={handleStateFilter}
        handleGenreFilter={handleGenreFilter}
        handleAttireFilter={handleAttireFilter}
        togglePagination={togglePagination}
        paginationOn={paginationOn}
      />
      <Table data={search(currentPost)} loading={loading} />
      <Pagination
        paginationOn={paginationOn}
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
