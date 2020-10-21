import React from "react";

const Table = ({ data, loading }) => {
  if (loading) {
    return <h2>this is loading</h2>;
  }
  return (
    <div>
      <ul>
        {data &&
          data.map((item) => {
            return <li key="post.id">{item.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default Table;
