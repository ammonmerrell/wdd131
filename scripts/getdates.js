const year = document.querySelector("#year")

const today = new Date();

year.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;