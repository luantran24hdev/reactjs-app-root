import React from "react";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

export default function Edit() {
  let history = useHistory();
  const { id } = useParams();

  console.log("id", id);
  const [form, setForm] = useState({ name: "", company: "", age: "" });

  const onChangeFormData = (keyField) => (evt) => {
    setForm({
      ...form,
      [keyField]: evt.target.value,
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/persons/edit/" + id)
      .then((response) => {
        console.log("response", response);
        console.log("response", response);
        setForm({
          name: response.data.name,
          company: response.data.company,
          age: response.data.age,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: form.name,
      company: form.company,
      age: form.age,
    };
    axios
      .post("http://localhost:4000/persons/update/" + id, obj)
      .then((res) => console.log(res.data));

    // this.props.history.push("/list-person");
    history.push("/list-person");
  };

  return (
    <>
      <h2>Dashboard</h2> <br />
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update Person Info</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Person Name: </label>
            <input
              type="text"
              className="form-control"
              value={form?.name}
              onChange={onChangeFormData("name")}
            />
          </div>
          <div className="form-group">
            <label>Company Name: </label>
            <input
              type="text"
              className="form-control"
              value={form?.company}
              onChange={onChangeFormData("company")}
            />
          </div>
          <div className="form-group">
            <label>Age: </label>
            <input
              type="text"
              className="form-control"
              value={form?.age}
              onChange={onChangeFormData("age")}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update Person Info"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </>
  );
}
