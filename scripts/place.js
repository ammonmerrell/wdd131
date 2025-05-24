const year = document.querySelector("#currentyear");


const today = new Date();


year.innerHTML = ` <span class="highlight">${today.getFullYear()} </span>`;

let modified = document.querySelector("#lastmodified");
let text = document.lastModified;
modified.innerHTML = ` last Modified: <span class="highlight">${text}</span>`;



let speed = 7;
let temp = 45;

let wc = {
    calculateWindChill(speed, temp) {
        return (35.74 + 0.6215 * temp) - 35.75 * (speed ** 0.16) + 0.4275 * temp *(speed ** 0.16)
    }
}


let wch = document.querySelector("#windchill"); 
wch.innerHTML = ` <span class="highlight">${wc.calculateWindChill(speed, temp)} </span>`;
