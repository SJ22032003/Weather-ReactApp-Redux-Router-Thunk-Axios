/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState } from "react";
import { fetchUsers } from "../Components/Context/Action";
import { useDispatch } from "react-redux";
function Input() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      alert("wrong input");
      setValue("");
    } else {
      setValue("");
      dispatch(fetchUsers(value));
    }
  };

  return (
    <form className="form form-control" onSubmit={handleSubmit}>
      <div className="flex justify-center">
        <input
          type="text"
          className="input outline mr-2 input-button"
          placeholder="search...."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btn btn-warning">
          Go!
        </button>
      </div>
    </form>
  );
}

export default Input;
