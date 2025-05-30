const year=document.querySelector("#currentyear");
const today=new Date();

year.innerHTML=` <span class="highlight">${
    today.getFullYear()
}

</span>`;
let modified=document.querySelector("#lastmodified");
let text=document.lastModified;

modified.innerHTML=` last Modified: <span class="highlight">${
    text
}

</span>`;


const hamButton=document.querySelector("#menu");
const navigation=document.querySelector(".navigation");

hamButton.addEventListener("click", ()=> {
        navigation.classList.toggle("open");
        hamButton.classList.toggle("open");
});
    
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "St. George Utah",
        location: "St. George, Utah",
        dedicated: "6–8 April 1877",
        area: 143969,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-58899-thumb.jpg"
    },
    {
        templeName: "Newport Beach California",
        location: "Newport Beach, California",
        dedicated: "28 August 2005",
        area: 17800,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/newport-beach-california-temple/newport-beach-california-temple-46818.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, RM Italy",
        dedicated: "10–12 March 2019",
        area: 41010,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3548.jpg"
    },

];

createTempleCard(temples);

const oldbutton = document.querySelector("#old");
oldbutton.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => !temple.dedicated.includes("2000")));
});
const newbutton = document.querySelector("#new");
const largebutton = document.querySelector("#large");
const smallbutton = document.querySelector("#small");

function createTempleCard(filteredtemples) {
    document.querySelector(".cards").innerHTML = "";
    filteredtemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("p");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");
        
        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        document.querySelector(".cards").appendChild(card);        
    });
}
  