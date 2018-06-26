"use strict";
var Game = (function () {
    function Game() {
        this.square = new Square(10);
        this.square2 = new Square(20);
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.square.update();
        this.square2.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Square = (function () {
    function Square(speed) {
        var _this = this;
        this.enable = true;
        this.orientate = 1;
        this.x = 10;
        this.y = 10;
        this.speed = speed;
        this.element = document.createElement("square");
        document.body.appendChild(this.element);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
    }
    Square.prototype.update = function () {
        if (this.x > window.innerWidth - this.element.offsetWidth) {
            this.orientate = -1;
            console.log('turn');
            console.log(window.innerWidth);
            console.log(window.innerHeight);
        }
        else if (this.x < 0) {
            this.orientate = 1;
        }
        if (this.enable) {
            var nextPosition = this.x + (this.speed * this.orientate);
            this.x = nextPosition;
            this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px";
        }
    };
    Square.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case 32:
                if (this.enable) {
                    this.enable = false;
                }
                else {
                    this.enable = true;
                }
                break;
        }
    };
    return Square;
}());
//# sourceMappingURL=main.js.map