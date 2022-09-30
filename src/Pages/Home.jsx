import React from 'react'
import Footer from '../Components/Footer';
import Bang from '../Components/Home/Bang';
import Page4 from '../Components/Home/Page4';
import Pages2 from '../Components/Home/Pages2';
import Pages3 from '../Components/Home/Pages3';
import Page5 from '../Components/Home/Page5';
 import Navbar from "../Navbar/Navbar"
import Page6 from '../Components/Home/Page6';
import Page7 from '../Components/Home/Page7';
import Page77 from '../Components/Home/Page77';
import Page8 from '../Components/Home/Page8';
import Page9 from '../Components/Home/Page9';
import Page10 from '../Components/Home/Page10';
import Page11 from '../Components/Home/Page11';
import Page12 from '../Components/Home/Page12';
import Page13 from '../Components/Home/Page13';
import Page14 from '../Components/Home/Page14';
import Page15 from '../Components/Home/Page15';
import Page0 from '../Components/Home/Page0';

 const Home=()=> {
  return (
    <div> 

       <Page0 />
        <Navbar/>
        <Bang />
        <Pages2 />
        <Pages3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page77/>
        <Page7 />
        <Page8 />
        <Page9 />
        <Page10 />
        <Page11 />
        <Page12/>
        <Page13/>
        <Page14 />
        <Page15 />
       

        <Footer/>
    </div>
  );
}

export default Home;