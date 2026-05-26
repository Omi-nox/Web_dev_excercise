
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

# GRid making steps
 
 

Magic Unit: fr (Fractional Unit)
Grid mein px ya % ke bajaye fr use karna sabse best hai. Ye screen ki bachi hui jagah ko barabar hisson mein baant deta hai.
grid-template-columns: 1fr 1fr 1fr; (3 bilkul barabar columns banenge jo screen choti hone par khud ko adjust karenge).


### Step 1: Bachon ko "Naam" dein (grid-area)\

Use case: Jab aapko complex, asimetric layout banana ho, jaise:

```
.container {
  display: grid;
  gap: 15px;
  min-height: 500px;
  /* Hum 2 columns bana rahe hain */
  grid-template-areas: 
    "pehla doosra"
    "teesra teesra"; /* Teesri box dono columns le lega */
}

.box1 { grid-area: pehla; background: red; }
.box2 { grid-area: doosra; background: blue; }
.box3 { grid-area: teesra; background: green; }
```
1. Grid Columns ko Lock Karein
**NOTE :** 
Agar aap chahte hain ke columns bilkul mery marzi ki width ke hon aur flexible na hon, toh 1fr ki jagah minmax ya fixed units use karein.
```
  grid-template-columns: repeat(3,minmax(300px,1fr));

 object-fit: cover; /* Image ko stretch hone se bachane ke liye */
  
 card{
   width: 100%; /* Grid cell ke mutabiq adjust hoga */
 }
 ```
```1. Kab Kaunsi Unit Use Karein?
Unit	Kab use karein?	Example
px (Fixed)	    |    Jab aap chahte hain size bilkul na badle (jaise koi icon ya logo).	       |   width: 300px;
% (Relative)	  |    Jab element apne Parent (jis box ke andar wo hai) ka hissa gherna chahe.	 |   width: 100%; (Poori jagah le lo)
min-width	      |    "Isse chota mat hona." (Mobile par content ko dabne se bachata hai).	     |             min-width: 200px;
max-width	      |    "Isse bada mat hona." (Badi screens par content ko phailne se rokta hai).	max-width: 1000px;
#### ska Faida (Responsive Design):
BAQI CHILD KE ANDR ELEMENT FREE HA WO AZAD BSS ALWAYS WORKING WITH GRID , CALCULATE PIXELS
Mobile par aapko sirf naksha (map) badalna parta hai, poora code nahi: you can use relative absolute but be careful
css
```
```
@media (max-width: 600px) {
  .container {
    grid-template-areas: 
      "h"
      "n"
      "m"
      "s"
      "f";
    grid-template-columns: 1fr; /* Sab ek ke neechay ek */
  }
}
```
### PROPER GRID USED

```
Creating a Grid Layout
To create a grid layout, you need to define a container and then specify the grid lines using properties like grid-template-columns and grid-template-rows.

<!-- HTML structure -->
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <!-- Add more items as needed -->
</div>
Defining Grid Lines
You can define the number and size of columns and rows using grid-template-columns and grid-template-rows.

/* CSS styles */
.container {
  display: grid;
  grid-template-columns: repeat(3, 100px); /* Repeat three 100px columns */
  grid-template-rows: auto; /* Rows adjust to content size */
}

.item {
  background-color: lightblue;
  padding: 20px;
  text-align: center;
}
<!-- Aligning Items
You can use justify-content and align-items to align items within the grid cells. -->

.container {
  justify-content: space-between; /* Distribute items evenly with space */
  align-items: center; /* Center items vertically */
}
Spanning Grid Cells
<!-- You can use grid-column-start, grid-column-end, grid-row-start, and grid-row-end to control the span of items. -->

.item:nth-child(1) {
  grid-column-start: 2;
  grid-column-end: 4;
}

.item:nth-child(2) {
  grid-row-start: 2;
}
Responsive Design
<!-- To make your grid responsive, you can use media queries to adjust the layout based on screen size. -->

@media (max-width: 600px) {
  .container {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
}
<!-- This guide should help you get started with CSS Grid. If you have any specific questions or need further clarification, feel free to ask! -->
```
1. Height ka Golden Rule (Kab kya likhna hai?)

Kabhi bhi FIX Height mat do (height: 500px): Ye sabse bari galti hai. Agar content zyada ho gaya, toh woh dabba se bahar nikal jayega (overflow).

min-height use karo: Hamesha min-height: 100vh ya min-height: 400px likho. Iska matlab hai: "Kam az kam itni height ho, lekin agar dabbe zyada ho jayein toh height khud barh jaye."

height: auto (Default): Grid containers ke liye ye best hai.

2. Width ka Rule (Kab fix, kab flexible?)
width: 100% vs max-width:

Sirf width: 100% likhoge toh laptop par dabba bhot phela hua (stretch) nazar aayega.

Hamesha max-width (maslan 1200px) do aur saath mein width: 100% rakho. Is se dabba mobile par chota ho jayega aur laptop par ek limit mein rahega.

Grid Columns:
1fr: Use karo jab aap chahte ho dabba bachi hui saari jagah le le (Responsive).
px (e.g. 200px): Tab use karo jab aapko pata ho ke dabba hamesha aik hi size ka rehna chahiye.

3. Grid ki Khas Tips
grid-template-columns: repeat(3, 1fr);: Ye short-cut hai 3 barabar ke columns banane ka.
gap: Margin ki bajaye hamesha gap use karo grid mein, ye columns aur rows ke beech tameez se jagah banata hai.

place-items: center;: Agar container ke andar ki har cheez (text, images) bilkul beech mein chahiye, toh ye magic line hai.

4. Mistakes se kaise bachein? (Pro Tips)
position: absolute se parhez: Grid ya Flexbox ke andar kabhi absolute mat use karo jab tak aapko koi cheez ek ke upar ek charhani na ho. Ye grid ka saara system tabaah kar deta hai.
margin: auto: Agar container screen ke beech mein nahi aa raha, toh margin: 0 auto; likh do (shart ye hai ke container ki width screen se kam ho).

Inspect Element (F12): Jab phans jao, Chrome mein right-click karke "Inspect" karo. Grid par hover karoge toh neeli (blue) lines dikhayengi ke dabba kahan khatam ho raha hai.

### custom height

  /* Har row 200px ki hogi, chahe content chota ho ya bada */
    grid-auto-rows: 200px;

    /* Kam az kam 150px, zyada se zyada auto (jitna content) */
    grid-auto-rows: minmax(150px, auto);

    Fix height: .item { height: 100px; }
auto pe content khud ba khud zayada hoga no worries

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