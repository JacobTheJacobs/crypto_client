import React from "react";

function SelectForm(props) {
  return (
    <div>
      <select id={props.id} name="">
        {props.list.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <select id={props.id} name="">
        {props.list.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <select id={props.id} name="">
        {props.list.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <select id={props.id} name="">
        {props.list.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectForm;
