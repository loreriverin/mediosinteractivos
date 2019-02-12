var contadorR=0;
var contadorL=0;
var contadorL2=0;
var contadorL3=0;
var contadorJ=0;

function setup() {
  createCanvas(640, 640);
   background(255);
  fill(0);
  strokeWeight(5);
  scale(0.8);
  translate(80, 80);
}

function draw(){
  stroke(255);
  fill(255);
  rect(320,0,320,640);

  scale(0.8);
  translate(80, 80);
  //R
  strokeWeight(4);
  //rect(282, 150, 5, 350,20); //1 recto R (izq-der)
  //rect(294, 142, 5, 368,20); //2 recto R (izq-der)
  //rect(306, 150, 5, 350,20); //3 recto R (izq-der)
   
  
  contadorR=contadorR+2; 
  
  if(contadorR<360)
  {
    noFill();
  //NARANJA
  stroke(247, 148,29, (contadorR/200));
  arc(260, 250, 190, 140, HALF_PI, (3*HALF_PI), OPEN);
  //ROSADA
  stroke(236, 0,140, (contadorR/200));
  arc(260, 250, 220, 170, HALF_PI, (3*HALF_PI), OPEN);
    //AZUL
  stroke(27, 117, 188, (contadorR/200));
  arc(260, 250, 250, 200, HALF_PI, (3*HALF_PI), OPEN);
  
    
  //AZUL
  stroke(27, 117, 188, (contadorR/200));
  line(223, 375, 140, 490);
  //ROSADA
  stroke(236, 0,140, (contadorR/200));
  line(242, 370, 148, 503);
  //NARANJA
  stroke(247, 148,29, (contadorR/200));
  line(260, 365, 165, 500);
  

  //AZUL
  stroke(27, 117, 188, (contadorR/100));
  line(284, 150+(contadorR), 284, 500-contadorR);
  //ROSADA
  stroke(236, 0,140, (contadorR/100));
  line(296, 142+contadorR, 296, 510-contadorR);
  //NARANJA
  stroke(247, 148,29, (contadorR/100));
  line(308, 150+contadorR, 308, 500-contadorR);
   }
 
  
  
  //L
  //rect(355, 150, 5, 350,20); //1 vertic L (izq-der)
  //rect(367, 142, 5, 368,20); //2 vertic L (izq-der)
  //rect(379, 150, 5, 360,20); //3 vertic L (izq-der)
  if((contadorL< 360))
  {
  contadorL=contadorL+4 *(1);
  }
  else if(contadorL => 360)
  {
  contadorL2=contadorL2+4 *(-1);
  }
  if(contadorL2 <= (-380))
  {
  contadorL3=contadorL3+4;

  }
  
  //AZUL
  stroke(27, 117, 188);
  line(357, 150 + contadorL+contadorL2+(contadorL3+8), 357, 500-contadorL-contadorL2-(contadorL3+8));
  
  
  //ROSADA
  stroke(236, 0,140);
  line(369, 142+ (contadorL+15)+contadorL2+contadorL3, 369, 510-(contadorL+15) - contadorL2-contadorL3);
  //NARANJA
  stroke(247, 148,29);
  line(381, 150+contadorL+contadorL2+(contadorL3+15), 381, 510-contadorL-contadorL2-(contadorL3+15));

  //rect(391, 472, 141, 5,20); //1 horiz L (arr-aba) 
  //rect(391, 484, 153, 5,20); //1 horiz L (arr-aba) 
  //rect(391, 496, 141, 5,20); //1 horiz L (arr-aba) 
  //AZUL
  stroke(27, 117, 188);

  if(contadorJ <= 150)
  {
  contadorJ=contadorJ + 0.8 ;
  }
  point(391+ contadorJ,492);
  line(391, 492, 391 + (contadorJ-10) , 492);

  //ROSADA
  stroke(236, 0,140);
  point(391+ (contadorJ+4),502);
  line(391, 502, 391 + (contadorJ-6), 502);
  //NARANJA
  stroke(247, 148,29);
  point(391+contadorJ,512);
  line(391, 512, 391+ (contadorJ-10), 512);
  }
