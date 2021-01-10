const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Apple,AppleCut,Banana,BananaCut,Kiwi,KiwiCut,
Pineapple,PineappleCut,Strawberry,StrawberryCut,
Watermelon,WatermelonCut
var fruit
var FruitGroup = []
var rand

function setup(){
    var canvas = createCanvas(1200,1000);
    engine = Engine.create();
    world = engine.world;

        fruit = new Fruit(0)
        fruit.getIMG()
        fruit2 = new Fruit(0)
        fruit2.getIMG()
        fruit3 = new Fruit(0)
        fruit3.getIMG()
        fruit4 = new Fruit(0)
        fruit4.getIMG()
        fruit5 = new Fruit(0)
        fruit5.getIMG()
        fruit6 = new Fruit(0)
        fruit6.getIMG()
        fruit7 = new Fruit(0)
        fruit7.getIMG()

    // for (var i=0; i<=FruitGroup.length; i++){
    //     FruitGroup.push(new Fruit(random(0,1200),random(0,400)))
    // }
    
}

function draw(){
    background("black");
    Engine.update(engine);
    // for (var i=0; i<=FruitGroup.length; i++){
    //     FruitGroup[i].display()
    // }
    fruit.display()
    fruit2.display()
    fruit3.display()
    fruit4.display()
    fruit5.display()
    fruit6.display()
    fruit7.display()
}
