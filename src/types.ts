export type Position = {
    x: number;
    y: number;
};

export type RectSize = {
    width: number;
    height: number;
};

export type Direction = {
    h: 'right' | 'left';
    v: 'up' | 'down';
};

export type Bounds = {
    left: number;
    right: number;
    up: number;
    down: number;
};

export type Color = 'red' | 'green' | 'blue' | 'pink' | 'black';

export type CircleShape = {
    name: 'circle';
    radius: number;
};

export type RectShape = {
    name: 'rect';
    size: RectSize;
};

export type Shapes = CircleShape | RectShape;
