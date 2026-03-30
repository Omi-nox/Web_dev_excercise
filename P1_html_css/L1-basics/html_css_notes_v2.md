# 📘 HTML & CSS Notes (Clear + Practical + Examples)

------------------------------------------------------------------------

# 🧱 HTML STRUCTURE (Core Idea)

HTML = Structure (skeleton of webpage)

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

💡 Samajh: - HTML bina CSS = plain structure - Ye foundation hai (skip
nahi kar sakte)

------------------------------------------------------------------------

# 🧠 SEMANTIC TAGS (Clean Structure)

💡 WHY? Readable code + SEO + professional coding

``` html
<header>Logo</header>
<nav>Menu</nav>
<main>
  <section>
    <article>Post</article>
  </section>
</main>
<footer>Footer</footer>
```

💡 Rule: \> div tab use karo jab semantic tag available na ho

------------------------------------------------------------------------

# 🧾 FORMS (User Input)

``` html
<form>
  <label>Email</label>
  <input type="email" placeholder="Enter email">

  <label>Password</label>
  <input type="password">

  <button>Login</button>
</form>
```

💡 Samajh: - form = container - input = data - button = action

------------------------------------------------------------------------

# 🖼️ IMAGES + LINKS

``` html
<img src="img.jpg" alt="profile">

<a href="https://google.com" target="_blank">Google</a>
```

💡 Real use: - alt → accessibility + fallback - target → new tab

------------------------------------------------------------------------

# 📋 LISTS

``` html
<ul>
  <li>Python</li>
  <li>JS</li>
</ul>

<ol>
  <li>Step 1</li>
  <li>Step 2</li>
</ol>
```

💡 Use: - ul → random items - ol → steps

------------------------------------------------------------------------

# 📦 DIV vs SPAN

``` html
<div class="box">Block</div>

<p>Hello <span style="color:red">World</span></p>
```

💡 Samajh: - div → full width (layout) - span → text styling

------------------------------------------------------------------------

# 🎨 CSS BASICS

``` html
<link rel="stylesheet" href="style.css">
```

``` css
body {
  background-color: black;
  color: white;
}
```

------------------------------------------------------------------------

# ⚙️ CLASS SYSTEM (MOST USED)

``` html
<div class="card">Card</div>
```

``` css
.card {
  padding: 20px;
  background: gray;
}
```

💡 Rule: \> class = reuse system

------------------------------------------------------------------------

# 📦 BOX MODEL (VERY IMPORTANT)

Har element ek box hai:

Content → actual cheez\
Padding → andar space\
Border → line\
Margin → bahar space

``` css
.box {
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}
```

💡 Trick: - padding → andar breathing - margin → distance

------------------------------------------------------------------------

# 💪 FLEXBOX (ALIGNMENT KING)

``` html
<div class="container">
  <div>1</div>
  <div>2</div>
</div>
```

``` css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

💡 Samajh: - horizontal → justify - vertical → align

------------------------------------------------------------------------

# 📍 POSITION

``` css
.box {
  position: absolute;
  top: 20px;
  left: 20px;
}
```

💡 Types: - relative → shift - absolute → parent ke andar move - fixed →
screen pe fix - sticky → scroll smart

------------------------------------------------------------------------

# 🎬 PSEUDO ELEMENT

``` css
h1::before {
  content: '';
  display: block;
  height: 3px;
  background: red;
}
```

💡 Use: - design effects without extra HTML

------------------------------------------------------------------------

# 🧠 FINAL MINDSET

HTML = Structure\
CSS = Design

------------------------------------------------------------------------
# Peseudo element animation work
```
 h1{ /*taky bacha bhaer na bhagy  agr sizing length me issue arha ha to padding margim postions sb khucb chero  */
    position: relative;
    z-index: 1;
    display: inline-block;
      padding: 0 10px;
  }

h1::before{
    content: '';
    position: absolute;
    width: 100%;
    background-color: #e94560;
    height: 52px;
    border-radius: 30px;
    top: -6px;
    left: -1px;
    z-index: -1;
      height: 100%; /* Height relative rakhen taake flexibility rahe */
    transform: scaleX(0);
    transition: transform 0.3s ease;
}
   
    
h1:hover::before{
    transform: scaleX(1);
}
h1:hover{
    color: #1a1a2e;
}
```
# 🚀 DEBUG RULE

Agar problem aaye:

1.  Structure galat? → HTML check\
2.  Style nahi lag raha? → CSS selector check\
3.  Center nahi ho raha? → flex use\
4.  Element gayab? → display / position check

------------------------------------------------------------------------

🔥 Goal: \> Code likho → break karo → fix karo → repeat

## box shadow
box-shadow: [X-offset] [Y-offset] [Blur] [Spread] [Color];

box-shadow: [X-offset] [Y-offset] [Blur] [Spread] [Color];

X-offset: Daayen (positive) ya baayen (negative) shadow move karta hai.

Y-offset: Upar (negative) ya neeche (positive) shadow move karta hai.

Blur: Jitna bada number hoga, shadow utni hi "soft" aur dhundli hogi.

Color (RGBA): rgba(0, 0, 0, 0.1) ka matlab hai 
black color lekin sirf 10% opacity ke saath. Isse shadow dark ke bajaye "greyish/light" lagti hai.

Pro Tip: Agar aap chahte hain ke shadow andar ki taraf "gusi" hui lage (inset), toh bas inset word ka izafa kar dein:
box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
#### 2 dfa
 box-shadow: 0 15px 35px rgba(0, 0, 0, 0.07), 0 5px 15px rgba(0, 0, 0, 0.05);

#### box shadow 3 dfa
ska Faida:
Depth: Element bilkul 3D lagta hai.
Smoothness: Shadow ke kinare (edges) bahut naram nazar aate hain.
Modern Look: Aaj kal ki top-tier websites (jaise Stripe ya Airbnb) isi tarah ki layered shadows use karti hain.
Ek aur Example (3-Layer Shadow):
Agar aap mazeed realistic banana chahte hain, toh log 3 layers bhi use karte hain:
css
box-shadow: 
  0 1px 3px rgba(0,0,0,0.12), 
  0 1px 2px rgba(0,0,0,0.24),
  0 10px 20px rgba(0,0,0,0.05);


  ## agr width screen sy bhaer nikal rhy ha to 
  1. Sabse Pehla Hal (The Universal Fix)
CSS file ke bilkul shuru mein ye code daal dein. Yeh CSS ka sabse zaroori rule hai jo har developer use karta hai:
css
```
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```
Use code with caution.

3. Body Scroll ko Khatam Karna
Agar aap chahte hain ke page par bilkul bhi horizontal scroll na aaye (zabaridasti):
css
```
body {
  overflow-x: hidden;
}
```
Use code with caution.

(Lekin yaad rakhein, ye sirf scroll chhupata hai, asli masla fix nahi karta. Asli fix box-sizing: border-box hi hai.)


  ### TRANSLATE TRANSFORMATION
  🚀 CSS Motion & Animation: The Ultimate Guide

**1. Transform (The "What" - Movement)**
transform element ki position, size, aur shape badalta hai bina layout ko distrub kiye.
Property	Function	Effect

 opacity : 0

transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Thora bounce effect */

 width: 100%; /* Width full rakhen aur scale use karein */

translate(x, y)	Movement	10px (Right), -10px (Left/Up)

scale(1.1)	Zoom In/Out	1.1 (10% bada), 0.9 (10% chhota)
transform-origin: center; /* Centers the scaling around the element's center */
.example {
  scale(1.5, 0.7); /* Scales horizontally by 1.5 and vertically by 0.7 */
}
  scale: 2;

rotate(45deg)	Rotation	Element ko ghumata hai

skew(10deg)	Teercha	Element ko khench deta hai (stretch)

**2. Transition (The "How" - Smoothness)**
Transition batata hai ke change kitni der mein aur kaise hoga. Ise hamesha Main Element par lagao (Hover par nahi).
css
/* Syntax: property | duration | timing-function | delay */
transition: all 0.3s ease-in-out;
Use code with caution.

all: Har cheez (color, size, position) smooth hogi.

0.3s: Speed (ideal for UI).

ease-in-out: Shuru aur khatam naram (smooth) hoga.

**3. Keyframes (The "Loop" - Auto Animation)**
Jab kaam khud-ba-khud karwana ho (bina mouse le jaye), toh @keyframes use hota hai.
css
@keyframes upDown {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-20px); } /* Upar gaya */
  100% { transform: translateY(0); }    /* Wapas aya */
}

.moving-box {
  animation: upDown 2s infinite ease-in-out;
}
Use code with caution.

**4. Pseudo-Classes vs Pseudo-Elements**

A. Pseudo-Classes (:hover, :active)
Inka maqsad user ke action par react karna hai.
:hover (Mouse upar le jane par)
:active (Click karne par - "Andar dhusne" wala effect)
css
.btn {
  transition: 0.2s;
}
.btn:hover {
  transform: translateY(-5px); /* Upar utha */
}
.btn:active {
  transform: scale(0.95); /* Click par dab gaya */
}
Use code with caution.

**B. Pseudo-Elements (::before, ::after)**
Ye "fake" elements hain jo extra design (lines, backgrounds, dots) banane ke kaam aate hain bina extra HTML likhe.
Example: Underline Animation
css
```
.link {
  position: relative;
}
.link::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 0; height: 2px;
  background: blue;
  transition: 0.3s; /* Ye line ko smooth chalaye ga */
}
.link:hover::after {
  width: 100%; /* Line left se right nikal ayegi */
}
```
Use code with caution.

**5. Pro Notes for Projects (Cheat Sheet)**

Upar Uthana (Elevation): transform: translateY(-10px);

 + box-shadow ko bada kar do.

Andar Dhusana (Inset): transform: scale(0.98); + box-shadow: inset ....

Bahar Nikalna (Pop-out): transform: scale(1.1);.

Right Side Move: transform: translateX(10px);.

Shake Effect: rotate(1deg) aur rotate(-1deg) ke keyframes banao.

## 1. <span> Kya Hai?
<span> ek khali dabba (container) samajh lein jo text ke kisi khas hissay ko alag karne ke liye use hota hai.
Jaise aapne likha: <li><span>Damage</span> <span>27</span></li>
Yahan humne "Damage" aur "27" ko alag-alag <span> mein isliye rakha taake hum "Damage" ka color ya font alag kar sakein aur "27" ka alag, halankay wo dono ek hi line (<li>) mein hain.
 
 ## 2. :first-child Kya Hai?
Ye ek CSS Selector hai jo batata hai ke "apne group ka pehla bacha (element) pakro".
Jab hum likhte hain .stats-list li span:first-child, to iska matlab hai:
"List item (li) ke andar jo pehla <span> hai (yani label jaise 'Damage', 'Range'), sirf us par design apply karo."
Isi wajah se sirf left side wale words Bold hote hain aur right side wale numbers normal rehte hain.

# body backgraounf image
lgaon
Body par transparent-looking background image lagane ka sab se best tareeka ::before pseudo-element hi hai. Iska faida ye hota hai ke aap image ki opacity (shafafiyat) kam kar sakte hain bina uske upar likhay hue text ko halka kiye.
Aap apni CSS mein ye code add karein:
css
```
*{
   
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/* Apply this to the container (usually the body) */
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Takes full height of the screen */
  margin: 0;
}
body{
    
    background: #d5def5;  
    overflow-x: hidden;
    /* z-index: 1; */
}

body::before {
    content: "";
    position: fixed; /* Poori screen par fix rahega */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('![aapki-image-ka-path.jpg](https://wallpapercave.com/wp/wp14777935.jpg)'); /* Yahan apni image ka link dein */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.15; /* Is value ko kam ya zyada kar ke transparency set karein (0.1 se 0.3 best hai) */
    z-index: -1; /* Ye image ko content ke peechay rakhega */
}

main { #never make it absolute or relative 
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
}
main {
    /* position: absolute;  <-- Isay hata dein */
    /* top: 100px;        <-- Isay bhi hata dein */
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 90px auto 0; /* Top se gap dene ke liye aur center karne ke liye */
    min-height: 80vh;    /* Content ki kam az kam height */
    width: 100%;         /* Width ko flexible rakhein */
    max-width: 1250px;   /* Aapki original width */
    
    color: #00204a;
    padding: 10px 10px;
    z-index: 1;
}

footer {
    clear: both;         /* Safety ke liye */
    width: 100%;
    text-align: center;
    padding: 20px;
    background-color: #1a1a2e;
    color: white;        /* Text nazar aane ke liye */
    margin-top: 50px;    /* Content aur footer ke beech gap */
}
```
Use code with caution.

Is mein kya ho raha hai?
content: "": Is ke baghair ::before nazar nahi aata.
opacity: 0.15: Ye image ko "halka" ya "transparent" banata hai taake aapka stats aur button saaf nazar aayein.
z-index: -1: Ye zaroori hai taake image background mein rahe aur aapke text ya button ke upar na aa jaye.

### GLASS effect card
```
.box {
    /* Glass effect: thora transparent white background */
    background: rgba(255, 255, 255, 0.85); 
    backdrop-filter: blur(10px); /* Background image ko thora dhundla kar dega */
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 30px; /* Padding thori set karein */
    z-index: 10; /* Taake ye background se upar rahay */
    /* Baaki purani properties... */
}
```
**BEST COLOR**
background: rgba(181, 170, 170, 0.1); 
    backdrop-filter: blur(10px); /* Background image ko thora dhundla kar dega */
    z-index: 10;

# Grid and flex box
```
.container {
  display: flex;
  flex-direction: row;       /* left to right (default)  */
  justify-content: center;   /* horizontal alignment   horizontal in row */
  align-items: center;       /* vertical alignment vertical in row */
  gap: 20px;                 /* space between items */
  flex-wrap: wrap;           /* wrap to next line if no space */
}
```
```
 Grid — 2 directions at once (rows AND columns)
css.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  gap: 20px;
}
1fr means "1 fraction of available space" — so repeat(3, 1fr) = 3 equal columns automatically.
Use Flexbox for navbars, buttons in a row, single direction layouts.
Use Grid for cards, galleries, page layouts — anything 2D.
```