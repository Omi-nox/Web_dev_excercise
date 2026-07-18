# React-backend-with-Node-phase-4
### Express : Concept 1
📖 What is Node.js?
Until now JavaScript only ran in the browser. Node.js lets JavaScript run on your server — your computer, or a cloud server.
```
Browser JS  →  controls HTML, DOM, UI
Node.js     →  controls files, databases, servers, APIs
```
📖 What is Express?
Express is a framework that makes building servers with Node.js simple and clean.
Without Express — painful. With Express — clean and fast.
📖 How a backend works:
```
Client (React)  →  sends request  →  Server (Express)
Server          →  processes it   →  Database (MongoDB)
Database        →  returns data   →  Server
Server          →  sends response →  Client (React)
```
first step intilization with name 'backend' folder
```
npm init -y
npm install express
```
The key pieces are :
```
const express = require('express')  // import express
const app = express()               // create app
app.get('/route', (req, res) => {}) // handle GET request
app.listen(3000, () => {})          // start server
After connecting pieces it will be like
const express=require('express')
const app=express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.json({message:"Hello Fucking WOrld You just connect the server"});
})
app.listen(3000,()=>{
    console.log("Server Running on http://localhost:3000 ")
})
the output link is : http://localhost:3000/
```
***NOTE***: THE rest api will be written in routes/file.json for ui frontend while without ui its fine in server.js
### Concept 2 - Routes & REST API
A REST API had a 4 main components
```
GET     → Read data
POST    → Create data  
PUT     → Update data
DELETE  → Delete data
```
Think of it like this - you are building a weapon API;
```
GET    /weapons      → get all weapons
GET    /weapons/1    → get weapon with id 1
POST   /weapons      → add new weapon
PUT    /weapons/1    → update weapon 1
DELETE /weapons/1    → delete weapon 1
```
✅ Your Task
In server.js build a complete weapons REST API:

Store weapons in a simple array (no database yet)
GET /weapons → return all weapons
Task done:
```
app.get('/weapons',(req,res)=>{
    res.json({list:weapons})
})
```
GET /weapons/:id → return one weapon by id
```
app.get('/weapons/:id',(req,res)=>{
    const user_id=req.params.id;
    const result=weapons.find((e_target)=>{
        return e_target.id===user_id;
    })
   // 3. Response wapas bhejna mat bhoolna, warna browser ghoomta rahega!
    if (result) {
        res.json(result);
    } else {
        res.status(404).json({ message: "Weapon not found" });
    }
})
```
POST /weapons → add new weapon from request body
```
app.post('/weapons',(req,res)=>{
    const newWeapon= req.body;
    weapons.push(newWeapon);
    // 3. Response me bhejein ke kaam ho gaya aur poori updated list dikhayein
    res.status(201).json({
        message: "Weapon added successfully, commander!",
        allWeapons: weapons
    });
})
```
DELETE /weapons/:id → delete a weapon by id
```
app.delete('/weapons/:id',(req,res)=>{
    const user_id=req.params.id.trim();
    weapons=weapons.filter((e_target)=>{
        return e_target.id!==user_id
    })
   res.json({
        message: "Weapon deleted successfully, commander!",
        allWeapons: weapons
    });
})
```
PUT UPDATION 
```
app.put('/weapons/:id',(req,res)=>{
    const user_id=req.params.id.trim();
    const update_data=req.body;
    //weapons give orignal object by pass reference to edited weapon
    const edited_weapon=weapons.find((e_target)=>{
        return e_target.id===user_id;
    })
    if(edited_weapon){
        edited_weapon.name = update_data.name; // Purane naam ki jagah naya naam assign kar diya
        
        res.json({
            message: "Weapon updated successfully, commander!",
            updatedWeapon: edited_weapon,
            allWeapons: weapons
        });
    }else {
        res.status(404).json({ message: "Weapon found hi nahi hua update karne ke liye!" });
    }
})
```

Key concepts to figure out yourself:

:id is a URL parameter → access it via req.params.id // 1. URL se id nikalna
    // req.params.id ke andar automatic "A2" aa jayega
POST body data → access via req.body
Finding item in array → .find() you already know this!
Deleting → .filter() you know this too!

Test with browser for GET routes. For POST and DELETE use Postman or Thunder Client (VS Code extension).
```
console.log(weapons[0]['id']); // Output: "A1"
console.log(weapons[1]['id']); // Output: "A2"
```
### Concept 3- Middleware
```
app.use(express.json()) // ← this IS middleware
```
Middleware = a function that runs between request and response.A security check between them, encode decode the json data
```
Request → Middleware 1 → Middleware 2 → Route Handler → Response
```
Three types you'll use constantly:
```
javascript// 1. Built-in middleware
app.use(express.json()) // parses JSON body

// 2. Custom middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`) // logs every request
    next() // MUST call next() or request gets stuck
})

// 3. Third-party middleware
app.use(cors()) // allows frontend to talk to backend
```
✅ Your Task
Add these two things to your server.js:
1 — A custom logger middleware that logs every request like:
[GET] /weapons - 2026-07-11
[POST] /weapons - 2026-07-11
2 — Install and add CORS:
```
const cors=require('cors'); //1. CORS KO import kiya
app.use(express.json());
app.use(cors()); // 2. CORS  middleware ko active kia
// MEra custom logger middleware
app.use((req,res,next)=>{
    const current_date=new Date().toISOString().split('T')[0];// Aaj ki date
    // Terminal mein print hoga : [GET] /weapons 
    console.log(`[${req.method}] ${req.path} - ${current_date}`);

    next();// ⚠️ Yeh sabse zaroori hai! Agla step chalane ke liye 'next()' likhna lazmi hai.// Flight ke liye aage bhej diya!
})
```
### DATE FORMAT IN JAVASCRIPT:
```
Yeh Date wala snippet kar kya raha hai?
new Date().toISOString() aapko poori date aur time is format mein deta hai: 2026-07-11T17:50:00.000Z.
Humein sirf aage ki date (2026-07-11) chahiye thi, isliye humne use beech mein se kaatne ke liye .split('T')[0] lagaya. split('T') ne string ke do hisse kar diye (T se pehle wala aur T ke baad wala), aur [0] lagane se humein sirf pehla hissa yaani date mil gayi!
```


### Task B: CORS (Cross-Origin Resource Sharing)
Yeh ek teesra banda hai (third-party package) jise install karna hai. Jab aap React (frontend) se Express (backend) ko call karenge, toh browser hifazat ke liye request block kar deta hai. CORS lagane se backend React ko ijazat de deta hai.

## Concept 4- Connecting MongoDB


Right now your data is in an array — when server restarts, everything resets. MongoDB makes data permanent.
Three things to set up:
ONE PROJECT HAVE ONLY ONE FREE CUSTER
1 — MongoDB Atlas (free cloud database):

Go to mongodb.com/atlas
Create free account
Create a cluster
Get your connection string — looks like:
```
2 — Install Mongoose:
```
install mongoose dotenv
Mongoose = library that makes talking to MongoDB clean and simple.
3 — .env file for secrets:
```
MONGO_URI=mongodb+srv://yourstring
PORT=3000
```
Never put passwords directly in code. Always use .env. Add .env to .gitignore immediately.

✅ Your Task
Step 1 — Set up MongoDB Atlas and get your connection string.
Step 2 — Create .env file with your MONGO_URI
Step 3 — Connect to MongoDB in server.js:
```
javascript// These are the pieces you need — figure out how to connect them
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.log('Connection failed:', err))
  ```
Step 4 — Create a Weapon model. A model defines the shape of your data:
javascript// Think of this like a blueprint for every weapon document
```
const weaponSchema = new mongoose.Schema({
  id: String,
  name: String,
  damage: Number,
  unlocked: Boolean
})
const Weapon = mongoose.model('weap',weaponSchema) //on database your table name with +s when making schema in model
// by special condition and  requirements
const mongoose= require('mongoose');
const User_detail = new mongoose.Schema({
username:{
    type: String,
    required:[true,'Username is required']
},
email:{
    type: String,
    required:[true,'Email is required'],
    unique: true,  // Ek email se sirf ek user register ho sakega
    lowercase: true // Email ko lowercase me save karega taaki login me issue na ho
},
password: {
    type: String, // bcrypt hash string hoga, isliye String!
    required: [true, 'Password is required']
  },
  createdAt: {
    type: Date,
    default: Date.now // Jab user banega, current time automatically set ho jayega
  }
})
const User = mongoose.model('User_info',User-detail) //on database your table name with +s when making schema in model
module.exports=User;
```

const Weapon = mongoose.model('Weapon', weaponSchema)
Show me terminal screenshot with
***NOTES & WARNING***
bohot barri galtiyan kar rahe hain, jiski wajah se data aate hi Express phat jata hai:

wpns ek Mongoose Model hai, koi Array nahi hai: Aapne require('./models/weap') kar ke model import kiya hai, lekin aap apne routes ke andar us par JavaScript arrays waale functions (jaise .push(), .find(), aur .filter()) chala rahe hain. Mongoose models par .push() nahi chalta, is wajah se .push is not a function ka error aata hai aur server crash ho jata hai.

weapons array upar khali para hai: Aapne local array ka naam weapons rakha hai, lekin saare routes mein aap wpns (jo ki model hai) ko access kar rahe hain.
***NOTES NO  2 ABOUT SCHEMA ***
module.exports=mongoose.model('weap',weaponSchema) //on database your table name is weap with +s
JB BACKEND TERMINAL BASE NA HO OR UI KE SATH HO YE KRO 
```
const wpns=require('./models/weap'); import from model schema in routes/file.json
write all your rest api here instead of server
 end me module.export=router
//in serverr.js
//Routes (Import karein)
const likeRoutes = require('./routes/file');
app. use('/api/likes', likeRoutes);
route koi bhi api like ki jgha ya khali slash bhi
```
agr ui nhi ha to normally server.js me model schema import kro or rest apis likho
### database commands CRUDS
**GET & READ**
```
try {
        const allWeapons = await wpns.find(); // Database se saara data nikalne ke liye
        res.json({ list: allWeapons });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
```
**GET SINGLE WEAPON BY ID**
```
try {
        const user_id = req.params.id;
        const result = await wpns.findOne({ id: user_id }); // Mongoose findOne
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({ message: "Weapon not found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
```
**3. Post New Weapon To Database or Create**
```
try {
        // 1. Frontend ya Postman se data pakra
        const newWeaponData = req.body;
        
        // Naya document create aur save karne ke liye
        // 2. Apne model (wpns) ka naya instance banaya
        const newWeapon = new wpns(newWeaponData);
        // 3. Isko database mein save karwa diya (Yeh async kaam hai, isliye await lagega)
        await newWeapon.save();

        const allWeapons = await wpns.find(); // Updated list dubara mangwa li
        res.status(201).json({
            message: "Weapon added successfully to Database, commander!",
            allWeapons: allWeapons
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
```
***4. Delete Weapon From Database***
```
app.delete('/weapons/:id', async (req, res) => {
    try {
        const user_id = req.params.id;
        await wpns.deleteOne({ id: user_id }); // Mongoose deleteOne

        const allWeapons = await wpns.find();
        res.json({
            message: "Weapon deleted successfully, commander!",
            allWeapons: allWeapons
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }})
```
***5. Update Weapon In Database***
```

app.put('/weapons/:id', async (req, res) => {
    try {
        const user_id = req.params.id.trim();
        const update_data = req.body;// Jo naya naam ya damage bhejenge

        // Database mein data update karne ke liye
        const updatedWeapon = await wpns.findOneAndUpdate(
            { id: user_id },// 1. Pehle usko dhoodo jiski ID match ho
            { name: update_data.name },// 2. Uska naam badal do
            { new: true } // Taake updated data wapas mile
            Yeh kya hai? Mongoose bol raha hai ke jo aapne { new: true } likha hai, wo ab purana tareeqa ho gaya hai. Code bilkul sahi chalega, lekin future ke liye wo aapko naya tareeqa bta raha hai.

Fix: Apne PUT route mein { new: true } ko badal kar { returnDocument: 'after' } likh dein:
        );

        if (updatedWeapon) {
            const allWeapons = await wpns.find();
            res.json({
                message: "Weapon updated successfully, commander!",
                updatedWeapon: updatedWeapon,
                allWeapons: allWeapons
            });
        } else {
            res.status(404).json({ message: "Weapon found hi nahi hua update karne ke liye!" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
 uper wala specific changes ke lia ha agr over all krna ha to ye kro 
 const old_id = req.params.id.trim(); // URL se purani ID nikali (e.g., S2)
        const update_data = req.body;        // Postman se naya data aaya (e.g., {"id": "A1"})

        // Database mein purani ID dhoondo aur naya data set karo
        const updatedWeapon = await wpns.findOneAndUpdate(
            { id: old_id },       // 1. Purani ID se dhoondo (e.g., S2)
            { $set: update_data }, // 2. Jo bhi Postman se aaya hai (id, name, etc.) wo badal do
            { returnDocument: 'after' } // 3. Warning ka khatma + updated data return
        );
      
```

## Front-End CONNECTIONS with Backend through axios

 Frontend mein Axios install karein
Apne frontend folder (weapons-frontend) ke terminal mein ja kar yeh command chalayein:
```
npm install axios
```
axhi sy ui bny or useEffect or useState ko import kry
```
import React, { useState, useEffect } from 'react';
import axios from 'axios';
```

***Step 1 (Fetch / GET):***
Sabse pehle React ko database se saare weapons khich kar laana seekhayenge aur screen par map karenge. (Jab tak data screen par dikhega nahi, aage nahi barhenge).
### GET METHOD **step 1.1 GET Connection**
Apne App.jsx ke andar, component ke bilkul start mein state banayein. Hum ek state banayenge jisme list store hogi aur doosri loading state banayenge (taake jab tak data load ho rha ho, user ko 'Loading...' dikhe)
```
// App.jsx ke andar ye do lines likhein:
const [weapons, setWeapons] = useState([]); // Database ki list yahan save hogi
const [loading, setLoading] = useState(true); // Loading state

 const [formData, setFormData]=useState({
    id: '',
    name: '',
    damage: '',
    unlocked: false
  })

```
**Step 1.2:Backend URL Set Karein (TODO 1)**
Apne backend ka absolute URL set karein:
```
const API_URL = 'http://localhost:5000/weapons'; // Apne backend ka port confirm kar lijiyega
```
**Step 1.3: Fetch Function aur useEffect Likhein (TODO 3)**
Ab hum Axios ke zariye aapke Express server se data mangwayenge. useEffect isliye use karenge taake jaise hi browser mein page load ho, data khud-b-khud fetch ho jaye.  function ander sb khuc variables bhi return me sirf ui hoga 
```
const fetchWeapons = async () => {
  try {
    setLoading(false); // loading start
    
    // 📡 TODO: Axios se GET request bhejein /weapons ka jo rest api get method hoga ye usy call krdega bss itny sy bat
    const response = await axios.get(API_URL);
    
    // 💡 Note: Aapka backend data kis key me bhej raha hai? 
    // Aapke backend routes mein likha hai: res.json({ list: allWeapons })
    // Iska matlab data "response.data.list" ke andar hai!
    
    setWeapons(response.data.list); // State update ho gayi
    setLoading(false);
  } catch (error) {
    console.error("Data lane me error:", error);
    setLoading(false);
  }
};

// Page load par fetchWeapons chalane ke liye:
useEffect(() => {
  fetchWeapons();
}, []);
```
**Step 1.4: Screen Par Map Karein (TODO 6)**
without css 
```
// loading true false or mapping techniqu ha 
 <div 
                key={weapon._id} 
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl p-5 transition-all duration-300 shadow-md flex flex-col justify-between"
              > //mongo ddb uniqu used instead of index number for position 
```
### POST METHOD**Step 1.4: Form screen sy input lena**
```
  <input
                  type="number"
                  placeholder="e.g., 85"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 focus:outline-none focus:border-amber-500 transition"
                  value={formData.damage}
                  onChange={(e) => setFormData({ ...formData, damage: e.target.value })}
                />
//check box
<div><input
  type="checkbox"
  id="unlocked"
  className="w-4 h-4 accent-amber-500 cursor-pointer"
  checked={formData.unlocked}
  onChange={(e) => setFormData({ ...formData, unlocked: e.target.checked })} // Checkbox ke liye e.target.checked use hota hai
/></div>
```
**input ke andr value**
The Mirror Concept (Controlled Inputs):
Input field mein jo hum type karte hain, wo direct screen par nahi chhapta. Wo pehle state ke paas jata hai (onChange ke zariye), aur state foran mirror (sheeshe) ki tarah use wapas input field ke andar screen par dikha deti hai (value ke zariye).
***onChange ek function h***
Jab aap input field mein kuch type karte hain, toh onChange trigger hota hai. Wo trigger hote hi setFormData function ko call karta hai (jo upar state mein declare hua tha) aur use batata hai ke: "Bhai, input mein jo naya word type hua hai (e.target.value input ki field ki current value), use name ki jagah save kar do."
**...formData ye koi bhi variable teen dots concept**
Agar hum ... use NA karein toh kya hoga?Agar aap name input badalte waqt bina dots ke likhein:
Toh React aapki poori state ko delete kar ke sirf name rakh dega. Aapka id, damage, aur unlocked ka saara data humesha ke liye gayab ho jayega!
Jab hum ...formData use karte hain:
1 ...formData: "Pehle purani state ka saara data (id, damage, unlocked) naye object mein copy-paste karo."
2  name: e.target.value: "Ab us copy-paste kiye hue data mein se sirf name waali line ko nayi value se badal do."
```
//function bnaya return ke bahre
const handleSubmit = async (e) => {
  e.preventDefault(); // Taake page submit hone par refresh na ho

  // Choti si validation check
  if (!formData.id || !formData.name || !formData.damage) {
    alert("Commander, saari fields bharna lazmi hain!");
    return;
  }

  try {
    // 📡 Axios se POST request bhejein aur sath mein 'formData' bhej dein
    // damage ko Number() mein convert karna zaroori hai kyunki input se string milti hai
    const response = await axios.post(API_URL, {
      ...formData,
      damage: Number(formData.damage)
    });

    alert(response.data.message); // Server ka success message dikhayein

    // Form ko dobara khali (reset) kar dein
    setFormData({ id: '', name: '', damage: '', unlocked: false });

    // 🔄 Sabse zaroori kaam: Grid ko update karne ke liye fetch function dobara call karein
    fetchWeapons();

  } catch (error) {
    console.error("Weapon add karne mein error:", error);
    alert(error.response?.data?.error || "Kuch ghalat ho gaya!");
  }
};
return ke andr <form onSubmit={handleSubmit} className="space-y-5"> form ke andr sary input fields daly
```
### Delte option by id 
```
const handleDelete = async (weaponId) => {
  // 1. User se confirm karein (taki galti se click hone par delete na ho)
  if (!window.confirm("Commander, kya aap waqai is weapon ko scrap karna chahte hain?")) {
    return;
  }

  try {
    // 2. Axios se DELETE request bhejein URL mein ID daal kar
    // Example: http://localhost:5000/weapons/A1
    const response = await axios.delete(`${API_URL}/${weaponId}`);

    // 3. Server ka success message alert mein dikhayein
    alert(response.data.message);

    // 4. 🔄 Sabse zaroori kaam: Grid ko refresh karein taake deleted card gayab ho jaye
    fetchWeapons();
    
  } catch (error) {
    console.error("Delete karne mein masla aaya:", error);
    alert("Weapon delete nahi ho saka!");
  }
};
<button
  onClick={() => handleDelete(weapon.id)} // 👈 Har weapon ki apni ID function mein pass hogi
  className="flex-1 bg-rose-950/40 hover:bg-rose-600 text-rose-400 hover:text-white border border-rose-900/50 font-semibold py-2 px-3 rounded-lg text-xs transition duration-200"
>
  🗑️ Scrap
</button>
```
### Edit put api
```
const [isEditing, setIsEditing] = useState(false); // Edit mode track karne ke liye
const [editingId, setEditingId] = useState(null);   // Kaunsi ID edit ho rahi hai, use yaad rakhne ke liye

const handleEditClick = (weapon) => {
  setIsEditing(true);             // 1. Edit mode ON kiya
  setEditingId(weapon.id);        // 2. Is weapon ki ID ko save kar liya
  
  // 3. Purana saara data form ke inputs mein load kar diya (The Mirror!)
  setFormData({
    id: weapon.id,
    name: weapon.name,
    damage: weapon.damage,
    unlocked: weapon.unlocked
  });
};
//handle submit function ko hi humny update krdia ha
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.id || !formData.name || !formData.damage) {
    alert("Commander, saari fields bharna lazmi hain!");
    return;
  }

  try {
    if (isEditing) {
      // 📡 OPTION A: EDIT/UPDATE OPERATION (PUT)
      // Hum URL mein 'editingId' bhej rahe hain (jo humne select ki thi)
      const response = await axios.put(`${API_URL}/${editingId}`, {
        ...formData,
        damage: Number(formData.damage)
      });
      
      alert(response.data.message);
      setIsEditing(false); // Edit mode band
      setEditingId(null);  // Saved ID clear
    } else {
      // 📡 OPTION B: CREATE OPERATION (POST) - Jo pehle se likha hua tha
      const response = await axios.post(API_URL, {
        ...formData,
        damage: Number(formData.damage)
      });
      alert(response.data.message);
    }

    // Form reset karein aur list refresh karein
    setFormData({ id: '', name: '', damage: '', unlocked: false });
    fetchWeapons();

  } catch (error) {
    console.error("Operation failed:", error);
    alert(error.response?.data?.error || "Kuch ghalat ho gaya!");
  }
};
//button
 <button className="flex-1 bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-300 font-semibold py-2 px-3 rounded-lg text-xs transition duration-200" onClick={()=>{
                    handleEditClick(weapon)
                  }}>
                    ✏️ Edit
                  </button>
```

# Authnetications and Security
**What is Authentication ?**
```
Without auth : Anyoone can access anything
With auth :  Only logged in users can access protected stuff
```
Real world examples:
❌ No auth → anyone can delete weapons in your armory
✅ With auth → only YOU can delete after logging in
**What is JWT=JSON web token**
JWT = JSON Web Token. It's like a digital ID card.
```
1. You login with email + password
2. Server checks if correct
3. Server gives you a TOKEN (like an ID card)
4. You show that token on every future request
5. Server checks token → lets you in
```
Token looks like this:
eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMjMifQ.abc123
Three parts separated by dots:
```
Header.Payload.Signature
```
The full auth flow we're building:
POST /register → save user to DB (password hashed)
POST /login    → check password → return JWT token
GET /protected → check token → allow or deny access

**New Package we will use that is**
```
npm install bcryptjs jsonwebtoken
// bcryptjs    → encrypts passwords (never store plain text)
// jsonwebtoken → creates and verifies JWT tokens
```


# Phase 5 — JWT Authentication: Lesson 1
📖 The Complete Picture First
Before writing a single line — understand this flow deeply:
```
REGISTER:
User sends email + password
     ↓
Server hashes password (bcrypt)
     ↓
Saves user to MongoDB
     ↓
Returns success message

LOGIN:
User sends email + password
     ↓
Server finds user in MongoDB
     ↓
bcrypt compares passwords
     ↓
If match → create JWT token
     ↓
Send token back to user

PROTECTED ROUTE:
User sends request + token in header
     ↓
Server verifies token (middleware)
     ↓
If valid → allow access
If invalid → 401 Unauthorized
```
📖 Password Hashing — Why?
```
// ❌ NEVER store this in database
password: "umar123"

// ✅ Store this instead
password: "$2b$10$xK9mQ2vL8nP3rT5sW7yA4eH6jM1cB0dF"
```
Even if database is hacked — passwords are safe. bcrypt is a one-way function — you can't reverse it. You can only compare a plain password against a hash.

📖 JWT Token — Why?
HTTP is stateless — server remembers nothing between requests. JWT solves this:
```
Every request carries the token
Token contains user info (id, email)
Server reads token → knows who you are
No need to check database every time
```
Your Task — Setup
```
Create a fresh backend project called auth-backend:
bashmkdir auth-backend
cd auth-backend
npm init -y
npm install express mongoose dotenv bcryptjs jsonwebtoken cors
Create this structure yourself:
auth-backend/
├── models/
│   └── User.js
├── routes/
│   └── auth.js
├── middleware/
│   └── protect.js
├── .env
└── server.js
```
In .env:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=omi_nox_super_secret_key_2026
PORT=3000
```
JWT_SECRET is a secret key used to sign tokens — keep it private always.

Your job for now:
Build the User.js model with these fields:

username — String, required
email — String, required, unique
password — String, required
createdAt — Date, default to now

# ENCRYPTION BY BYCRYPTS
* **bCRYPT IMPORT KRO**
```
const bcrypt = require('bcryptjs');
```
* **paSSWORD KO HASH KRO**
```
// 10 'salt rounds' hote hain jo hashing ko secure banate hain
// bcrypt hashing — rounds means how complex the hash is
const hashedPassword = await bcrypt.hash(password, 10);
```
* **nAYA USER HASH PASSWORD KE SATH CREATE KRO**
```
   const new_data= new u_detail({
                username:user_name,
                email:user_email,     
                password: hashedPassword // Plain password ki jagah ab hashed password jayega database me!
});
```
# 🗃️ Ultimate DBMS: SQL vs Mongoose (MongoDB) Cheat Sheet

## 1. Database Connection & Setup

| Action | SQL | Mongoose (Node.js) |
| :--- | :--- | :--- |
| **Import / Driver** | `const mysql = require('mysql2');` | `const mongoose = require('mongoose');` |
| **Connection** | `mysql.createConnection({ host: 'localhost', ... });` | `mongoose.connect(process.env.MONGO_URI);` |

---

## 2. CREATE Operations (Data Insert)
*Inserting new records into the database.*

### Single Insert
* **SQL:**
  ```sql
  INSERT INTO users (username, email, password) 
  VALUES ('umar', 'umar@test.com', '12345');
  ```
* **Mongoose:**
  ```javascript
  // Method A: using .save()
  const new_user = new u_detail({ username, email, password });
  await new_user.save();

  // Method B: using .create() direct insert
  await u_detail.create({ username, email, password });
  ```

---

## 3. READ Operations (Data Query)
*Retrieving data from the database.*

### Fetch All Records
* **SQL:**
  ```sql
  SELECT * FROM users;
  ```
* **Mongoose:** *(Returns Array `[]`)*
  ```javascript
  const all_users = await u_detail.find();
  ```

### Fetch Only One (First Match)
* **SQL:**
  ```sql
  SELECT * FROM users WHERE email = 'umar@test.com' LIMIT 1;
  ```
* **Mongoose:** *(Returns Object `{}` or null)*
  ```javascript
  const user = await u_detail.findOne({ email: 'umar@test.com' });
  ```
* **💡 Extra Tip (Agar sach me sirf email ya specific cheez chahiye ho?)**
Agar tum kabhi chahte ho ki database se baqi cheezein na aayein (security ke liye, jaise password hide karna ho), toh Mongoose me hum Select use karte hain:

JavaScript
```
// Is se password select nahi hoga, baqi data aayega
const user = await u_detail.findOne({ email }).select('-password');
```
### Find By Unique ID
* **SQL:**
  ```sql
  SELECT * FROM users WHERE id = 5 LIMIT 1;
  ```
* **Mongoose:** *(Shortcut for findOne(_id))*
  ```javascript
  const user = await u_detail.findById("6a58c222e092bd...");
  ```

### Filter / WHERE Clause (Multiple matches)
* **SQL:**
  ```sql
  SELECT * FROM users WHERE age = 20;
  ```
* **Mongoose:** *(Returns Array of matches)*
  ```javascript
  const young_users = await u_detail.find({ age: 20 });
  ```

---

## 4. UPDATE Operations (Modify Data)
*Modifying existing records.*

### Update One Record (Highly Recommended)
* **SQL:**
  ```sql
  UPDATE users SET email = 'new_email@test.com' WHERE id = 5;
  ```
* **Mongoose:** *(Returns the updated document with { new: true } option)*
  ```javascript
  await u_detail.findByIdAndUpdate(
      "6a58c222e0...", 
      { email: 'new_email@test.com' }, 
      { new: true } 
  );
  ```

### Update Multiple Records
* **SQL:**
  ```sql
  UPDATE users SET status = 'active' WHERE age >= 18;
  ```
* **Mongoose:**
  ```javascript
  await u_detail.updateMany(
      { age: { \$gte: 18 } }, 
      { status: 'active' }
  );
  ```

---

## 5. DELETE Operations (Remove Data)
*Deleting records from the database.*

### Delete One Record By ID
* **SQL:**
  ```sql
  DELETE FROM users WHERE id = 5;
  ```
* **Mongoose:**
  ```javascript
  await u_detail.findByIdAndDelete("6a58c222e0...");
  ```

### Delete Multiple Records
* **SQL:**
  ```sql
  DELETE FROM users WHERE status = 'inactive';
  ```
* **Mongoose:**
  ```javascript
  await u_detail.deleteMany({ status: 'inactive' });
  ```

---

## 6. ADVANCED: Logical Operators (OR / AND)
*Combining conditions.*

### Logical OR Condition
* **SQL:**
  ```sql
  SELECT * FROM users WHERE username = 'umar' OR email = 'umar@test.com';
  ```
* **Mongoose:**
  ```javascript
  await u_detail.findOne({
      \$or: [
          { username: 'umar' },
          { email: 'umar@test.com' }
      ]
  });
  ```
# 💻 Web Development me JWT ka kya kaam hai?

Jab user login karta hai, toh backend server us user ko ek secure, signed **"Ticket" (Token)** bana kar de deta hai.

Uske baad jab bhi user koi secure kaam karna chahega (jaise apni profile dekhna, cart me item add karna, ya post upload karna), toh user ka browser har request ke sath woh Token backend ko bhejega.

Server ko baar-baar database se user ko dhoondna nahi padta. Woh sirf token ka "signature" verify karta hai aur access de deta hai!

---

## 🧩 JWT ke 3 Hisse (Structure)

Jab tum ek JWT token dekhoge, toh woh ek ajeeb sa bada string hoga jisme do dots (`.`) honge. Yeh teen hisson se banta hai:

```plaintext
xxxxx.yyyyy.zzzzz
```

* **Header (xxxxx):** Isme bataya jata hai ki token kis type ka hai aur kaunsa algorithm (jaise `HS256`) use hua hai isse sign karne ke liye.
* **Payload (yyyyy) [The Main Data]:** Isme user ka actual data hota hai jo tum save karna chahte ho. Lekin dhyan rahe, isme password kabhi nahi dalte! Isme hum user ki ID (`_id`) aur username dalte hain.
* **Signature (zzzzz) [The Security Guard]:** Yeh sabse important hissa hai. Yeh Header, Payload aur tumhari ek `JWT_SECRET` key (jo sirf tumhare server ko pata hoti hai) ko mila kar banta hai. Agar koi hacker token ke sath thodi si bhi chher-chaar karega, toh signature match nahi hoga aur server access reject kar dega!

---

## 🔑 JWT_SECRET kya hota hai?

`process.env.JWT_SECRET` tumhari ek khufia chaabi (Secret Key) hoti hai. Yeh koi bhi random bada string ho sakta hai jo tum apni `.env` file me likhte ho, jaise:

```env
JWT_SECRET=my_super_secret_key_123_umar_asghar_backend
```

> ⚠️ **Kyun zaroori hai?** Agar kisi hacker ko tumhara `JWT_SECRET` pata chal gaya, toh woh khud se fake tokens bana kar tumhare database ko access kar sakta hai. Isliye isse hamesha `.env` me chhupa kar rakhte hain!

---

## 🚀 Login Route me iska implementation kaise hota hai?

Tumhe apne code me `jsonwebtoken` package install karna hoga:

```bash
npm install jsonwebtoken
```

Aur code me hum token aise banate hain:

```javascript
const jwt = require('jsonwebtoken');

// payload (user data) + secret key + expiry time
router.post('/login', async (req, res) => { // 1. async lagana zaroori hai!
    const detail = req.body;
    try {
        const user_email = detail.email;
        const user_password = detail.password;

        // 1. Check karo ki kya is email ka user database me hai?
        const user = await u_detail.findOne({ email: user_email });
        
        if (!user) {
            // Agar user nahi mila, toh yahin se error bhej kar return kar do
            return res.status(404).json({ message: "User not found! Please register first." });
        }

        // 2. Password compare karo (User ka input password vs Database wala encrypted password)
        const isMatch = await bcrypt.compare(user_password, user.password);

        if (!isMatch) {
            // Agar password match nahi hua
            return res.status(401).json({ message: "Invalid credentials! Wrong password." });
        }

        // 3. Agar password sahi hai, toh JWT Token generate karo (Cinema Ticket!)
        const token = jwt.sign(
            { userId: user._id, username: user.username }, // Payload
            process.env.JWT_SECRET,                        // Secret Key (.env se aayegi)
            { expiresIn: '3d' }                            // Token ki expiry (3 din)
        );

        // 4. Success Response bhej do aur sath me TOKEN bhi dedo!
        return res.status(200).json({
            message: "Login successful!",
            token: token, // Frontend is token ko save karega bar bar login se bachne ke liye
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
    }
});
```
# Last Concept — Protected Route Middleware
Right now anyone can hit any route. Protected routes only allow users WITH a valid token.
Yahan Protected Route Middleware wahi Gatekeeper (Guard) hai.

***Middleware Ka Asli Kaam Kya Hai?***
Token banne ke baad, jab user aapki website par kisi aisi jagah jata hai jo sabke liye nahi hai (jaise uski /profile, /settings, ya uska wallet/cart), toh woh apna token request ke saath bhejta hai header mein (Authorization: Bearer <token>).
Middleware har aane wali request ko raste mein hi rok leta hai aur yeh 3 kaam karta hai:

* Check karta hai: "Kya is request ke paas ticket (token) hai?"
* Verify karta hai: "Kya yeh ticket asli hai? Ya kisi ne fake banaya hai?"
* Decide karta hai:

Agar ticket sahi hai: Toh bolta hai "Pass verified, andar jao!" aur next() function call kar ke user ko uske profile ka data dikha deta hai.

Agar ticket nahi hai ya fake hai: Toh bolta hai "Bhai jaan, pehle login karo!" aur seedha 401 Unauthorized ka error de kar bahar nikal deta hai.
### **Sumarry of authentication system**
to yani pury summary ye  ha ke user login howa usy databse me check krky token dia with expiry date 3 yani 3 din tk freely  ghoom skty hu pory website me a us token me user id or email or security key ,ab apny  jis page pe jy ga middleware check kry verify kry ga or allow or diallow kry ga to yani agr hacker ko pta lg bhi jata user email password us ke pass token nhi hoga wo usko block krdega lkn yha ek or twist ye ha ab user kisi protected route (/profile) par jata hai aur token bhejta hai, toh middleware jwt.verify(token, process.env.JWT_SECRET) call karta hai.
Yahan server database ke paas nahi jata, balki yeh steps karta hai:

* **Maths Calculation:** Server us token ke andar maujood payload (User ID) pr JWT_SECRET key laga kar dobara ek signature calculate karta hai.

* **Match Check:** Agar server ki calculate ki hui signature aur token ke andar aayi hui signature 100% match kar jayein, toh iska matlab hai ke yeh token aapke hi server ne banaya tha aur isme kisi hacker ne koi cher-char (tampering) nahi ki.

* **Allow:** Jaise hi match ho jata hai, middleware kehta hai "Verified!" aur user ko aage jaane deta hai.

# 📝 Step-by-Step Implementation Notes
Hum 3 asaan steps mein guard (middleware) khada karenge:
* Middleware File Banana (protect.js)
* Route par Guard Lagana (auth.js / routes)
* Postman se Test Karna

***Step 1: Middleware File Banayein***
Apne project mein middleware naam ka folder banayein (agar pehle se nahi hai) aur usme protect.js file bana kar yeh code likhein:
```
JavaScript
const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // 1. Check karo ke header aaya hai aur 'Bearer ' (with space) se shuru ho raha hai
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: "No token provided!" });
        }

        // 2. 'Bearer ' ko hata kar sirf asli token alal karo
        const token = authHeader.split(' ')[1]; 

        // 3. Asli token ko verify karo
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (err) {
        console.log("❌ ERROR:", err.message);
        return res.status(401).json({ message: "Invalid or Expired Token" });
    }
};

module.exports = protect;
```
***Step 2: Route Par Guard Lagayein***
Ab jahan aapne apne routes banaye hain (jaise aapki auth.js ya router file hai), wahan is middleware ko import karein aur /profile route par laga dein:
```
const express = require('express');
const router = express.Router();
const protect = require('../middleware/protect'); // Middleware import kiya
// Yeh ek PROTECTED route hai
router.get('/profile', protect, (req, res) => {
    // Agar control yahan tak pohncha hai, matlab middleware ne user verify kar diya hai!
    // req.user ke andar wahi data hai jo humne token banate waqt dala tha.
    res.status(200).json({
        message: "Welcome to your protected profile!",
        user: req.user 
    });
});
module.exports = router
```
***Step 3: Postman Mein Test Kaise Karein?***
Bina Token Ke Check Karein: Postman mein GET request karein http://localhost:3000/api/auth/profile par (bina koi header diye). Aapko 401 Unauthorized milna chahiye.
Token Ke Saath Check Karein:
Pehle /login kar ke woh lamba sa token copy karein.
/profile wali request par jayein, wahan Headers tab mein jayein.
Key mein likhein: Authorization
Value mein likhein: Bearer <paste_your_token_here> (Bearer ke baad ek space zaroor dena).or
Postman mein URL ke neeche Authorization tab par jao. Type mein select karo Bearer Token. Right side par jo box aaye, usme sirf aur sirf token paste karo (wahan khud se Bearer mat likhna, Postman khud bhej deta hai).
Send karein! Aapko aapka profile data dikh jayega.

### ***📝 Notes Mein Likhne Ke Liye Summary:***
* Public vs Protected: Home aur About jaise aam pages ko khula rakha jata hai (No middleware). Sirf user ka personal data, setting, aur sensitive pages ko protect kiya jata hai.

* Data Security: Token ke andar har user ki apni unique userId hoti hai. Server isi ID ko dekh kar data lata hai, isliye koi user kisi doosre ka data nahi dekh sakta.

User A ko jo token milta hai, uske andar User A ki ID chupi hoti hai.
User B ko jo token milta hai, uske andar User B ki ID chupi hoti hai.
Jab User A apna token lekar /profile par jata hai, toh middleware token ko kholkar uski ID nikalta hai aur req.user mein daal deta hai. Phir aap database se sirf usi ID ka data nikalte ho:

**yani phly hmny login krke token dia uer id ke sath tky bar bar login or database check na ho user freely ghumy , dosra us token sy wo jis page pr jy ga jo data chy wo token leke gy or dekhga mughy mera data do verificaton ke bad phr database usko uski reqired data dega**

**🌐 Bonus Note: HTTP vs HTTPS Routes**
Aapne poocha ke kya isme HTTP aur HTTPS routes bhi cover ho jate hain?
Jawab hai: Haan, bilkul!
Backend code ke liye isse koi farq nahi padta ke request http:// se aa rahi hai ya https://. Middleware dono par bilkul ek hi tarah se kaam karega.
Lekin production ke liye ek bohot ahem baat apne notes mein zaroor likh lo:
HTTP (Unsecured): Jab aap local server par kaam kar rahe ho (localhost), toh data clear text mein jata hai. Agar real website par HTTP use hoga, toh hacker raste mein se aapka JWT Token chura sakta hai (Man-in-the-Middle attack).
HTTPS (Secured): Jab aap website live karte ho (Vercel, Render, AWS wagera par), toh wahan HTTPS zaroor hona chahiye. HTTPS aapke us Token ko raste mein encrypt (chupa) deta hai, taake koi hacker use raste mein pakad na sake.
Aapka yeh backend code dono jagah chalta hai, bas live website par security ke liye HTTPS hona zaroorii hai.