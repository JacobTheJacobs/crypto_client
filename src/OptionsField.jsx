import React from "react";

function OptionField({ onChange, list, title, id, optionName }) {
  const onChangeField = (event) => {
    onChange(event);
  };

  return (
    <div
      className="flex flex-col w-auto  justify-center items-center "
      style={{ margin: "5px" }}
    >
      <label className="text-gray-700" for="animals">
        <span
          className="text-xl
        font-extrabold
         font-sans"
          style={{ marginRight: "5px" }}
        >
          {title}
        </span>
        <select
          id={id}
          className="block border border-gray-300 bg-white rounded-md shadow-sm "
          name={id}
          onChange={(e) => onChangeField(e)}
        >
          <option value="">{optionName}</option>
          {list.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default OptionField;
