import React, { useState, useEffect } from "react";

const SelectOption = (props) => {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState("");

  const getUserOptions = (e) => {
    setSelected(e.target.value);
    props.getSelectUserInput(e);
  };

  return (
    <>
      <label
        htmlFor={props.id}
        className="form-label"
        style={{
          display: "inline-block",
          width: "99%",
          fontWeight: "800",
          textAlign: "left",
          paddingTop: "15px",
        }}
      >
        {props.lables}
      </label>
      <select
        className="form-select"
        id={props.id}
        aria-label="Default select example"
        onChange={(e) => {
          getUserOptions(e);
        }}
      >
        {props.list.map((coin) => {
          return (
            <option key={coin} value={coin}>
              {coin}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default SelectOption;
