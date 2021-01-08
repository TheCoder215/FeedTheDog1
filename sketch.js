var dog, dogIMG, fedDog, fedDogIMG, database, foodS, foodRemaining, foodCount

function preload(){

  dogIMG = loadImage("images/di1.png");
  fedDogIMG = loadImage("images/di2.png");

}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
 var foodData = database.ref("food");
  //var ballPos = database.ref("ball/position");
  foodData.on("value", readFed, showError)
  console.log(database);
  dog = createSprite(250,350,100,10);
  dog.addImage(dogIMG);
  //dog.scale
  
}

function readFed(data){ 
  foodS = data.val();
  console.log(foodS);
  foodRemaining = foodS;
}

function showError(){
  console.log("We're sorry, but the system encountered an error.")
}

function draw() {  
  background(46,139,87);
  fill(255);
  if(foodRemaining!==undefined){
  text("Feed Duke By Pressing The Up Arrow!", 145, 50);
  text("Food remaining: " + foodRemaining, 180, 200);

  if(keyWentDown(UP_ARROW) && foodRemaining>0){
    writeCount(foodRemaining=foodRemaining-1);
    dog.addImage(fedDogIMG);
  }
  drawSprites();
}
  //add styles here

}

function writeCount(change){
  //foodCount = database.ref("trial");
 
  database.ref("/").update({
    food:change
  })

//foodRemaining = database.ref("food");
  }




