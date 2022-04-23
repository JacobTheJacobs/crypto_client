import React, { useState, useEffect } from "react";

const InputField = (props) => {
  const [user_input, setUserInput] = useState([]);
  const [selected, setSelected] = useState("");

  const getUserOptions = (e) => {
    setSelected(e.target.innerText);
    props.getUserInputField(e);
  };

  const setUserInputFromField = (e) => {
    setUserInput(e.target.value);
    props.getUserInputField(e);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        id="input"
        className="form-control"
        aria-label="Text input with dropdown button"
        onChange={(e) => {
          setUserInputFromField(e);
        }}
      />
      <button
        className="btn btn-outline-secondary
         dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      />
      <ul className="dropdown-menu dropdown-menu-end">
        {props.list.map((coin) => (
          <li
            onClick={(e) => {
              getUserOptions(e);
            }}
            key={coin}
            value={coin}
            innertext={coin}
            href={coin.toString()}
          >
            <a className="dropdown-item" value={coin} id="select_condition">
              {coin ? coin : "?"}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputField;
