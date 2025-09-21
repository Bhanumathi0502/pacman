
    // Create Pacman image
    let img = document.createElement("img");
    img.id = "pacman";

    let position = 100;
    let velocity = 20;   // movement speed
    let direction = 1;   // 1 → right, -1 → left

    // Pacman open/close images (4 images: right-open, right-close, left-open, left-close)
    let images = ["PacMan1.png", "PacMan2.png", "PacMan3.png", "PacMan4.png"];
    let focus = 0;

    // Create Pacman on screen
    function create() {
      img.style.height = "60px";
      img.style.width = "80px";
      img.style.position = "absolute";
      img.style.left = position + "px";
      img.style.top = "100px";
      img.src = images[0];
      document.body.appendChild(img);
    }

    // Pacman movement
    function move() {
      // Move position
      position += velocity * direction;

      // Change mouth (open/close)
      focus = (focus + 1) % 2;
      if (direction === 1) {
        img.src = images[focus];      // moving right (PacMan1, PacMan2)
      } else {
        img.src = images[focus + 2];  // moving left (PacMan3, PacMan4)
      }

      // Reverse at edges
      if (position + img.width >= window.innerWidth) {
        direction = -1; // move left
      }
      if (position <= 0) {
        direction = 1; // move right
      }

      // Apply position
      img.style.left = position + "px";

      // Repeat
      setTimeout(move, 300);
    }

    // Start game
    create();
    move();
  
