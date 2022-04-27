import React, { useState, useRef, useEffect } from "react";
import './App.css';
import StartingEvent from './cards/start_event'
import Event from './cards/event'
import Action from './cards/action'

localStorage.setItem("conditions",null)
function App() {
  const divRref = useRef(null);
  const [conditions, setConditions] = useState([{
    id: 1,
    se: 1,
    e: 0,
    a: 0,
    starting_events: [{
      id: "",
      data:""
    }],
    events: [{
      id: "",
      data:""
    }],
    actions: [{
      id: "",
      data:""
    }],
  }]);
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
  const[user_or_and,setUserOrAnd]=useState("AND")

  //user selection action order_input
  const[user_action_side,setUserActionSide]=useState("BUY");
  const[user_loop,setUserLoop]=useState("once");
  const[user_order_input,setUserOrderInput]=useState("100");


  useEffect(() => {
    divRref.current.scrollIntoView({ behavior: "smooth" });
    console.log("updated")
    console.log(conditions)
    if(conditions.length===0){
      setConditions([{
        id: 1,
        se: 1,
        e: 0,
        a: 0,
        starting_events: [{
          id: "",
          data:""
        }],
        events: [{
          id: "",
          data:""
        }],
        actions: [{
          id: "",
          data:""
        }],
      }])
    }
  }, [conditions, events, actions, starting_events]);

 
  const getDataFromForm=(e)=>{
    console.log(e.target)
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
      setUserTimeFrame(e.target.value)
     }else if(id==="loop"){
      setUserLoop(e.target.value)
     }else if(id==="order_input"){
      setUserOrderInput(e.target.value)
     }else if(id==="side"){
      setUserActionSide(e.target.value)
     }else if(id==="or_and"){
      setUserOrAnd(e.target.innerText)
     }
  }


  const addEvent=  ()=>{
         let obj = {}
         //Starting event
        if(condition_finneshed){
          if(conditions[conditions.length - 1].se === 1){
            obj = {
              id: starting_events.length + 1,
              type:0,
              coin:user_coin,
              starategy:user_starategy,
              startegy_condition:user_strat_cond,
              startegy_condition_input:user_star_input,
              startegy_condition_input_select:user_star_input_selc,
              timeframe:user_time_frame
          }

            setStartingEvents([
              ...starting_events,
              {
                id: starting_events.length + 1,
                data:obj
              },
            ]);
            setConditions((conditions)=>[ 
              ...conditions,
              {
                id: conditions.length + 1,
                se: 1,
                e: 0,
                a: 0,
                starting_events: [...starting_events,{
                  id: starting_events.length + 1,
                  data:obj
                }],
                events: [...events],
                actions: [...actions],
              }]);
          }else if(conditions[conditions.length - 1].e === 1){
            obj = {
              id: events.length + 1,
              type:1,
              coin:user_coin,
              starategy:user_starategy,
              startegy_condition:user_strat_cond,
              startegy_condition_input:user_star_input,
              startegy_condition_input_select:user_star_input_selc,
              timeframe:user_time_frame,
              user_side:user_or_and
            }
          }else if(conditions[conditions.length - 1].a === 1 ){
            obj = {
              id: actions.length + 1,
              type:2,
              side:user_action_side,
              coin:user_coin,
              loop:user_loop,
              order_input:user_order_input,
              startegy_condition_input:user_star_input,
              startegy_condition_input_select:user_star_input_selc,
              timeframe:user_time_frame
            }
          }
          

          
              //Regular event
          }else{

            if(conditions.length===1 || conditions[conditions.length - 1].a === 1 ){
              
              obj = {
                id: starting_events.length + 1,
                type:0,
                coin:user_coin,
                starategy:user_starategy,
                startegy_condition:user_strat_cond,
                startegy_condition_input:user_star_input,
                startegy_condition_input_select:user_star_input_selc,
                timeframe:user_time_frame
            }

            setConditions([
              ...conditions,
              {
                id: conditions.length + 1,
                se: 0,
                e: 1,
                a: 0,
                starting_events: [...starting_events,{
                  id: starting_events.length + 1,
                  data:obj
                }],
                events: [...events],
                actions: [...actions],
              }]);
          }else{

              setEvents([
                ...events,
                {
                  id: events.length + 1,
                  data:obj
                },
              ]);
              obj = {
                id: events.length + 1,
                type:1,
                coin:user_coin,
                starategy:user_starategy,
                startegy_condition:user_strat_cond,
                startegy_condition_input:user_star_input,
                startegy_condition_input_select:user_star_input_selc,
                timeframe:user_time_frame,
                user_side:user_or_and
              }
              setConditions([
                ...conditions,
                {
                  id: conditions.length + 1,
                  se: 0,
                  e: 1,
                  a: 0,
                  starting_events: [...starting_events],
                  events: [...events,{
                    id: events.length + 1,
                    data:obj
                  }],
                  actions: [...actions],
                }]);
            }    
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
    setUserTimeFrame("1h")
    setConditionFinneshed(false);
  }

    //add Action
    const addAction = (e) => {
      let obj={}
      
      if(conditions[conditions.length - 1].se === 1){
        obj = {
          id: starting_events.length + 1,
          type:0,
          coin:user_coin,
          starategy:user_starategy,
          startegy_condition:user_strat_cond,
          startegy_condition_input:user_star_input,
          startegy_condition_input_select:user_star_input_selc,
          timeframe:user_time_frame
      }
     
      }else if(conditions[conditions.length - 1].e === 1){
        obj = {
          id: events.length + 1,
          type:1,
          coin:user_coin,
          starategy:user_starategy,
          startegy_condition:user_strat_cond,
          startegy_condition_input:user_star_input,
          startegy_condition_input_select:user_star_input_selc,
          timeframe:user_time_frame,
          user_side:user_or_and
        }
      }else if(conditions[conditions.length - 1].a === 1 ){
        obj = {
          id: actions.length + 1,
          type:2,
          side:user_action_side,
          coin:user_coin,
          loop:user_loop,
          order_input:user_order_input,
          startegy_condition_input:user_star_input,
          startegy_condition_input_select:user_star_input_selc,
          timeframe:user_time_frame
        }
      }
      if((conditions.length === 0) ||
      conditions[conditions.length - 1].e === 1 ||
      conditions[conditions.length - 1].se === 1 ||
      conditions[conditions.length - 2].e === 1 ||
      (conditions[conditions.length - 2].se === 1 &&
      conditions[conditions.length - 1].a === 1) ||
      conditions[conditions.length - 3].e === 1 ||
      (conditions[conditions.length - 3].se === 1 &&
      conditions[conditions.length - 2].a === 1 &&
       conditions[conditions.length - 1].a === 1)){
        setConditions([
          ...conditions,
          {
            id: conditions.length + 1,
            se: 0,
            e: 0,
            a: 1,
            starting_events: [...starting_events],
            events: [...events],
            actions: [...actions,{
              id: actions.length + 1,
              data:obj
            }],
          },
        ]);
        let localStorageConditions = JSON.parse(localStorage.getItem("conditions"));
        // Save allEntries back to local storage
        if(localStorageConditions == null) localStorageConditions = [];
        localStorage.setItem("obj", JSON.stringify(obj));
        localStorageConditions.push(obj);
        localStorage.setItem("conditions", JSON.stringify(localStorageConditions));
        setUserCoin("BTC")
        setUserLoop("once")
        setUserTimeFrame("1h")
        setUserStratInputSelc("%")
        setUserStratInput("70")
        setConditionFinneshed(true);
      }
     
    
    };
    const deleteEvent = (id) => {
      //search for the event in the conditions array
      const index = conditions.findIndex((c) => c.id === id);
      //delete the event
      const new_conditions = [...conditions];
      new_conditions.splice(index, 1);
      setConditions(new_conditions);

      let localStorageConditions = JSON.parse(localStorage.getItem("conditions"));
      // delete the last element in the conditions array
      localStorageConditions.splice(localStorageConditions.length - 1, 1);
      localStorage.setItem("conditions", JSON.stringify(localStorageConditions));

    };
  return (
    <div>
    <div className="App">
                   {conditions.map((condition, index, { length }) => {
                      if (index + 1 === length) {
                          if (condition.e === 1) {
                            return (
                              <Event
                              key={index}
                              last={true}
                              deleteEvent={deleteEvent}
                              condition={condition} getDataFromForm={getDataFromForm}
                              />
                            )
                          } else if (condition.se === 1) {
                            return (
                              <StartingEvent
                              key={index}
                              last={true}
                              deleteEvent={deleteEvent}
                              condition={condition} getDataFromForm={getDataFromForm}
                              />
                            )
                            
                            } else if (condition.a === 1) {
                              return (
                                <Action
                                key={index}
                                last={true}
                                deleteEvent={deleteEvent}
                                condition={condition} getDataFromForm={getDataFromForm}
                                />
                              )
                              }}else {
                                if (condition.e === 1) {
                                  return (
                                    <Event
                                    key={index}
                                    deleteEvent={deleteEvent}
                                    last={false}
                                    condition={condition} getDataFromForm={getDataFromForm}
                                    />
                                  )
                                } else if (condition.se === 1) {
                                  return (
                                    <StartingEvent
                                    key={index}
                                    deleteEvent={deleteEvent}
                                    last={false}
                                    condition={condition} getDataFromForm={getDataFromForm}
                                    />
                                  )
                                  
                                  } else if (condition.a === 1) {
                                    return (
                                      <Action
                                      key={index}
                                      deleteEvent={deleteEvent}
                                      last={false}
                                      condition={condition} getDataFromForm={getDataFromForm}
                                      />
                                    )
                              }
                              }})}
                    


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
                  {console.log(events)}
                   {condition.se === 1 ?
                     <div>{condition.starting_events.map((e)=>(
                      
                        <div>
                        {e.data.coin}
                        </div>
                     
                     ))
                     }</div>:null}
                     
                    {condition.e === 1
                    ? <div>{condition.events.id}</div>:null}
                    {condition.a === 1
                    ? <div>{condition.starting_events.id}</div>:null}
                  </>
                )
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
    </div></div>
    </div>
  );
}

export default App;
