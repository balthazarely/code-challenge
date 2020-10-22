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
  const [userSearched, setUserSearched] = useState(false);

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
  let currentPost = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  //Search Input
  const handleFilterInput = (e) => {
    setSearchQuery(e.toLowerCase());
  };

  const search = (data) => {
    let filtered = data.filter(
      (data) => data.name.toLowerCase().indexOf(searchQuery) > -1
    );
    return filtered;
    // return filtered.filter((item) => item.state === "TX");
  };

  return (
    <div className="app">
      <Search handleFilterInput={handleFilterInput} />
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
