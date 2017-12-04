
//objetos que caen
var fuegos = [];
var numFuegos = 3;
var fueguitoimag;

var rayos = [];
var numRayos = 3;
var rayitoimag;

var donas = [];
var numDonas = 3;
var donitaimag;

var monedas = [];
var numMonedas = 5;
var moneditaimag;

var cosascayendo = [];
var numCosas = 7;

var elAguacate;

var laVida;

var velocidadconstante;

//el hombrecito y el juego en si
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
  rayitoimag = loadImage("rayito.png");
  donitaimag = loadImage("donita.png");
  fueguitoimag = loadImage("fueguito.png");
  moneditaimag = loadImage("monedita.png");


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
  
  
  
    if (width > height) {
    tamyrayito = map(40, 0, 500, 0, height);
    tamxrayito = tamyrayito * (185/269);

    tamydonita = map(30, 0, 400, 0, height);
    tamxdonita = tamydonita * (316/269);
      
    tamyfueguito = map(35, 0, 400, 0, height);
    tamxfueguito = tamyfueguito * (234/269);
      
    tamymonedita = map(35, 0, 400, 0, height);
    tamxmonedita = tamymonedita * (260/267);
      
  } else {
    tamxrayito = map(25, 0, 400, 0, width);
    tamyrayito = tamxrayito * (185/269);

    tamxdonita = map(40, 0, 400, 0, width);
    tamydonita = tamxdonita * (185/269);
    
    tamxfueguito = map(35, 0, 400, 0, width);
    tamyfueguito = tamxfueguito * (234/269);
    
    tamxmonedita = map(35, 0, 400, 0, width);
    tamymonedita = tamxmonedita * (260/267);
  }
  


  for (var i = 0; i < numCosas; i++) {
    var quecosa = floor(random(0, 7));
    if (quecosa == 0 || quecosa == 1 || quecosa == 2) {
      cosascayendo[i] = new fueguito();
    } else if (quecosa == 3) {
      cosascayendo[i] = new rayito();
    } else if (quecosa == 4) {
      cosascayendo[i] = new donita();
    } else if (quecosa == 5 || quecosa == 6 || quecosa == 7) {
      cosascayendo[i] = new monedita();
    }
  }



  elAguacate = new aguacatico();

  laVida = new vida();
  
}

function draw() {

  if (estado == INTRO) {
    image(miImagen1, 0, 0, width, height);
    
  }  else if (estado == INSTRUCCIONES)
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
    
    velocidadconstante=4;

  for (var i = 0; i < numCosas; i++) {
    cosascayendo[i].dibujarse();
    cosascayendo[i].moverse();

    if (cosascayendo[i].y > posy+10) {
    var quecosa = floor(random(0, 7));
    if (quecosa == 0 || quecosa == 1 || quecosa == 2) {
      cosascayendo[i] = new fueguito();
    } else if (quecosa == 3) {
      cosascayendo[i] = new rayito();
    } else if (quecosa == 4) {
      cosascayendo[i] = new donita();
    } else if (quecosa == 5 || quecosa == 6 || quecosa == 7){
      cosascayendo[i] = new monedita();
    }
    }
  }

  }
  
  
}


function fueguito() {
  this.x = random(0, width-10);
  this.y = random(-10, 0-(3*(height/4)));
  this.tamano = 10;
  this.velocidad = 3;
  this.show = true;

  this.dibujarse = function() {
    if (this.show == true) {
      fill(255, 0, 0);
       image(fueguitoimag,this.x,this.y,tamxfueguito, tamyfueguito);   
    }
  }
  this.moverse = function() {
    this.y = this.y + velocidadconstante;

    if (this.y >= height) {
      this.show = false;
    }
  }


}

function rayito() {
  this.x = random(0, width-10);
  this.y = random(-10, 0-(3*(height/4)));
  this.tamano = 10;
  this.velocidad = 3;
  this.show = true;

  this.dibujarse = function() {
    if (this.show == true) {
       image(rayitoimag,this.x,this.y,tamxrayito, tamyrayito);   
    }
  }
  this.moverse = function() {
    this.y = this.y + velocidadconstante;

    if (this.y >= height) {
      this.show = false;
    }
  }

}

function donita() {
  this.x = random(0, width-10);
  this.y = random(-10, 0-(3*(height/4)));
  this.tamano = 10;
  this.velocidad = 3;
  this.show = true;

  this.dibujarse = function() {
    if (this.show == true) {
      fill(0, 0, 0);
      image(donitaimag,this.x,this.y,tamxdonita, tamydonita);  
    }
  }
  this.moverse = function() {
    this.y = this.y + velocidadconstante;

    if (this.y >= height) {
      this.show = false;
    }
  }

}

function monedita() {
  this.x = random(0, width-10);
  this.y = random(-10, 0-(3*(height/4)));
  this.tamano = 10;
  this.velocidad = 3;
  this.show = true;

  this.dibujarse = function() {

    fill(255, 153, 51);
     image(moneditaimag,this.x,this.y,tamxmonedita, tamymonedita); 
  }

this.moverse = function() {
  this.y = this.y + velocidadconstante;

  if (this.y >= height) {
    this.show = false;
  }
}
}


function aguacatico() {}

function vida() {}


function touchStarted() {
  if (estado == INTRO) {
    estado = INSTRUCCIONES;
  }
  else if (estado == INSTRUCCIONES) {
    estado = JUEGO;
  }
  else if (estado == JUEGO) {
    dirX = -1 * dirX
    return false;
  }
}