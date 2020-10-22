import React from "react";
import styles from "./Search.module.css";
import states from "./variableLists/_states";
import genres from "./variableLists/_genres";

export default function Search({
  handleFilterInput,
  handleStateFilter,
  handleGenreFilter,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          placeholder="enter search"
          onChange={(e) => handleFilterInput(e.target.value)}
        />
      </div>
      <div className={styles.wrapper}>
        <label htmlFor="state">Filter by state</label>
        <select name="state" id="state" onChange={handleStateFilter}>
          {states.map((state) => {
            return (
              <option value={state} key={state}>
                {state}
              </option>
            );
          })}
        </select>

        <label htmlFor="state">Filter by genre</label>
        <select name="genre" id="genre" onChange={handleGenreFilter}>
          {genres.map((genre) => {
            return (
              <option value={genre} key={genre}>
                {genre}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
