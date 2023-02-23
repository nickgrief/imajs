import { Canvas } from './canvas';
import { Player } from './player';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

const canvas = new Canvas(app);

let gameLoopActive = true;
window.requestAnimationFrame(gameLoop);

const player = new Player(
    canvas.context,
    // { name: 'rect', size: { width: 12, height: 32 } },
    { name: 'circle', radius: 64 },
    { x: 20, y: 20 },
    32,
    {
        v: 'down',
        h: 'right',
    },
    'black'
);

function gameLoop() {
    canvas.context.clearRect(0, 0, canvas.size.width, canvas.size.height);
    // player.teleport(canvas.mousePosition);

    player.dvd_movement({
        left: 0,
        right: canvas.size.width,
        up: 0,
        down: canvas.size.height,
    });

    player.draw();
    if (gameLoopActive) window.requestAnimationFrame(gameLoop);
}
