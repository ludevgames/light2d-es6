
export default class Keyboard {

    constructor(game) {
    
        this.game = game;
        this.keyPressed = [];
        this.keyCapturing = [];

        window.addEventListener('keydown', this.keyDownHandler.bind(this));
        window.addEventListener('keyup', this.keyUpHandler.bind(this));

    }
    
    keyDownHandler(event) {

        if (this.keyCapturing.includes(event.keyCode))
            event.preventDefault();

        this.keyPressed[event.keyCode] = true;

    }

    keyUpHandler(event) {
        this.keyPressed[event.keyCode] = false;
    }

    pressed(keyCode) {
        console.log(`${keyCode} : ${this.keyPressed[keyCode]}`);
        return this.keyPressed[keyCode];
    }

}


Keyboard.A = 'A'.charCodeAt(0);
Keyboard.B = 'B'.charCodeAt(0);
Keyboard.C = 'C'.charCodeAt(0);
Keyboard.D = 'D'.charCodeAt(0);
Keyboard.E = 'E'.charCodeAt(0);
Keyboard.F = 'F'.charCodeAt(0);
Keyboard.G = 'G'.charCodeAt(0);
Keyboard.H = 'H'.charCodeAt(0);
Keyboard.I = 'I'.charCodeAt(0);
Keyboard.J = 'J'.charCodeAt(0);
Keyboard.K = 'K'.charCodeAt(0);
Keyboard.L = 'L'.charCodeAt(0);
Keyboard.M = 'M'.charCodeAt(0);
Keyboard.N = 'N'.charCodeAt(0);
Keyboard.O = 'O'.charCodeAt(0);
Keyboard.P = 'P'.charCodeAt(0);
Keyboard.Q = 'Q'.charCodeAt(0);
Keyboard.R = 'R'.charCodeAt(0);
Keyboard.S = 'S'.charCodeAt(0);
Keyboard.T = 'T'.charCodeAt(0);
Keyboard.U = 'U'.charCodeAt(0);
Keyboard.V = 'V'.charCodeAt(0);
Keyboard.W = 'W'.charCodeAt(0);
Keyboard.X = 'X'.charCodeAt(0);
Keyboard.Y = 'Y'.charCodeAt(0);
Keyboard.Z = 'Z'.charCodeAt(0);
Keyboard.BACKSPACE = 8;
Keyboard.TAP = 9;
Keyboard.ENTER = 13;
Keyboard.COMMAND = 15;
Keyboard.SHIFT = 16;
Keyboard.CONTROL = 17;
Keyboard.ALTERNATE = 18;
Keyboard.CAPS_LOCK = 20;
Keyboard.ESCAPE = 27;
Keyboard.SPACE = 32;
Keyboard.PAGE_UP = 33;
Keyboard.PAGE_DOWN = 34;
Keyboard.END = 35;
Keyboard.HOME = 36;
Keyboard.LEFT = 37;
Keyboard.UP = 38;
Keyboard.RIGHT = 39;
Keyboard.DOWN = 40;
Keyboard.INSERT = 45;
Keyboard.DELETE = 46;
Keyboard.NUMBER_1 = 49;
Keyboard.NUMBER_2 = 50;
Keyboard.NUMBER_3 = 51;
Keyboard.NUMBER_4 = 52;
Keyboard.NUMBER_5 = 53;
Keyboard.NUMBER_6 = 54;
Keyboard.NUMBER_7 = 55;
Keyboard.NUMBER_8 = 56;
Keyboard.NUMBER_9 = 57;
Keyboard.NUMPAD_0 = 96;
Keyboard.NUMPAD_1 = 97;
Keyboard.NUMPAD_2 = 98;
Keyboard.NUMPAD_3 = 99;
Keyboard.NUMPAD_4 = 100;
Keyboard.NUMPAD_5 = 101;
Keyboard.NUMPAD_6 = 102;
Keyboard.NUMPAD_7 = 103;
Keyboard.NUMPAD_8 = 104;
Keyboard.NUMPAD_9 = 105;
Keyboard.NUMPAD_MULTIPLY = 106;
Keyboard.NUMPAD_ADD = 107;
Keyboard.NUMPAD_ENTER = 108;
Keyboard.NUMPAD_SUBTRACT = 109;
Keyboard.NUMPAD_DEMICAL = 110;
Keyboard.NUMPAD_DIVIDE = 111;
Keyboard.F1 = 112;
Keyboard.F2 = 113;
Keyboard.F3 = 114;
Keyboard.F4 = 115;
Keyboard.F5 = 116;
Keyboard.F6 = 117;
Keyboard.F7 = 118;
Keyboard.F8 = 119;
Keyboard.F9 = 120;
Keyboard.F10 = 121;
Keyboard.F11 = 122;
Keyboard.F12 = 123;
Keyboard.F13 = 124;
Keyboard.F14 = 125;
Keyboard.F15 = 126;
Keyboard.SEMICOLON = 186;
Keyboard.EQUAL = 187;
Keyboard.COMMA = 188;
Keyboard.MINUS = 189;
Keyboard.PERIOD = 190;
Keyboard.SLASH = 191;
Keyboard.BACKQUOTE = 192;
Keyboard.LEFTBRACKET = 219;
Keyboard.BACKSLASH = 220;
Keyboard.RIGHTBRACKET = 221;
Keyboard.QUOTE = 222;