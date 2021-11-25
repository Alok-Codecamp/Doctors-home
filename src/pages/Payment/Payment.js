import React, { useState } from 'react';
import { useParams } from 'react-router';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import CheckOutForm from './CheckOutForm';


const stripePromise=loadStripe('pk_test_51Jxy3pIgrNL3xh8XNfOn57GZBK6INhc21RX3zPYrBew1pbq3rjbJdnBZXK9Gumn934LM0hzegLOPXx78WMYsveaW00r2ePYnNS');

const Payment = () => {
    const {appoinmentId}=useParams();
    const [appoinment,setAppoinment]=useState({});

    useState(()=>{
        fetch(`http://localhost:5000/appoinments/${appoinmentId}`)
        .then(res=>res.json())
        .then(data=>setAppoinment(data))
    },[appoinmentId])
    console.log(appoinment)
    return (
        <div>
             <h2>Appoinment Id: {appoinmentId}</h2>
            <h2> please pay for:{appoinment.serviceName}
            </h2>
            <h4>Pay: ${appoinment.price}</h4>

            <Elements stripe={stripePromise}>
      <CheckOutForm 
      appoinment={appoinment}/>
    </Elements>
        </div>
    );
};

export default Payment;