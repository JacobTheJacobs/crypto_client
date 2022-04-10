import "./index.css";
import { useState, useEffect, useRef } from "react";
import WalletForm from "./Wallet_form";
import EventForm from "./Event_form";
import ActionForm from "./ActionForm";

function App() {
  // need a state to keep track of todos

  const [user_keys, setUserKeys] = useState("");

  const [bots, setBot] = useState(() => {
    // get the todos from localstorage
    const savedBots = localStorage.getItem("bots");
    // if there are todos stored
    if (savedBots) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedBots);
      // otherwise
    } else {
      // return an empty array
      return [];
    }
  });

  const [events, setEvents] = useState([]);
  const [actions, setActions] = useState([]);
  const [eventsandactions, setEventsAndActions] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    // localstorage only support storing strings as keys and values
    // - therefore we cannot store arrays and objects without converting the object
    // into a string first. JSON.stringify will convert the object into a JSON string
    // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
    localStorage.setItem("bots", JSON.stringify(bots));
    // add the todos as a dependancy because we want to update the
    // localstorage anytime the todos state changes
    scrollToBottom();
  }, [bots, eventsandactions]);

  const CreateNewEvent = (e) => {
    // prevent the browser default behavior or refreshing the page on submit
    e.preventDefault();

    setEvents([
      ...events,
      {
        id: events.length + 1,
      },
    ]);

    setEventsAndActions([
      ...eventsandactions,
      {
        // setting a basic id to identify the object
        id: eventsandactions.length + 1,
        action: 0,
        event: 1,
      },
    ]);
    console.log(eventsandactions);
  };

  const CreateNewAction = (e) => {
    // prevent the browser default behavior or refreshing the page on submit
    e.preventDefault();

    setActions([
      ...actions,
      {
        id: actions.length + 1,
      },
    ]);

    setEventsAndActions([
      ...eventsandactions,
      {
        // setting a basic id to identify the object
        id: eventsandactions.length + 1,
        action: 1,
        event: 0,
      },
    ]);
    console.log(eventsandactions);
  };

  return (
    <>
      <div className="bg-indigo-700 h-full">
        <div className="container flex flex-col mx-auto w-full items-center justify-center">
          <ul className="flex flex-col">
            {eventsandactions.map((todo) =>
              todo.action === 1 ? (
                <ActionForm todo={todo} />
              ) : todo.event === 1 ? (
                <EventForm todo={todo} />
              ) : null
            )}
            <div ref={messagesEndRef} />
          </ul>
        </div>
        <div className="place-content-center">
          <div className="flex flex-wrap justify-center mt-10 gap-1.5 ">
            <button
              className=" px-6 py-2 
              rounded-full
              bg-yellow-400
              text-white
             transition ease-in duration-200 
             uppercase rounded-full 
             hover:bg-yellow-700 hover:text-white 
             border-2 border-white-900 
             focus:outline-none"
              onClick={(e) => CreateNewEvent(e)}
            >
              Event
            </button>
            <button
              className=" px-6 py-2 
             transition ease-in duration-200
             bg-green-400
             text-white
              uppercase rounded-full
               hover:bg-green-800
                hover:text-white border-2
                 border-white-900 
                 focus:outline-none"
              onClick={(e) => CreateNewAction(e)}
            >
              Action
            </button>
          </div>
        </div>
        <br></br>
      </div>
    </>
  );
}

export default App;
