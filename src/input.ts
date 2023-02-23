import { Position } from './types';

export function getMousePos(
    canvas: HTMLCanvasElement,
    evt: MouseEvent
): Position {
    let rect = canvas.getBoundingClientRect();
    return {
        x:
            ((evt.clientX - rect.left) / (rect.right - rect.left)) *
            canvas.width,
        y:
            ((evt.clientY - rect.top) / (rect.bottom - rect.top)) *
            canvas.height,
    };
}
