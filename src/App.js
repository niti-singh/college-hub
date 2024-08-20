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
import Compus from "./components/CompusDrive/Compus";
import Placement from "./components/Gallery/Placement";
import Other from "./components/Gallery/Other/Other";
import Acedmic from "./components/Gallery/Other/Acedimc";
import Exams from "./components/Gallery/Other/Exams";
import Tournament from "./components/Gallery/Other/Tournament";
import Lab from "./components/Gallery/Other/Lab";
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
        <Route path="compus" element={<Compus/>}/>
        <Route path="placement" element={<Placement/>}/>
        <Route path="other" element={<Other/>}/>
        <Route path="acedmic" element={<Acedmic/>}/>
        <Route path="exams" element={<Exams/>}/>
        <Route path="tournaments" element={<Tournament/>}/>
        <Route path="labs" element={<Lab/>}/>
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
