const year = document.querySelector("#currentyear");


const today = new Date();


year.innerHTML = ` <span class="highlight">${today.getFullYear()} </span>`;

let modified = document.querySelector("#lastmodified");
let text = document.lastModified;
modified.innerHTML = ` last Modified: <span class="highlight">${text}</span>`;

