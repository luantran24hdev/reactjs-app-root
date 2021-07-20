import React, { useState } from "react";
import axios from "axios";

export default function Create() {
  const [form, setForm] = useState({ name: "", company: "", age: "" });
  const onChangeFormData = (keyField) => (evt) => {
    setForm({
      ...form,
      [keyField]: evt.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const obj = form;
    axios.post("http://localhost:4000/persons/add", obj).then((res) => {
      alert(res.data.message);
    });
  };

  return (
    <div style={{ marginTop: 10 }}>
      <h3>Add New Person</h3>
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label>Person Name: </label>
          <input
            type="text"
            className="form-control"
            value={form.name}
            onChange={onChangeFormData("name")}
          />
        </div>
        <div className="form-group">
          <label>Company Name: </label>
          <input
            type="text"
            className="form-control"
            value={form.company}
            onChange={onChangeFormData("company")}
          />
        </div>
        <div className="form-group">
          <label>Age: </label>
          <input
            type="text"
            className="form-control"
            value={form.age}
            onChange={onChangeFormData("age")}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Register Person"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
