let pDiv = document.getElementById("p-div");

let buttonP = document.getElementById("p-button");

const imgDiv = document.getElementById("img-div");

let imgB = document.getElementById("img-button");

buttonP.addEventListener("click", () => {
    let paragraph = document.createElement("p");
    paragraph.innerText = "Mafufu";
    paragraph.style.backgroundColor = "black";
    paragraph.style.color = "white";
    imgDiv.style.display = "none";
    pDiv.style.display = "block";
    pDiv.style.visibility = "visible";
    pDiv.appendChild(paragraph);
});

imgB.addEventListener("click", () => {
    let image = document.createElement("img");
    image.src = "images/cloudBair.png";
    image.width = 300;
    pDiv.style.display = "none";
    imgDiv.style.display = "block";
    imgDiv.style.visibility = "visible";
    imgDiv.appendChild(image);
    console.log(image);
});