const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()} </span>`;
let modified = document.querySelector("#lastmodified");
let text = document.lastModified;
modified.innerHTML = `lastmodified: <span class="highlight">${text}</span>`;


const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// findProducts(products);
// productName = document.querySelector(".pro");
// productName = findProducts();
// function findProducts(item) {
//     item.forEach(product => {
//         let select = document.createElement("select");
//         let name = document.createElement("option");
//         let id = document.createElement("option");
//         id.innerHTML = `a ${product.id}`;
//         name.textContent = product.name;
//         select.appendChild(name);
//         select.appendChild(id);
//         document.querySelector(".pro").appendChild(select);
//     });
// }