import React from "react";
import "./../App.css";
import Result from "./Result";
import styles from "./Table.module.css";

const Table = ({ data, loading }) => {
  if (loading) {
    return <h2>this is loading</h2>;
  }
  return (
    <div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
            <th>Genres</th>
            <th className={styles.phone}>Phone</th>
          </tr>
          {data &&
            data.map((restaurant) => {
              return <Result data={restaurant} key={restaurant.id} />;
            })}
        </tbody>
      </table>
      <div className={styles.wrapper}>
        {data.length === 0 ? <h2>No Data was found</h2> : null}
      </div>
    </div>
  );
};

export default Table;
