import React from 'react'
import PriceForm from '../event_forms/price_form'

function StartingEvent(props) {

    const getDataFromSubForm=(e)=>{
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
            <PriceForm getDataFromSubForm={getDataFromSubForm}/>
        </div></div></div>
    )
}

export default StartingEvent
