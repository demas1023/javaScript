/*let labels = document.getElementsByTagName("label");

for (let i = 0; i < labels.length; i++) {
    labels[i].innerText = labels[i].innerText.toUpperCase();
}*/

let imgs = new Array();

imgs[0] = "img/ad0c4629509860c4e249fe2b898087de.jpg";
imgs[1] = "img/IMG_5496.webp";
imgs[2] = "img/please-dont-be-horny-or-depressed-v0-vevgenm830ad1.webp";
imgs[3] = "img/RDT_20240225_0008077549820765015947834.webp"
imgs[4] = "img/spoon.webp"

document.getElementById("img").src = imgs[Math.trunc(Math.random()*4)];