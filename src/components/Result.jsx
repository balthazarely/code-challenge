import React from "react";
import styles from "./Result.module.css";

export default function Result({ data }) {
  return (
    <tr key={data.id}>
      <td>{data.name}</td>
      <td>{data.city}</td>
      <td>{data.state}</td>
      <td>{data.genre}</td>
      <td>{data.telephone}</td>
    </tr>
  );
}
