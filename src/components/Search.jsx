import React from "react";
import styles from "./Search.module.css";
import states from "./variableLists/_states";
import genres from "./variableLists/_genres";
import attire from "./variableLists/_attire";
import Dropdown from "./Dropdown";

export default function Search({
  handleFilterInput,
  handleStateFilter,
  handleGenreFilter,
  handleAttireFilter,
  togglePagination,
  paginationOn,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          placeholder="enter search"
          onChange={(e) => handleFilterInput(e.target.value)}
        />
        {paginationOn ? (
          <button onClick={togglePagination}>Pagination On</button>
        ) : (
          <button onClick={togglePagination}>Pagination Off</button>
        )}
      </div>
      <div className={styles.wrapper}>
        <label htmlFor="state">Filter by state</label>
        <Dropdown states={states} handleStateFilter={handleStateFilter} />
        <label htmlFor="state">Filter by genre</label>
        <Dropdown states={genres} handleStateFilter={handleGenreFilter} />
        <label htmlFor="state">Filter by attire</label>
        <Dropdown states={attire} handleStateFilter={handleAttireFilter} />
      </div>
    </div>
  );
}
