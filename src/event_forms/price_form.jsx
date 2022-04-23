import React, { useState, useEffect } from "react";
import SelectOption from '../fields/select_option'
import InputField from '../fields/input_field'
import ButtonGroup from '../fields/ButtonGroup'

const PriceForm = (props) => {
  const [coins, setCoins] = useState(["BTC", "ETH", "BNB"]);
  const [starategy, setStrategy] = useState(["Price", "Volume", "RSI"]);
  const [condition, setCondition] = useState([
    "increased by",
    "deacreased by",
    "lower than",
    "higher than",
  ]);
  const [percent, setPercent] = useState(["%", "USDT", "BTC"]);
  const [percentInput, setPercentInput] = useState("");


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

  <div className="card-title">
    <SelectOption
        list={condition}
        lables={"Strategy Condition"}
        id={"strategy_condition"}
        getSelectUserInput={getSelectUserInput}
      />
  </div>
  <div className="card-title">
      value
      <InputField 
      id={"strategy_input"}
       list={percent}
        getUserInputField={getUserInputField} />
      </div>
    </div>
  );
};

export default PriceForm;
