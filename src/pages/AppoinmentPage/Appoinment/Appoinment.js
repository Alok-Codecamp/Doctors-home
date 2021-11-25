import React from 'react';
import Navigation from '../../SharedPage/Navigation/Navigation';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AvilableAppoinment from '../AvilableAppoinment/AvilableAppoinment';

const Appoinment = () => {
     const [date,setDate]=React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
            <AvilableAppoinment date={date}></AvilableAppoinment>
        </div>
    );
};

export default Appoinment;