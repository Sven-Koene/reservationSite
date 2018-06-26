class Game {
    private square: Square
    private square2 : Square

    constructor(){
        //Nieuw object van type square (balletje aanmaken.)
        this.square = new Square(10);
        this.square2 = new Square (20);
        //Gameloop aanroepen.
        this.gameLoop()
    }
    private gameLoop(){
        //update ball
        this.square.update()
        this.square2.update()
        //Aantal frames per seconde word met deze functie uitgevoerd
        requestAnimationFrame(()=> this.gameLoop())
    }
}

window.addEventListener("load", () => new Game())
