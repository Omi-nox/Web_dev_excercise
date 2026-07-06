import {use} from 'react'
import { useState,useEffect } from 'react'
// concept 1 and 2
export function Home({name}){
    return(
        <div>
                <h1 className="text-3xl font-bold mb-5"o>WELCOME MY HOME PAGE</h1>
                <div>
      <h1 className="text-5xl mx-5 my-5">{name}</h1>
    </div>
        
        </div>
    )
}
// simple counter CONCEPT 3 AND 4
// SIMPLE TIMER CONCEPT 4 EFFECT HOOK my OWN IMPORTANT SNIPPET that makes me happy
export function Timer(){
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


// function App(){
//     return(
//         <div>
//             <Profile name='Umar Asghar' bio={'Future Ai eng + full stack ninja'}>

//             </Profile>
//         </div>
//     )
// }