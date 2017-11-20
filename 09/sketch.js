var words=["macho", "hembra","infertil"];

//var laCruz;
var cerdos = [];
var numCerdos = 100;

//var leona;
var manada = [];
var numLeonas = 4;

//var leon;
var manadamachos = [];
var numLeonesmachos = 4;

var plantas = [];
var numPlantas = 100;

var arañas = [];
var numArañas = 4;


var jirafas = [];
var numJirafas = 6;

var Cerdoespecial;


function setup() {
  createCanvas(400, 400);

  //laCruz = new Crucecita();

  for (var i = 0; i < numCerdos; i++) {
    cerdos[i] = new Cerdito();
  }

  //leon = new Leona();

  for (var i = 0; i < numLeonas; i++) {
    manada[i] = new Leona();
  }

   for (var i = 0; i < numLeonesmachos; i++) {
    manadamachos[i] = new Leonmacho();
  }

   for (var i = 0; i < numPlantas; i++) {
    plantas[i] = new Plantita();
  }

  for (var i = 0; i < numArañas; i++) {
    arañas[i] = new Arañita();
  }
  
   for (var i = 0; i < numJirafas; i++) {
    jirafas[i] = new Jirafita();
  }
  
 Cerdoespecial=new Cerditosupersayayin();
  
}

function draw() {
  background(255, 255, 255);
   
  Cerdoespecial.dibujarse();
  if(Cerdoespecial.vel != 0)
  {
  Cerdoespecial.moverse();
  }

   for (var i = 0; i < numJirafas; i++) {
    jirafas[i].dibujarse();
    jirafas[i].moverse();

  }

   for (var i = 0; i < numArañas; i++) {
    arañas[i].dibujarse();
    arañas[i].moverse();

  }
  for (var i = 0; i < numPlantas; i++) {
    plantas[i].dibujarse();
    plantas[i].crecer();

  }

  for (var i = 0; i < numLeonas; i++) {
    manada[i].dibujarse();
    manada[i].moverse();

  }

   for (var i = 0; i < numLeonesmachos; i++) {
    manadamachos[i].dibujarse();
    manadamachos[i].moverse();

  }

  for (var i = 0; i < numCerdos; i++)
  {
    cerdos[i].dibujarse();
    cerdos[i].moverse();
    //cerdos[i].crecer();
  }

  for (var contadormachosL = 0; contadormachosL < numLeonesmachos; contadormachosL++)
  {
    if (manadamachos[contadormachosL].viva)
    {
    for (var contadorhembrasL =0; contadorhembrasL < numLeonas; contadorhembrasL++)
    {
      if (manada[contadorhembrasL].viva)
    {
      //si se acercan el mcaho y la hembra león (menor a 1/16 del tamaño del leon, se reproducen
      var distreproduccion = dist(manadamachos[contadormachosL].x, manadamachos[contadormachosL].y, manada[contadorhembrasL].x, manada[contadorhembrasL].y);

       if (distreproduccion < manadamachos[contadormachosL].tamano/8)
       {
          var  machoohembra = random(words);
        print(machoohembra);
                 if (machoohembra == "hembra") //es mujer
               {
               numLeonas = numLeonas+1;
               manada[manada.length] = new Leona();
               }
               else if(machoohembra == "macho")//es hombre
               {
               numLeonesmachos = numLeonesmachos+1;
               manadamachos[manadamachos.length] = new Leonmacho();
               }
       }
      
          for (var contacerdosL =0; contacerdosL < numCerdos; contacerdosL++)
          {
            if (cerdos[contacerdosL].viva)
            {
              var distCentroM = dist(manadamachos[contadormachosL].x, manadamachos[contadormachosL].y, cerdos[contacerdosL].x, cerdos[contacerdosL].y);
                if (distCentroM < manadamachos[contadormachosL].tamano/2) 
                {
                 cerdos[contacerdosL].morir();

                }
            var distCentroH = dist(manada[contadorhembrasL].x, manada[contadorhembrasL].y, cerdos[contacerdosL].x, cerdos[contacerdosL].y);
                if (distCentroH < manada[contadorhembrasL].tamano/2)
                {
                   cerdos[contacerdosL].morir();
                }
              
                   for (var contarplantasC =0; contarplantasC < numPlantas; contarplantasC++)
                {
                  if (plantas[contarplantasC].viva)
                  {
                    var distcerdoplanta = dist(plantas[contarplantasC].x, plantas[contarplantasC].y, cerdos[contacerdosL].x, cerdos[contacerdosL].y);
                      if (distcerdoplanta< plantas[contarplantasC].tamano/16) 
                      {
                       plantas[contarplantasC].morir();
                        print ("murio una planta");
                      }
                  }
                }
            }
          }        
    }
    }
    
    for (var contadorjirafas =0; contadorjirafas < numJirafas; contadorjirafas++)
    {
      if (jirafas[contadorjirafas].viva){
      //si se acercan el mcaho y la hembra león (menor a 1/16 del tamaño del leon, se mueren las jirafas
      var distjirafasmueren = dist(manadamachos[contadormachosL].x, manadamachos[contadormachosL].y, jirafas[contadorjirafas].x, jirafas[contadorjirafas].y);

       if (distjirafasmueren  < manadamachos[contadormachosL].tamano/16)
       {
         jirafas[contadorjirafas].morir();
          print ("murio una jirafa");
       }
      }
      
          		for (var contarplantasJ =0; contarplantasJ < numPlantas; contarplantasJ++)
                    {
                      if (plantas[contarplantasJ].viva)
                      {
                        var distjirafaplanta = dist(plantas[contarplantasJ].x, plantas[contarplantasJ].y, jirafas[contadorjirafas].x, jirafas[contadorjirafas].y);
                          if (distjirafaplanta< plantas[contarplantasJ].tamano/4) 
                          {
                           plantas[contarplantasJ].morir();
                            print ("murio una planta jirafa");
                          }
                      }
                    }
    }
  
 }
  }
 
}
// LA CIGUEÑA TRAE CERDITOSS CUANDO SE ESPICHA EL ESPACIO	
function keyReleased() {
  // cuando se suelta el espacio se crea un nuevo cerdito
  if (keyCode == 32) {
    numCerdos = numCerdos+1;
    cerdos[cerdos.length] = new Cerdito();
// console.log("new cerdo y hay ", numCerdos);
  }
}
function keyPressed() {
   if (keyCode == RIGHT_ARROW) 
   {
        Cerdoespecial.dirX=1;
        
       if(Cerdoespecial.vel == 0)
        {
        Cerdoespecial.vel = 2;
        }
      
      }
     else if (keyCode == DOWN_ARROW) 
     {
         Cerdoespecial.dirY=1;
     
             if(Cerdoespecial.vel == 0)
              {
              Cerdoespecial.vel = 2;
              }
     
      }
      else if (keyCode == LEFT_ARROW)
      {
        
        Cerdoespecial.dirX=-1;
        
            if(Cerdoespecial.vel == 0)
            {
            Cerdoespecial.vel = 2;
            }
  
      }
      else if (keyCode == UP_ARROW) 
      {
        Cerdoespecial.dirY=-1;
        
            if(Cerdoespecial.vel == 0)
            {
            Cerdoespecial.vel = 2;
            }

     
      }
}

// familia Cerdos
function Cerdito() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamanox = 18;
  this.tamanoy=10;
  this.viva = true;
  this.dirX = 1;
  this.dirY = 1;

  this.dibujarse = function() {
    if (this.viva == true) {
      noStroke();
      fill(255,204,204);
      ellipse(this.x,this.y,this.tamanox,this.tamanoy);
      fill(255,102,153);
      ellipse(this.x-2,this.y,2,6);
      ellipse(this.x+4,this.y,2,6);
    }
  }

  this.moverse = function() {
    this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX*4);
    }

    this.x = this.x + (this.dirX*2);

  }

  this.crecer = function() {
    this.tamano = this.tamano + random(0.01, 0.1);
  }

  this.morir = function() {
    this.viva = false;
  }
}
}

// familia Leona
function Leona() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX = 1;
  this.dirY = 1;
  this.tamano = 30;
   this.viva = true;


  this.dibujarse = function() {
    if (this.viva == true) {
fill(255,255,0);
ellipse(this.x, this.y, this.tamano, this.tamano);
    }

  }

  this.moverse = function() {
    if (this.x >= width || this.x <= 0) {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX*4);
    }
    if (this.y >= width || this.y <= 0) {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY*4);
    }

    this.x = this.x + (this.dirX*random(0, 4));
    this.y = this.y + (this.dirY*random(0, 4));
  }
  
  this.morir = function() {
    this.viva = false;
  }
}


// familia Leonesmachos
function Leonmacho() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX = 1;
  this.dirY = 1;
  this.tamano = 30;
   this.viva = true;


  this.dibujarse = function() {
    fill(255,153,0);
ellipse(this.x, this.y, this.tamano, this.tamano);

  }

  this.moverse = function() 
  {
    if (this.x >= width || this.x <= 0)
    {
      this.dirX = -this.dirX;
      this.x = this.x + (this.dirX*4);
    }
    if (this.y >= width || this.y <= 0)
    {
      this.dirY = -this.dirY;
      this.y = this.y + (this.dirY*4);
    }

    this.x = this.x + (this.dirX*random(0, 4));
    this.y = this.y + (this.dirY*random(0, 4));
  }
  
   this.morir = function() {
    this.viva = false;
  }
}

// familia Planta
function Plantita() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamano = 10;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva == true) {
      fill(0,255,0);
rect(this.x,this.y, this.tamano,this.tamano);
    }
  }

  this.crecer = function() {
    this.tamano = this.tamano + 0.01;
    if(this.tamano > 20)
    {
      this.tamano = 20;
    }
  }

  this.morir = function() {
    this.viva = false;
  }
}

// familia Arañas
function Arañita() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.dirX = 1;
  this.tamanox = 9;
  this.tamanoy = 12;


  this.dibujarse = function() {
      fill(0,0,0);
    stroke(0,0,0);
    strokeWeight(1);
    ellipse(this.x, this.y, this.tamanox, this.tamanoy);
    line(this.x,this.y,this.x-this.tamanox,this.y-3);
    line(this.x,this.y,this.x+this.tamanox,this.y-3);
     line(this.x,this.y,this.x-this.tamanox,this.y+3);
    line(this.x,this.y,this.x+this.tamanox,this.y+3);
  }

  this.moverse = function()
  {
    if (this.x >= width || this.x <= 0)
    {
      this.dirX = -1 * this.dirX;
    }
     this.x = this.x + (2 * this.dirX);
  }
}
              
// familia Jirafas 
function Jirafita() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.tamanox = 15;
  this.tamanoy=35;
  this.dirY = 1;
  this.viva = true;

  this.dibujarse = function() {
    if (this.viva == true) {
      fill(255,255,153);
      strokeWeight(2);
      stroke(153,51,0);
      triangle( this.x, this.y,this.x,this.y + this.tamanoy,this.x + this.tamanox,this.y+ this.tamanoy);
      ellipse(this.x,this.y,6,6);
    }
  }
 this.moverse = function()
  {
    if (this.y >= height || this.y <= 0)
    {
      this.dirY = -1 * this.dirY;
    }
     this.y = this.y + (1 * this.dirY);
  }


  this.morir = function() {
    this.viva = false;
  }
}

function Cerditosupersayayin() {
   this.x = random(0, width);
  this.y = random(0, height);
  this.tamanox = 22;
  this.tamanoy=15;
  this.viva = true;
  this.dirX = 1;
  this.dirY = 1;
  this.vel = 0;
  this.dibujarse = function() {

      noStroke();
      fill(255,0,0);
      ellipse(this.x,this.y,this.tamanox,this.tamanoy);
      fill(255,102,153);
      ellipse(this.x-2,this.y,2,6);
      ellipse(this.x+4,this.y,2,6);
    
  }
  
  this.moverse = function() {
     if (this.x >= width|| this.x <= 0)
            {
              this.dirX = -1 * this.dirX;
            }
        
       			this.x = this.x + (this.vel * this.dirX);

    
     if (this.y >= height|| this.y <= 0)
              {
                this.dirY = -1 * this.dirY;
              }
        
       			this.y = this.y + (this.vel * this.dirY);
    
  }
      

  }
