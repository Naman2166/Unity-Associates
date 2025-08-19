import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'



const App = () => {

  return (
    <div className=''>              
    
    <div className='mb-14 sm:mb-14 md:mb-14 lg:mb-14 xl:mb-[4rem]'>
    <Navbar />
    </div>
    
    
    <Routes>
       <Route path='/' element={<Home />} />                        {/* on "/" route , Home component will appear */}       
       <Route path='/services' element={<Services />} /> 
       <Route path='/gallery' element={<Gallery />} />  
       <Route path='/about-us' element={<AboutUs />} />
       <Route path='/contact-us' element={<ContactUs />} />
    </Routes>

    <Footer />  
    
     
    </div>
  )
}

export default App