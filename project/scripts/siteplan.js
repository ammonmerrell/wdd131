const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = `<span class="Highlight">${today.getFullYear()} </span>`;
let modified = document.querySelector('#lastmodified');
let text = document.lastModified;
modified.innerHTML = `last modified: <span class="highlight">${text}</span>`;

const visitDisplay = document.querySelector(".visited");
let visits = Number(window.localStorage.getItem("visits-ls"));
if (visits == 0) {
    visitDisplay.textContent = ` Welcome, this is your first visit!`;
    visits++;
} else {
    visitDisplay.textContent = ` This has been visited ${visits} times.`;
    visits++;
}

localStorage.setItem("visits-ls", visits);