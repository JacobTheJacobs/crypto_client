import React, { useState, useEffect } from "react";
import ButtonGroup from "../ButtonGroup";
import InputField from "../input_field";
import SelectOption from "../select_option";

const VolumeForm = () => {
  const [condition, setCondition] = useState([
    "increased by",
    "deacreased by",
    "lower than",
    "higher than",
  ]);
  const [tm, setTimeFrame] = useState([
    "1m",
    "5m",
    "30m",
    "1h",
    "4h",
    "1d",
    "1w",
    "1M",
  ]);
  const [percent, setPercent] = useState(["%", "USDT", "BTC"]);


  const getSelectUserInput = (e) => {
    props.getDataFromSubForm(e);
  };

  const getUserInputField = (e) => {
    props.getDataFromSubForm(e);
  };

  return (
    <div className="d-flex flex-wrap">
                <div className="card-title">
            <SelectOption
              list={coins}
              id={"coin"}
              lables="Coin"
              getSelectUserInput={getSelectUserInput}
            />
          </div>
          <div className="card-title">
            <SelectOption
              list={starategy}
              lables={"Strategy"}
              id={"strategy"}
              getSelectUserInput={getSelectUserInput}
            />
          </div>

    <div className="d-flex flex-wrap">
      <ButtonGroup
        list={condition}
        lables={"condition"}
        lables={"Strategy Condition"}
        id={"strategy_condition"}
        getSelectUserInput={getSelectUserInput}
      />
      value
      <InputField   id={"strategy_input"} list={percent} getUserInputField={getUserInputField} />
    </div>
    </div>
  );
};

export default VolumeForm;
