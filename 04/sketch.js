var florimg;

var botontam = 40;

var boton1x = 0;
var boton1y = 10;

var boton2x = 50;
var boton2y = 10;

var boton3x = 100;
var boton3y = 10;

var boton4x = 150;
var boton4y = 10;

var boton5x = 200;
var boton5y = 10;

var boton6x = 250;
var boton6y = 10;

var boton7x = 300;
var boton7y = 10;

var boton8x = 350;
var boton8y = 10;

var boton9x = 400;
var boton9y = 10;

var boton10x = 450;
var boton10y = 10;

var boton11x = 500;
var boton11y = 10;

var boton12x = 550;
var boton12y = 10;

var boton13x = 600;
var boton13y = 10;

var boton14x = 0;
var boton14y = 55;

var boton15x = 50;
var boton15y = 55;

var boton16x = 100;
var boton16y = 55;

var boton17x = 150;
var boton17y = 55;

var boton18x = 200;
var boton18y = 55;

var boton19x = 250;
var boton19y = 55;

var boton20x = 300;
var boton20y = 55;

var boton21x = 350;
var boton21y = 55;

var boton22x = 400;
var boton22y = 55;

var boton23x = 450;
var boton23y = 55;

var boton24x = 500;
var boton24y = 55;

var boton25x = 550;
var boton25y = 55;

var boton26x = 650;
var boton26y = 10;


var boton27x = 600;
var boton27y = 55;


// Color y herramienta
//la herramienta predeterminada es el cuadrado
var herramienta = 0;
//el color predeterminado es el naranja
var colordibujar = 8;

function preload() {
  //fotico de la flor, ya que si se hace directamente se altera el resto del 
  //programa por la translación
  florimg = loadImage("flor.JPG");
}

function setup() {
	//  windowWidth y windowHeight son el tamaño del programa(tamaño en que el
  //usuario abre el programa en en computador, depende de cada computador)
	createCanvas(windowWidth, windowHeight);
	background(255, 255, 255);

}

function draw() {
  //fondo negro debajo de los colores y herramientas
  fill(0);
  rect(0,0,windowWidth,140);
  //CLEAR borra todo lo dibujado
  textSize(13);
  fill(255,255,255);
  text("Clear",5,35);
	noFill();
  stroke(255,255,255);
  strokeWeight(2);
	rect(boton1x, boton1y, botontam, botontam);
  stroke(0);
  
  //BOTONES DE COLORES
  //color 0 (amarillo)
	fill(255,255,100);
	rect(boton2x, boton2y, botontam, botontam);
  
  //color 1 (verde)
	fill(100,255,50);
	rect(boton3x, boton3y, botontam, botontam);
  
  //color 2 (aguamarina)
	fill(0,255,200);
	rect(boton4x, boton4y, botontam, botontam);
  
  //color 3 (azulclaro)
	fill(0,200,255);
	rect(boton5x, boton5y,botontam, botontam);
	
	//color 4 (azul)
	fill(0,100,255);
	rect(boton6x, boton6y,botontam, botontam);
  
  //color5 (morado)
  fill(200,50,255);
  rect(boton7x, boton7y,botontam, botontam);
	
  //color6 (rosado)
  fill(255,50,150);
  rect(boton8x, boton8y,botontam, botontam);
  
  //color7 (rojo)
  fill(255,50,0);
  rect(boton9x, boton9y,botontam, botontam);
  
  //color8 (naranja)
  fill(255,150,0);
  rect(boton10x, boton10y,botontam, botontam);
  
  //color9 (dependiendo de la posición en X y Y se dibuja de colores
  //verde, amarillo o naranja)
  //parte amarilla del boton
  fill(255,255,0);
  rect(boton11x, boton11y,botontam, botontam);
  noStroke();
  fill(255,150,0);
  rect(boton11x,boton11y,botontam, botontam/3);
  fill(100,255,0);
  rect((boton11x),boton11y,botontam/3,botontam);
  stroke(0);
  
  //color10 (dependiendo de la posici{on del mouse, cuatro colores : azul,
  //rosado, aguamarina,blanco)
  //parte blanca del botón
  fill(255,255,255);
  rect(boton12x, boton12y,botontam, botontam);
  noStroke();
  fill(255,100,200);
  rect(boton12x,boton12y,botontam, botontam/2);
  fill(0,255,200);
  rect((boton12x),boton12y,botontam/2,botontam);
  fill(0,100,255);
  rect((boton12x),boton12y,botontam/2,botontam/2);
  stroke(0);
  
  //color11 (negro)
  stroke(255,255,255);
  strokeWeight(3);
  fill(0);
  rect(boton13x,boton13y,botontam,botontam);
  stroke(0);
  strokeWeight(1);
  
  
  //herramienta1 (rectangulo)
  fill(255,255,255);
  rect(boton14x,boton14y,botontam,botontam);
  rect(boton14x+5,boton14y+5,botontam-10,botontam-10);

  
  //herramienta1 (circulo)
  fill(255,255,255);
  rect(boton15x,boton15y,botontam,botontam);
  ellipse(boton15x+20,boton15y+20,botontam-10,botontam-10);
  
  //herramienta2 (circulosraros-este dibuja circulos con base en la posición
  //del mouse), entre más cerca al centro, más pequeños los circulos
  fill(255,255,255);
  rect(boton16x,boton16y,botontam,botontam);
  ellipse(boton16x+15,boton16y+15,botontam/4,botontam/4);
  ellipse(boton16x+25,boton16y+15,botontam/4,botontam/4);
  ellipse(boton16x+15,boton16y+25,botontam/4,botontam/4);
  ellipse(boton16x+25,boton16y+25,botontam/4,botontam/4);
  ellipse(boton16x+10,boton16y+10,botontam/3,botontam/3);
  ellipse(boton16x+30,boton16y+10,botontam/3,botontam/3);
  ellipse(boton16x+10,boton16y+30,botontam/3,botontam/3);
  ellipse(boton16x+30,boton16y+30,botontam/3,botontam/3);
  
  
  //herramienta4 (lineas diagonales)
  fill(255,255,255);
  rect(boton18x,boton18y,botontam,botontam);
  line(boton18x,boton18y,boton18x+botontam,boton18y+botontam);
  line(boton18x+5,boton18y,boton18x+botontam,boton18y+botontam-5);
 	line(boton18x+10,boton18y,boton18x+botontam,boton18y+botontam-10);
  line(boton18x+15,boton18y,boton18x+botontam,boton18y+botontam-15);
  line(boton18x+20,boton18y,boton18x+botontam,boton18y+botontam-20);
  line(boton18x+25,boton18y,boton18x+botontam,boton18y+botontam-25);
  line(boton18x+30,boton18y,boton18x+botontam,boton18y+botontam-30);
  line(boton18x-5,boton18y,boton18x+botontam,boton18y+botontam+5);
 	line(boton18x-10,boton18y,boton18x+botontam,boton18y+botontam+10);
  line(boton18x-15,boton18y,boton18x+botontam,boton18y+botontam+15);
  line(boton18x-20,boton18y,boton18x+botontam,boton18y+botontam+20);
  line(boton18x-25,boton18y,boton18x+botontam,boton18y+botontam+25);
  line(boton18x-30,boton18y,boton18x+botontam,boton18y+botontam+30);
  
  //herramienta3 (cuadradoscentroraros, variando en la pocisión en X, y Y 
  // del mouse se agrandan o achican los rect{angulos en t{erminos de 
  //ancho y alto)
  fill(255,255,255);
  rect(boton17x,boton17y,botontam,botontam);
  noFill();
  rect(boton17x+5,boton17y+5,botontam-10,botontam-10);
  rect(boton17x+10,boton17y+10,botontam-20,botontam-20);
  rect(boton17x+2,boton17y+15,botontam-4,botontam-30);
  
  //herramienta5(crea triangulos al rededor del centro del programa,
  //el centro siempre va a ser un v{ertice de esto
  fill(255,255,255);
  rect(boton19x,boton19y,botontam,botontam);
  triangle(boton19x+(botontam/2),boton19y+(botontam/2),boton19x,boton19y,boton19x,boton19y+5);
  triangle(boton19x+(botontam/2),boton19y+(botontam/2),boton19x,boton19y+12,boton19x,boton19y+22);
  triangle(boton19x+(botontam/2),boton19y+(botontam/2),boton19x,boton19y+26,boton19x,boton19y+34);
  triangle(boton19x+(botontam/2),boton19y+(botontam/2),boton19x,boton19y+34,boton19x+7,boton19y+40);
  triangle(boton19x+(botontam/2),boton19y+(botontam/2),boton19x+12,boton19y+40,boton19x+20,boton19y+40);
  triangle(boton19x+(botontam/2),boton19y+(botontam/2),boton19x+25,boton19y+40,boton19x+35,boton19y+40);
  triangle(boton19x+(botontam/2),boton19y+(botontam/2),boton19x+39,boton19y+40,boton19x+40,boton19y+30);
  triangle(boton19x+(botontam/2),boton19y+(botontam/2),boton19x+40,boton19y+22,boton19x+40,boton19y+12);
  triangle(boton19x+(botontam/2),boton19y+(botontam/2),boton19x+40,boton19y+8,boton19x+30,boton19y);
  triangle(boton19x+(botontam/2),boton19y+(botontam/2),boton19x+25,boton19y,boton19x+10,boton19y);
  
  
  //herramienta6(dibuja puntos en la posición del mouse. A medida que el mouse
  //se acerca al punto m{as grande en Y (osea entre m{as abajo est{e, m{as
  //grande va a ser el stroke de los puntos
  fill(255,255,255);
  rect(boton20x,boton20y,botontam,botontam);
  strokeWeight(1);
  point(boton20x+5,boton20y+10);
  point(boton20x+10,boton20y+10);
  point(boton20x+15,boton20y+10);
  strokeWeight(2);
  point(boton20x+5,boton20y+15);
  point(boton20x+10,boton20y+15);
  point(boton20x+15,boton20y+15);
  strokeWeight(3);
  point(boton20x+10,boton20y+20);
  point(boton20x+15,boton20y+20);
  point(boton20x+20,boton20y+20);
   strokeWeight(4);
  point(boton20x+10,boton20y+30);
  point(boton20x+15,boton20y+30);
  point(boton20x+20,boton20y+30);
  point(boton20x+25,boton20y+30);
  
  //herramienta7(dibuja varios puntos al tiempo (4) haciendo una especie de
  //triangulación)
  fill(255,255,255);
  rect(boton21x,boton21y,botontam,botontam);
  strokeWeight(5);
  point(boton21x+(botontam/2)+15,boton21y+(botontam/2)+10);
  point(boton21x+(botontam/2)-15,boton21y+(botontam/2)+10);
  point(boton21x+(botontam/2),boton21y+(botontam/2));
  point(boton21x+(botontam/2),boton21y+(botontam/2)-15);
  noStroke();

  //herramienta8(dibuja flores)
  fill(255,255,255);
  rect(boton22x,boton22y,botontam,botontam);
  image(florimg,boton22x,boton22y,botontam,botontam);  
  
  //herramienta9(dibuja circulos conc{entricos)
  fill(255,255,255);
  rect(boton23x,boton23y,botontam,botontam);
  for(var anchoyalto = 40; anchoyalto > 5; anchoyalto = anchoyalto - 5)
	{
    stroke(0);
    strokeWeight(1);
  	ellipse(boton23x+(botontam/2),boton23y+(botontam/2),anchoyalto,anchoyalto);
	}
  //herramienta10
  fill(255,255,255);
  rect(boton24x,boton24y,botontam,botontam);
  triangle(boton24x,boton24y,boton24x+4,boton24y+botontam,boton24x+8,boton24y);
  triangle(boton24x+10,boton24y+botontam,boton24x+18,boton24y+botontam,boton24x+14,boton24y);
  triangle(boton24x+18,boton24y,boton24x+26,boton24y+botontam,boton24x+30,boton24y);
    triangle(boton24x+34,boton24y+botontam,boton24x+40,boton24y+botontam,boton24x+36,boton24y);
  
  //herramienta11(dibuja caritas felices. El tamaño de la boca de 
  //carita va creciendo a medida que el mouse se mueve hasta la esquina inferior
  //derecha, osea el punto m{as alto tanto en X como en Y)
  fill(255,255,255);
  rect(boton25x,boton25y,botontam,botontam);
  fill(0);
  ellipse(boton25x+15,boton25y+ 15, 5, 5);
  ellipse(boton25x+25, boton25y+ 15, 5,5);
  arc(550+20, 55+ 20, 30 ,30, radians(0), radians(180));
  
  //blanco (color blanco)
  fill(255,255,255);
  rect(boton26x,boton26y,botontam,botontam);
  
  //blanco (color blanco)
  fill(255,255,255);
  rect(boton27x,boton27y,botontam,botontam);
  line(boton27x+10,boton27y+30,boton27x+30,boton27y+10);
  
  

	if (mouseIsPressed) {
    
    //borra todo el espacio, es el primer btotn.
    //La idea de los botones de ac{a para abajo es que cuando el mouse se 
    //espiche dentro del espacio de cada boton se escoja una herramienta o
    //color diferente
		if (mouseX > boton1x && mouseX < boton1x + botontam &&
			mouseY > boton1y && mouseY < boton1y + botontam) {
			background(255,255,255);
		}
    //los primeros doce botones, ( la fila de arriba )son para 
    //cambiar el color
		if (mouseX > boton2x && mouseX < boton2x + botontam &&
			mouseY > boton2y && mouseY < boton2y + botontam) {
			colordibujar = 0;
		}
		
		if (mouseX > boton3x && mouseX < boton3x + botontam &&
			mouseY > boton3y && mouseY < boton3y + botontam) {
			colordibujar = 1;
		}
		if (mouseX > boton4x && mouseX < boton4x + botontam &&
			mouseY > boton4y && mouseY < boton4y + botontam) {
			colordibujar = 2;
		}
    if (mouseX > boton5x && mouseX < boton5x + botontam &&
			mouseY > boton5y && mouseY < boton5y + botontam) {
			colordibujar = 3;
		}
    if (mouseX > boton6x && mouseX < boton6x + botontam &&
			mouseY > boton6y && mouseY < boton6y + botontam) {
			colordibujar = 4;
		}
    if (mouseX > boton7x && mouseX < boton7x + botontam &&
			mouseY > boton7y && mouseY < boton7y + botontam) {
			colordibujar = 5;
		}
    if (mouseX > boton8x && mouseX < boton8x + botontam &&
			mouseY > boton8y && mouseY < boton8y + botontam) {
			colordibujar = 6;
		}
    if (mouseX > boton9x && mouseX < boton9x + botontam &&
			mouseY > boton9y && mouseY < boton9y + botontam) {
			colordibujar = 7;
		}
    if (mouseX > boton10x && mouseX < boton10x + botontam &&
			mouseY > boton10y && mouseY < boton10y + botontam) {
			colordibujar = 8;
		}
    if (mouseX > boton11x && mouseX < boton11x + botontam &&
			mouseY > boton11y && mouseY < boton11y + botontam) {
			colordibujar = 9;
		}
    if (mouseX > boton12x && mouseX < boton12x + botontam &&
			mouseY > boton12y && mouseY < boton12y + botontam) {
			colordibujar = 10;
		}
    if (mouseX > boton13x && mouseX < boton13x + botontam &&
			mouseY > boton13y && mouseY < boton13y + botontam) {
			colordibujar = 11;
		}
    
    //los botones de la fila de abaj son pra cambiar la herramienta
    if (mouseX > boton14x && mouseX < boton14x + botontam &&
			mouseY > boton14y && mouseY < boton14y + botontam) {
			herramienta = 0;
		}
    if (mouseX > boton15x && mouseX < boton15x + botontam &&
			mouseY > boton15y && mouseY < boton15y + botontam) {
			herramienta = 1;
		}
    if (mouseX > boton16x && mouseX < boton16x + botontam &&
			mouseY > boton16y && mouseY < boton16y + botontam) {
			herramienta = 2;
		}
    if (mouseX > boton17x && mouseX < boton17x + botontam &&
			mouseY > boton17y && mouseY < boton17y + botontam) {
			herramienta = 3;
		}
   if (mouseX > boton18x && mouseX < boton18x + botontam &&
			mouseY > boton18y && mouseY < boton18y + botontam) {
			herramienta = 4;
		}
    
    if (mouseX > boton19x && mouseX < boton19x + botontam &&
			mouseY > boton19y && mouseY < boton19y + botontam) {
			herramienta = 5;
		}
    if (mouseX > boton20x && mouseX < boton20x + botontam &&
			mouseY > boton20y && mouseY < boton20y + botontam) {
			herramienta = 6;
		}
    if (mouseX > boton21x && mouseX < boton21x + botontam &&
			mouseY > boton21y && mouseY < boton21y + botontam) {
			herramienta = 7;
		}
    if (mouseX > boton22x && mouseX < boton22x + botontam &&
			mouseY > boton22y && mouseY < boton22y + botontam) {
			herramienta = 8;
		}
    if (mouseX > boton23x && mouseX < boton23x + botontam &&
			mouseY > boton23y && mouseY < boton23y + botontam) {
			herramienta = 9;
		}
    if (mouseX > boton24x && mouseX < boton24x + botontam &&
			mouseY > boton24y && mouseY < boton24y + botontam) {
			herramienta = 10;
		}
    
  if (mouseX > boton25x && mouseX < boton25x + botontam &&
			mouseY > boton25y && mouseY < boton25y + botontam) {
			herramienta = 11;
		}
    //boton que sirve para cambiar a blanco
    if (mouseX > boton26x && mouseX < boton26x + botontam &&
			mouseY > boton26y && mouseY < boton26y + botontam) {
			colordibujar = 12;
		}
    //boton que sirve para cambiar a blanco
    if (mouseX > boton27x && mouseX < boton27x + botontam &&
			mouseY > boton27y && mouseY < boton27y + botontam) {
			herramienta = 12;
		}
    
    //DIBUJARRR
		//este if pretende que se dibuje solo en la parte que no tiene el
    //rectangulo negro, para que no se pinte sobre los botones
		if (mouseY>140 && mouseY <windowHeight)
    {
      //cambio de colores
      if (colordibujar == 0){
        stroke(255,255,100);
        fill(255,255,100);
 
      }
      if (colordibujar == 1){
        stroke(100,255,50);
        fill(100,255,50);
    
      }
      if (colordibujar == 2){
        stroke(0,255,200);
        fill(0,255,200);
     
      }
      if (colordibujar == 3){
        stroke(0,200,255);
        fill(0,200,255);
     
      }
      if (colordibujar == 4){
        stroke(0,100,255);
        fill(0,100,255);
     
      }
      if (colordibujar == 5){
        stroke(200,50,255);
        fill(200,50,255);
        
      }
			if (colordibujar == 6){
        stroke(255,50,150);
        fill(255,50,150);
      
      }
      if (colordibujar == 7){
        stroke(255,50,0);
        fill(255,50,0);
        
      }
      if (colordibujar == 8){
        stroke(255,150,0);
        fill(255,150,0);
     
      }
      if (colordibujar == 9){
        //multicolorverdenaranjaamarillo
        stroke(mouseX-50,mouseY-50,0);
        fill(mouseX-50,mouseY-50,0);
        
      }
      if (colordibujar == 10){
        //multicolorazulaguamarinarosadoblanco
        stroke(mouseX-300,mouseY-50,mouseY);
        fill(mouseX-300,mouseY-50,mouseY);
     
      }
      if (colordibujar == 11){
        //negro
        stroke(0);
        fill(0);  
      }
		  
      if (colordibujar == 12){
        //negro
        stroke(255,255,255);
        fill(255,255,255);  
      }
      
      
      // herramienta dibujar
      if (herramienta == 0) 
      {
				rect(mouseX,mouseY,50,50);
      }
      if (herramienta == 1) 
      {
        ellipse(mouseX,mouseY,50,50);
      }
      if(herramienta==2)
      {
        fill(255,255,255);
  			ellipse(mouseX, mouseY,mouseX-(windowWidth/2),mouseY-(windowHeight/2));
      }
      if(herramienta==3)
      {
        stroke(0);
  			rectMode(CENTER);
  			rect((windowWidth/2),((windowHeight+120)/2),mouseX,mouseY);
      	rectMode(CORNER);
      }
      if(herramienta==4)
      {
        strokeWeight(mouseY/100);
  			line(mouseX, mouseY, mouseX-(windowWidth/2),mouseY-(windowHeight/2));
      }
      if(herramienta==5)
      {
  			stroke(0);
  			triangle((windowWidth/2),((windowHeight+120)/2),mouseX,mouseY,mouseX+30,mouseY+15);
      }
      if(herramienta==6)
      {
  			strokeWeight(mouseY/50);
        point(mouseX,mouseY);
        
      }
      if(herramienta==7)
      {
  		
  			strokeWeight(10);
        point(mouseX+20,mouseY+15);
        point(mouseX-20,mouseY+15);
        point(mouseX,mouseY);
        point(mouseX,mouseY-20);
      }
      if(herramienta==8)
      {
  			stroke(0);
  			translate(mouseX,mouseY);
          ellipse(0, 0, 20, 80);
          rotate(PI/6);
          ellipse(0,0, 20, 80);
          rotate(2*(PI/6));
          ellipse(0,0, 20, 80);
          rotate(3*(PI/6));
          ellipse(0,0, 20, 80);
          rotate(4*(PI/6));
          ellipse(0,0, 20, 80);
      }
      if(herramienta==9)
      {
        for(var anchoyalto = 100; anchoyalto > 10; anchoyalto = anchoyalto - 10)
				{
        stroke(0);
        strokeWeight(1);
  			ellipse(mouseX,mouseY,anchoyalto,anchoyalto);
				}
      }
      if(herramienta==10)
      {
        stroke(0);
        triangle(mouseX, mouseY, pmouseX, pmouseY,mouseX,pmouseX);
      }
      if(herramienta==11)
      {
        
  				ellipse(mouseX+30, mouseY + 40, 10, 10);
  				ellipse(mouseX + 70, mouseY + 40, 10, 10);
          arc(mouseX+50, mouseY+ 60, (mouseX/5) + 40,(mouseY/5) + 30, radians(0), radians(180));
      }
      if(herramienta==12)
      {
         line(mouseX, mouseY, pmouseX, pmouseY);
  				
      }
      
    }
	}
}