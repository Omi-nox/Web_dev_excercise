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
| **Maximum Limits** | `max-w-full` <br> `max-w-7xl` <br> `max-h-screen` | Maximum width 100% <br> Standard website container max-width (1280px) <br> Maximum height screen jitni |
| **Flexbox / Grid Gap** | `gap-4` <br> `gap-x-2` <br> `gap-y-6` | Row aur Column dono ke beech me space <br> Sirf horizontal (Left/Right) elements me gap <br> Sirf vertical (Top/Bottom) elements me gap |
| **Background Color** | `bg-blue-500` | Medium blue background color |
| **Text Color** | `text-white` | White color ka text |
| **Padding** | `p-4` <br> `px-4` <br> `py-2` | Har taraf se padding <br> Left aur Right padding <br> Top aur Bottom padding |
| **Margin** | `m-4` <br> `mx-auto` <br> `mt-8` | Har taraf se margin <br> Element ko horizontally center karne ke liye <br> Sirf Top par margin |
| **Font Size** | `text-xl` <br> `text-3xl` | Bada text size <br> Aur zyada bada text size |
| **Font Weight** | `font-bold` | Text ko bold (mota) karne ke liye |
| **Rounded Corners** | `rounded-lg` | Corners ko thoda round/curve karne ke liye |
| **Flexbox Alignment** | `flex` <br> `justify-center` <br> `items-center` | Flexbox layout shuru karne ke liye <br> Horizontally center karne ke liye <br> Vertically center karne ke liye |
| **Fixed Width** | `w-64` | Fixed width set karne ke liye (16rem / 256px) |
| **Shadow** | `shadow-lg` | Element ke peeche bada drop shadow (saaya) dene ke liye |


| Tailwind Property | Syntax / Format | Description / Matlab |
| :--- | :--- | :--- |
| **Background Color** | `bg-{color}-{shade}` | Background color set karne ke liye (e.g., `bg-blue-500`) |
| **Text Color** | `text-{color}-{shade}` | Text ka color badalne ke liye (e.g., `text-white`) |
| **Font Size** | `text-{size}` | Font ka size set karne ke liye (`sm`, `lg`, `xl`, `2xl`...) |
| **Font Weight** | `font-bold` | Text ko bold (mota) karne ke liye |
| **Spacing** | `p-{n}` <br> `m-{n}` | Padding (andar ki space) aur Margin (bahar ki space) dene ke liye |
| **Flexbox Layout** | `flex` <br> `gap-{n}` | Flexbox layout shuru karne aur elements ke beech gap dene ke liye |
| **Border Radius** | `rounded-{size}` | Corners ko round karne ke liye (`md`, `lg`, `full`...) |
| **Width / Sizing** | `w-full` <br> `max-w-{size}` | Width 100% karne aur max-width limit set karne ke liye |
| **Shadow Effect** | `shadow-lg` | Element ke peeche drop shadow (saaya) lagane ke liye |
| **Hover State** | `hover:bg-{color}` | Mouse upar le jaane par background color badalna |

```
          className="bg-[#475b5a] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md border border-[#5c7574] hover:bg-[#3b4c4b] hover:scale-105 transition-all duration-200 cursor-pointer list-none"
```
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