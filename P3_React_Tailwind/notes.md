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
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

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
