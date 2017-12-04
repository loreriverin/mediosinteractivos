//objetos que caen

var fueguitoimag;

var rayitoimag;

var donitaimag;

var moneditaimag;

var vidaimg;

var cosascayendo = [];
var numCosas = 15;

var elAguacate;

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
var PERDISTE = 4;
var GANASTE = 5;

var cambiohombrecito = false;
var contadorvidas;
var contadormonedas;
var velocidadbono=0;

var tresvidasimg;
var dosvidasimg;
var unavidaimg;
var tamyviditicas;
var tamxviditicas;
var tamyvida;
var tamxvida;
var perdisteimg;
var ganasteimg;
var aguacateimg;
var tamxaguacate;
var tamyaguacate;
function preload() {

  miImagen1 = loadImage("Inicio-05.png ");
  miImagen2 = loadImage("fondojuego-04.png");
  instrucimagen = loadImage("instrucciones2.png");
  hombrecitoder1 = loadImage("hombrecitoder1.png");
  hombrecitoizq1 = loadImage("hombrecitoizq1.png");
  rayitoimag = loadImage("rayito.png");
  donitaimag = loadImage("donita.png");
  fueguitoimag = loadImage("fueguito.png");
  moneditaimag = loadImage("monedita.png");

tresvidasimg=loadImage("tres vidas.png");
dosvidasimg=loadImage("dos vidas.png");
unavidaimg=loadImage("una vida.png");

    perdisteimg = loadImage("perdiste.png");
  ganasteimg = loadImage("ganaste.png");
  vidaimg=loadImage("Vidita.png");
 aguacateimg=loadImage("aguacatico.png");
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
      
    tamyviditicas = map(35, 0, 400, 0, height);
    tamxviditicas = tamymonedita * (114/36);
      
    tamyvida = map(20, 0, 400, 0, height);
    tamxvida = tamyvida * (296 / 197);
      
    tamyaguacate = map(30, 0, 400, 0, height);
    tamxaguacate = tamyaguacate * (197/296);
      
    texto = map(95, 0, 724, 0, height);

  } else {
    tamxrayito = map(25, 0, 400, 0, width);
    tamyrayito = tamxrayito * (185/269);

    tamxdonita = map(40, 0, 400, 0, width);
    tamydonita = tamxdonita * (185/269);
    
    tamxfueguito = map(35, 0, 400, 0, width);
    tamyfueguito = tamxfueguito * (234/269);
    
    tamxmonedita = map(35, 0, 400, 0, width);
    tamymonedita = tamxmonedita * (260/267);
    
     tamxviditicas = map(50, 0, 400, 0, width);
    tamyviditicas = tamxmonedita * (114/36);
    
    texto = map(95, 0, 1237, 0, width);
        
  }
  


  for (var i = 0; i < numCosas; i++) {
    var quecosa = floor(random(0, 15));
    cosascayendo[i] = quecosa;
    print(quecosa);
    if (quecosa == 0 || quecosa == 1 || quecosa == 2|| quecosa == 3) {
      cosascayendo[i] = new fueguito();
    } else if (quecosa == 4|| quecosa == 5) {
      cosascayendo[i] = new rayito();
    } else if (quecosa == 6|| quecosa == 7) {
      cosascayendo[i] = new donita();
    } else if(quecosa == 8 || quecosa == 9 || quecosa == 10|| quecosa == 11) {
      cosascayendo[i] = new monedita();
    }
    else if(quecosa == 12 || quecosa == 13 ) {
      cosascayendo[i] = new vida();
    }
    else if(quecosa == 12 || quecosa == 14 ) {
      cosascayendo[i] = new aguacate();
    }
  }

  contadorvidas=3;
  contadormonedas=0;
  contadoraguacates=0;
}

function draw() {
  if (estado == GANASTE) {
    image(ganasteimg, 0, 0, width, height);
  } else if (estado == PERDISTE) {
    image(perdisteimg, 0, 0, width, height);
  
  }
  else if (estado == INTRO) {
    image(miImagen1, 0, 0, width, height);
    
  }  else if (estado == INSTRUCCIONES)
  {
     image(instrucimagen, 0, 0, width, height);
    
  } else if (estado == JUEGO) {
    
     if( contadoraguacates>=15 ||contadormonedas>=50)
     {
       esdato=GANASTE;
     }
    image(miImagen2, 0, 0, width, height);
    
   
    if (posx >= (width - tamx) || posx <= 0) {
      dirX = -1 * dirX;
    }
    posx = posx + ((4+velocidadbono) * dirX) ;

    if (dirX == 1) {
      image(hombrecitoder1, posx, posy, tamx, tamy);
    } else {
      image(hombrecitoizq1, posx, posy, tamx, tamy);
    }
    
    velocidadconstante=4;
    

  for (var i = 0; i < numCosas; i++) {
    cosascayendo[i].dibujarse();
    cosascayendo[i].moverse();
    if(cosascayendo[i].vivo==true)
    {
      
    if(abs(posx-cosascayendo[i].x)<30 & abs(posy-cosascayendo[i].y)<30)
    {
      cosascayendo[i].vivo=false;
      
      if(cosascayendo[i].fuego==true)
      {
        //print("fuego");
        contadorvidas=contadorvidas-1;

      }
      else if(cosascayendo[i].rayito==true)
      {
        //print("rayo");
        velocidadbono=2;
      }
      else if(cosascayendo[i].monedita==true)
      {
        //print("monedita");
        contadormonedas=contadormonedas +1;
      }
      else if(cosascayendo[i].donita==true)
      {
        //print("donita");
        velocidadbono=-3;
      }
      else if(cosascayendo[i].vida==true)
      {
         if (contadorvidas >= 3)
         {
         } else 
         {
          contadorvidas = contadorvidas + 1;
         }
      }
      else if(cosascayendo[i].aguacate==true)
      {
      contadoraguacates=contadoraguacates+1;
      }
 
    }
      
    }
      
    if (cosascayendo[i].y > height) {
    var quecosa = floor(random(0, 15));
       cosascayendo[i] = quecosa;
    if (quecosa == 0 || quecosa == 1 || quecosa == 2|| quecosa == 3) {
      cosascayendo[i] = new fueguito();
    } else if (quecosa == 4|| quecosa == 5) {
      cosascayendo[i] = new rayito();
    } else if (quecosa == 6|| quecosa == 7) {
      cosascayendo[i] = new donita();
    } else if(quecosa == 8 || quecosa == 9 || quecosa == 10|| quecosa == 11){
      cosascayendo[i] = new monedita();
    }
      else if(quecosa == 12 || quecosa == 13 ) {
      cosascayendo[i] = new vida();
    }
      else if(quecosa == 12 || quecosa == 14 ) {
      cosascayendo[i] = new aguacate();
    }
    }
    
  }
    textSize(64);
    fill(255);
    text(contadormonedas, (width/3.7), posy+(height/4.8));
    noFill();
    
    textSize(50);
    fill(255);
    text("AGUACATES:", (width/2), posy+(height/5));
    text(contadoraguacates, (width-70), posy+(height/5));
    noFill();
    
     if(contadorvidas==3)
    {
      image(tresvidasimg,(width/30),(posy+(height/7.5)),tamxviditicas, tamyviditicas);

    }
    else if(contadorvidas==2)
    {
       image(dosvidasimg,(width/30),(posy+(height/7.5)),tamxviditicas, tamyviditicas); 
    }
    else if(contadorvidas==1)
    {
       image(unavidaimg,(width/30),(posy+(height/7.5)),tamxviditicas, tamyviditicas); 
    }
    else if(contadorvidas==0)
    {
      estado=PERDISTE;
    }
  }
  
}


function fueguito() {
  this.x = random(0, width-10);
  this.y = random(-10, 0-(3*(height/4)));
  this.fuego=true;
  this.vivo = true;

  this.dibujarse = function() {
    if (this.vivo == true) {
      fill(255, 0, 0);
       image(fueguitoimag,this.x,this.y,tamxfueguito, tamyfueguito);   
    }
  }
  this.moverse = function() {
    this.y = this.y + velocidadconstante;
  }


}

function rayito() {
  this.x = random(0, width-10);
  this.y = random(-10, 0-(3*(height/4)));
  this.rayito=true;
  this.vivo = true;

  this.dibujarse = function() {
    if (this.vivo == true) {
       image(rayitoimag,this.x,this.y,tamxrayito, tamyrayito);   
    }
  }
  this.moverse = function() {
    this.y = this.y + velocidadconstante;
  }

}

function donita() {
  this.x = random(0, width-10);
  this.y = random(-10, 0-(3*(height/4)));
  this.donita=true;
  this.vivo = true;

  this.dibujarse = function() {
    if (this.vivo == true) {
      fill(0, 0, 0);
      image(donitaimag,this.x,this.y,tamxdonita, tamydonita);  
    }
  }
  this.moverse = function() {
    this.y = this.y + velocidadconstante;
  }

}

function monedita() {
  this.x = random(0, width-10);
  this.y = random(-10, 0-(3*(height/4)));
  this.vivo = true;
  this.monedita=true;

  this.dibujarse = function() {
    if (this.vivo==true)
    {
    fill(255, 153, 51);
     image(moneditaimag,this.x,this.y,tamxmonedita, tamymonedita); 
    }
  }

this.moverse = function() {
  this.y = this.y + velocidadconstante;
}
}


function aguacate() {
this.x = random(0, width-10);
  this.y = random(-10, 0-(3*(height/4)));
  this.vivo = true;
  this.aguacate=true;

  this.dibujarse = function() {
    if (this.vivo==true)
    {
    fill(255, 153, 51);
     image(aguacateimg,this.x,this.y,tamxaguacate, tamyaguacate); 
    }
  }
  this.moverse = function() {
  this.y = this.y + 6;
}
}

function vida() {
  this.x = random(0, width-10);
  this.y = random(-10, 0-(3*(height/4)));
  this.vivo = true;
  this.vida=true;

  this.dibujarse = function() {
    if (this.vivo==true)
    {
    fill(255, 153, 51);
     image(vidaimg,this.x,this.y,tamxvida, tamyvida); 
    }
  }

this.moverse = function() {
  this.y = this.y + velocidadconstante;
}
}

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
