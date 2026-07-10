# Phase 3 — React + Tailwind: Lesson 1
*** What is a Component? ***
In vanilla JS you think in pages.

In React you think in components.

A component is just a reusable piece of UI. Think of it like Lego blocks — you build small pieces and combine them into a full page.
```
Page
├── Navbar
├── Hero
│   ├── Title
│   └── Button
├── ProjectCard
│   ├── Image
│   ├── Title
│   └── Button
└── Footer
```
Every one of those is a separate component. Build once, use anywhere.
#  Setting Up React
We use Vite — fastest way to create a React project:
```
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```
This gives you a live React app running at localhost:5173.

Now let's clean it up and understand the structure. Open your my-app folder in VS Code. You'll see this:

```
my-app/
├── src/
│   ├── App.jsx       ← main component (this is what you saw)
│   ├── App.css       ← its styles
│   ├── main.jsx      ← entry point (don't touch this yet)
│   └── index.css     ← global styles
├── index.html        ← the single HTML file
└── package.json
```
The most important thing to understand:
React has only ONE html file — index.html. Everything else is JavaScript components. React injects all your UI into this one div:
```
<div id="root"></div>  <!-- React controls everything inside here -->
```
```
// This looks like HTML but it's actually JavaScript
function App() {
  return (
    <div>
      <h1>Hello Umar!</h1>
    </div>
  )
}
```
# 3 rules of JSX:
```
// Rule 1 — Always return ONE parent element
// ❌ Wrong - two elements at top level
return (
  <h1>Hello</h1>
  <p>World</p>
)

// ✅ Correct - wrap in one parent
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
)

// Rule 2 — JavaScript goes inside {}
const name = "Umar"
return <h1>Hello {name}!</h1>  // renders: Hello Umar!

// Rule 3 — class becomes className
// ❌ Wrong
<div class="card">

// ✅ Correct
<div className="card">

```
# simple function UL LI with map
```
function App() {
  const myName = "Umar"
  const role = "AI Engineer & Full Stack Developer"
  const skills = ["Python", "JavaScript", "React", "Machine Learning"]

  return (
    <div>
      <h1>Hello, I am {myName}</h1>
      <p>{role}</p>
      <ul>
        {skills.map((skill, index) => (    //index is position number
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

or simple we can say that this

<ul>
  <li key="0">Python</li>
  <li key="1">JavaScript</li>
  <li key="2">React</li>
  <li key="3">Machine Learning</li>
</ul>


export default App
```
# function calling inside function 
```
function Card({ name, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  )
}

// Use it inside App like an HTML tag
function App() {
  return (
    <div>
      <Card name="Umar" role="AI Engineer" />
      <Card name="Ali" role="Frontend Dev" />
      <Card name="Sara" role="Backend Dev" />
    </div>
  )
}
```
# React Concept 3 — useState Hook
This is the most important React concept. State is data that when changed, automatically updates the UI.
In vanilla JS you did this manually:
```
document.getElementById('count').textContent = count
```
In React — just update the state, UI updates itself:
```
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)  // [value, setter]

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Minus</button>
    </div>
  )
}
```
Three things to understand:

useState(0) → starting value is 0
count → current value
setCount → function to UPDATE the value
Every time setCount runs → React re-renders the UI automatically
jb bhi set state call hota ya new value set hoty ha ui automatically render hogata ha 

# React Concept 4 — useEffect Hook
useState manages data. useEffect runs code when something happens — page loads, state changes, component appears.

Real time change in array   in the ***backend especially*** and ofcourse for frontend jsy for example...

***NOTE***: Hooks ko hamesha kisi Component ke andar YA USKY SATH  hona chahiye: 

**Khali Dabba [] tab dein: Jab aap chahte hain ki andar ka kaam sirf ek baar ho (jaise hi page open ho).Example: Website khulte hi database se user ka data ya products load karna.**

**Variable wala dabba [count] tab dein: Jab aap chahte hain ki andar ka kaam har us baar dobara chale jab woh variable badle.Example: Jab user cart me item badhaye, to total bill dobara calculate ho.**

```
useEffect(() => {
  // Jaise hi t-shirt ki quantity badle, total bill dobara calculate karo
  setTotalBill(count * 500); 
}, [count])
```
```
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // Runs ONCE when component loads
  useEffect(() => {
    console.log('Component loaded!')
  }, [])  // ← empty array = run once only

  // Runs every time count changes
  useEffect(() => {
    console.log('Count changed to:', count)
  }, [count])  // ← [count] = run when count changes

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  )
}
```
mtlb me ek bar zror chlonga jb bhi page pr dobara mount yani show ya reload me chlonga agr nhi me remove hojaonga taky memory leak na ho 
```
// 👇 Yeh "cleanup" function hai
  return () => window.removeEventListener('scroll', handleScroll)
```
# React Concept 5 — Tailwind CSS Setup
Now we add Tailwind. No more writing CSS files — just utility classes directly in JSX.
Run this in your my-app terminal:
```
npm install tailwindcss @tailwindcss/vite
```
Then open vite.config.js and replace everything with:
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```
Then open src/index.css and replace everything with just:
```
@import "tailwindcss";
```
Then stop and restart your dev server:
```
Ctrl+C
npm run dev
```


| Category | Tailwind Class | Usage / Matlab |
| :--- | :--- | :--- |
| **Borders (Kinaare)** | `border` <br> `border-2` <br> `border-blue-500` <br> `border-solid` | Default 1px ki border lagane ke liye <br> Border ki motai (thickness) 2px karne ke liye <br> Border ka color blue karne ke liye <br> Solid line border dene ke liye |
| **Positioning (Jagah)** | `relative` <br> `absolute` <br> `fixed` <br> `top-0` <br> `left-0` | Normal flow me position rakhne ke liye <br> Parent ke hisab se azad (free) position karne ke liye <br> Screen par ek jagah chipkane ke liye (jaise Navbar) <br> Bilkul top par chipkane ke liye <br> Bilkul left par chipkane ke liye |
| **Display Property** | `block` <br> `inline-block` <br> `hidden` | Element ko poori width line me lane ke liye <br> Side-by-side lane ke liye par width/height ke sath <br> Element ko screen se bilkul gayab (hide) karne ke liye |
| **Opacity (Dhundlapan)** | `opacity-100` <br> `opacity-50` <br> `opacity-0` | Full visible (100% saaf dikhega) <br> Half transparent (50% dhundla dikhega) <br> Completely invisible (0% par chupa hua) |
| **Full Width / Height (100%)** | `w-full` <br> `h-full` | Width 100% karne ke liye <br> Height 100% karne ke liye |
| **Viewport Width / Height** | `w-screen` <br> `h-screen` | Pure browser screen jitni width (`100vw`) <br> Pure browser screen jitni height (`100vh`) |
| **Minimum Limits** | `min-w-0` <br> `min-h-screen` | Minimum width zero set karne ke liye <br> Kam se kam screen jitni height (`min-height: 100vh`) |
| **Maximum Limits  width scrren** | `max-w-full` + `w-full` use kro <br> `max-w-7xl` <br> `max-h-screen` | Maximum width 100% <br> Standard website container max-width (1280px) <br> Maximum height screen jitni |
|**SEction height**|`min-h-screen`+`overflow-hidden`|section ki min height + flex + overflow|
| **Flexbox / Grid Gap** | `gap-4` <br> `gap-x-2` <br> `gap-y-6` | Row aur Column dono ke beech me space <br> Sirf horizontal (Left/Right) elements me gap <br> Sirf vertical (Top/Bottom) elements me gap |
| **Flexbox Alignment** | `flex` <br> `justify-center` <br> `items-center` | Flexbox layout shuru karne ke liye <br> Horizontally center karne ke liye <br> Vertically center karne ke liye |
| **Flexbox Layout** | `flex` <br> `gap-{n}` | Flexbox layout shuru karne aur elements ke beech gap dene ke liye |
| **Flex-shrink-0** | `Jab hum kisi page par Flexbox (flex ya flex-row) use karte hain, toh default mein browser ki aadat hoti hai ki agar jagah kam pade, toh woh andar ke dabbone (elements) ko pichka (squeeze/shrink) deta hai taaki sab ek hi line mein fit ho jayein.}` |flex-shrink-0 ka matlab hai: "Kuch bhi ho jaye, is dabbe ko pichkana mat!"|
| **grid grid-cols-1** | `mobile pr ek ` |md:grid-cols-3: Laptop/Tablet (md:) par automatic usi line ko tod kar 3 columns bana do (yani 3 dabbe aamne-saamne aa jayein). |
Kyun lagaya? Hum chahte hain ki aapki photo ka size bilkul perfect w-64 h-64 (256px) hi rahe. Agar screen choti bhi ho (jaise kisi saste mobile par), tab bhi flexbox aapki photo ko pichka kar andaa (oval) ya chota na kare. Yeh photo ke size ko ek dam rigid aur tight rakhta hai. |
| **Background Color** | `bg-blue-500` | Medium blue background color |
| **Text Color** | `text-white` | White color ka text |
| **Padding** | `p-4` <br> `px-4` <br> `py-2` | Har taraf se padding <br> Left aur Right padding <br> Top aur Bottom padding |
| **Margin** | `m-4` <br> `mx-auto` <br> `mt-8` | Har taraf se margin <br> Element ko horizontally center karne ke liye <br> Sirf Top par margin |
| **Font Size** | `text-xl` <br> `text-3xl` | Bada text size <br> Aur zyada bada text size |
| **Font Weight** | `font-bold` | Text ko bold (mota) karne ke liye |
| **Rounded Corners** | `rounded-lg` | Corners ko thoda round/curve karne ke liye |
| **Fixed Width** | `w-64` | Fixed width set karne ke liye (16rem / 256px) |
| **Shadow** | `shadow-lg` | Element ke peeche bada drop shadow (saaya) dene ke liye |
|**backdrop-blur-md**|mtlb mefium blur effect ho |-----|
|**border-b**|mtlb border bottom ||
|**max-w-6xl**|maximum width kha tk mtln 72rem| 1152px tk and use w-full wiht it  for sections|
|**mx-auto**|left aur right margin auto krdo| barabar space chor do |


| Tailwind Property | Syntax / Format | Description / Matlab |
| :--- | :--- | :--- |
| **Background Color** | `bg-{color}-{shade}` | Background color set karne ke liye (e.g., `bg-blue-500`) |
| **Text Color** | `text-{color}-{shade}` | Text ka color badalne ke liye (e.g., `text-white`) |
| **tracking-widest** | `letter spacing` | Iska matlab hai Letter Spacing (e.g., `text-white`) |
| **leading-relaxed** | `lines spacing` | Paragraph ki do lines ke beech ka gap |
| **text-base** | `am tor pr websites paragraph ke lia` | Iska matlab hai Base Font Size (16px). (e.g., `text-white`) |
| **Font Size** | `text-{size}` | Font ka size set karne ke liye (`sm`, `lg`, `xl`, `2xl`...) |
| **Font Weight** | `font-bold` | Text ko bold (mota) karne ke liye |
| **Spacing** | `p-{n}` <br> `m-{n}` | Padding (andar ki space) aur Margin (bahar ki space) dene ke liye |
| **Border Radius** | `rounded-{size}` | Corners ko round karne ke liye (`md`, `lg`, `full`...) |
| **Width / Sizing** | `w-full` <br> `max-w-{size}` | Width 100% karne aur max-width limit set karne ke liye |
| **Shadow Effect** | `shadow-lg` | Element ke peeche drop shadow (saaya) lagane ke liye |
| **Hover State** | `hover:bg-{color}` | Mouse upar le jaane par background color badalna |
|**text-transparent**|Makes text invisible |Yeh magic combo hai! Yeh text ka apna rang gayab karke background ke gradient ko text ke andar bhar deta hai.|
|**bg-clip-text**|Clips background to text shape |same|
|**bg-gradient-to-r**|Gradient left to right |same |
|**from-[#6366f1] to-[#06b6d4]**|Gradient colors |Aapka naam "Asghar" left se right tak purple se cyan color mein badalta hua (Gradient) dikhega, jaise high-tech modern SaaS websites par hota hai. |
|**hover:shadow-[#6366f1]/25**|[#6366f1]/25Colored glow shadow on hover |ab user "View Projects" par mouse layega, toh button ke piche ek purple glowing effect (chamak) aayegi, jo website ko bhot futuristic banati hai. |

```
          className="bg-[#475b5a] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md border border-[#5c7574] hover:bg-[#3b4c4b] hover:scale-105 transition-all duration-200 cursor-pointer list-none"
```
### humburger snippet explaination
phly use state use kia 
```
const [isOpen, setIsOpen] = useState(false)
```
phr div class yse ki ye wali jiska name hiddenn
```
    <ul className="hidden md:flex gap-8 text-[#f1f5f9] text-sm">
```
| :--- | :--- | :--- |
|***hidden***|ka mtlb < 768px:  display:hidden|----navbar chupa dena|
|***md:flex ***|ka mtlb >= 768px or larger px medium screen , ye tailwind css ka breakpoint ha yani **responsive modifier ha**|display:hidden khtm kro jb laptop screen ho or or flexbox kro|
 **:** colon ka mtlb tb run krna  ye wali class jb vhlaa jb 768  ya is ry screen  ho or hidden ko ignore krdo.

ab humburger ki bar
```
 <button 
          className="md:hidden text-[#f1f5f9] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
```
md:hidden ka mtlb agr >= 768px hidden chla do or button hide krdo 
ternary operator : agr hidden howa wesy work nhi kry ga , ye false ko true or true ko false kry ga , click krny pr  agr false set ha to ulta krdo 

mobile menu
when isopen true then run the remaining div code
```
{isOpen && (
        <div className="md:hidden bg-[#111827] px-6 py-4 flex flex-col gap-4">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#f1f5f9] hover:text-[#6366f1] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
```
isOpen && true howi to agy ka div run hoga jis me  md:hidden mtlb >=768 hidden krdo dekhany ki zrort nhi , nhi flex krdo or isOpen ko false set krdo
### Conditional Styling:
```
 <div>
          {damage>70? (
            <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Gun Locked 🔒</span>
          ) : (
            <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Gun Unlocked 🔓</span>
          )}
        </div>   
        
```

# React Conncept 6 - Router (Multiple Pages)
### Theory
Right now your app is one page. React Router lets you build multiple pages without reloading the browser — just like a real app.
```
/           → Home page
/about      → About page
/projects   → Projects page
/contact    → Contact page
```
**First Install**
```
npm install react-router-dom
```
**How it Works**
```
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
```
### Three things to  Understand
| Thing  | Purose |
| :--- | :--- | 
|**BrowserRouter**| Wraps everything,enables routing|
|**Route** | Maps a URL path to a component|
|**Link**| like <a> tag but no page reloa|
**Task**
```
Install react-router-dom
Create 3 separate files in src/pages/:

Home.jsx — just an <h1>Welcome Home</h1>
import {use} from react
function Home(){
  return()
}
export default Home or do sepearate at the start of function just write export

About.jsx — just an <h1>About Me</h1>
Projects.jsx — just an <h1>My Projects</h1>

```
In App.jsx set up routing snippet so each page loads at its own URL
Add Link navigation between pages
but before 
**import Home from './Home**
for multiple
**import { Home, Timer } from './MyComponents'**
**NOTES**: MAIN APP KI CSS RKHNA DIV KE BACKGROUND KE LIA and routes element to me  ek parent div rkhna 
***for Example***
```
export default About 
or for multiple//
export function...
import {Home ,Timer} from './Home'
import About  from './About'
<div className="min-h-screen h-full min-w-[400px] w-full flex justify-center flex-col items-center bg-[#2d0320] text-[#99d5c9] px-10 py-10">
      <BrowserRouter>
      <nav className="flex gap-5 text-lg font-semibold mb-5 hover:text-[#ffda22] transition-all duration-200">
        <Link to="/" className="hover:text-[#ffda22] transition-all duration-200">
        Home
        </Link>
        <Link to="/about" className="hover:text-[#ffda22] transition-all duration-200">
        About
        </Link>
        <Link to="/project">
        Projects
        </Link>
      </nav>
<Routes>
        {/* only pass main and needed element just  Home page*/}
        <Route path="/" element={
          <div className="flex flex-col items-center w-full justify-center">
              <Home name="Umar Asghar Khan"  />
              <Timer /> </div>
        } /> 
        {/* about page */}
        <Route path="/about" element={<About skills={skills} />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App 
```
***NOTES*** Target section like footer add only Links  or sath me import {Link} from 'react-router-dom';
Sirf itna kaafi hai. Footer mein BrowserRouter, Routes, Route import nahi karna.

then Root app me kya krna import these
```
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Privacy from './components/Privacy';
import Terms from './components/Terms_Con';
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={
      <>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </>
    } />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/terms" element={<Terms />} />
  </Routes>
  <Footer />
</BrowserRouter>
```
 Routes (return ke andar)

# React icons 
```
npm install react-icons
```
Then use any icon like this:
```
import { FaPython, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiJavascript } from 'react-icons/si'

// Use it like a component
<FaPython className="text-4xl text-yellow-400" />
<FaReact className="text-4xl text-cyan-400" />
const skills = [
  { icon: <FaReact className="text-cyan-400 text-2xl" />, name: "React" },
  { icon: <FaPython className="text-yellow-400 text-2xl" />, name: "Python" },
  { icon: <SiJavascript className="text-yellow-300 text-2xl" />, name: "JavaScript" },
  { icon: <FaNodeJs className="text-green-400 text-2xl" />, name: "Node.js" },
  { icon: <SiTailwindcss className="text-cyan-300 text-2xl" />, name: "Tailwind" },
  { icon: <SiMongodb className="text-green-500 text-2xl" />, name: "MongoDB" },
  { icon: <FaGitAlt className="text-orange-400 text-2xl" />, name: "Git" },
  { icon: <FaHtml5 className="text-orange-500 text-2xl" />, name: "HTML5" },
]
```
# REact Formsprea 
```
// Formspree setup bilkul sahi hai aapki ID ke sath
  const [state, handleSubmit] = useForm("xnjworbg")
  {/* Right - Form (Uncommented and Integrated with Formspree) */}
          <div className="relative">
            {state.succeeded ? (
              <div className="bg-[#111827] border border-[#1f2937] p-8 rounded-lg text-center flex flex-col items-center justify-center min-h-[300px]">
                <span className="text-4xl mb-3">🚀</span>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="text-[#64748b] text-sm mt-2">Thank you, I will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    required
                    className="w-full bg-[#111827] border border-[#1f2937] text-[#f1f5f9] px-4 py-3 rounded-lg focus:outline-none focus:border-[#6366f1] transition-colors placeholder:text-[#374151]"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required
                    className="w-full bg-[#111827] border border-[#1f2937] text-[#f1f5f9] px-4 py-3 rounded-lg focus:outline-none focus:border-[#6366f1] transition-colors placeholder:text-[#374151]"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>

                <div>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    required
                    rows={5}
                    className="w-full bg-[#111827] border border-[#1f2937] text-[#f1f5f9] px-4 py-3 rounded-lg focus:outline-none focus:border-[#6366f1] transition-colors placeholder:text-[#374151] resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-[#6366f1] text-white py-3 rounded-lg font-medium hover:bg-[#4f46e5] transition-all duration-300 hover:shadow-lg hover:shadow-[#6366f1]/25 disabled:opacity-50"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
```
state.succeeded aur state.submitting hum khuhd hi bna rhy ha ye forspree me already ha 
Yeh ValidationError Kya Hai?Yeh bhi Formspree ka apna aik component hai jo hum ne top par import kiya hai.Iska kaam yeh hai ke agar user form mein koi aisi galti kare jo backend par reject ho jaye—jaise type="email" wale box mein @ lagaye bina koi galat text likh de—to Formspree internet se error message laa kar is <ValidationError /> ke zariye input ke bilkul niche laal rang mein dikha deta hai. Aap ko khud se validation ka lamba code nahi likhna padta.

#Builtin animation
|Class name |Effect|Best USe Case|
|:---|:---|:---|
|||||
|||||
|**animate-bounceIcon**| ball ki tarah upar-niche smoothly jump karta hai|.Success messages ya "Scroll Down" ke arrow par.|
|**animate-pulse**|Text ya icon halka sa fade-out aur fade-in hota hai (Heartbeat style).|Badges, live status indicators, ya glowing cards par.|
|**animate-spin**|Icon ko aik hi jagah par gol-gol (360°) ghumata hai.|Loading spinners ya "Sending..." wale buttons par.|
|**animate-ping**|Element ke peeche se ek circular radar wave nikal kar gayab hoti hai.|Notification dots ya kisi important live alert par.|

# REAL ICONS:
icon 1 
```
import LikeButton from "./like"
{/* Real Icon – Outline when not liked, filled when liked */}
        <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
          {hasLiked ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-[#64748b] group-hover:text-red-400" />
          )}
        </span>
```
icon 2
```
import { FaPython, FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaStar, FaBrain, FaGlobe, FaTerminal } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiJavascript } from 'react-icons/si'
<FaBrain className="text-4xl text-[#6366f1]" />
<FaGlobe className="text-4xl text-[#06b6d4]" />,
<FaTerminal className="text-4xl text-green-400" />
<FaReact className="text-cyan-400 text-3xl" />, 
<FaPython className="text-yellow-400 text-3xl" />,
<SiJavascript className="text-yellow-300 text-3xl"
<FaNodeJs className="text-green-400 text-3xl" />, 
<SiTailwindcss className="text-cyan-300 text-3xl" 
<SiMongodb className="text-green-500 text-3xl" />,
<FaGitAlt className="text-orange-400 text-3xl" />,
<FaHtml5 className="text-orange-500 text-3xl" />, 
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
 <FaExternalLinkAlt className="text-xs transition-transform group-hover:-translate-y-0.5" /> 
    Live Demo

```
icon no:3
```
import { HiOutlineMail } from 'react-icons/hi'; // Email Icon
import { FiMapPin } from 'react-icons/fi';      // Location Icon
import { MdOutlineWorkOutline } from 'react-icons/md'; // Internship/Status Icon
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import {BsCloudCheck} from 'react-icons/bs'
<HiOutlineMail className="text-[#6366f1] " />, 
<FiMapPin className="text-[#06b6d4]" />, 
<MdOutlineWorkOutline className="text-[#8b5cf6]" />

```
icon no:4 social icons 
```
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { FiMapPin } from 'react-icons/fi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';
import { IoCafeOutline, IoCafe } from 'react-icons/io5';
import { LuCoffee } from 'react-icons/lu';
import Privacy from './Privacy'
import Terms from './Terms_Con'
<FaGithub />, h
<FaInstagram />
<FaXTwitter />,
<FaLinkedin />,
{/* <FaCoffee size={25} color="#6F4E37" />} 
 <LuCoffee size={25} color="#d4a373" /> 
   <FaRegHeart size={25} color="red" />

```
# Short Notes : React Website ka icon (Favicon ) Badalne ka tariqa
**Step 1: Apni Photo ko SVG Code mein** 
image ko svg me convert kry then
BadleinKisi bhi free website par jayen (jaise: svgviewer.dev ya vectorizer.ai).Apni profile photo upload karein aur Download SVG par click kar dein.Us downloaded .svg file ko notepad ya VS Code mein kholein aur uske andar ka saara Code Copy kar lein.
***Step 2: React Project mein Paste Karein***
VS Code mein apne project ka public/favicon.svg file kholein (jo aapki image mein dikh raha hai).Pehle se maujood saara code delete kar dein.Jo code aapne Step 1 mein copy kiya tha, use yahan Paste karke file save (Ctrl + S) kar dein.
***Step 3: index.html ko Check Karein***
 (Sirf Ek Baar)public/index.html file kholein.Tasalli kar lein ke wahan yeh line likhi hui hai (agar pehle se hai to kuch badalna nahi padega):html<link rel="icon" type="image/svg+xml" href="%PUBLIC_URL%/favicon.svg" />
Use code with caution.