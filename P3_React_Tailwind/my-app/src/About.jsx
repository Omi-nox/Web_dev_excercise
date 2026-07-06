import React from "react"
// concept 1 and 2

function About({skills}){
    return(
      <div>
          <h1>About me </h1>
             // Outer container: Flexbox lagaya taaki saare badges ek line me aayein aur wrap ho sakein
                <ul className="flex flex-wrap gap-3 p-4 justify-center items-center">
                  {skills.map((skill, index) => (
                    <li 
                      key={index} 
                      className="bg-[#475b5a] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md border border-[#5c7574] hover:bg-[#3b4c4b] hover:scale-105 transition-all duration-200 cursor-pointer list-none"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
      </div>)
}
export default About