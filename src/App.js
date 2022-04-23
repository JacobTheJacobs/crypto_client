import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import EventCard from "./event_card";
import ActionCard from "./action_card";
import DefaultEventCard from "./defaul_event_card";

function App() {
  const divRref = useRef(null);
  const [conditions, setConditions] = useState([]);
  const [starting_events, setStartingEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [actions, setActions] = useState([]);
  const [condition_finneshed, setConditionFinneshed] = useState(false);

  //user inputs default card
  const [userSelectedCoin, setUserSelectedCoin] = useState("BTC");
  const [userSelectedStrategy, setUserSelectedStrategy] = useState("Price");
  const [userStrategyCondition, setUserStrategyCondition] = useState("");
  const [userStratCondiSelectInput, setUserStratCondiSelectInput] =
    useState("");
  const [userStratCondiInput, setUserStratCondiInput] = useState("");
  const [userSelectedTimeFrame, setUserSelectedTimeFrame] = useState("");

  useEffect(() => {
    divRref.current.scrollIntoView({ behavior: "smooth" });
  }, [conditions, events, actions]);

  //add Event
  const addEvent = (e) => {
    e.preventDefault();
    if (conditions.length === 0 || condition_finneshed === true) {
      setConditions([
        ...conditions,
        {
          id: conditions.length + 1,
          se: 1,
          e: 0,
          a: 0,
          starting_events: starting_events,
          events: events,
          actions: actions,
        },
      ]);
    } else {
      setConditions([
        ...conditions,
        {
          id: conditions.length + 1,
          se: 0,
          e: 1,
          a: 0,
          starting_events: starting_events,
          events: events,
          actions: actions,
        },
      ]);
    }
    setConditionFinneshed(false);

    let eventObj = {
      coin: userSelectedCoin,
      strategy: userSelectedStrategy,
      condition: userStrategyCondition,
      input_condition: userStratCondiSelectInput,
      input: userStratCondiInput,
      timeFrame: userSelectedTimeFrame,
    };

    console.log(eventObj);

    setStartingEvents([
      ...starting_events,
      {
        id: starting_events.length + 1,
        obj: eventObj,
      },
    ]);
  };

  //add Action
  const addAction = (e) => {
    e.preventDefault();
    if (conditions.length === 0) {
      return;
    }
    if (
      conditions[conditions.length - 1].e === 1 ||
      conditions[conditions.length - 1].se === 1 ||
      conditions[conditions.length - 2].e === 1 ||
      (conditions[conditions.length - 2].se === 1 &&
        conditions[conditions.length - 1].a === 1) ||
      conditions[conditions.length - 3].e === 1 ||
      (conditions[conditions.length - 3].se === 1 &&
        conditions[conditions.length - 2].a === 1 &&
        conditions[conditions.length - 1].a === 1)
    ) {
      setConditions([
        ...conditions,
        {
          id: conditions.length + 1,
          se: 0,
          e: 0,
          a: 1,
          starting_events: starting_events,
          events: events,
          actions: actions,
        },
      ]);
    }
    setConditionFinneshed(true);
  };

  const deleteEvent = (id) => {
    //search for the event in the conditions array
    const index = conditions.findIndex((c) => c.id === id);
    //delete the event
    const new_conditions = [...conditions];
    new_conditions.splice(index, 1);
    setConditions(new_conditions);
  };

  const getUserEventInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    if (id === "coin") {
      setUserSelectedCoin(value);
    }

    if (id === "strategy") {
      setUserStrategyCondition(value);
    }

    //chekc if e.target is label tag
    if (e.target.tagName === "LABEL") {
      setUserStrategyCondition(e.target.innerText);
    }

    if (e.target.tagName === "A") {
      setUserStratCondiSelectInput(e.target.innerText);
    }

    if (e.target.tagName === "INPUT") {
      if (id === "select_condition") {
        console.log(e.target.id);
      } else if (id === "input") {
        console.log(e.target.id);
      }
      setUserStratCondiInput(value);
    }
    ///get coin
    //get selected Strategy
    //get selected condition
    //get input
    //get selected time frame if rsi
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <div>
            {conditions.map((condition, index, { length }) => {
              if (index + 1 === length) {
                if (condition.se === 1) {
                  return (
                    <DefaultEventCard
                      key={index}
                      condition={condition}
                      deleteEvent={deleteEvent}
                      getUserEventInput={getUserEventInput}
                      last={true}
                      {...conditions.map((rank, i, arr) => {
                        if (arr.length - 1 === i) {
                          console.log(rank);
                        }
                      })}
                    />
                  );
                } else if (condition.e === 1) {
                  return (
                    <EventCard
                      key={index}
                      condition={condition}
                      deleteEvent={deleteEvent}
                      last={true}
                    />
                  );
                } else if (condition.a === 1) {
                  return (
                    <ActionCard
                      key={index}
                      condition={condition}
                      deleteEvent={deleteEvent}
                      last={true}
                    />
                  );
                }
              } else {
                if (condition.se === 1) {
                  return (
                    <DefaultEventCard
                      key={index}
                      condition={condition}
                      deleteEvent={deleteEvent}
                      last={false}
                      {...conditions.map((rank, i, arr) => {
                        if (arr.length - 1 === i) {
                          console.log(rank);
                        }
                      })}
                    />
                  );
                } else if (condition.e === 1) {
                  return (
                    <EventCard
                      key={index}
                      condition={condition}
                      deleteEvent={deleteEvent}
                      last={false}
                    />
                  );
                } else if (condition.a === 1) {
                  return (
                    <ActionCard
                      key={index}
                      condition={condition}
                      deleteEvent={deleteEvent}
                      last={false}
                    />
                  );
                }
              }
            })}
          </div>
          <div
            ref={divRref}
            style={{
              position: "absolute",
              right: "0",
              marginRight: "3%",
              marginBottom: "3%",
            }}
            className="btn-group"
          >
            <div
              style={{
                position: "absolute",
                marginBottom: "150%",

                right: "0",
                bottom: "0",
              }}
              className=" flex flex-col"
            >
              {conditions.map(
                (condition, index) => (
                  <>
                    <div>{index}</div>
                    <div>{console.log(condition)}</div>
                  </>
                )
                /*  if (index + 1 === length) {
            return (
              <button
                key={index}
                className="btn btn-danger"
                onClick={() => {
                  setConditions([]);
                }}
              >
                Delete All
              </button>
            );
          }*/
              )}
            </div>
            <button
              className="btn btn-warning"
              onClick={(e) => {
                addEvent(e);
              }}
            >
              Add Event
            </button>
            <button
              className="btn btn-success"
              onClick={(e) => {
                addAction(e);
              }}
            >
              Add Action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
