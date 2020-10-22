import React from "react";

export default function Dropdown({ states, handleStateFilter }) {
  return (
    <select name="state" id="state" onChange={handleStateFilter}>
      {states.map((state) => {
        return (
          <option value={state} key={state}>
            {state}
          </option>
        );
      })}
    </select>
  );
}
