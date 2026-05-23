# 🎮 Quiz.Game

An interactive, responsive, and dynamic web-based Quiz Application built using vanilla **HTML5, CSS3, and JavaScript**. The game features random question generation, a real-time scoring system, a custom finish screen, and a dark mode toggle.

---

## ✨ Features

- **🎯 Random Questions Selector**: The game dynamically shuffles a pool of 50+ curated gaming, movie, and history questions and picks exactly **10 random unique questions** per session.
- **📊 Real-time Score System**: Instantly tracks your score and displays updates below the question card after every answer.
- **🌓 Dark/Light Mode Theme**: LocalStorage integration retains user-preferred lighting configuration (`bulb` toggle) even after page reloads.
- **📱 Responsive Layout**: Optimized navigation burger menu (`hmbrg`) for flawless scaling on desktop, tablet, and mobile Viewports.
- **🏁 Custom Ending Screen**: Displays your total score with a direct option to instantly "Play Again" or navigate back to the home view.

---

## 🛠️ Built With

- **HTML5**: Semantic tags structure.
- **CSS3**: Layout stylings, responsive queries, and customized button states (`selected`, `unknown`).
- **JavaScript (ES6+)**: Custom dynamic array mapping, Fisher-Yates array randomizer, and event listeners.

---

## 📂 Project Structure

```text
├── index.html          # Main landing dashboard
├── quiz.html           # Active gameplay view
├── style.css           # Global stylesheet and Dark theme utilities
└── quiz.js             # Core game engine logic
```

---

## 🚀 How to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com
   ```
2. **Navigate into project directory**:
   ```bash
   cd YOUR-REPOSITORY-NAME
   ```
3. **Launch the Game**:
   - Open `index.html` directly in any standard standard browser or run via VS Code **Live Server**.

---

## 🎲 Game Rules
- Every round generates exactly **10 unique questions**.
- Clicking an option locks down your choice and restricts multiple inputs.
- Correct answers award points on the scoreboard immediately.
- The system will pause for **2 seconds** after selection before rendering the subsequent question.

---

