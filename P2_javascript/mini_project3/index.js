
import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

const dotLottie = new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.querySelector('#dotlottie-canvas'),
    src: "r2.json"
});
const dotLottie1 = new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.querySelector('#dotlottie-canvas1'),
    src: "r2.json"
});

// fetching work 
let value=''
let t=document.querySelector('.placeholder-text')
let inp=document.querySelector('#city-input')
let city_name=''
let region=''
let temp=''
let weather=''



inp.addEventListener('input',(e)=>{
    console.log(e.target.value)
    value=e.target.value
})
async function fet(){
   try{
     let res=await fetch(`https://wttr.in/${value}?format=j1`)
        let data=await res.json() 
        console.log(data)
        city_name = data.nearest_area[0].areaName[0].value;
         region = data.nearest_area[0].region[0].value;
        console.log(`Location: ${city_name}, ${region}`);
        temp=data.current_condition[0].FeelsLikeC;
        weather=data.current_condition[0].weatherDesc[0].value
        console.log(temp)
        console.log(weather)
    t.innerHTML = `
    <h2 class="city-title">📍 ${city_name}</h2>
    <p class="region-text">${region}</p>
    <div class="temp-display">${temp}°C</div>
    <p class="weather-desc">Vibe: ${weather}</p>
`;
   }catch(error) {
    t.innerHTML = `<p style="color:red">City not found. Try again.</p>`
}
}

let btn=document.querySelector('#search-btn')
 let load=document.querySelector('.spinner')
btn.addEventListener('click',()=>{
   load.classList.toggle('load')
   t.style.display='none'
        setTimeout(()=>{
            load.classList.toggle('load')
            fet()
            t.style.display=''
        },3000)
     
})
  
  