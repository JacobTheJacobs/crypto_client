import { useState, useEffect, useRef } from "react";
import axios from "axios";
import coinList from "./list_of_coins.json";
import OptionField from "./OptionsField";

const LIST_OF_COINS = coinList;
const LIST_OF_TIMEFRAMES = ["1m", "5m", "1h", "4h", "1d", "3d"];
const LIST_OF_STRATEGIES = [
  "Price",
  "Volume",
  "Market Cap",
  "RSI",
  "EMA",
  "MA",
];
const LIST_OF_CONDITIONS_1 = [
  "Increased By",
  "Decreased By",
  "Lower Than",
  "Greater Than",
  "Crossing below Avg",
  "Crossing above Avg",
];
const LIST_OF_CONDITIONS_2 = [
  "Increased By",
  "Decreased By",
  "Lower Than",
  "Greater Than",
];

function EventForm(props) {
  const [user_strategy_selector, setUserStrategySelector] = useState("");
  const [show_price_input, setShowPriceInput] = useState(false);
  const [show_volume_input, setShowVolumeInput] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  function onChange(event) {
    if (event.target.id === "coins") {
      console.log(event.target.value);
    }
    if (event.target.id === "strategies") {
      console.log(event.target.value);

      switch (event.target.value) {
        case "Price":
          setShowPriceInput(true);
          setShowVolumeInput(false);
          break;
        case "Volume":
          setShowPriceInput(false);
          setShowVolumeInput(true);
          break;
        case "Market Cap":
          setShowPriceInput(false);
          setShowVolumeInput(true);
          break;
        case "RSI":
          setShowVolumeInput(false);
          setShowPriceInput(false);
          break;
        case "EMA":
          setShowVolumeInput(false);
          setShowPriceInput(false);
          break;
        case "MA":
          setShowVolumeInput(false);
          setShowPriceInput(false);
          break;
        default:
          setShowVolumeInput(false);
          setShowPriceInput(false);
          break;
      }
    }
    console.log(event.target.value);

    setUserStrategySelector(event.target.value);
  }

  return (
    <>
      <li
        className="shadow
           bg-yellow-400
           flex flex-row"
        key={props.todo.id}
        style={{ borderRadius: "5px", margin: "5px" }}
      >
        <div className="flex flex-wrap">
          <OptionField
            title={"If Coin"}
            onChange={onChange}
            list={LIST_OF_COINS}
            id={"coins"}
            optionName={"Select an Coin"}
          />
          <br></br>
          <br></br>
          <br></br>

          <OptionField
            title={"Has:"}
            onChange={onChange}
            list={LIST_OF_STRATEGIES}
            id={"strategies"}
            optionName={"Select an Strategy"}
          />
          <br></br>
          <br></br>
          <br></br>

          {show_price_input ? (
            <>
              <OptionField
                title={"Condition"}
                onChange={onChange}
                list={LIST_OF_CONDITIONS_1}
                id={"price_conditions"}
                optionName={"Select the condition"}
              />
              <br></br>
              <br></br>
              <br></br>
              <div
                className="flex flex-col w-auto justify-center items-center  "
                style={{ margin: "5px" }}
              >
                <div className="relative ">
                  By
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block border 
                             border-gray-300 bg-white
                              rounded-md shadow-sm"
                    placeholder="0.00"
                  />
                  <select
                    id="Currency"
                    name="currency"
                    className="focus:ring-indigo-500 
                            border-t border-r border-gray-300 "
                  >
                    <option>USD</option>
                    <option>BTC</option>
                    <option>%</option>
                  </select>
                </div>
              </div>
              <OptionField
                title={"Timeframe"}
                onChange={onChange}
                list={LIST_OF_TIMEFRAMES}
                id={"timeframe"}
                optionName={"Select the timeframe"}
              />
            </>
          ) : null}

          {show_volume_input ? (
            <>
              <OptionField
                title={"Condition"}
                onChange={onChange}
                list={LIST_OF_CONDITIONS_2}
                id={"price_conditions"}
                optionName={"Select the condition"}
              />
              <br></br>
              <br></br>
              <br></br>
              <div
                className="flex flex-col w-auto justify-center items-center  "
                style={{ margin: "5px" }}
              >
                <div className="relative ">
                  By
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="block border 
                             border-gray-300 bg-white
                              rounded-md shadow-sm"
                    placeholder="0.00"
                  />
                  <select
                    id="Currency"
                    name="currency"
                    className="focus:ring-indigo-500 
                            border-t border-r border-gray-300 "
                  >
                    <option>USD</option>
                    <option>BTC</option>
                    <option>%</option>
                  </select>
                </div>
              </div>
              <OptionField
                title={"Timeframe"}
                onChange={onChange}
                list={LIST_OF_TIMEFRAMES}
                id={"timeframe"}
                optionName={"Select the timeframe"}
              />
            </>
          ) : null}

          <br></br>
          <br></br>
          <br></br>
        </div>
      </li>
    </>
  );
}

export default EventForm;
