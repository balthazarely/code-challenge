import React from "react";

export default function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);
  return (
    <div>
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li>
              <button onClick={() => paginate(number)}>{number}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
