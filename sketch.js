var dog,sadDog,happyDog , position;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock
function readFoodStock(x , y){
  foodStock = data.val();
  console.log(position.x);
  dog.x = position.x;
  dog.y = position.y;
}


//function to update food stock and last fed time
function writeFoodStock(x , y){
  database.ref('dog/position').set({
    'x' : position.x + x,
    'y' : position.y + y,
  })
}


//function to add food in stock
function addFoodStock(){
  console.log("Error in writing to the database");
}
