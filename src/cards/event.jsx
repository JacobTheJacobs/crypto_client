import React from 'react'
import PriceForm from '../event_forms/price_form'

function Event(props) {

    const getDataFromSubForm=(e)=>{
        props.getDataFromForm(e)
    }

    return (
        <div className="card text-center alert alert-warning">
            dsa
            <PriceForm getDataFromSubForm={getDataFromSubForm}/>
        </div>
    )
}

export default Event
