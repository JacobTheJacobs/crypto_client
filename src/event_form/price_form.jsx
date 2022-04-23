import React, { useState, useEffect } from "react";
import ButtonGroup from "../ButtonGroup";
import InputField from "../input_field";
import SelectOption from "../select_option";

const PriceForm = (props) => {
  const [condition, setCondition] = useState([
    "increased by",
    "deacreased by",
    "lower than",
    "higher than",
  ]);
  const [percent, setPercent] = useState(["%", "USDT", "BTC"]);
  const [percentInput, setPercentInput] = useState("");
  const [crossSelect, setCrossSelect] = useState(false);

  const [userSelectOption, setUserSelectOption] = useState("");
  const [userSelectCondition, setUserSelectCondition] = useState("");
  const [userSelectInput, setUserSelectInput] = useState("");

  const getSelectUserInput = (e) => {
    setUserSelectOption(e.target.innerText);
    props.getSelectUserInput(e);
  };

  const getUserInputField = (e) => {
    const id = e.target.id;
    if (id === "select_condition") {
      setUserSelectCondition(e.target.innerText);
    } else if (id === "input") {
      setUserSelectInput(e.target.value);
    }
    props.getSelectUserInput(e);
  };

  return (
    <div className="d-flex flex-wrap">
      <ButtonGroup
        list={condition}
        lables={"condition"}
        id={"condition"}
        getSelectUserInput={getSelectUserInput}
      />
      value
      <InputField list={percent} getUserInputField={getUserInputField} />
    </div>
  );
};

export default PriceForm;
