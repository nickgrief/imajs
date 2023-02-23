import { getMousePos } from './input';
import { Position, RectSize } from './types';

export class Canvas {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    size: RectSize;

    mousePosition: Position;

    constructor(parent: HTMLElement) {
        this.size = this.getWindowSize();
        [this.canvas, this.context] = this.createCanvas(parent);
        this.attachInputEvents();
        this.mousePosition = { x: 0, y: 0 };
    }

    attachInputEvents() {
        this.canvas.addEventListener(
            'mousemove',
            (event) => (this.mousePosition = getMousePos(this.canvas, event))
        );
    }

    createCanvas(parent: HTMLElement) {
        const canvas = document.createElement('canvas');
        this.resizeCanvas(canvas);
        window.addEventListener('resize', () => this.resizeCanvas(canvas));
        parent.appendChild(canvas);
        const context = canvas.getContext('2d')!;

        return [canvas, context] as const;
    }

    resizeCanvas(canvas: HTMLCanvasElement) {
        this.size = this.getWindowSize();
        canvas.width = this.size.width;
        canvas.height = this.size.height;
    }

    private getWindowSize(): RectSize {
        return { width: window.innerWidth, height: window.innerHeight };
    }
}
