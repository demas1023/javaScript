function grow(id){
    let image = document.getElementById(id);

    image.style.width = "500px";
    image.style.height = "500px";
}

function shrink(id){
    let image = document.getElementById(id);

    image.style.width = "100px";
    image.style.height = "100px";
}

function imgShow(id){
    let element = document.getElementById("imgShow");
    let image = document.getElementById(id).src;

    element.innerHTML = `<img style="width: 500px; height: 500px;" src="${image}">`;
}