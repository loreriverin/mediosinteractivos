var Hombrecito1;
var Hombrecito2;

var posx = 0;
var posy = 0;
dirX = 1;

var miImagen1;
var miImagen2;

var estado = 0;
var INTRO = 1;
var JUEGO = 2;

function preload() {

  miImagen1 = loadImage("Inicio-05.png ");
  miImagen2 = loadImage("fondojuego-04.png");
  Hombrecito1 = loadImage("hombrecito.png");
  Hombrecito2 = loadImage("hombrecitoizq.png");


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  estado = INTRO;
    posx = 1;
    posy = (height-(height/3.4));
}

function draw() {
  background(220);

  if (estado == INTRO) {
    image(miImagen1, 0, 0, width, height);
  } else if (estado == JUEGO) {
    image(miImagen2, 0, 0, width, height);

    if (posx >= (width - (width / 10)) || posx <= 0) {
      dirX = -1 * dirX;
    }
    posx = posx + (2 * dirX);

    if (dirX == 1) {
      image(Hombrecito1, posx, posy, width / 10, height / 7);
    } else {
      image(Hombrecito2, posx, posy, width / 10, height / 7);
    }

  }





}

function touchStarted() {
  if (estado == INTRO) {
    estado = JUEGO;
  }
  if (estado == JUEGO) {
    dirX = -1 * dirX
    return false;
  }
}