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

findProducts(products);
productName = document.querySelector(".pro");
productName = findProducts();
function findProducts(item) {
    let select = document.createElement("select");
    let name1 = document.createElement("option");
    let id = document.createElement("option");
    let name3 = document.createElement("option");
    let name4 = document.createElement("option");
    let name5 = document.createElement("option");
    id.innerHTML = `${products[1].name}`;
    name1.innerHTML = `${products[0].name}`;
    name3.innerHTML = `${products[2].name}`;
    name4.innerHTML = `${products[3].name}`;
    name5.innerHTML = `${products[4].name}`;
    select.appendChild(name1);
    select.appendChild(id);
    select.appendChild(name3);
    select.appendChild(name4);
    select.appendChild(name5);
    document.querySelector(".pro").appendChild(select);
    // item.forEach(product => {
    //     let select = document.createElement("select");
    //     let name = document.createElement("option");
    //     let id = document.createElement("option");
    //     id.innerHTML = `a ${product.id}`;
    //     name.textContent = product.name;
    //     select.appendChild(name);
    //     select.appendChild(id);
    //     document.querySelector(".pro").appendChild(select);
    // });
}