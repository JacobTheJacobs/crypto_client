import React, { useState, useEffect } from "react";

function ButtonGroup(props) {
  const [action_options, setActionOptions] = useState([props.list]);
  const [selected, setSelected] = useState("");
  const [selectedActions_Options, setSelectedActions_Options] = useState("");

  const getUserOptions = (e) => {
    setSelected(e.target.id);
    props.getSelectUserInput(e);
  };

  return (
    <div>
      <div class="btn-group">
        {props.list.map((option, index) => {
          return (
            <>
              <input
                key={option}
                value={option}
                labels={props.label}
                name={props.id}
                id={props.id}
                checked={selected === option}
                type="radio"
                class="btn-check"
                readOnly
              />
              <label
                id={option}
                labels={props.label}
                onClick={(e) => {
                  getUserOptions(e);
                }}
                class="btn btn-outline-primary"
              >
                {option}
              </label>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ButtonGroup;
