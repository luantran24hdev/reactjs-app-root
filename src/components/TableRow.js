// TableRow.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function TableRow(obj, key) {
  const [state, setState] = useState({ obj: obj, key: key });

  function handleDelete() {
    axios
      .get("http://localhost:4000/persons/delete/" + state.obj.obj._id)
      .then(console.log("Deleted"))
      .catch((err) => console.log(err));
  }
  return (
    <tr>
      <td>{state.obj.obj.name}</td>
      <td>{state.obj.obj.company}</td>
      <td>{state.obj.obj.age}</td>
      <td>
        <Link
          to={"/edit/" + state.obj.obj._id}
          className="btn btn-primary btn-delete"
        >
          Edit
        </Link>
      </td>
      <td>
        <button onClick={handleDelete} className="btn btn-danger btn-delete">
          Delete
        </button>
      </td>
    </tr>
  );
}
