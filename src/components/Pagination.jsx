import React from "react";

export default function Pagination({
  postsPerPage,
  totalPosts,
  paginate,
  paginationOn,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ marginTop: 20 }}>
      {paginationOn ? (
        <div>
          {pageNumbers.map((number) => {
            return (
              <button
                style={{ margin: 3 }}
                key={number}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
