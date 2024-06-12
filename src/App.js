import Carousel from "./components/Carousel/Carousel";
import Calendar from "./components/Event_Calendar/Calendar";
import Footer1 from "./components/Footer/Footer1";
import Cards from "./components/HomeCards/Cards";
import Nav from "./components/Navbar/Nav";
import Notice from "./components/NoticeBoard/Notice";
import Plus from "./components/PlusButton/Plus";
import Faculty from "./components/Faculty/Faculty";
import IMP from "./components/IMPeople/IMP"

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from "./components/Contactus/Contact";
import About from "./components/Aboutus/About";
import Gallery from "./components/Gallery/Gallery"
import Vihangam from "./components/Gallery/Vihangam";
import Sports from "./components/Gallery/Sports";


function App() {
  return (
    <Router>
       <Nav/>
       <Routes>
        <Route path="/" element={
          <>
           <Carousel/>
           <Notice/>
           <Cards/>
           <IMP/>
           
           
           
           
          </>
        }/>
        <Route path="/cards" element={<Cards/>}/>
        <Route path="/plus" element={<Plus/>}/>
        <Route path='calendar' element={<Calendar/>}/>
        <Route path='faculty' element={<Faculty/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='about' element={<About/>}/>
        <Route path="gallery" element={<Gallery/>}/>
        <Route path="vihangam" element={<Vihangam/>}/>
        <Route path="sports" element={<Sports/>}/>
        
      
    
       </Routes>
       <Footer1/>

    </Router>



    
      // <Nav/>
      // <Carousel/>
      // <Notice/>
      // <Cards/>
      // <Plus/>
      // <Footer1/>
      
      
          
        
      
    
  );
}

export default App;
