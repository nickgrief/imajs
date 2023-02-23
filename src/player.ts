import { Bounds, Color, Direction, Position, RectSize, Shapes } from './types';

export class Player {
    context: CanvasRenderingContext2D;
    shape: Shapes;
    position: Position;
    direction: Direction;
    speed: number;
    color: Color;

    constructor(
        context: CanvasRenderingContext2D,
        shape: Shapes,
        position: Position,
        speed: number,
        direction: Direction,
        color: Color
    ) {
        this.context = context;
        this.shape = shape;
        this.position = position;
        this.direction = direction;
        this.speed = speed;
        this.color = color;
    }

    teleport(to: Position) {
        this.position = to;
    }

    draw() {
        this.context.fillStyle = this.color;
        if (this.shape.name === 'circle') {
            this.context.beginPath();
            this.context.arc(
                this.position.x,
                this.position.y,
                this.shape.radius,
                0,
                2 * Math.PI,
                false
            );
            this.context.fill();
        }
        if (this.shape.name === 'rect') {
            this.context.fillRect(
                this.position.x,
                this.position.y,
                this.shape.size.width,
                this.shape.size.height
            );
        }
    }

    dvd_movement(bounds: Bounds) {
        this.position.x += this.speed * (this.direction.h === 'right' ? 1 : -1);
        this.position.y += this.speed * (this.direction.v === 'down' ? 1 : -1);
        if (this.shape.name === 'rect') {
            if (this.position.x + this.shape.size.width >= bounds.right)
                this.direction.h = 'left';
            if (this.position.x <= bounds.left) this.direction.h = 'right';
            if (this.position.y + this.shape.size.height >= bounds.down)
                this.direction.v = 'up';
            if (this.position.y <= bounds.up) this.direction.v = 'down';
        }
        if (this.shape.name === 'circle') {
            if (this.position.x + this.shape.radius >= bounds.right)
                this.direction.h = 'left';
            if (this.position.x - this.shape.radius <= bounds.left)
                this.direction.h = 'right';
            if (this.position.y + this.shape.radius >= bounds.down)
                this.direction.v = 'up';
            if (this.position.y - this.shape.radius <= bounds.up)
                this.direction.v = 'down';
        }
    }
}
