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