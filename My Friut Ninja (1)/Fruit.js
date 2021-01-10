class Fruit {
    constructor(y) {
        var options = {
            restitution: 0.8
        }
        this.Apple = loadImage("Fruit Ninja/Apple1.png")
        this.AppleCut = loadImage("Fruit Ninja/Apple2.png")
        this.Banana = loadImage("Fruit Ninja/Banana1.png")
        this.BananaCut = loadImage("Fruit Ninja/Banana2.png")
        this.Kiwi = loadImage("Fruit Ninja/Kiwi1.png")
        this.KiwiCut = loadImage("Fruit Ninja/Kiwi2.png")
        this.Pineapple = loadImage("Fruit Ninja/Pineapple1.png")
        this.PineappleCut = loadImage("Fruit Ninja/Pineapple2.png")
        this.Strawberry = loadImage("Fruit Ninja/Starwberry1.png")
        this.StrawberryCut = loadImage("Fruit Ninja/Strawberry2.png")
        this.Watermelon = loadImage("Fruit Ninja/Watermelon1.png")
        this.WatermelonCut = loadImage("Fruit Ninja/Watermelon2.png")
        this.r = 5
        this.body = Bodies.circle(random(0,1200), y, this.r, options)
        World.add(world,this.body)
    }
    display() {
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        console.log("DISPLAY")
        pop()
    }

    getIMG(){
        var rand = Math.round(random(1, 6))
        console.log("IMG")
        switch (rand) {
            case 1: image(this.Apple, 0, 0, 100, 100);
            break;
            case 2: image(this.Banana, 0, 0, 100, 100);
            break;
            case 3: image(this.Kiwi, 0, 0, 100, 100);
            break;
            case 4: image(this.Pineapple, 0, 0, 100, 100);
            break;
            case 5: image(this.Strawberry, 0, 0, 100, 100);
            break;
            case 6: image(this.Watermelon, 0, 0, 100, 100)
            break;
            default:
                break;
        }
    }
}