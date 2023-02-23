import { Bounds, Color, Direction, Position, RectSize } from './types';

export class Player {
    position: Position;
    size: RectSize;
    direction: Direction;
    speed: number;
    color: Color;
    context: CanvasRenderingContext2D;

    constructor(
        context: CanvasRenderingContext2D,
        position: Position,
        size: RectSize,
        speed: number,
        direction: Direction,
        color: Color
    ) {
        this.context = context;
        this.position = position;
        this.size = size;
        this.direction = direction;
        this.speed = speed;
        this.color = color;
    }

    teleport(to: Position) {
        this.position = to;
    }

    draw() {
        this.context.fillStyle = this.color;
        this.context.fillRect(
            this.position.x,
            this.position.y,
            this.size.width,
            this.size.height
        );
    }

    dvd_movement(bounds: Bounds) {
        this.position.x += this.speed * (this.direction.h === 'right' ? 1 : -1);
        this.position.y += this.speed * (this.direction.v === 'down' ? 1 : -1);
        if (this.position.x + this.size.width >= bounds.right)
            this.direction.h = 'left';
        if (this.position.x <= bounds.left) this.direction.h = 'right';
        if (this.position.y + this.size.height >= bounds.down)
            this.direction.v = 'up';
        if (this.position.y <= bounds.up) this.direction.v = 'down';
    }
}
