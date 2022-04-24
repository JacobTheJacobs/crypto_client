import React, { useState, useEffect } from "react";

const InputField = (props) => {
  const [error,setError]=useState("")

  const getUserOptions = (e) => {
    props.getUserInputField(e);
  };

  const setUserInputFromField = (e) => {
    if(!isNaN(e.target.value) && isFinite(e.target.value)){
      console.log(props)
      props.getUserInputField(e);
      setError("")
    }else{
      setError("Input Must be number beewtween 100 and 0")
    }

  };

  return (
    <div className="input-group mb-3">
    
      <input
        type="text"
        id={props.id}
        className="form-control"
        aria-label="Text input with dropdown button"

        onChange={(e) => {
          setUserInputFromField(e);
        }}
      />
      <br></br>
        {error!=="" && <span className="alert alert-danger">{error}</span> }
      <button
        className="btn btn-outline-secondary
         dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      />
      <ul className="dropdown-menu dropdown-menu-end">
        {props.list.map((coin,_) => (
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
