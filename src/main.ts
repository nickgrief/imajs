import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

const canvas = document.createElement('canvas');
resizeCanvas();
window.addEventListener('resize', resizeCanvas);
app.appendChild(canvas);
const context = canvas.getContext('2d')!;

let gameLoopActive = true;
window.requestAnimationFrame(gameLoop);

class Player {
    x = 32;
    y = 32;
    speed = 8;
    hor: 'right' | 'left' = 'right';
    ver: 'up' | 'down' = 'down';
}

const player = new Player();

function gameLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'red';
    context.fillRect(player.x, player.y, 8, 24);
    player.x += player.speed * (player.hor === 'right' ? 1 : -1);
    player.y += player.speed * (player.ver === 'down' ? 1 : -1);
    if (player.x + 8 >= canvas.width) player.hor = 'left';
    if (player.x <= 0) player.hor = 'right';
    if (player.y + 24 >= canvas.height) player.ver = 'up';
    if (player.y <= 0) player.ver = 'down';
    if (gameLoopActive) window.requestAnimationFrame(gameLoop);
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
