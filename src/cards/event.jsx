import React, { useState, useEffect } from "react";
import PriceForm from '../event_forms/price_form'
import VolumeForm from '../event_forms/volume_form'
import RSIForm from '../event_forms/rsi_form'
import SelectOption from '../fields/select_option'
import Or_AndButtonGroup from "../fields/Or_AndButtonGroup";

function Event(props) {
    const [coins, setCoins] = useState(["BTC", "ETH", "BNB"]);
    const [starategy, setStrategy] = useState(["Price", "Volume", "RSI"]);
    const [selectedPrice, setSelectedPrice] = useState(true);
    const [selectedVolume, setSelectedVolume] = useState(false);
    const [selectedRsi, setSelectedRsi] = useState(false);
    const [or_and, setOrAnd] = useState(["AND", "OR"]);


    const getDataFromSubForm=(e)=>{
        console.log(e)
        const id = e.target.id;
        const value = e.target.value;
        console.log(e)
        props.getDataFromForm(e)
    }

    const getSelectUserInput=(e)=>{
      const id = e.target.id;
      const value = e.target.value;
      console.log(e)
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
        props.getDataFromForm(e)
    }

  //delete selected tab
  const deleteTab = (e) => {
    props.deleteEvent(props.condition.id);
  };
    return (
        <div style={{ width: "50%" }}>
        <div className="card text-center alert alert-warning">
          <div className="card-body">

          <Or_AndButtonGroup
          list={or_and}
          lables={"or_and"}
          id={"or_and"}
          getSelectUserInput={getSelectUserInput}
        />
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
              getDataFromSubForm={getDataFromSubForm}
            />
          ) : null}
          {selectedVolume ? (
            <VolumeForm
              id={"volume"}
              lables="volume"
              getDataFromSubForm={getDataFromSubForm}
            />
          ) : null}
          {selectedRsi ? (
            <RSIForm
              id={"rsi"}
              lables="rsi"
              getDataFromSubForm={getDataFromSubForm}
            />
          ) : null}

            
        </div>  
         </div> 
    )
}

export default Event
