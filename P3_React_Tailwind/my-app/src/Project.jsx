import {user} from 'react'
import {useEffect,useState} from 'react'
// simple counter CONCEPT 3 AND 4
export function Project(){
const [count,setCount]=useState(0)
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



// SPECIAL  ⚡ MINI CHALLENGE — React + Tailwind
// Build a Weapon Card component for your Delta Force store:

export function WeaponCard({ name, damage, range,image ,unlocked}) {
  
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