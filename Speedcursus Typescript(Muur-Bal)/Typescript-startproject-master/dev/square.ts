

class Square {
    //create element van in de constructor gaat hierin.
    private element : HTMLElement

    //Square heeft positie nodig.
    private x : number
    private y : number
    private orientate : number
    private speed : number

    //Bepalen wanneer balletje heen en weer gaat.
    private enable : boolean

    constructor(speed : number){
        //Standaard aan.
        this.enable = true

        //Standaard positief, eerst naar rechts.
        this.orientate = 1
        
        this.x = 10
        this.y = 10
        this.speed = speed

        //Maakt Vierkant/bal in beeld
        this.element = document.createElement("square")
        document.body.appendChild(this.element);

        //eventListener when key is pressed
        window.addEventListener("keydown", (e: KeyboardEvent)=> this.onKeyDown(e))
    }

    update(){
        //Zien hoe vaak iets gerund word.
        //console.log("Aantal x gerund")

        //check if borders reached
        if (this.x > window.innerWidth - this.element.offsetWidth){
            this.orientate = -1
            console.log('turn')
            console.log(window.innerWidth)
            console.log(window.innerHeight)

            //width 1536
            //Height 686

            //width 1800
            //height 900
        }

        else if (this.x < 0){
            this.orientate = 1
        }

        if (this.enable){
            let nextPosition = this.x + (this.speed * this.orientate)
            this.x = nextPosition
            this.element.style.transform = `translate(${this.x}px, ${this.y}px`
        }

    }

    private onKeyDown(e: KeyboardEvent): void {
        //stop bal
        //key codes can be found at https://help.adobe.com/en_US/AS2LCR/Flash_10.0/help.html?content=00000520.html

        switch (e.keyCode){
            case 32:
                if (this.enable){
                    this.enable = false;
                }
                else{
                    this.enable = true;
                }
                break
        }
    }
}
