function loadBigFoot() {
    document.getElementById("bigfoot").src = "images/bigfoot.png";
}

function moveBigFoot() {
    alert("You WIN!!....You found BigFoot.");
    //get image
    let getPicture = document.getElementById("bigfoot");

    // needs two numbers to generate for left & top
    let x = Math.random() * 300;
    let y = Math.random() * 300;

    //apply to picture & use top & left properties
    getPicture.style.top = x + "px";
    getPicture.style.left = y + "px";
}