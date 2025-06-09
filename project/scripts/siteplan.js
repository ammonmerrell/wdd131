const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = `<span class="Highlight">${today.getFullYear()} </span>`;
let modified = document.querySelector('#lastmodified');
let text = document.lastModified;
modified.innerHTML = `last modified: <span class="highlight">${text}</span>`;