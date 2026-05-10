let arr=["Student","Future AI Engineer","Learner","Python(Expert)","Developer","Tech Enthusiast","Problem Solver"];
arr_sz=arr.length;
console.log('hi there',arr_sz);
let i=0;
let word_pos=0;
let d=document.getElementById("dyn-typ");
let del=true;
let op=true;
let wait=false;
function dynamic_typing(){
    console.log('i value',i)
    if(wait){
        return;
    }
    if(i<arr_sz && del){
        cur_word=arr[i];
        let cur_word_sz=cur_word.length;
        console.log('curren word size',cur_word_sz);
        if(word_pos<cur_word_sz && op){
            d.textContent=cur_word.slice(0,word_pos+1);
            word_pos++;
            console.log(word_pos);
            if(word_pos==cur_word_sz){
                op=false;
                console.log('make op false : status : ',op)
            } 
        }
        else if(word_pos<=cur_word_sz && !op){
            console.log('inside else if word pos',word_pos);
            d.textContent=cur_word.slice(0,word_pos-1);
            word_pos--;
             console.log(word_pos);
             if(word_pos==0 && i<arr_sz){
                op=true;
                i++;
             }
             if(i==arr_sz){
                console.log('i arr ka brabrabr agya ha boss ',i,arr_sz);
                wait=true;
                setTimeout(()=>{
                    i=0;
                    wait=false;
                    dynamic_typing();
                },2000);
                return;
                
                console.log('word pistion reset ho gaya ',word_pos);
              
             }
        }
    }
    
   
     setTimeout(dynamic_typing,200);    
}

let list=document.querySelectorAll('.m3_bar li')
let optt;
let con=document.querySelectorAll('.smilo')
list.forEach(btn=>{
    btn.addEventListener('click',function(e){
        opt=this.innerText;
        if(opt=='Python'){
            con.forEach(function(con){
                if(con.innerText=='Python'){
                    console.log(con);
                let ppr=document.querySelectorAll('.item.python')
                ppr.forEach(function(ppr){
                    // ppr.style.backgroundColor='red';
                    ppr.style.display = 'block'; 
                
                }
                )
                     let ppr1=document.querySelectorAll('.item.webdev')
                    ppr1.forEach(function(ppr){
                    // ppr.style.background='rgba(0, 0, 0, 0.65)';
                    // ppr.style.backdropFilter='blur(8px)';
                    ppr.style.display = 'none'; 
                })
                 let ppr2=document.querySelectorAll('.item.Python.ml')
                ppr2.forEach(function(ppr){
                    //  ppr.style.backgroundColor='red';
                    ppr.style.display = 'none'; 
                })
                 let ppr3=document.querySelectorAll('.item.java')
                ppr3.forEach(function(ppr){
                    //  ppr.style.backgroundColor='red';
                    ppr.style.display = 'none'; 
                })
                }
            })
        }else if(opt=='Web_dev'){
             con.forEach(function(con){
                if(con.innerText=='Html-Css'){
                    console.log(con);
                let ppr=document.querySelectorAll('.item.webdev')
                ppr.forEach(function(ppr){
                    // ppr.style.backgroundColor='purple';
                 ppr.style.display = 'block'; 
                }
                      
                )
                     let ppr1=document.querySelectorAll('.item.python')
                    ppr1.forEach(function(ppr){
                    // ppr.style.background='rgba(0, 0, 0, 0.65)';
                    // ppr.style.backdropFilter='blur(8px)';
                       ppr.style.display = 'none'; 
                })
                 let ppr2=document.querySelectorAll('.item.Python.ml')
                ppr2.forEach(function(ppr){
                    // ppr.style.background='rgba(0, 0, 0, 0.65)';
                    // ppr.style.backdropFilter='blur(8px)';
                       ppr.style.display = 'none'; 
                })
                }
                
            })
        }else if(opt.trim()=='AI/ML'){
             con.forEach(function(con){
                if(con.innerText.trim()=='Sk-learn'){
                    console.log(con);
                let ppr=document.querySelectorAll('.item.Python.ml')
                ppr.forEach(function(ppr){
                    // ppr.style.backgroundColor='green';
                       ppr.style.display = 'block'; 
                
                })
                     let ppr1=document.querySelectorAll('.item.webdev')
                    ppr1.forEach(function(ppr){
                    // ppr.style.background='rgba(0, 0, 0, 0.65)';
                    // ppr.style.backdropFilter='blur(8px)';
                       ppr.style.display = 'none'; 
                })
                }
            })
        }else if(opt.trim()=='All'){
            con.forEach(function(con){
             
                let ppr=document.querySelectorAll('.item')
                ppr.forEach(function(ppr){
                    // ppr.style.background='rgba(0, 0, 0, 0.65)';
                    // ppr.style.backdropFilter='blur(8px)';
                       ppr.style.display = 'block'; 
                })
                
            })
        }
    })
})



let is = document.querySelector('.like span');
const api = 'https://portfolio-backend-y0io.onrender.com';   // baad mein Render ke URL se replace karna

// Load likes from backend
async function loadlikes() {
    try {
        const res = await fetch(`${api}/liqo`);
        const data = await res.json();
        is.textContent = data.l;
    } catch (err) {
        console.error('something failed to fetch : ', err);
    }
}
if(localStorage.getItem('hasLiked')){
    let b=document.getElementById('b5');
    b.innerText='Liked!!! ❤️';
     b.style.textAlign = 'center';
        b.style.transition = 'transform 0.1s ease-in-out';
        b.style.background = 'linear-gradient(95deg, #44fcff, #44f6ff)';
        // b.disabled = true;
}

// Add like – ek hi baar per browser
async function addlike(e) {
  let b = document.getElementById('b5');
  //  Page refresh stopping
    if (e) e.preventDefault();

    // . Check localStorage – agar pehle like kar chuka hai to return
    if (localStorage.getItem('hasLiked')) {
        alert('you gave a like already!');
         b.innerText = 'Liked!!! ❤️';
        return;
    }

    try {
        const res = await fetch(`${api}/liqo`, { method: 'POST' });
        const data = await res.json();
        is.textContent = data.l;
     
        b.innerText = 'Liked!!! ❤️';
        b.style.textAlign = 'center';
        b.style.transition = 'transform 0.1s ease-in-out';
        b.style.background = 'linear-gradient(95deg, #44fcff, #44f6ff)';
        b.disabled = true;

        // ✅ 4. LocalStorage mein mark kar do – taake refresh ke baad bhi yaad rahe
        localStorage.setItem('hasLiked', 'true');

        setTimeout(() => {
            alert('Thanks for giving me a like');
        }, 6000);
    } catch (err) {
        console.error('system fault: ', err);
        alert('Like can be given only once (per browser).');
    }
}

// Load likes on page start
loadlikes();

// Attach event listener with preventDefault
let b = document.getElementById('b5');
b.addEventListener('click', addlike);


const quotes = [
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House"
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  },
  {
    quote: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman"
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler"
  },
  {
    quote: "The only way to learn a new programming language is by writing programs in it.",
    author: "Dennis Ritchie"
  },
  {
    quote: "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    author: "Dan Salomon"
  },
  {
    quote: "In programming, the hard part isn’t solving problems, but deciding what problems to solve.",
    author: "Paul Graham"
  }
];
 



 let quolen=quotes.length
 console.log('the lenght of the quote',quolen)
 console.log('the complete name is ',quotes[3])
 let a=quotes[3]['author']
 console.log('the separate author from quotes',a)

 function rand(){
   const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(randomIndex)
    let q=quotes[randomIndex]['quote']
    console.log('the separate  quotes',q)
    let a=quotes[randomIndex]['author']
    console.log('the separate author from quotes',a)
    let random=document.getElementById('randomQuote')
    let auth=document.querySelector('.quote-author')
    random.textContent=q
    auth.textContent=a

 }
 rand()
 setInterval(rand,5000)
dynamic_typing()

 // 3D TILT for VERSION 1 (Hero)
    const heroContainer = document.getElementById('v1Tilt');
    const heroParent = document.getElementById('heroFrame');
    if (heroContainer && heroParent) {
      heroParent.addEventListener('mousemove', (e) => {
        const rect = heroParent.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateY = (x / (rect.width / 2)) * 6;
        const rotateX = (y / (rect.height / 2)) * -6;
        heroContainer.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      });
      heroParent.addEventListener('mouseleave', () => {
        heroContainer.style.transform = `rotateY(0deg) rotateX(0deg)`;
      });
    }

    // 3D TILT for VERSION 2 (About)
    const aboutContainer = document.getElementById('v2Tilt');
    const aboutParent = document.getElementById('aboutWrapper');
    if (aboutContainer && aboutParent) {
      aboutParent.addEventListener('mousemove', (e) => {
        const rect = aboutParent.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateY = (x / (rect.width / 2)) * 6;
        const rotateX = (y / (rect.height / 2)) * -6;
        aboutContainer.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
      });
      aboutParent.addEventListener('mouseleave', () => {
        aboutContainer.style.transform = `rotateY(0deg) rotateX(0deg)`;
      });
    }


    // scroll animation for progress bar  
  window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('progressBar').style.width = scrollPercent + '%';
});

// humburger snippet 

const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav_list');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navList.classList.toggle('open');
});