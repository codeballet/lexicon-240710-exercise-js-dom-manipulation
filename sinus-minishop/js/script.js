// 1. Byt namn på första hoodien från Ash till Potato.
let art1H3Ref = document.querySelector(".art-1>h3");
art1H3Ref.innerText = "Potato";

// 2. Byt namn på Home till Start.
let homeRef = document.querySelector("header>nav>a:first-child");
homeRef.innerText = "Start";

// 3. Byt namn på Contact till Mail Us.
let contactRef = document.querySelector("header>nav>a:nth-child(3)");
contactRef.innerText = "Mail us";

// 4. Byt ut informationen om Sinus Hoodie - Fire.
let art2PRef = document.querySelector(".art-2>p");
art2PRef.innerText = "Be on fire!";

// 5. Byt bakgrundsfärg och text på en knapp.
let art1ButtonRef = document.querySelector(".art-1>button");
art1ButtonRef.style.backgroundColor = "lightgrey";
art1ButtonRef.style.color = "black";

// 6. Byt bakgrundsfärg på någon av produkterna.
let art1FigureRef = document.querySelector(".art-1>figure");
art1FigureRef.style.backgroundColor = "lightgreen";

// 7. Byt ut adressen på sidan.
let footerAddressRef = document.querySelector(".footer--address");
footerAddressRef.innerHTML =
    "Tor's Hammers <br> Torsroad 8 <br> 888 88 Valhalla";

// 10. Lägg till classen active på menyalternativet home.
// Use existing 'homeRef' reference from task 2
homeRef.classList.add("active");

// 11. Ta bort classen logo på logotypen.
let logoRef = document.querySelector("header>img");
logoRef.classList.remove("logo");

// 12. Lägg till ett nytt menyalternativ.
let thirdNavARef = document.querySelector("header>nav>a:nth-child(3)");
let menuItemRef = document.createElement("a");
menuItemRef.innerText = "About us";
menuItemRef.href = "#";
thirdNavARef.after(menuItemRef);

// 13. Lägg till en ny produkt med följande info.

// img	hoodie-forrest.png
// h2	Sinus Hoodie
// h3	Forrest
// p	Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.

// Create elements to insert
let prodArticle = document.createElement("article");
prodArticle.classList.add("art-4");

let prodFigure = document.createElement("figure");

let prodImg = document.createElement("img");
prodImg.src = "./img/hoodie-forrest.png";
prodImg.alt = "hoodie";

let prodH2 = document.createElement("h2");
prodH2.innerText = "Sinus Hoodie";

let prodH3 = document.createElement("h3");
prodH3.innerText = "Forrest";

let prodP = document.createElement("p");
prodP.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.";

let prodButton = document.createElement("button");

// Insert elements in DOM
let previousArticle = document.querySelector(".art-3");
previousArticle.insertAdjacentElement("afterend", prodArticle);
prodArticle.appendChild(prodFigure);
prodFigure.appendChild(prodImg);
prodFigure.after(prodH2);
prodH2.after(prodH3);
prodH3.after(prodP);
prodP.after(prodButton);

// 8. Byt färg på samtliga <p>.
let pRef = document.querySelectorAll("p");
pRef.forEach((p) => (p.style.color = "blue"));

// 9. Ändra text på samtliga knappar till add to cart.
let buttonRef = document.querySelectorAll("main>article>button");
buttonRef.forEach((button) => (button.innerText = "Add to Cart"));

// 14. Lyssna efter ett klick på logotypen (.logo).
// När den registrerar ett klick skall du console.log:a "found you!";
// Use 'logoRef' reference from task 11.
logoRef.addEventListener("click", (e) => {
    console.log("I found you!");
});

// 15. Lyssna efter klick på samtliga produkter ( <article>).
// När den registrerar ett klick skall du
// console.log:a "Hi, Im article Fire / Ash / Water".
let productRefs = document.querySelectorAll("main>article");
productRefs.forEach((product) => {
    // Add article class to each child element
    let childElements = product.children;
    for (i = 0; i < childElements.length; i++) {
        childElements[i].classList.add(product.className);
        // Add article class to grandchildren (img element)
        let grandChildren = childElements[i].children;
        for (c = 0; c < grandChildren.length; c++) {
            grandChildren[c].classList.add(product.className);
        }
    }

    // Log message for clicks on article
    product.addEventListener("click", (e) => {
        // console.log(e);
        switch (e.target.className) {
            case "art-1":
                console.log("Hi, I'm article Ash");
                break;
            case "art-2":
                console.log("Hi, I'm article Fire");
                break;
            case "art-3":
                console.log("Hi, I'm article Water");
                break;
            case "art-4":
                console.log("Hi, I'm article Forrest");
                break;
            default:
                console.log("I don't know which article I am");
                break;
        }
    });
});
