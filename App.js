import React, { useState, useEffect } from "react";
import ActionCard from "./actionCard";
import "./App.css";
import EventCard from "./eventCard";

//constants
const COINS = ["BTC", "ETH", "BNB"];
const STRATEGY = ["Price", "Volume", "RSI"];
const STRATEGY_CONDITION = ["higher then", "lower then"];
const STRATEGY_CONDITION_OPTION = ["USDT", "%"];
const TIMEFRAME = ["1m", "1h", "1d"];
const INPUTID = [
  //events card
  "coin",
  "stategy",
  "strategy_condition",
  "strategy_value",
  "strategy_condition_option",
  "timeframe",
  //action card type
  "action_pick",
  "action_coin",
  "action_value",
  "action_value_option",
  "action_type",
];
//buy sell
const ORDER_PICK = ["BUY", "SELL"];
const ORDER_TYPE = ["limit", "market"];
const CONDITION_LIMIT = 3;

function App() {
  //conditions
  const [events, setEvents] = useState([
    {
      coin: COINS[0],
      stategy: STRATEGY[0],
      strategy_condition: STRATEGY_CONDITION[0],
      strategy_contion_option: STRATEGY_CONDITION_OPTION[0],
      strategy_value: COINS[0],
      timeframe: TIMEFRAME[0],
    },
  ]);
  const [actions, setActions] = useState([
    {
      order_pick: ORDER_PICK[0],
      order_coin: COINS[0],
      order_value: "",
      order_value_option: STRATEGY_CONDITION_OPTION[0],
      order_type: ORDER_TYPE[0],
    },
  ]);
  const [conditions, setConditions] = useState([
    {
      id: 0,
      e: 1,
      a: 0,
      events: [...events],
      actions: [],
    },
  ]);

  //$events card
  //user selections input
  const [user_coin, setUserCoin] = useState(COINS[0]);
  const [user_starategy, setUserStrategy] = useState(STRATEGY[0]);
  const [user_strat_cond, setUsetStaratCond] = useState(STRATEGY_CONDITION[0]);
  const [user_star_option, setUserStratOption] = useState(
    STRATEGY_CONDITION_OPTION[0]
  );
  const [user_star_input, setUserStratInput] = useState("10");
  const [user_time_frame, setUserTimeFrame] = useState(TIMEFRAME[0]);
  //$action card
  //user selections input
  const [user_action_pick, setUserActionPick] = useState(ORDER_PICK[0]);
  const [user_action_type, setUserActionType] = useState(ORDER_TYPE[0]);
  //some varibales for the logic
  const [action_init_set, setActionInitSet] = useState(false); //chekc if action card is set
  const [program_end, setProgramEnd] = useState(false); //check if program ends
  const [local_storage_data, setLocalStorageData] = useState(""); //local starge variable for api

  useEffect(() => {
    console.log(conditions);
  }, [conditions, events, actions]);

  //handle all inputs
  const handleInput = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case INPUTID[0]: //coin
        setUserCoin(e.target.value);
        break;
      case INPUTID[1]: //stategy
        setUserStrategy(e.target.value);
        break;
      case INPUTID[2]: //strategy_condition
        setUsetStaratCond(e.target.value);
        break;
      case INPUTID[3]: //strategy_value
        setUserStratInput(e.target.value);
        break;
      case INPUTID[4]: //strategy_condition_option
        setUserStratOption(e.target.value);
        break;
      case INPUTID[5]: //timeframe
        setUserTimeFrame(e.target.value);
        break;
      case INPUTID[6]: //action_type
        setUserActionPick(e.target.value);
        break;
      case INPUTID[7]: //action_coin
        setUserCoin(e.target.value);
        break;
      case INPUTID[8]: //action_value
        setUserStratInput(e.target.value);
        break;
      case INPUTID[9]: //action_value_option
        setUserStratOption(e.target.value);
        break;
      case INPUTID[10]: //action_type
        setUserActionType(e.target.value);
        break;
      default:
        break;
    }
  };

  //save to local storage
  const handleSaveToLocalStorage = (obj) => {
    //update conditions of local storage
    let localStorageConditions = JSON.parse(localStorage.getItem("conditions"));
    if (localStorageConditions == null) localStorageConditions = [];
    localStorage.setItem("obj", JSON.stringify(obj));
    localStorageConditions.push(obj);
    localStorage.setItem("conditions", JSON.stringify(localStorageConditions));
    //init all values for the user inputs
    setUserCoin(COINS[0]);
    setUserStrategy(STRATEGY[0]);
    setUsetStaratCond(STRATEGY_CONDITION[0]);
    setUserStratOption(STRATEGY_CONDITION_OPTION[0]);
    setUserTimeFrame(TIMEFRAME[0]);
    setUserStratInput("10");
    setUserActionPick(ORDER_PICK[0]);
    setUserActionType(ORDER_TYPE[0]);
  };

  //handle events card
  const handleSaveToStateEvents = (obj) => {
    //set all the events
    setEvents([...events, obj]);
    //set all the conditions with events
    setConditions([
      ...conditions,
      {
        id: conditions.length,
        e: 1,
        a: 0,
        events: [...events, obj],
        actions: [...actions],
      },
    ]);
  };

  //handle save to  actions card
  const handleSaveToStateActions = (obj) => {
    //only set the action card once if empty first
    if (actions.length === 1 && action_init_set === false) {
      //init with new action card
      setActionInitSet(true);
      //set to actions obj actions array
      setActions([obj]);
      //set to actions to condions array
      setConditions([
        ...conditions,
        {
          id: conditions.length,
          e: 0,
          a: 1,
          events: [...events],
          actions: [obj],
        },
      ]);
    } else {
      //get all the last actions plus the new obj
      setActions([...actions, obj]);
      //set all the conditinons with the old actions
      setConditions([
        ...conditions,
        {
          id: conditions.length,
          e: 0,
          a: 1,
          events: [...events],
          actions: [...actions, obj],
        },
      ]);
    }
  };

  //add event function
  const addEvent = () => {
    //check the condition of actions and events so that wont be more than one event
    if (events.length < CONDITION_LIMIT && actions.length < CONDITION_LIMIT) {
      let obj = {
        //event card obj
        coin: user_coin,
        stategy: user_starategy,
        strategy_condition: user_strat_cond,
        strategy_condition_option: user_star_option,
        strategy_value: user_star_input,
        timeframe: user_time_frame,
      };
      //check if the last was action push it local storage
      if (conditions[conditions.length - 1].a === 1) {
        let obj = {
          //action card obj
          order_pick: user_action_pick,
          order_coin: user_coin,
          order_value: user_star_input,
          order_value_option: user_star_option,
          order_type: user_action_type,
        };
        handleSaveToLocalStorage(obj);
        //check if the last was event push it local storage
      } else {
        handleSaveToLocalStorage(obj);
      }
      //create new event
      handleSaveToStateEvents(obj);
    }
  };

  const addAction = () => {
    //check the condition of actions and events so that wont be more than one event
    if (actions.length < CONDITION_LIMIT) {
      let obj = {
        //acation card obj
        order_pick: user_action_pick,
        order_coin: user_coin,
        order_value: user_star_input,
        order_value_option: user_star_option,
        order_type: user_action_type,
      };
      //check if the last was event push it local storage
      if (conditions[conditions.length - 1].e === 1) {
        let obj = {
          //event  card obj
          coin: user_coin,
          stategy: user_starategy,
          strategy_condition: user_strat_cond,
          strategy_condition_option: user_star_option,
          strategy_value: user_star_input,
          timeframe: user_time_frame,
        };
        handleSaveToLocalStorage(obj);
      } else {
        //check if the last was action push it local storage
        handleSaveToLocalStorage(obj);
      }
      ///create new action
      handleSaveToStateActions(obj);
    }
  };

  //handle save the final action card to local storage and send to the back end
  const finishAndGetVAlues = () => {
    //check if we clicke only once so wont click again
    if (
      !program_end &&
      (actions.length <= CONDITION_LIMIT || events.length >= CONDITION_LIMIT)
    ) {
      //check if the last was action push it local storage
      if (conditions[conditions.length - 1].a === 1) {
        //action obj
        let obj = {
          order_pick: user_action_pick,
          order_coin: user_coin,
          order_value: user_star_input,
          order_value_option: user_star_option,
          order_type: user_action_type,
        };

        //save to local storage
        handleSaveToLocalStorage(obj);
        setProgramEnd(true);
        //get local storage data
        let localStorageConditions = JSON.parse(
          localStorage.getItem("conditions")
        );
        //print
        console.log("Final Data");
        console.log(localStorageConditions);
        //set the data for the back end
        setLocalStorageData(localStorageConditions);
      }
    }
  };

  //delete card last
  const deleteCard = (id) => {
    //search for the event in the conditions array
    const index = conditions.findIndex((c) => c.id === id);
    //delete the event
    if (conditions[index].a === 1) {
      //delete the last index in the action array
      const new_actions = conditions[index].actions.splice(
        conditions[index].actions.length - 1,
        1
      );
      //set the new actions array
      setActions(new_actions);
    } else {
      //delete the last index in the event array
      const new_events = conditions[index].events.splice(
        conditions[index].events.length - 1,
        1
      );
      setEvents(new_events);
    }
    const new_conditions = [...conditions];
    new_conditions.splice(index, 1);
    setConditions(new_conditions);

    //delete the last index in the condition array
    let localStorageConditions = JSON.parse(localStorage.getItem("conditions"));
    if (localStorageConditions == null) localStorageConditions = [];
    localStorageConditions.splice(index - 1, 1);
    localStorage.setItem("conditions", JSON.stringify(localStorageConditions));
  };

  return (
    <div className="App">
      {!program_end ? (
        <>
          <button onClick={() => addEvent()}>event</button>
          <button onClick={() => addAction()}>action</button>
        </>
      ) : null}

      {conditions.map((con, index) => {
        //check if this is the last card in the list
        //chekc if the was event
        if (con.e === 1) {
          return (
            <div key={index} style={{ border: "1px solid" }}>
              <EventCard
                last={true}
                ids={INPUTID}
                coins={COINS}
                strategy={STRATEGY}
                strategy_condition={STRATEGY_CONDITION}
                strategy_condition_option={STRATEGY_CONDITION_OPTION}
                timeframe={TIMEFRAME}
                deleteCard={deleteCard}
                condition={con}
                handleInput={handleInput}
              />
            </div>
          );
          //chekc if the was action
        } else if (con.a === 1) {
          return (
            <div key={index}>
              {" "}
              <div key={index} style={{ border: "1px solid" }}>
                <ActionCard
                  last={true}
                  ids={INPUTID}
                  order_pick={ORDER_PICK}
                  coins={COINS}
                  strategy_condition={STRATEGY_CONDITION}
                  strategy_condition_option={STRATEGY_CONDITION_OPTION}
                  order_type={ORDER_TYPE}
                  deleteCard={deleteCard}
                  condition={con}
                  handleInput={handleInput}
                />
              </div>
            </div>
          );
        }
      })}

      <button onClick={() => finishAndGetVAlues()}>done</button>
      {local_storage_data.length > 0 ? (
        <div>{JSON.stringify(local_storage_data)}</div>
      ) : null}
    </div>
  );
}

export default App;
