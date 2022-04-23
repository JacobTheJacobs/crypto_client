import React, { useState, useEffect } from "react";
import axios from "axios";
import SelectOption from "./select_option";
import InputField from "./input_field";
import PriceForm from "./event_form/price_form";
import VolumeForm from "./event_form/value_form";
import RSIForm from "./event_form/rsi_form";

const FirstEventCard = (props) => {
  const [coins, setCoins] = useState(["BTC", "ETH", "BNB"]);
  const [starategy, setStrategy] = useState(["Price", "Volume", "RSI"]);
  //form conditions
  const [selectedPrice, setSelectedPrice] = useState(false);
  const [selectedVolume, setSelectedVolume] = useState(false);
  const [selectedRsi, setSelectedRsi] = useState(false);

  const getSelectUserInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    if (id === "strategy") {
      if (value === "Price") {
        setSelectedPrice(true);
        setSelectedVolume(false);
        setSelectedRsi(false);
      } else if (value === "Volume") {
        setSelectedVolume(true);
        setSelectedPrice(false);
        setSelectedRsi(false);
      } else if (value === "RSI") {
        setSelectedRsi(true);
        setSelectedVolume(false);
        setSelectedPrice(false);
      }
    }
    props.getUserEventInput(e);
  };

  //delete selected tab
  const deleteTab = (e) => {
    props.deleteEvent(props.condition.id);
  };

  return (
    <div style={{ width: "70%" }}>
      <div className="card text-center alert alert-warning">
        {props.last ? (
          <div
            style={{
              border: "1px solid",
              borderRadius: "5px",
              padding: "10px",
              position: "absolute",
              top: "0",
              right: "0",
            }}
            onClick={(e) => {
              deleteTab(e);
            }}
          >
            X
          </div>
        ) : null}

        <div className="card-body">
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

          {selectedPrice ? (
            <PriceForm
              id={"price"}
              lables="price"
              getSelectUserInput={getSelectUserInput}
            />
          ) : null}
          {selectedVolume ? (
            <VolumeForm
              id={"volume"}
              lables="volume"
              getSelectUserInput={getSelectUserInput}
            />
          ) : null}
          {selectedRsi ? (
            <RSIForm
              id={"rsi"}
              lables="rsi"
              getSelectUserInput={getSelectUserInput}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FirstEventCard;
