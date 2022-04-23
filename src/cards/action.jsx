import React from 'react'
import PriceForm from '../event_forms/price_form'

function Action(props) {

    const getDataFromSubForm=(e)=>{
        props.getDataFromForm(e)
    }

    return (
        <div className="card text-center alert alert-warning">
            ---------
            <PriceForm getDataFromSubForm={getDataFromSubForm}/>
        </div>
    )
}

export default Action
