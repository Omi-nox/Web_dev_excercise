// let arr=["Learner  ","Future AI Engineer  ","Student  ","Developer  "];
// arr_sz=arr.length;
// console.log('hi there',arr_sz);
// let i=0;
// let word_pos=0;
// let d=document.getElementById("dyn-typ");
// let del=true;
// let op=true;
// let wait=false;
// function dynamic_typing(){
//     console.log('i value',i)
//     if(wait){
//         return;
//     }
//     if(i<arr_sz && del){
//         cur_word=arr[i];
//         let cur_word_sz=cur_word.length;
//         console.log('curren word size',cur_word_sz);
//         if(word_pos<cur_word_sz && op){
//             d.textContent=cur_word.slice(0,word_pos+1);
//             word_pos++;
//             console.log(word_pos);
//             if(word_pos==cur_word_sz){
//                 op=false;
//                 console.log('make op false : status : ',op)
//             } 
//         }
//         else if(word_pos<=cur_word_sz && !op){
//             console.log('inside else if word pos',word_pos);
//             d.textContent=cur_word.slice(0,word_pos-1);
//             word_pos--;
//              console.log(word_pos);
//              if(word_pos==0 && i<arr_sz){
//                 op=true;
//                 i++;
//              }
//              if(i==arr_sz){
//                 console.log('i arr ka brabrabr agya ha boss ',i,arr_sz);
//                 wait=true;
//                 setTimeout(()=>{
//                     i=0;
//                     wait=false;
//                     dynamic_typing();
//                 },2000);
//                 return;
                
//                 console.log('word pistion reset ho gaya ',word_pos);
              
//              }
//         }
//     }
    
   
//      setTimeout(dynamic_typing,200);    
// }AS

let list=document.querySelectorAll('.m3_bar li')


list.forEach(function(list){
    console
})
console.log(list.innerText  )

// dynamic_typing()

