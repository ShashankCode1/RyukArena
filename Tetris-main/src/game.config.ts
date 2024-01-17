export const GAME_CONFIG : any = {

    // PHYSICS
    UPDATE_AFTER_X_FRAMES: 40,

    // SIZING
    GAME_WIDTH: 15,
    GAME_HEIGHT: 20,
    CANVAS_MIN_WIDTH: 300,
    CANVAS_MIN_HEIGHT: 400,
    CELL_SIZE: 20,
    NEXT_SHAPE_CELL_SIZE: 5,
    STROKE_WIDTH: 0.5,

    // COLORS
    BACKGROUND_COLOR: '#28363B',
    STROKE_COLOR: 'black',
    SHAPE_COLORS: ["#F9B38F", "#BF6C86", "#84AF9C", "#6D5C80", "#FFA3D0", "#439F9E", "#EF5F3C"],
    
    // TEXTS
    SCORE_LABEL_FONT: '10px Comic Sans MS',
    NEXT_SHAPE_LABEL_FONT: '10px Comic Sans MS',
    GAME_OVER_LABEL_FONT: '25px Comic Sans MS',
    GAME_OVER_YOUR_SCORE_LABEL_FONT: '15px Comic Sans MS',
    FONT_COLOR: 'white',
    SCORE_LABEL: 'Score: ',
    NEXT_SHAPE_LABEL: 'Next Shape: ',
    GAME_OVER_LABEL: 'Game Over!',
    GAME_OVER_YOUR_SCORE_LABEL: 'Your Score: ',

    // POSITIONS
    NEXT_SHAPE_POSITION: {X: 283, Y: 6},
    SCORE_LABEL_POSITION: {X: 5, Y: 13, ALIGNMENT: 'left'},
    NEXT_SHAPE_LABEL_POSITION: {X: 215, Y: 13, ALIGNMENT: 'left'},
    GAME_OVER_LABEL_POSITION: {X: 150, Y: 200, ALIGNMENT: 'center'},
    GAME_OVER_YOUR_SCORE_LABEL_POSITION: {X: 150, Y: 235, ALIGNMENT: 'center'},

    // KEYS
    START_KEY: 32,
    LEFT_KEY: 37,
    RIGHT_KEY: 39,
    UP_KEY: 38,
    DOWN_KEY: 40,
    DROP: 13,

    // RULES
    FILLED_LINE_BONUS: 100,
    DROPPED_SHAPE_BONUS: 2,
    LOWERED_SHAPE_BONUS: 1,
};