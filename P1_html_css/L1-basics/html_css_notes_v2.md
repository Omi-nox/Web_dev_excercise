
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
------------------------------------------------------------------------

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
  box-sizing: border-box; !important
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



### TRANSLATE TRANSFORMATION
  🚀 CSS Motion & Animation: The Ultimate Guide

**1. Transform (The "What" - Movement)**
transform element ki position, size, aur shape badalta hai bina layout ko distrub kiye.
Property	Function	Effect

 opacity : 0

transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Thora bounce effect */

transition: opacity 0.5s ease, visibility 0.5s ease;

 ***Note*** : transition will not calculated if it happern from none to display , u have to do visibility:hidden + display : flex in humburger icon and transition and animation will always apply on original for also to come reverse original pos , not on active open 

transition: background-color 0.3s ease-in-out;  **for background color on hover**

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
## ANIMATION
simple animation of ay object like react icons
```
.animate-bounceIcon{
  position: fixed;
  right: 1%;
  bottom: 1%;
  z-index: 50;
  animation: liner 1.9s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;

}
.animate-bounceIcon:hover{
  animation-play-state: paused;
}


@keyframes liner{
  
 0%   { transform: translateY(0); }
  50%  { transform: translateY(-50px); } /* Upar gaya */
  100% { transform: translateY(0); } 
}

```

**HOVER UNDERLINE ANIMATION**
```
shine color
background:#1a2a3a;
background : linear-gradient(90deg,transparent,rgba(255,255,255,0.2))

aa{
 display: inline-block;
 text-decoration: none;
 text-align: center;
 font-size: 18px;
 color: aliceblue;
 position: relative;
 transition: all 0.3s ease-in-out;
 /* border: 2px solid red; */
 width: 59px;

}
a::before {
    content: '';
    position: absolute;
    top: 25px;
    width: 0; /* Initial width */
    border-bottom: 1px solid #0afff0;
    left: 0;
     /* Apply animation to ::before pseudo-element */
  
}




a:hover::before {
    animation: liner 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
     ;
}
@keyframes liner {
    0%{
        width: 0;
    }
    50%{
        width: 80%;
    }
    100%{
        width:  100%;
    }
    
}
a:hover{
    color: #0afff0 ;
    position: relative;

    box-shadow: 0 0 7px #0afff0;

}

```
### text background color...

.hero h1 span {
      background: linear-gradient(135deg, #0affb3, #ff00c1);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    .glow-name {
      text-shadow: 0 0 12px #0affb3;
      color: #c0ffee;
    }
```
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
```
**Animation Name:**
   /* animation: name duration timing-function delay iteration-count direction fill-mode;;
The name you give to your animation, used in the animation property.

**Timing Function:**

This property controls how an animation progresses over time.
Common timing functions include:
linear: Animates at a constant speed throughout its duration.
ease: Provides a smooth acceleration and deceleration effect (default).
ease-in: Starts slow, then speeds up at the end.
ease-out: Speeds up at the start, then slows down at the end.
ease-in-out: Begins slow, speeds up in the middle, and slows down at the end.
step-start/step-end: Animation occurs at certain points (start or end).
The timing function is specified using cubic-bezier values (cubic-bezier(x1, y1, x2, y2)) for more complex animations.

**Delay:**

This property specifies how long to wait before the animation starts.
It is measured in seconds or milliseconds (e.g., 0.5s).
**Iteration Count:**

Determines how many times the animation will loop.
Common values include:
infinite: The animation repeats indefinitely.
A number like 3: The animation repeats a specified number of times.

**Direction:**

Specifies whether the animation should play forwards, backwards, or alternate between forward and backward.
Possible values: normal (default), reverse, alternate, alternate-reverse.

**Fill Mode:**

Determines how the element behaves before and after the animation is applied.
Common values include:
none: The element retains its initial state before the animation starts and stops at the end of the animation.
forwards: The element maintains its final state after the animation finishes (useful for creating snapshots).
backwards: The element applies the first keyframe to all frames before it reaches its current frame (can create a "flash" effect).
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
## min height & max width 

***Short Summary:***
Content lamba hai? min-height use karein taake scroll bar aa jaye aur content neechay tak jaye.

Kahan: body { min-height: 100vh; }
Fayda: Footer hamesha screen ke bottom par rahega.

Screen bari hai? max-width use karein taake content bohot zyada phail kar ajeeb na lage.
Ek Choti 

1. min-height (Sabse zyada use hone wala)
Ye element ko ek "kam se kam" height deta hai.
Kaise kaam karta hai: Agar aapka content thora hai, to section utni height rakhega jo aapne specify ki hai. Lekin agar content zyada ho jaye (maslan text barh jaye), to section automatically neechay ki taraf expand ho jayega.
Best Use Case: Hero sections ya cards ke liye. Taake agar text barhay to content box se bahar na nikle (overflow na ho).
Example: min-height: 400px; (Matlab 400px se chota nahi hoga, par bara ho sakta hai).

2. max-height
Ye element par ek "had" (limit) laga deta hai.
Kaise kaam karta hai: Element us height se upar nahi jayega, chahe andar jitna bhi content ho. Agar content zyada ho gaya, to wo element se bahar nikalne lagega (ya phir aapko overflow: auto; use kar ke scrollbar dena parega).
Best Use Case: Dropdown menus, chat boxes, ya images ke liye jinhe aap ek khaas limit se bara nahi hone dena chahte.
Example: max-height: 200px; overflow-y: auto; (200px ke baad scrollbar aa jayega).

Kahan: main { max-width: 1250px; margin: 0 auto; }
Fayda: Content hamesha screen ke beech (center) mein rahega.

max-width (Flexible Limit): Ye ek upper limit set karta hai. Maslan, max-width: 1000px; ka matlab hai ke section 1000px se bada nahi hoga, lekin agar screen choti hogi to wo khud ko adjust kar lega (shrink ho jayega) bina scrollbar laye. 
lgaon
Body par transparent-looking background image lagane ka sab se best tareeka ::before pseudo-element hi hai. Iska faida ye hota hai ke aap image ki opacity (shafafiyat) kam kar sakte hain bina uske upar likhay hue text ko halka kiye.
Aap apni CSS mein ye code add karein:
# START FROM HERE WHEN YOU START WORK most important
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
      font-family: 'Segoe UI', 'Inter', system-ui, -apple-system, sans-serif;
      color: #f0f3fa;
      scroll-behavior: smooth;
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
   flex-grow: 1; /* Ye footer ko nichay push kar dega */
  max-width: 900px;
  margin: 40px auto;
  width: 100%; }
main {
    /* position: absolute;  <-- Isay hata dein */
    /* top: 100px;        <-- Isay bhi hata dein */
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 90px auto 0; /* Top se gap dene ke liye aur center karne ke liye */
    min-height: 80vh;  screen ki lmby  /* Content ki kam az kam height */
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

# ⚡ Ultimate CSS Grid Cheat Sheet (Short Theory)
***1. Magic Units & Sizing Rules***
**1fr (Fractional Unit):** Bachi hui screen ka barabar hissa. 1fr 1fr 1fr = 3 barabar columns.
**minmax(280px, 1fr):** Cam se kam 280px (taake mobile par layout na toote), zyada se zyada 1fr (taake phail sake).
**width: 100% + max-width:** 1200px: Mobile par poori width, laptop par aik hadd (limit) mein lock.
**min-height vs height:** Kabhi fix height mat do (content overflow ho jayega). Hamesha min-height use karo taake content barhne par box khud bada ho sake.

# 2. Layout Methods (The 2 Core Ways)Way
 A: Auto Responsive Grid (No Media Queries Needed)Naye cards automatic naye rows mein adjust hote hain.
 ```
  .container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px; /* Margins ki jagah hamesha gap use karein */
}

 ```
 Way B: Grid Areas Map (For Complex Frameworks)Asymmetric ya magazine layouts ke liye pehle bachon ko "Naam" dein, phir container mein "Naksha" banayein.
 ```
 /* Container Map */
.container {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar main";
}
/* Assigning Names to Children */
.box1 { grid-area: header; }
.box2 { grid-area: sidebar; }
.box3 { grid-area: main; }

/* Mobile View Shift */
@media (max-width: 600px) {
  .container {
    grid-template-areas:
     "header" 
     "sidebar" 
     "main"; /* Sab ek ke niche ek */
    grid-template-columns: 1fr;
  }
}

 ```
 # 3. Alignment & Row Controllingplace-items: 
 center; Pure box ke content (text/images) ko vertical aur horizontal bilkul center kar deta hai.
 grid-auto-rows: minmax(150px, auto); Aane wali har nayi row kam az kam 150px ki hogi, aur content barhne par auto badi ho jayegi.object-fit: cover; Grid ke andar images ko khinchne (stretch) ya kharab hone se bachata hai.

 # 4. Pro-Tips: Mistakes Se Bachein ⚠️No Position Absolute:
  Grid items par position: absolute lagane se grid ka automatic system tabah ho jata hai.
  Centering Container: Agar poora grid center nahi ho raha, to container mein margin: 0 auto; lagayein.
  F12 Inspect: Chrome DevTools khol kar .container ke saath likhe "grid" badge par click karein. Yeh aapko layout ki asli neeli lines (tracks) dikha dega.
### humburger code snippet
```

    /* ─── HAMBURGER BUTTON ─── */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 5px;
  z-index: 1100;
}
.hamburger span {
  display: block;
  width: 25px;
  height: 2px;
  background: #9d4edd;
  border-radius: 2px;
}
.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

   .hamburger { display: flex; }
 
  nav        { display: flex; align-items: center; justify-content: space-between; padding: 10px 15px; }
  .port      { position: static; font-size: 0.95rem; }
  
.nav_list  {
    display: flex; 
    flex-direction: column;
    position: absolute; 
    top: 60px; 
    left: 0; 
    right: 0;
    width: 100%; 
    
    /*  Orange hatane ke liye transparent dark purplish background aur blur */
    background: rgba(10, 5, 20, 0.1); 
    backdrop-filter: blur(25px); 
    -webkit-backdrop-filter: blur(25px); /* Safari support ke liye */
    
    /*  Purple Neon borders */
    border: 1px solid rgba(157, 78, 221, 0.25);
    border-bottom: 2px solid #9d4edd; 
    
    padding: 20px;
    z-index: 999; 
    gap: 12px;
    box-shadow: 0 10px 30px rgba(157, 78, 221, 0.15), 0 10px 20px rgba(0,0,0,0.6);
    border-radius: 0 0 15px 15px;
    margin: 0; /* Margin 0 rakhna behtar hai taake screen edges se chipka rahe */
    overflow: hidden; 
    
    opacity: 0; 
    visibility: hidden; 
    transition: opacity 0.5s ease, visibility 0.6s ease;
}

/* ─── PURPLE GRADIENT GLOW (Replacing Orange) ─── */
.nav_list::before {
    content: '';
    left: 0;
    top: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    
    /*  Deep Purple to Neon Cyber-Pinkish-Purple Gradient with opacity */
    background: linear-gradient(135deg, rgba(157, 78, 221, 0.9), rgba(181, 23, 158, 0.5));
    z-index: -1; /* Taake yeh background links ke text ke PEECHAY rahe */
    pointer-events: none; /* Taake links click hone mein rukawat na bane */
}


  .nav_list li {
    opacity: 0;
    transform: translateY(20px); /* Pushes items down */
    transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  /* Triggered when navbar has the .open class */
  .nav_list.open { 
    opacity: 1;
    visibility: visible; /* Makes the menu interactable */
  }
  
  /* Triggers the upward motion for the list items */
  .nav_list.open li { 
    margin: 0; 
    opacity: 1;
    transform: translateY(0); /* Brings them up smoothly */
    color: #833ab4 !important;
  }
  
  /* Added Stagger Delay so items pop up one by one */
  .nav_list.open li:nth-child(1) { transition-delay: 0.1s; }
  .nav_list.open li:nth-child(2) { transition-delay: 0.2s; }
  .nav_list.open li:nth-child(3) { transition-delay: 0.3s; }
  .nav_list.open li:nth-child(4) { transition-delay: 0.4s; }

  .nav_list a { 
    font-size: 1.1rem; 
    width: 100%; 
    text-align: left;   
     color: #fdfdfd !important;
  }
```
# preloader snippet
```
 <!-- Preloader (custom loading screen) -->
<div id="preloader">
  <div class="loader"></div>
  <p>Loading portfolio...</p>
</div>

#preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0a0f1e;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
  transition: opacity 0.5s ease;
}

.loader {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(10, 255, 240, 0.2);
  border-top: 4px solid #0afff0;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

#preloader p {
  margin-top: 15px;
  color: #0afff0;
  font-family: monospace;
}

```
# PROGRESS BAR

```
  <div id="progressBar"></div>
  #progressBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 0%;
  height: 3px;
 background: linear-gradient(90deg, #FF00FF, #8A2BE2);
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.7);
  /* box-shadow: 0 0 8px #0afff0; */
  /* background-color: #FFD700;
  box-shadow: 0 0 10px #FFD700; */
  z-index: 9999;
  transition: width 0.1s ease-out;
}
@keyframes topBarAnim {
  0% {
    left: -100%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}

    // scroll animation for progress bar  
  window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('progressBar').style.width = scrollPercent + '%';
});
```
# sCROLL BAR 

```
/* Container bar */
::-webkit-scrollbar {
  width: 12px;
  background-color: #01192c;
  box-shadow: inset 5px 0 15px rgba(0, 255, 255, 0);
  
  /* Ekdum dark blue/black background */
}
 ::-webkit-scrollbar-track{
   background: rgba(181, 170, 170, 0); 
    backdrop-filter: blur(10px);
   /* border: 1px solid rgba(255, 255, 255, 0.3); */
   border-radius: 25px;
 }

 ::-webkit-scrollbar-thumb{
   border: 1px solid rgba(255, 255, 255, 0.3);
   border-radius: 25px;
   background-color: rgba(255, 255, 255, 0);
    box-shadow: 0 5px 10px #0afff0,
                0 -5px 10px #0afff0;
    
 }
 ::-webkit-scrollbar-thumb:hover{
   border: 1px solid rgba(255, 255, 255, 0.3);
   border-radius: 25px;
   background-color: #0afff0;
   width: 10px;
 }
```
# LOTTIE ANIMATIONS 
### from js 
```
 <!-- Canvas element jahan animation render hogi html file me  -->
        <canvas id="dotlottie-canvas" style="width: 300px; height:300px;"></canvas>
         <script type="module" src="index.js" defer>  </script>
       // CDN se direct library import karein (Bina kisi NPM install ke) index js me 

import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

// Animation ko configure aur start karein
const dotLottie = new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.querySelector('#dotlottie-canvas'),
    src: "file name after downloading"
});

background body ke lia 
 #dotlottie-canvas {
    position: fixed;   /* viewport ke hisaab se fixed */
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover; /* barish ko stretch karega bina distortion ke, thoda crop hoga to chalega */
    z-index: -10;
    border: none;
    display: block;    /* extra gap hatane ke liye */
}
   

```
### from CONTENT DELIVER NETWORKK HTML/CSS
```
     /* dotlottie-wc{
    position: fixed;
    inset: 0;
    margin: auto;
    z-index: 99999;
} *
/<!-- Updated Portfolio Loader Container -->
  <script
  src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.14/dist/dotlottie-wc.js"
  type="module"
></script>
<div style="display:flex;justify-content:center;">
    <dotlottie-wc
  src="https://lottie.host/dc723e64-4464-4987-9c02-ecd20dbd3b02/aB7S9cKwKu.lottie"
  style="width: 300px;height: 300px ;"
  autoplay
  loop
></dotlottie-wc>
</div>
```
# SOCIAL TAGS
```
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
 <a href="https://github.com/Omi-Nox" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://instagram.com/umarkhan_.ysfxi_" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="#" target="_blank"><i class="fab fa-x-twitter"></i></a>
         <i class="fas fa-coffee coffee-icon"></i>

        .para1 .card{
 border: 1px solid rgba(255, 255, 255, 0.3);
 padding: 5px 5px;
 margin: 5px 5px;
}
.para1 .card span:first-child{
    font-weight: 800;
}
.para1 .card span{
    margin: 3px 3px;
    display: block;
}
.para1 .cardi{
   /* border: 2px solid #00eeff; */
   padding: 5px 5px;

}
.cardi span{
  font-weight: 600;
  font-size: 1.5rem;
}
.cardi .icons a{
    display: inline-block;
    position: relative;
    margin: 12px 10px;
    color: #00eeff;
    font-size: 1.9rem;
    transition: all 0.3s ease-in-out;

}
.cardi .icons a:hover{
    color: #000000;
     /* box-shadow: 0 10px 7px #0afff0; */
    
   
    background:linear-gradient(to right, #ffffff, #6dd5ed, #2193b0);
       -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    cursor: pointer;
    transform: translateY(-10px);
}
.cardi .icons a:active{
     transform: scale(0.9);
}
.cardi .icons a:nth-child(2):hover{
     background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
       -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
}
.cardi .icons a:nth-child(3):hover{
     background: linear-gradient(45deg, #25262c, #d7d7d9, #534b58, #ece7ea, #e9d7dd, #060404);
       -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
  
}
```
# ANOTHER SNIPPET
```
<div class="footer-col">
      <h3>Get in Touch</h3>
      <p><i class="fas fa-envelope"></i> umarasghar508@gmail.com</p>
      <p><i class="fas fa-phone"></i> 0310*****60</p>
      <div class="footer-social">
        <a href="https://github.com/Omi-Nox" target="_blank"><i class="fab fa-github"></i></a>
        <a href="https://instagram.com/umarkhan_.ysfxi_" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="#" target="_blank"><i class="fab fa-x-twitter"></i></a>
       
      </div>
      .footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-col {
  flex: 1;
  min-width: 200px;
}
.footer-col .fas.fa-envelope {
  color: #ffc60a;
  margin-right: 8px;
  perspective: 1000px;
  transition: all 0.3s ease-in-out;
}
.footer-col .fas.fa-envelope:hover {
  color: #0afff0;
  transform: rotate(360deg)
}
.footer-col .fas.fa-phone {
  color: #ffc60a;
  margin-right: 8px;
  perspective: 1000px;
  transition: all 0.3s ease-in-out;
}
.footer-col .fas.fa-phone:hover {
  color: #0afff0;
  transform: rotate(360deg)
}
.footer-col h3 {
  color: #0afff0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-col p, .footer-col li {
  color: #cbd5e1;
  line-height: 1.6;
}
```
# FORM FREE SPACE METHOD
```
<form action="https://formspree.io/f/xnjworbg" method="post">
    <label for="name">Name</label>
    <input type="text" name="name" id="name" placeholder="enter name" required>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" placeholder="enter email" required>
    <label for="message">Message</label>
    <textarea name="text-area" id="message" placeholder="Write yours thoughts here...." required></textarea>
    <button type="submit" id="b3">Send me</button>
```

# loader
```
 <!-- Loading spinner jo aap JS se show/hide kar sakte hain -->
        <div class="spinner" id="loadingSpinner"></div>

           .spinner {
        border: 4px solid rgba(17, 87, 64, 0.1);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        border-left-color: #115740;
        animation: spin 1s linear infinite;
        display: none  ; /* JS se .style.display = 'block' karne ke liye */
      }
      .load{
        display: block;
      }
       let load=document.querySelector('.spinner')
        btn.addEventListener('click',()=>{
        load.classList.toggle('load')
        setTimeout(()=>{
            load.classList.toggle('load')
            fet()
        },2000)
     
      })
      
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }



    <!-- another one  -->
    .spinner {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    
    background: radial-gradient(farthest-side, #ff4e50 94%, #0000) top/6px 6px no-repeat,
                conic-gradient(#0000 30%, #ff4e50);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 6px), #000 0);
    
    /* Neon glow effect */
    box-shadow: 0 0 15px rgba(255, 78, 80, 0.5);
    

    margin: 20px auto; 
    display: none; 
 
    animation: spin 1s linear infinite, pulse 1.5s ease-in-out infinite alternate;
}

/* Spinner active karne ki class */
.spinner.load {
    display: block;
}

/* Ghumne ki animation */
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Thoda sa pulse / wave effect taake boring na lage */
@keyframes pulse {
    0% { transform: scale(0.9) rotate(0deg); }
    100% { transform: scale(1.1) rotate(360deg); }
}

```

# FREE API'S WHICH I USE IN MY PROJECTS..............
```
<!-- WEATHER API -->
https://wttr.in/London?format=j1   

<!-- PAKISTAN COUNTRY API  -->
https://restcountries.com/v3.1/name/pakistan
```
## inner html

```
t.innerHTML = `
    <h2 class="city-title">📍 ${city_name}</h2>
    <p class="region-text">${region}</p>
    <div class="temp-display">${temp}°C</div>
    <p class="weather-desc">Vibe: ${weather}</p>
```
