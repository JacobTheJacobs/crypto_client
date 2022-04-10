import React from "react";
import ButtonFields from "./ButtonField";

function ActionForm(props) {
  return (
    <>
      <li
        className="shadow
           bg-green-400
           flex flex-row"
        key={props.todo.id}
        style={{ borderRadius: "5px", margin: "5px" }}
      >
        <div className="flex flex-wrap">
          <br></br>
          <br></br>
          <br></br>
          <div>
            <ButtonFields />
          </div>
          <br></br>
          <br></br>
          <br></br>

          <br></br>
          <br></br>
          <br></br>
        </div>
      </li>
    </>
  );
}

export default ActionForm;
