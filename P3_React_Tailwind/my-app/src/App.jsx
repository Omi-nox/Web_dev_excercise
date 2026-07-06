import { use } from "react"
import { useState, useEffect } from "react"
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import {Home ,Timer} from './Home'
import About  from './About'
import {Project,WeaponCard} from './Project'

const skills = ["Python", "React", "JavaScript", "ML"]
// Use it inside App like an HTML tag
function App() {
  return (
    <div className="min-h-screen h-full min-w-[400px] w-full flex justify-center flex-col items-center bg-[#2d0320] text-[#99d5c9] px-10 py-10">
      <BrowserRouter>
      <nav className="flex gap-5 text-lg font-semibold mb-5 hover:text-[#ffda22] transition-all duration-200">
        <Link to="/" className="hover:text-[#ffda22] transition-all duration-200">
        Home
        </Link>
        <Link to="/about" className="hover:text-[#ffda22] transition-all duration-200">
        About
        </Link>
        <Link to="/project">
        Projects
        </Link>
      </nav>
      <Routes>
        {/* only pass main and needed element just  Home page*/}
        <Route path="/" element={
          <div className="flex flex-col items-center w-full justify-center">
              <Home name="Umar Asghar Khan"  />
              <Timer /> </div>
        } /> 
        {/* about page */}
        <Route path="/about" element={<About skills={skills} />} />
        {/* project page */}
        <Route path="/project" element={
          <div> 
            <Project/>
            <WeaponCard name="Beretta 92FS / M9" damage={50} range={50} image="https://www.imfdb.org/images/thumb/5/56/Beretta92Centurion.jpg/525px-Beretta92Centurion.jpg" unlocked={true} />
      <WeaponCard name="M4A1" damage={80} range={350} image="https://www.imfdb.org/images/thumb/1/11/SOPMODBII.jpg/1200px-SOPMODBII.jpg" unlocked={false} />
      <WeaponCard name="AK-47" damage={90} range={500} image="https://www.imfdb.org/images/8/80/AKMN.jpg" unlocked={true} /> </div>
      } />
      </Routes>
      </BrowserRouter>

      
      
      
      
    </div>
  )
}
export default App 



// name: Beretta 92FS / M9
// damage: 50
// range: 50 meters

// name : M4A1
// damage:80
// range: 350 meters

// name :AK-47
// damage : 90
// range: 500 meters
