let img = document.createElement("img");
img.id = "pacman";

let position = 100;
let velocity = 20;
let direction = 1;

let images = ["PacMan1.png", "PacMan2.png", "PacMan3.png", "PacMan4.png"];
let focus = 0;

function create() {
    img.style.height = "60px";
    img.style.width = "80px";
    img.style.position = "absolute";
    img.style.left = position + "px";
    img.style.top = "100px";
    img.src = "PacMan1.png";
    document.body.appendChild(img);
}

function move() {
    position += velocity * direction;
    focus = (focus + 1) % 2;
    img.src = images[focus];

    if (position + 80 >= window.innerWidth || position <= 0) {
        direction *= -1;
        img.style.transform = direction === -1 ? "scaleX(-1)" : "scaleX(1)";
    }

    img.style.left = position + "px";
    setTimeout(move, 500);
}