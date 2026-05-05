let arr=["Student  ","Future AI Engineer  ","Learner  ","Python(Expert)","Developer  "];
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

let is=document.querySelector('.like span');
let nd=0;
let b=document.getElementById('b5');
b.addEventListener('click',function(e){
  nd++;
  is.innerText=nd;});

dynamic_typing()

