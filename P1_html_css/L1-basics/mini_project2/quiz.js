// all varibles
let bt = document.querySelector(".hm");
let dc = document.querySelector("nav ul");
let n = document.querySelector("nav");
let bt1 = document.querySelector(".bulb");
let dc1 = document.querySelector("body");
let dc2 = document.querySelector("header");
let dc3 = document.querySelector(".fa-regular");
let dc4 = document.querySelector(".card1");
let dc5 = document.querySelectorAll(".fa-solid");
let dc6 = document.querySelector(".quiz-footer");
let dc7 = document.querySelector(".footer-info");
let dc8 = document.getElementById("mypath");
let dc9 = document.querySelector(".info-card");
let dc11 = document.getElementById("closeInfoBtn");


function bulb() {
  console.log("bulb pe click ho rha ha ");

  // FIX: Har element par check lagaya taake null hone par crash na ho
  if (bt1) bt1.classList.toggle("on");
  if (dc1) dc1.classList.toggle("on");
  if (dc2) dc2.classList.toggle("on");
  if (n) n.classList.toggle("on");
  if (dc3) dc3.classList.toggle("on");
  if (dc4) dc4.classList.toggle("on"); // Quiz page par yeh line crash nahi karegi ab!

  if (dc5) {
    dc5.forEach((i) => {
      i.classList.toggle("on");
    });
  }
  if (dc6) dc6.classList.toggle("on");
  if (dc7) dc7.classList.toggle("on");

  // Memory Status Update
  if (bt1 && bt1.classList.contains("on")) {
    console.log("dark mode on ha ");
    localStorage.setItem("darkMode", "on");
  } else {
    console.log("dark mode off ha ");
    localStorage.setItem("darkMode", "off");
  }
}
function hmbrg() {
  if (bt) bt.classList.toggle("khulga");
  if (dc) dc.classList.toggle("khulga");
  if (n) n.classList.toggle("khulga");
  console.log("class chipak di ha meny");
}

function quiz_page() {
  if (dc9) dc9.classList.remove("hidden");
  if (dc11)
    dc11.onclick = () => {
      if (dc9) dc9.classList.toggle("hidden");
      let url = "/P1_html_css/L1-basics/mini_project2/quiz.html";
      window.open(url, "_blank");
      console.log("quiz page pe click ho rha ha ");
    };
}

// home page js 
if (
  window.location.pathname == "/P1_html_css/L1-basics/mini_project2/index.html"
) {
  console.log("INDEX page pe ho ");

  if (bt1)
    bt1.addEventListener("click", () => {
      bulb();
    });
  if (dc8) {
    dc8.onclick = () => {
      // Reload rokne ke liye
      quiz_page();
    };
  }
   if(bt){
    bt.onclick=()=>{
        hmbrg()
    }
  }
}


// quiz page js 
let userChoice = null; // Is mein user ka clicked option save hoga
let currentQuestion = null; // Is mein active sawal ka data aayega
let quizScore = 0;
let ques=['who are you','how you gonna survive apocalypse']

if (window.location.pathname == "/P1_html_css/L1-basics/mini_project2/quiz.html") {
  console.log("QUIZ page pe ho ");
  console.log(bt1);
     if(bt){
    bt.onclick=()=>{
        hmbrg()
    }
  }
  if (bt1)
    bt1.addEventListener("click", () => {
      console.log("bulb on howa ha quz pafe pf");
      bulb();
    });
  if (dc8) {
    dc8.style.cursor = "not-allowed";
    dc8.style.opacity = "0.5";
    dc8.style.pointerEvents = "none";
  }
//   all wrap in one 
  function updation(i){
    console.log('the value of i is ',i)
    if(i<2){
        let q=document.querySelector('.que')
        q.textContent=ques[i] 
        let options= document.querySelectorAll(".opt")
        options.forEach((option) => {
        // option.style.pointerEvents = ""; 
        // Click block kar diya hamesha ke liye
        if (option.classList.contains("selected")) {
            
            option.classList.remove("selected");
            option.classList.remove("disabled") 
            option.style.pointerEvents = ""; 
        }if(!option.classList.contains("selected"))
            option.style.opacity = "1";
            option.style.cursor = "pointer";
            option.style.pointerEvents = ""; 
            
        })
        // option.style.pointerEvents = "";
    }else{
            alert('quiz ktmhogya ha boss enuhg ha ag ke lie')
            return
        };
        
        let chc = document.querySelectorAll(".opt");
        console.log("all elemnts of choice got achieved\n", chc);
        chc.forEach((btn) => {
        // sary options pe click laga do 
        btn.addEventListener("click", function (e) {
        console.log(this.innerText);
    //   option ka phla letter achieve kro 
        let sp = this.querySelector("span");
        console.log("q be tum q nhi print horhy ho", sp.innerText);
    //   globally store kro usy 
        userChoice = sp.innerText;
        console.log("user ki chioce ja : ", userChoice, typeof userChoice);
        this.classList.toggle("selected");
        this.classList.toggle("disabled");
    //   baqi sary option ko none kro 
        chc.forEach((option) => {
        option.style.pointerEvents = "none"; // Click block kar diya hamesha ke liye
        if (!option.classList.contains("selected")) {
          option.style.opacity = "0.4";
          option.style.cursor = "not-allowed";
        }
                });
      setTimeout(() => {
        i += 1; // i += 1 ka sahi istemal
            updation(i);
      }, 1500);     
        });
        });

    }

}

// commander me chata hun function call sy phly sary button default hogy b user select kry new question ay tb bhi default hogy 
        let sz=ques.length
    console.log(' the length of question list is ',sz)
  let quiz_started=true
  let i=0
    updation(i)
// Global Theme Sync (Page load hote hi theme check karega) for multiple pages same work
document.addEventListener("DOMContentLoaded", () => {
  let savedTheme = localStorage.getItem("darkMode");
  let quizVisited = localStorage.getItem("quizVisited");
  if (savedTheme === "on") {
    // Direct safe initialization without calling toggle triggers
    if (bt1) bt1.classList.add("on");
    if (dc1) dc1.classList.add("on");
    if (dc2) dc2.classList.add("on");
    if (n) n.classList.add("on");
    if (dc3) dc3.classList.add("on");
    if (dc4) dc4.classList.add("on");
    if (dc5) dc5.forEach((i) => i.classList.add("on"));
    if (dc6) dc6.classList.add("on");
    if (dc7) dc7.classList.add("on");
  }
});

// // quiz ki ja
