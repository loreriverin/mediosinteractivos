var hombrecitoder1;
var hombrecitoizq1;
var instrucimagen;

var posx = 0;
var posy = 0;
dirX = 1;

var miImagen1;
var miImagen2;

var estado = 0;
var INTRO = 1;
var INSTRUCCIONES=2;
var JUEGO = 3;

var cambiohombrecito = false;


function preload() {

  miImagen1 = loadImage("Inicio-05.png ");
  miImagen2 = loadImage("fondojuego-04.png");
  instrucimagen = loadImage("instrucciones.png");
  hombrecitoder1 = loadImage("hombrecitoder1.png");
  hombrecitoizq1 = loadImage("hombrecitoizq1.png");


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  estado = INTRO;
  posx = 1;
  posy = (height - (height / 4.3));

  if (width > height) {
    tamy = map(30, 0, 400, 0, height);
    tamx = tamy * (262 / 172);
  } else {
    tamx = map(20, 0, 400, 0, width);
    tamy = tamx * (262 / 172);
  }
}

function draw() {

  if (estado == INTRO) {
    image(miImagen1, 0, 0, width, height);
    
  }  else if (estado == JUEGO)
  {
     image(instrucimagen, 0, 0, width, height);
    
  } else if (estado == JUEGO) {
    
    image(miImagen2, 0, 0, width, height);

    if (posx >= (width - tamx) || posx <= 0) {
      dirX = -1 * dirX;
    }
    posx = posx + (4 * dirX);

    if (dirX == 1) {
      image(hombrecitoder1, posx, posy, tamx, tamy);
    } else {
      image(hombrecitoizq1, posx, posy, tamx, tamy);
    }

  }


}

function touchStarted() {
  if (estado == INTRO) {
    estado = INSTRUCCIONES;
  } else if (estado == INSTRUCCIONES) {
    estado = JUEGO;
  }
  else if (estado == JUEGO) {
    dirX = -1 * dirX
    return false;
  }
}
