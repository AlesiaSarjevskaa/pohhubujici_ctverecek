class Pleyer {
  constructor(x, y, w, h, c, v) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.v = v;
  }
  draw(ctx) {
    ctx.fillStyle = myPlayer.c;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  update(key) {
    if (keys["w"]) this.y -= this.v;
    if (keys["s"]) this.y += this.v;
    if (keys["a"]) this.x -= this.v;
    if (keys["d"]) this.x += this.v;
    if (keys[" "]) {
      this.w -= this.v;
      this.h -= this.v;
    }
    if (keys["k"]) {
      this.v += maxV;
    } else {
      this.v = this.basicV;
    }
  }
}

const myPlayer = new Pleyer(10, 10, 50, 50, "pink", 5);

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

let keys = {};

window.addEventListener("keydown", (e) => (keys[e.key] = true));
window.addEventListener("keyup", (e) => (keys[e.key] = false));

const gameLoop = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  myPlayer.update(keys);
  myPlayer.draw(ctx);
  requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);
