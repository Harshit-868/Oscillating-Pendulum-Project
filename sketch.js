// Create different constants for Engine, World, Bodies, and Constraint.
const {Engine, World, Bodies, Constraint} = Matter;

// Create all the global variables.
var engine, world;
var ball1, platform1;
var chain1;

function setup() {
    // Create the canvas, and define 'engine' and 'world'
    var canvas = createCanvas(600, 400);
    engine = Engine.create();
    world = engine.world;

    ball1 = new Ball(300, 200, 20);
    platform1 = new Platform(300, 100, 350, 20);
    chain1 = new Chain(platform1.body, ball1.body);
}

function draw() {
    // Set the background and update the Engine.
    background(0, 20, 50);
    Engine.update(engine);

    // Display all the elements.
    chain1.display();
    ball1.display();
    platform1.display();

}

function mouseDragged() {
    ball1.body.position.x = mouseX;
    ball1.body.position.y = mouseY;
}