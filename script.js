//alert('Hello Kicsi Én!');

//console.log('Hello World!');

/*
var youLikeMeat = true;
var myNum = 10;

if (youLikeMeat){

    document.write("you like meat");


}else{
    document.write("you hate meat");

}*/

//////következő gyakorla

/*
var myAge = 49;

if (myAge > 30){
    document.write("you are over 30!");
}else if (myAge >20){
    document.write("you are over 20!");
}else if (myAge >30){
    document.write("you are over 30!");
}else if (myAge >10){
    document.write("you are over 10!");
}else {
    document.write("you are not over 10!");
}*/

//////következő gyakorlat

/*var myAge = 28;

if (myAge >= 18 && myAge <=30){
    document.write("You can come, you cool dude");
} else{
    document.write("you aint coming!");
}*/


/*var myAge = 26;

if (myAge < 18 || myAge >30 || myAge ===25){
    document.write("you aint coming!");
} else{
    
    document.write("You can come, you cool dude :)");
}*/

//loops

/*var age = 5

while (age < 10) {

    console.log("Yor age is less than 10");
    age++;
}

document.write("you are now over 10");



for (age = "0"; age < 10; age++) {

    console.log("Yor age is less than 10");
    age++;
}

document.write("you are now over 10");*/

/////////////////////////////////////////////////////////////////////////////////

//alert('Hello Kicsi Én!');

/*document.write("My name is PÉTER!");


function kiir() {
  document.write("A függvény")
};


$('body').append(
  '<h1>Ezt írd ki!</h1>'
);

$( ".inner" ).append( "<p>Test</p>" );

function kiir () {
  document.getElementById("demo1").innerHTML = "nem csak a html -be beágyazva működik";
};*/

/////////////////////////////////////////////
/*
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i = i + 2) {
  console.log(i);
}

let printNumbers = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

let greet = (name) => {
  return "Hello, " + name;
}

let printValues = (array) => {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

let printValues2 = (array) => {
  array.forEach(value => {
    console.log(value);
  });
}*/
///////////////////////////////////////////

$("button").on('click', (event) => {
  console.log("Yeah, you clicked me");
});

$("#second").click(() => {
  $("#first").text("Second one was clicked.");
});

$("#prettify").click(() => {
  $("button").css("background", "purple");
  $("button").css("color", "white");
  $("button").css("font-size", "20px");
  $("button").css("border", "0");
  $("button").css("border-radius", "5px");
});

