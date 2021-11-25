import React from 'react';
import Navigation from '../../SharedPage/Navigation/Navigation';
import AppoinmentBanner from './AppoinmentBanner/AppoinmentBanner';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = (props) => {
const h= props.children;
console.log(props.ch)
    return (
        <div>
           <Navigation></Navigation>
           <Banner></Banner>
           <Services></Services>
           <AppoinmentBanner></AppoinmentBanner>
        </div>
    );
};

export default Home;