import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";

export default function Index() {
  const [state, setState] = useState({ persons: [] });

  useEffect(() => {
    axios
      .get("http://localhost:4000/persons")
      .then((response) => {
        console.log("-----", response.data);
        setState({ persons: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function tabRow() {
    return state.persons.map((object, i) => {
      return <TableRow obj={object} key={i} />;
    });
  }
  return (
    <>
      <h2>Dashboard</h2> <br />
      <div>
        <h3 align="center">Persons List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Company</th>
              <th>Age</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{tabRow()}</tbody>
        </table>
      </div>
    </>
  );
}
