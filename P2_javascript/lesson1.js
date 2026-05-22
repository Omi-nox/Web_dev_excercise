// variables and datatypes
const myname='Omi , Umar khan'
const age=23
const isLearning=true

console.log(myname)
console.log(age)
console.log(isLearning)

// funtion calling
// method 1
function greet1(name,age,skill){
    console.log("My name is "+name+"\nI am "+age+" years old and I know "+skill)
}
greet1(myname,age,skill='javascript')
// method2 with lamda function
const greet2=(name,age,skill)=>{
    console.log("My name is "+name+"\nI am "+age+" years old and I know "+skill +' this is modern method of greeting 2')
}
greet2(myname,age,skill='node.js')


// conditional statements
function checkSkillLevel(hoursOfPractice){
    if (hoursOfPractice>100 && hoursOfPractice<500 ) {
    console.log("You are Intermediate");
} else if (hoursOfPractice>500 && hoursOfPractice<1000) {
    console.log("You are advanced");
} else if(hoursOfPractice>1000){
    console.log("You are Expert");
}else{
    console.log('you are a beginner')
}
}

checkSkillLevel(1200)
checkSkillLevel(700)
checkSkillLevel(450)
checkSkillLevel(50)

// arrays and for loop
const projects=['todo app','weather tool','personel portfolio','quiz game','expense tracker'];
for(let i=1;i<=projects.length;i++){
    console.log('project no: '+i+' '+projects[i-1]);
}

console.log('for each loop')
i=1;
projects.forEach((projects)=>{
     console.log('project no: '+i+' '+projects);
     i+=1;
})

// dictionary oject or json notation 
const myProfile={
    name:'Umar khan',
    age:23,
    city:'Islamabad',
    skills:['Python','backend','frontend']
}
console.log(myProfile.name)
console.log(myProfile.age)
console.log(myProfile.city)
console.log(myProfile.skills[1])

const project = [
    { name: "Todo App", tech: "Python", live: false },
    { name: "Portfolio", tech: "JavaScript", live: true },
    { name: "quiz game", tech: "html/css/javascript", live: true }
];
project.forEach((project)=>{
   
    console.log("Project: "+project.name + " | Tech: " + project.tech +" |Live: "+project.live);
})
    
// — Array Methods (The Most Used in Real Projects)
const students = [
    { name: "Umar", score: 92, passed: true },
    { name: "Ali", score: 45, passed: false },
    { name: "Sara", score: 78, passed: true },
    { name: "Ahmed", score: 33, passed: false },
    { name: "Zara", score: 88, passed: true }
];
// Use filter to get only passed students and log their names
const passed=students.filter((stu)=>stu.passed==true)
console.log(passed)
// Use map to create a new array of just names and log it
const names_list=students.map((stu)=>stu=stu.name)
console.log(names_list)
// Use find to get the first student with score above 85 and log their full object
const f_stu=students.find((stu)=>stu.score>85)
console.log(f_stu)

const weapons = [
    { name: "M4A1", damage: 85, unlocked: true },
    { name: "AK-47", damage: 78, unlocked: true },
    { name: "Sniper", damage: 95, unlocked: false },
    { name: "Glock", damage: 45, unlocked: true },
    { name: "RPG", damage: 100, unlocked: false }
];

const unl=weapons.filter((n)=>n.unlocked)
console.log(unl)
const str=weapons.map((n)=>n.name+' - Damaged : '+n.damage)
console.log(str)
const d=weapons.find((n)=>n.damage>90)
console.log(d)

function getWeaponStatus(weapon){
    if(weapon.unlocked){
        console.log(weapon.name+'  is unloacked and ready to use')
    }
    else{
        console.log(weapon.name+' is locked')
    }    
}

weapons.forEach(weapons=>{
    getWeaponStatus(weapons)
})