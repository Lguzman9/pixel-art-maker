const body = document.body; 
let pixelDiv1 = document.querySelector('.pixelDiv');
let pixel;

let width = "15.6px";
let paddingBottom = "19.6px";
let backgroundColor = 'white'


function pixelMakerPixels() {

  pixel = document.createElement('div');
  pixel.classList.add("pixel")
  pixel.style.position = "flex";
  pixel.style.width = width;
  pixel.style.float = "left"
  pixel.style.height = width;
  pixel.style.backgroundColor = backgroundColor;
  pixel.style.border = ".3px solid grey"
  pixelDiv1.append(pixel);

}

for(let i = 0; i <= 1427; i++) {
  pixelMakerPixels()
}


let allPixels = document.querySelectorAll('.pixel');
let red = "red";
let blue = "blue";
let violet = "violet";
let green = "green";
let black = "black";
let teal = "teal";
let stealBlue = "stealBlue";
let yellow = "yellow";
let saddleBrown = "saddleBrown";
let midnightBlue = "midnightBlue";

function pixelBrush(color) {
  allPixels.forEach(element => { 
  element.addEventListener('click', () => {
    element.style.backgroundColor = color;
  })
});
}

//  function pixelBrush() {
//    pixel.addEventListener('click', () => {
//      pixel.style.backgroundColor = 'red';
//    })
//  }


let allPallete = document.querySelector('.colorPalleteDiv');

allPallete.addEventListener('click', (event) => {
  if(event.target.className === "red") {
    pixelBrush(red);
  } else if(event.target.className === "blue") {
    pixelBrush(blue);
  } else if(event.target.className === "violet") {
    pixelBrush(violet);
  } else if(event.target.className === "green") {
    pixelBrush(green);
  } else if(event.target.className === "black") {
    pixelBrush(black);
  } else if(event.target.className === "teal") {
    pixelBrush(teal);
  } else if(event.target.className === "stealBlue") {
    pixelBrush(stealBlue);
  } else if(event.target.className === "yellow") {
    pixelBrush(yellow);
  } else if(event.target.className === "saddleBrown") {
    pixelBrush(saddleBrown);
  } else if(event.target.className === "midnightBlue") {
    pixelBrush(midnightBlue);
  }
});
















