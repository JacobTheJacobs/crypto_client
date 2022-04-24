import React, { useState, useEffect } from "react";
import BuyForm from '../action_forms/buy_form'
import SellForm from '../action_forms/sell_form'
import WaitForm from '../action_forms/wait_form'

function Action(props) {
    const [action_options, setActionOptions] = useState([
        { name: "WAIT", disabled: false, color: "warning" },
        { name: "BUY", disabled: false, color: "success" },
        { name: "SELL", disabled: false, color: "danger" },
      ]);
      const [action_buy_true, setActionBuyTrue] = useState(false);
      const [action_sell_true, setActionSellTrue] = useState(false);
      const [action_wait_true, setActionWaitTrue] = useState(false);
    
    
      const chooseActionOption = (e) => {
        //get the id the event
        const id = e.target.name;

        if (id === "WAIT") {
          setActionOptions([
            { name: "WAIT", disabled: true, color: "warning" },
            { name: "BUY", disabled: false, color: "success" },
            { name: "SELL", disabled: false, color: "danger" },
          ]);
          setActionWaitTrue(true);
          setActionBuyTrue(false);
          setActionSellTrue(false);
        } else if (id === "BUY") {
          setActionOptions([
            { name: "WAIT", disabled: false, color: "warning" },
            { name: "BUY", disabled: true, color: "success" },
            { name: "SELL", disabled: false, color: "danger" },
          ]);
          setActionWaitTrue(false);
          setActionBuyTrue(true);
          setActionSellTrue(false);
        } else if (id === "SELL") {
          setActionOptions([
            { name: "WAIT", disabled: false, color: "warning" },
            { name: "BUY", disabled: false, color: "success" },
            { name: "SELL", disabled: true, color: "danger" },
          ]);
          setActionWaitTrue(false);
          setActionBuyTrue(false);
          setActionSellTrue(true);
        }
        props.getDataFromForm(e)
      };
    
      //delete selected tab
      const deleteTab = (e) => {
        props.deleteEvent(props.condition.id);
      };

      const getDataFromSubForm=(e)=>{
        props.getDataFromForm(e)
    }
    
      return (
        <div style={{ width: "50%" }}>
          <div className="card text-center alert alert-success">
            <div className="card-body">
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
              {action_options.map((option, index) => {
                return (
                  <div
                    key={option.name}
                    className="btn-group"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <button
                      onClick={(e) => {
                        chooseActionOption(e);
                      }}
                      type="button"
                      name={option.name}
                      id="side"
                      disabled={option.disabled}
                      className={"btn btn-" + option.color}
                    >
                      {option.name}
                    </button>
                  </div>
                );
              })}
    
              {action_wait_true ? <WaitForm id={action_options[0].name} getDataFromSubForm={getDataFromSubForm}/> : null}
    
              {action_buy_true ? <BuyForm  id={action_options[1].name}getDataFromSubForm={getDataFromSubForm}/> : null}
    
              {action_sell_true ? <SellForm id={action_options[2].name} getDataFromSubForm={getDataFromSubForm}/> : null}
            </div>
          </div>
        </div>
      );
    };

export default Action
