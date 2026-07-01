import { use } from "react"
import { useState, useEffect } from "react"


// concept 1 and 2
function Profile({name,bio}){
  return(
    <div>
      <h1 className="text-5xl mx-5 my-5">{name}</h1>
      <h2  className="rounded-lg border-2 border-[#645e9d] p-4" >{bio}</h2>
    </div>
  )
}
const skills = ["Python", "React", "JavaScript", "ML"]

function SkillBadge({ skills }) {
  return (
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
  )
}



// simple counter CONCEPT 3 AND 4
function Counter(){
const [count,setCount]=useState(0)
// concept 4 use state
 useEffect(()=>{
      console.log('it runs onces time with an empty array')
    },[])

    useEffect(()=>{
      console.log('boss count change to :',count)
    },[count])
return(
  <div className="flex flex-col justify-center items-center bg-[#011936] max-w-[300px] w-full min-h-[300px] p-10" >
    <h1 className="rounded-full border p-2 w-full text-xl text-center">Counter </h1>
    <span className="text-4xl text-[#ffda22] m-5">{count}</span>
    <button className="m-1 rounded-md border-2 border-[] bg-[#6CC551] text-black w-[100px] p-2 hover:bg-[#F1D302] cursor-pointer" onClick={()=>{setCount(count+1)}}>Click</button>
    <button className="m-1 rounded-md border-2 border-[] bg-[#C1292E] text-black w-[100px] p-2 hover:bg-[#F1D302] cursor-pointer" onClick={()=>{setCount(count > 0 ? count - 1 : 0)}}>Minus</button>
    <button className="m-1 rounded-md border-2 border-[] bg-[#A9CEF4] text-black w-[100px] p-2 hover:bg-[#F1D302] cursor-pointer" onClick={()=>{setCount(0)}}>Reset</button>
  </div>
)
}

// SIMPLE TIMER CONCEPT 4 EFFECT HOOK my OWN IMPORTANT SNIPPET that makes me happy
function Timer(){
  const [count,setCount]=useState(10)
  useEffect(()=>{
    console.log('your time gonna start soon!!',count)
  },[])
  useEffect(()=>{
    if(count<=0)

      return
    const tmr=setInterval(()=>{
      setCount(count-1)
    },1000)
    return ()=> clearInterval(tmr)
  },[count])
 useEffect(()=>{
      console.log('boss count change to :',count)
    })
    return(
      <div>
        <h1>Timer : {count}</h1>
        {count === 0 && <h2>Time's up! ⏰</h2>}
        
      </div>
    )
    
}

// SPECIAL  ⚡ MINI CHALLENGE — React + Tailwind
// Build a Weapon Card component for your Delta Force store:

function WeaponCard({ name, damage, range,image ,unlocked}) {
  
  return(
    <div className="m-2 flex flex-col max-w-sm rounded overflow-hidden shadow-lg bg-[#1f2937] text-white p-10 border-2 border-[#4b5563]">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4 flex flex-col gap-2 ">
        <div className="font-bold text-xl mb-2">name : {name}</div>
        <p className="text-gray-300 text-base">Damage: {damage}</p>
        <p className="text-gray-300 text-base">Range: {range}</p>
        <div>
          {unlocked? (
            <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Gun UnLocked 🔓</span>
          ) : (
            <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Gun locked 🔒</span>
          )}
        </div>       
      </div> 
    </div>
  )

}


// Use it inside App like an HTML tag
function App() {
  return (
    <div className="min-h-screen h-full min-w-[400px] w-full flex justify-center flex-col items-center bg-[#2d0320] text-[#99d5c9] px-10 py-10">
      <Profile name="Umar" bio='Future Ai eng + full stack ninja' />
      <SkillBadge skills={skills} />
      <Counter/>
      <Timer/>
      <WeaponCard name="Beretta 92FS / M9" damage={50} range={50} image="https://www.imfdb.org/images/thumb/5/56/Beretta92Centurion.jpg/525px-Beretta92Centurion.jpg" unlocked={true} />
      <WeaponCard name="M4A1" damage={80} range={350} image="https://www.imfdb.org/images/thumb/1/11/SOPMODBII.jpg/1200px-SOPMODBII.jpg" unlocked={false} />
      <WeaponCard name="AK-47" damage={90} range={500} image="https://www.imfdb.org/images/8/80/AKMN.jpg" unlocked={true} />
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
