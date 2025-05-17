const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = ` <span class="highlight">${today.getFullYear()} </span>`;
let modified = document.querySelector("#lastmodified");
let text = document.lastModified;
modified.innerHTML = ` last Modified: <span class="highlight">${text}</span>`;


const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});