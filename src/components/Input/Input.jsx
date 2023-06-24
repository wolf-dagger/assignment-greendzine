import React from "react";
import './Input.css'

function Input(props) {
  return (
    <>
      <div className="lol">
      <label>First Name</label>
        <input
          type="Search"
          value={props.searchValue}
          placeholder="Enter First Name..."
          onChange={props.handleSearch}
        />
      </div>
    </>
  );
}

export default Input;
