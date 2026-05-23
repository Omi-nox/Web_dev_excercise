document.addEventListener("DOMContentLoaded", () => {
  let savedTheme = localStorage.getItem("darkMode");
  if (savedTheme == "on") {
    if (bt1) bt1.classList.add("on");
    if (dc1) dc1.classList.add("on");
    if (dc2) dc2.classList.add("on");
    if (n) n.classList.add("on");
    if (dc3) dc3.classList.add("on");
    if (dc4) dc4.classList.add("on");
    if (dc5) dc5.forEach((i) => i.classList.add("on"));
    if (dc6) dc6.classList.add("on");
    if (dc7) dc7.classList.add("on");
  }
});

// All variables
let bt = document.querySelector(".hm");
let dc = document.querySelector("nav ul");
let n = document.querySelector("nav");
let bt1 = document.querySelector(".bulb");
let dc1 = document.querySelector("body");
let dc2 = document.querySelector("header");
let dc3 = document.querySelector(".fa-regular");
let dc4 = document.querySelector(".card1");
let dc5 = document.querySelectorAll(".fa-solid");
let dc6 = document.querySelector(".quiz-footer");
let dc7 = document.querySelector(".footer-info");
let dc8 = document.getElementById("mypath");
let dc9 = document.querySelector(".info-card");
let dc11 = document.getElementById("closeInfoBtn");

function bulb() {
  if (bt1) bt1.classList.toggle("on");
  if (dc1) dc1.classList.toggle("on");
  if (dc2) dc2.classList.toggle("on");
  if (n) n.classList.toggle("on");
  if (dc3) dc3.classList.toggle("on");
  if (dc4) dc4.classList.toggle("on");

  if (dc5) {
    dc5.forEach((i) => i.classList.toggle("on"));
  }
  if (dc6) dc6.classList.toggle("on");
  if (dc7) dc7.classList.toggle("on");

  if (bt1 && bt1.classList.contains("on")) {
    localStorage.setItem("darkMode", "on");
  } else {
    localStorage.setItem("darkMode", "off");
  }
}

function hmbrg() {
  if (bt) bt.classList.toggle("khulga");
  if (dc) dc.classList.toggle("khulga");
  if (n) n.classList.toggle("khulga");
}

function quiz_page() {
  if (dc9) dc9.classList.remove("hidden");
  if (dc11) {
    dc11.onclick = () => {
      if (dc9) dc9.classList.add("hidden");
      window.location.href = "quiz.html";
    };
  }
}
// Home Page 
const currentPath = window.location.pathname;
if (currentPath.includes("index.html") || currentPath === "/" || currentPath.endsWith("/")) {
  if (bt1) bt1.addEventListener("click", bulb);
  if (dc8) dc8.onclick = quiz_page;
  if (bt) bt.onclick = hmbrg;
}

// QUIZ PAGE 
if (currentPath.includes("quiz.html")) {
  if (bt) bt.onclick = hmbrg;
  if (bt1) bt1.addEventListener("click", bulb);
  
  if (dc8) {
    dc8.style.cursor = "not-allowed";
    dc8.style.opacity = 0.5;
    dc8.style.pointerEvents = "none";
  }

 
 let allQuestions = [
    { "question": "What is the best-selling PC game of all time?", "optt": ["GTA V", "Minecraft", "Fortnite", "CS:GO"], "correct_options": "B" },
    { "question": "Which car brand makes the Supra?", "optt": ["Nissan", "Honda", "Toyota", "Mazda"], "correct_options": "C" },
    { "question": "What caliber does an AK-47 use?", "optt": ["9mm", "5.56mm", "7.62mm", ".45 ACP"], "correct_options": "C" },
    { "question": "Which movie features the character John Wick?", "optt": ["Taken", "John Wick", "The Matrix", "Heat"], "correct_options": "B" },
    { "question": "In GTA V, what city is the game set in?", "optt": ["Vice City", "Liberty City", "Los Santos", "San Fierro"], "correct_options": "C" },
    { "question": "Which PC game features the fictional city of 'Night City'?", "optt": ["Watch Dogs", "Cyberpunk 2077", "Fallout 4", "Deus Ex"], "correct_options": "B" },
    { "question": "Which platform is the largest digital store for PC gaming?", "optt": ["Epic Games", "Origin", "Steam", "Uplay"], "correct_options": "C" },
    { "question": "What is the main objective in the game 'Left 4 Dead'?", "optt": ["Racing", "Surviving Zombies", "Building Cities", "Solving Puzzles"], "correct_options": "B" },
    { "question": "What type of weapon is the famous M4A1?", "optt": ["Sniper Rifle", "Shotgun", "Assault Rifle", "Submachine Gun"], "correct_options": "C" },
    { "question": "Which pistol is famous for having a polymer frame and no manual safety switch?", "optt": ["Colt M1911", "Glock 17", "Beretta 92FS", "Desert Eagle"], "correct_options": "B" },
    { "question": "In 'Breaking Bad', what is Walter White's drug lord pseudonym?", "optt": ["Heisenberg", "Cap'n Cook", "Tuco", "Gus"], "correct_options": "A" },
    { "question": "Which popular Netflix series features characters named Eleven, Mike, and Dustin?", "optt": ["Dark", "Stranger Things", "The Witcher", "Wednesday"], "correct_options": "B" },
    { "question": "In Christopher Nolan's 'The Dark Knight', who played the role of The Joker?", "optt": ["Joaquin Phoenix", "Jared Leto", "Heath Ledger", "Jack Nicholson"], "correct_options": "C" },
    // --- NEW QUESTIONS (62 added, total 75) ---
    { "question": "Who is the iconic British Special Forces operative with the skull mask in Call of Duty?", "optt": ["Captain Price", "Soap MacTavish", "Ghost", "Gaz"], "correct_options": "C" },
    { "question": "Which sub-series of Call of Duty features the famous 'Zombies' mode created by Treyarch?", "optt": ["Modern Warfare", "Black Ops", "Vanguard", "Ghosts"], "correct_options": "B" },
    { "question": "Which battle is widely considered the major turning point of World War II in Europe?", "optt": ["Battle of Stalingrad", "Battle of Britain", "Battle of Midway", "Battle of the Bulge"], "correct_options": "A" },
    { "question": "What was the code name for the historic Allied invasion of Normandy during World War II?", "optt": ["Operation Barbarossa", "Operation Desert Storm", "Operation Overlord (D-Day)", "Operation Valkyrie"], "correct_options": "C" },
    { "question": "Which iconic submachine gun was heavily used by gangsters and US troops in World War II?", "optt": ["MP40", "Thompson (Tommy Gun)", "Uzi", "P90"], "correct_options": "B" },
    { "question": "What is the standard sniper rifle caliber often used for long-range military engagements?", "optt": [".50 BMG", "9mm", ".22 LR", "12 Gauge"], "correct_options": "A" },
    { "question": "Which bolt-action rifle was the standard-issue weapon for German soldiers in both World Wars?", "optt": ["Lee-Enfield", "Mosin-Nagant", "Karabiner 98k (Kar98k)", "M1 Garand"], "correct_options": "C" },
    { "question": "Which acclaimed World War II movie directed by Steven Spielberg opens with the Normandy beach landing?", "optt": ["Dunkirk", "Saving Private Ryan", "1917", "Fury"], "correct_options": "B" },
    { "question": "Which HBO miniseries follows the story of 'Easy Company' during World War II?", "optt": ["The Pacific", "Band of Brothers", "Generation Kill", "Catch-22"], "correct_options": "B" },
    { "question": "In the movie 'Fury', Brad Pitt plays the commander of what type of military vehicle?", "optt": ["Fighter Jet", "Submarine", "Sherman Tank", "Battleship"], "correct_options": "C" },
    { "question": "Which Call of Duty game introduced the highly popular 'Warzone' battle royale mode?", "optt": ["Black Ops 4", "Modern Warfare (2019)", "WWII", "Infinite Warfare"], "correct_options": "B" },
    { "question": "What does the military weapon acronym 'RPG' officially stand for?", "optt": ["Rapid Pressure Gun", "Rocket-Propelled Grenade", "Rifle Precision Gear", "Radar Pulse Grenade"], "correct_options": "B" },
    { "question": "Which light machine gun (LMG) is famous for its circular pan magazine and was used in WWII?", "optt": ["DP-28", "M60", "Minimi", "MG42"], "correct_options": "A" },
    { "question": "Which country suffered the highest total number of casualties during World War II?", "optt": ["Germany", "USA", "Soviet Union (USSR)", "UK"], "correct_options": "C" },
    { "question": "In 'Call of Duty: Black Ops', what is the name of the main protagonist who is interrogated about 'the numbers'?", "optt": ["Alex Mason", "Frank Woods", "Jason Hudson", "Viktor Reznov"], "correct_options": "A" },
    { "question": "Which Netflix crime series revolves around a criminal mastermind known as 'The Professor'?", "optt": ["Narcos", "Peaky Blinders", "Money Heist", "Ozark"], "correct_options": "C" },
    { "question": "Which movie features a specialized weapon called the 'Noisy Cricket'?", "optt": ["Men in Black", "Star Wars", "Terminator", "Predator"], "correct_options": "A" },
    { "question": "Which sniper rifle in Call of Duty is famous for performing 'one-shot kills' and quickscopes?", "optt": ["Intervention", "XPR-50", "Dragunov", "Outlaw"], "correct_options": "A" },
    { "question": "What is the name of the final main story mission in Call of Duty: Modern Warfare 2 (2009)?", "optt": ["No Russian", "Endgame", "Loose Ends", "Cliffhanger"], "correct_options": "B" },
    { "question": "Which country developed the famous Maxim Gun, the first fully automatic machine gun?", "optt": ["Germany", "United Kingdom", "United States", "France"], "correct_options": "C" },
    { "question": "What year did World War II officially end?", "optt": ["1939", "1941", "1945", "1950"], "correct_options": "C" },
    { "question": "Which weapon type does the military term 'MANPADS' refer to?", "optt": ["Heavy Machine Gun", "Shoulder-fired Anti-Aircraft Missile", "Combat Knife", "Tactical Drone"], "correct_options": "B" },
    { "question": "What is the name of the primary German secret police during World War II?", "optt": ["Gestapo", "KGB", "MI6", "CIA"], "correct_options": "A" },
    { "question": "In 'The Matrix', which color pill does Neo take to see the real world?", "optt": ["Blue", "Green", "Red", "Yellow"], "correct_options": "C" },
    { "question": "Which movie series features a fictional PMC company named 'Weyland-Yutani'?", "optt": ["Alien", "Predator", "RoboCop", "Resident Evil"], "correct_options": "A" },
    { "question": "What caliber ammunition does the standard NATO military assault rifle (like M16) use?", "optt": ["7.62x39mm", "5.56x45mm", "9x19mm", ".308 Winchester"], "correct_options": "B" },
    { "question": "Which Call of Duty game was the first to be set entirely in a futuristic setting?", "optt": ["Advanced Warfare", "Black Ops II", "Infinite Warfare", "Ghosts"], "correct_options": "B" },
    { "question": "Which historic battle involved the massive evacuation of Allied soldiers from French beaches?", "optt": ["Battle of Dunkirk", "Battle of Waterloo", "Battle of Berlin", "Battle of Somme"], "correct_options": "A" },
    { "question": "What weapon is famously known as the 'Chicago Typewriter'?", "optt": ["Colt M1911", "Thompson Submachine Gun", "BAR M1918", "Remington Shotgun"], "correct_options": "B" },
    { "question": "Who directed the 2017 epic World War I movie titled '1917'?", "optt": ["Christopher Nolan", "Sam Mendes", "Quentin Tarantino", "Ridley Scott"], "correct_options": "B" },
    { "question": "In 'Peaky Blinders', what weapon do the Shelby family members hide inside their caps?", "optt": ["Switchblades", "Razor Blades", "Small Pistols", "Brass Knuckles"], "correct_options": "B" },
    { "question": "Which weapon is the iconic service rifle of the British Armed Forces?", "optt": ["L85A2 (SA80)", "FAMAS", "Steyr AUG", "FN SCAR"], "correct_options": "A" },
    { "question": "In Call of Duty, what is the highest streak reward that instantly ends the match?", "optt": ["Chopper Gunner", "Tactical Nuke", "AC-130", "Juggernaut"], "correct_options": "B" },
    { "question": "What was the name of the American project that developed the atomic bomb during WWII?", "optt": ["Manhattan Project", "Apollo Project", "Horizon Project", "Valkyrie Project"], "correct_options": "A" },
    { "question": "Which weapon is a pump-action shotgun famously used by the US military since the Vietnam War?", "optt": ["Remington 870", "Mossberg 500", "AA-12", "Benelli M4"], "correct_options": "B" },
    { "question": "Which movie franchise features a high-tech assassin hotel called 'The Continental'?", "optt": ["Jason Bourne", "Mission Impossible", "John Wick", "Kingsman"], "correct_options": "C" },
    { "question": "In the series 'The Boys', what is the name of the chemical substance that gives humans superpowers?", "optt": ["Mutant Serum", "Compound V", "Super-Soldier Serum", "Project Extis"], "correct_options": "B" },
    { "question": "Which game franchise features the character 'Captain Price' prominently?", "optt": ["Halo", "Call of Duty", "Battlefield", "Medal of Honor"], "correct_options": "B" },
    { "question": "What is the name of the iconic zombie map in Call of Duty: Black Ops that features the band members?", "optt": ["Kino der Toten", "Five", "Ascension", "Call of the Dead"], "correct_options": "A" },
    { "question": "Which firearm is known as the 'Browning Auto-5'?", "optt": ["Shotgun", "Rifle", "Machine Gun", "Pistol"], "correct_options": "A" },
    { "question": "In the movie 'Heat', which two legendary actors face off in the famous shootout scene?", "optt": ["Al Pacino & Robert De Niro", "Brad Pitt & Leonardo DiCaprio", "Denzel Washington & Tom Hanks", "Matt Damon & Ben Affleck"], "correct_options": "A" },
    { "question": "Which World War II tank was known as the 'Tiger'?", "optt": ["German Panzer VI", "Soviet T-34", "American Sherman", "British Churchill"], "correct_options": "A" },
    { "question": "What does 'SMG' stand for in firearms?", "optt": ["Small Machine Gun", "Sub-Machine Gun", "Semi-automatic Machine Gun", "Special Military Gun"], "correct_options": "B" },
    { "question": "Which Call of Duty game introduced the 'Pick 10' create-a-class system?", "optt": ["Black Ops 2", "Modern Warfare 3", "Black Ops 1", "Ghosts"], "correct_options": "A" },
    { "question": "Who is the main antagonist in 'Call of Duty: Modern Warfare 2' (2009)?", "optt": ["General Shepherd", "Vladimir Makarov", "Imran Zakhaev", "Raul Menendez"], "correct_options": "A" },
    { "question": "What is the name of the fictional country in the rebooted 'Call of Duty: Modern Warfare' (2019)?", "optt": ["Urzikstan", "Verdansk", "Kastovia", "Al-Qatala"], "correct_options": "A" },
    { "question": "Which handgun was standard issue for the US military from 1985 to 2017?", "optt": ["SIG M17", "Glock 19", "Beretta M9", "Colt M1911"], "correct_options": "C" },
    { "question": "What caliber is the M2 Browning heavy machine gun?", "optt": [".50 BMG", ".30-06 Springfield", "7.62×51mm", "5.56×45mm"], "correct_options": "A" },
    { "question": "Which movie features the famous line 'You can't handle the truth!'?", "optt": ["A Few Good Men", "Top Gun", "Full Metal Jacket", "Platoon"], "correct_options": "A" },
    { "question": "In 'Saving Private Ryan', which character is the sniper?", "optt": ["Private Jackson", "Private Reiben", "Private Mellish", "Captain Miller"], "correct_options": "A" },
    { "question": "Which battle is considered the largest tank battle in history?", "optt": ["Battle of Kursk", "Battle of the Bulge", "Battle of El Alamein", "Battle of Stalingrad"], "correct_options": "A" },
    { "question": "What is the primary explosive compound used in C-4?", "optt": ["RDX", "TNT", "Nitroglycerin", "PETN"], "correct_options": "A" },
    { "question": "Which Call of Duty title first introduced exoskeleton movement (Exo Suit)?", "optt": ["Advanced Warfare", "Infinite Warfare", "Black Ops 3", "Ghosts"], "correct_options": "A" },
    { "question": "Which weapon is also known as the 'Ma Deuce'?", "optt": ["M2 Browning", "M249 SAW", "M240B", "M60"], "correct_options": "A" },
    { "question": "What does the 'AR' in 'AR-15' stand for?", "optt": ["Assault Rifle", "Automatic Rifle", "ArmaLite Rifle", "Advanced Rifle"], "correct_options": "C" },
    { "question": "Which movie features the US Navy's 'Top Gun' flight school?", "optt": ["Top Gun", "Iron Eagle", "Stealth", "Flight of the Intruder"], "correct_options": "A" },
    { "question": "In 'Call of Duty: Black Ops Cold War', which character returns as a playable operator?", "optt": ["Frank Woods", "Alex Mason", "Jason Hudson", "Viktor Reznov"], "correct_options": "A" },
    { "question": "Which German WWII machine gun was known as 'Hitler's Buzzsaw'?", "optt": ["MG34", "MG42", "FG42", "MP40"], "correct_options": "B" },
    { "question": "What is the effective firing range of an M16 assault rifle (approx)?", "optt": ["300 m", "550 m", "800 m", "1200 m"], "correct_options": "B" },
    { "question": "Which video game series features the 'Battlefield' franchise?", "optt": ["EA DICE", "Activision", "Ubisoft", "Bethesda"], "correct_options": "A" },
    { "question": "In 'The Dark Knight', what is the make of the Batmobile?", "optt": ["Lamborghini", "Tumbler (custom)", "Ferrari", "Porsche"], "correct_options": "B" },
    { "question": "What is the most kills streak reward in Call of Duty: Modern Warfare (2019) that calls in a tactical nuke?", "optt": ["30 kills", "25 kills", "20 kills", "15 kills"], "correct_options": "A" },
    { "question": "Which pistol is known as the 'Deagle' in popular culture?", "optt": ["Colt M1911", "Glock 17", "Desert Eagle", "Beretta 92FS"], "correct_options": "C" }
];

  // FIX: Shuffle and pick ONLY 10 random questions
  function getTenRandomQuestions(array) {
    let shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  }

  
  let ques = getTenRandomQuestions(allQuestions);

  let currentQuestionIndex = 0;
  let userScore = 0; 
  let cp = 'none';
  let chc = document.querySelectorAll(".opt");

  // Initial score reset elements on load
  let scoreDisplay = document.querySelector('.lll span:nth-child(2)');
  if (scoreDisplay) scoreDisplay.textContent = userScore;

  function updation(index) {
    chc.forEach((option) => {
      option.classList.remove("selected", "disabled", "unknown", "not-selected");
      option.style.pointerEvents = "auto";
    });

    let feed = document.querySelector('.lll span:last-child');
    if (feed) feed.textContent = "";

    // Quiz Finish State
    if (index >= ques.length) {
      let quizBox = document.querySelector('.card2') || document.body;
      quizBox.innerHTML = `
        <div style="text-align:center; padding: 40px 20px;">
          <h2 style="font-size:2rem; margin-bottom:15px; color:inherit;">Quiz Completed, Boss! 🎉</h2>
          <p style="font-size:1.3rem; margin-bottom:25px;">Your Final Score: <strong style="color:#00ffcc;">${userScore} / ${ques.length}</strong></p>
          <button onclick="window.location.reload()" style="padding:10px 25px; cursor:pointer; background:#222; color:#fff; border:2px solid #fff; border-radius:5px;">Play Again</button>
          <br><br>
          <a href="index.html" style="color:#00ffcc; text-decoration:none;">Go Back to Home</a>
        </div>
      `;
      return;
    }

    // Update Top Question Number 
    let qNum = document.querySelector('.card2 h2 span');
    if (qNum) qNum.textContent = index + 1;

    // Update Question text
    let q = document.querySelector('.que');
    if (q) q.textContent = ques[index].question;
    
    cp = ques[index].correct_options;
    let O = document.querySelectorAll('.opt span:last-child');
    
    O.forEach((optelements, idx) => {
      if (ques[index].optt[idx]) {
        optelements.innerText = ques[index].optt[idx];
      }
    });
  }

  chc.forEach((btn) => {
    btn.addEventListener("click", function () {
      let sp = this.querySelector("span:first-child");
      let userChoice = sp.innerText.trim().replace('.', '').toUpperCase(); 
      let feedbackDisplay = document.querySelector('.lll span:last-child');
      let scoreDisplay = document.querySelector('.lll span:nth-child(2)');

      if (userChoice === cp) {
        userScore++; 
        if (scoreDisplay) scoreDisplay.textContent = userScore; // FIX: Target HTML Score Element update
        if (feedbackDisplay) {
          feedbackDisplay.style.color = 'green';
          feedbackDisplay.textContent = ' Correct!';
        }
      } else {
        if (feedbackDisplay) {
          feedbackDisplay.style.color = 'red';
          feedbackDisplay.textContent = " Wrong! Ans: " + cp;
        }
      }

      this.classList.add("selected");
      chc.forEach((option) => {
        option.style.pointerEvents = "none";
        if (!option.classList.contains("selected")) {
          option.classList.add('unknown');
        }
      });

      setTimeout(() => {
        currentQuestionIndex += 1;
        updation(currentQuestionIndex);
      }, 2000);
    });
  });

  updation(currentQuestionIndex);
}
