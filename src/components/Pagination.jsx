import React from "react";

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map((number) => {
        return (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        );
      })}
    </div>
  );
}
