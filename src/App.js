import React, { useState, useRef, useEffect } from "react";
import './App.css';
import StartingEvent from './cards/start_event'
import Event from './cards/event'

localStorage.setItem("conditions",null)
function App() {
  const divRref = useRef(null);
  const [conditions, setConditions] = useState([]);
  const [starting_events, setStartingEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [actions, setActions] = useState([]);
  const [condition_finneshed, setConditionFinneshed] = useState(false);

  //user selections price form
  const[user_coin,setUserCoin]=useState("BTC");
  const[user_starategy,setUserStrategy]=useState("Price")
  const[user_strat_cond,setUsetStaratCond]=useState("increased by")
  const[user_star_input,setUserStratInput]=useState("70")
  const[user_star_input_selc,setUserStratInputSelc]=useState("%")
  const[user_time_frame,setUserTimeFrame]=useState("1h")
 
  const getDataFromForm=(e)=>{
    let id =e.target.id
    if(id==="coin"){
      setUserCoin(e.target.value)
    }else if(id==="strategy"){
      setUserStrategy(e.target.value)
    }else if(id==="strategy_condition"){
      setUsetStaratCond(e.target.innerText)
    }else if(id==="strategy_input"){
      setUserStratInput(e.target.value)
    }else if(id==="select_condition"){
      setUserStratInputSelc(e.target.innerText)
     }else if(id==="timeframe"){
      setUserStratInputSelc(e.target.innerText)
     }
  }

  

  const addEvent= async ()=>{
         let obj = {}
         //Starting event
        if(conditions.length === 0){
          obj = {
          id: starting_events.length + 1,
          type:0,
          coin:user_coin,
          starategy:user_starategy,
          startegy_condition:user_strat_cond,
          startegy_condition_input:user_star_input,
          startegy_condition_input_select:user_star_input_selc
      }
            await setStartingEvents([
              ...starting_events,
              {
                id: starting_events.length + 1,
                data:obj
              },
            ]);
 
            await setConditions([
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
              //Regular event
          }else{

            obj = {
              id: events.length + 1,
              type:1,
              coin:user_coin,
              starategy:user_starategy,
              startegy_condition:user_strat_cond,
              startegy_condition_input:user_star_input,
              startegy_condition_input_select:user_star_input_selc
            }

            await setEvents([
              ...events,
              {
                id: events.length + 1,
                data:obj
              },
            ]);
          
            await setConditions([
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
    //push obj to the local storage array
    let localStorageConditions = JSON.parse(localStorage.getItem("conditions"));
     // Save allEntries back to local storage
     if(localStorageConditions == null) localStorageConditions = [];
     localStorage.setItem("obj", JSON.stringify(obj));
     localStorageConditions.push(obj);
     localStorage.setItem("conditions", JSON.stringify(localStorageConditions));
    
    setUserCoin("BTC")
    setUserStrategy("Price")
    setUsetStaratCond("increased by")
    setUserStratInput("70")
    setUserStratInputSelc("%")
  }


  return (
    <div>
    <div className="App">
    <StartingEvent  getDataFromForm={getDataFromForm}/>
                   {conditions.map((condition, index, { length }) => {
                          if (condition.e === 1) {
                            return (
                              <Event
                              key={index}
                              condition={condition} getDataFromForm={getDataFromForm}
                              />
                            );
                          } else if (condition.se === 1) {
                            return (
                              <StartingEvent
                              key={index}
                              condition={condition} getDataFromForm={getDataFromForm}
                              />
                            );
                            }})}
                    


         <button
              className="btn btn-warning"
              onClick={(e) => {
                addEvent(e);
              }}
            >
              Add Event
            </button>
    </div>
    </div>
  );
}

export default App;
