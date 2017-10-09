var vertice1X=668;
var vertice1Y=8;

var vertice2X=626;
var vertice2Y=50;

var vertice3X=668;
var vertice3Y=93;

var vertice4X=710;
var vertice4Y=50;

var desayuno=0;
var mediasnueves=0;
var almuerzo=0;
var onces=0;
var comida= 0;

var manual=0;
var intervalo=1;

var horas;
var minutos;
var segundos;

var horasLorena;
var minutosLorena;
var segundosLorena;

function setup() { 
  
  createCanvas(1250, 860);
  background(220);
  //Rectángulo mantel colores BLANCO (el de abajo)
  
  	fill(255,255,255);
    beginShape();
  	vertex(668,	0);
  	vertex(247,420);
  	vertex(668,836);
  	vertex(1090,420);
  	endShape(CLOSE);
  
  //FORS para hacer los cuadrados rokos del minimantel más fácil
  
  for( var numerocuadrados = 0; numerocuadrados <= 8; numerocuadrados = numerocuadrados +1)
  { 
    //Rectángulo mantel colores
  	noStroke(0);
  	fill(255,0,0);
    beginShape();
  	vertex(vertice1X,vertice1Y+(92 * numerocuadrados));
  	vertex(vertice2X,vertice2Y+(92 * numerocuadrados));
  	vertex(vertice3X,vertice3Y+(92 * numerocuadrados));
  	vertex(vertice4X,vertice4Y+(92 * numerocuadrados));
  	endShape(CLOSE);
  }
  for( var numerocuadrados = 1; numerocuadrados <= 7; numerocuadrados = numerocuadrados +1)
  { 
    //Rectángulo mantel colores
  	noStroke(0);
  	fill(255,0,0);
    beginShape();
  	vertex(vertice1X+92,vertice1Y+(92 * numerocuadrados));
  	vertex(vertice2X+92,vertice2Y+(92 * numerocuadrados));
  	vertex(vertice3X+92,vertice3Y+(92 * numerocuadrados));
  	vertex(vertice4X+92,vertice4Y+(92 * numerocuadrados));
  	endShape(CLOSE);
  }
  for( var numerocuadrados = 1; numerocuadrados <= 7; numerocuadrados = numerocuadrados +1)
  { 
    //Rectángulo mantel colores
  	noStroke(0);
  	fill(255,0,0);
    beginShape();
  	vertex(vertice1X-92,vertice1Y+(92 * numerocuadrados));
  	vertex(vertice2X-92,vertice2Y+(92 * numerocuadrados));
  	vertex(vertice3X-92,vertice3Y+(92 * numerocuadrados));
  	vertex(vertice4X-92,vertice4Y+(92 * numerocuadrados));
  	endShape(CLOSE);
  }
  
  for( var numerocuadrados = 2; numerocuadrados <= 6; numerocuadrados = numerocuadrados +1)
  { 
    //Rectángulo mantel colores
  	noStroke(0);
  	fill(255,0,0);
    beginShape();
  	vertex(vertice1X-184,vertice1Y+(92 * numerocuadrados));
  	vertex(vertice2X-184,vertice2Y+(92 * numerocuadrados));
  	vertex(vertice3X-184,vertice3Y+(92 * numerocuadrados));
  	vertex(vertice4X-184,vertice4Y+(92 * numerocuadrados));
  	endShape(CLOSE);
  }
  
  for( var numerocuadrados = 2; numerocuadrados <= 6; numerocuadrados = numerocuadrados +1)
  { 
    //Rectángulo mantel colores
  	noStroke(0);
  	fill(255,0,0);
    beginShape();
  	vertex(vertice1X+184,vertice1Y+(92 * numerocuadrados));
  	vertex(vertice2X+184,vertice2Y+(92 * numerocuadrados));
  	vertex(vertice3X+184,vertice3Y+(92 * numerocuadrados));
  	vertex(vertice4X+184,vertice4Y+(92 * numerocuadrados));
  	endShape(CLOSE);
  }
  
  for( var numerocuadrados = 3; numerocuadrados <= 5; numerocuadrados = numerocuadrados +1)
  { 
    //Rectángulo mantel colores
  	noStroke(0);
  	fill(255,0,0);
    beginShape();
  	vertex(vertice1X+276,vertice1Y+(92 * numerocuadrados));
  	vertex(vertice2X+276,vertice2Y+(92 * numerocuadrados));
  	vertex(vertice3X+276,vertice3Y+(92 * numerocuadrados));
  	vertex(vertice4X+276,vertice4Y+(92 * numerocuadrados));
  	endShape(CLOSE);
  }
  
   for( var numerocuadrados = 3; numerocuadrados <= 5; numerocuadrados = numerocuadrados +1)
  { 
    //Rectángulo mantel colores
  	noStroke(0);
  	fill(255,0,0);
    beginShape();
  	vertex(vertice1X-276,vertice1Y+(92 * numerocuadrados));
  	vertex(vertice2X-276,vertice2Y+(92 * numerocuadrados));
  	vertex(vertice3X-276,vertice3Y+(92 * numerocuadrados));
  	vertex(vertice4X-276,vertice4Y+(92 * numerocuadrados));
  	endShape(CLOSE);
  }
  
   for( var numerocuadrados = 4; numerocuadrados < 5; numerocuadrados = numerocuadrados +1)
  { 
    //Rectángulo mantel colores
  	noStroke(0);
  	fill(255,0,0);
    beginShape();
  	vertex(vertice1X-368,vertice1Y+(92 * numerocuadrados));
  	vertex(vertice2X-368,vertice2Y+(92 * numerocuadrados));
  	vertex(vertice3X-368,vertice3Y+(92 * numerocuadrados));
  	vertex(vertice4X-368,vertice4Y+(92 * numerocuadrados));
  	endShape(CLOSE);
  }
   for( var numerocuadrados = 4; numerocuadrados < 5; numerocuadrados = numerocuadrados +1)
  { 
    //Rectángulo mantel colores
  	noStroke(0);
  	fill(255,0,0);
    beginShape();
  	vertex(vertice1X+368,vertice1Y+(92 * numerocuadrados));
  	vertex(vertice2X+368,vertice2Y+(92 * numerocuadrados));
  	vertex(vertice3X+368,vertice3Y+(92 * numerocuadrados));
  	vertex(vertice4X+368,vertice4Y+(92 * numerocuadrados));
  	endShape(CLOSE);
  }
  //Circulos concéntricos para realizar el plato
  ellipseMode(CENTER);
  fill(255,255,255);
  stroke(0);
  ellipse(668,420,448,448);
  ellipse(668,420,350,350);
   ellipse(668,420,335,335);
  
  ///CUCHARAAAA
    //Parte de abajo de la cuchara(mango)
    noStroke();
    fill(0);
    beginShape();
    vertex(1204,612);
    vertex(1196,325);
    vertex(1186,325);
    vertex(1174,612);
    endShape(CLOSE);
    //elipse de la cuchara
    ellipse(1190,250,86,164);

  ///CUCHILLO
    //cuadrado y mango del cuchillo
    beginShape();
    vertex(1114,614);
    vertex(1114,140);
    vertex(1075,200);
     vertex(1075,325);
    vertex(1100,325);
     vertex(1094,614);
    endShape(CLOSE);
		//arco del cuchillo
    arc(1114, 218, 80, 176, HALF_PI, PI+ HALF_PI);
  
  ///TENEDOOOR
    //Parte de abajo del tenedor(mango)
    noStroke();
    fill(0);
    beginShape();
    vertex(225,612);
    vertex(222,325);
    vertex(212,325);
    vertex(210,612);
    endShape(CLOSE);
    //parte arriba del tenedor
    beginShape();
    vertex(235,325);
    vertex(235,175);
    vertex(230,175);
    vertex(230,275);
    vertex(225,275);
    vertex(225,175);
    vertex(220,175);
    vertex(220,275);
    vertex(215,275);
    vertex(215,175);
    vertex(210,175);
    vertex(210,275);
    vertex(205,275);
    vertex(205,175);
    vertex(200,175);
    vertex(200,325);
    endShape(CLOSE);
  
  ///SERVILLETA
  	stroke(0);
   	fill(255,255,255);
   	beginShape();
    vertex(180,620);
    vertex(180,175);
    vertex(15,410);
    endShape(CLOSE);
  noStroke();
  
} 




function draw() 
{ 
   //Se asignan los vlores de las horas, minutos, y segundos en unas variables propias
   horas=hour();
	 minutos=minute();
   segundos=second();
  
  //El reloj tiene un FEATURE que hace un fast forward en el día, para que así el usuario
  //tenga una corta demostración de cómo funciona el reloj durante un día entero.
  //La velocidad es aproximadamente un segundo por hora, y ocurre cuando se oprime
  //el mouse
  if(mouseIsPressed)
  {
    manual=1;
    //cuando se oprime el mouse, se activa PARA SIEMPRE el funcionamiento manual
  }
  
  
  if(manual==0)
  {
    
    //cuando no funciona manualmente, osea autom{aticamente, las horas, minutos, segundos son los mismos
    //que arroja el computador
   horasLorena=horas;
 	 minutosLorena=minutos;
   segundosLorena=segundos;
  }
  else
  {
    //al funcionar manualmente, las horas minutos y segundos cambian a partir del intervalo.
    //cuando se cumplren los minutos, cambia una hora, y cuando se cumple el día vuelve a empezar
    //para esto funciona el siguiente IF
    minutosLorena=minutosLorena + intervalo;
    	if(minutosLorena >=60)
      {
        minutosLorena=minutosLorena - 60;
        horasLorena=horasLorena + 1;
      }
      if(horasLorena >= 24)
      {
        horasLorena=horasLorena-24;
      }
  }
  
  //ESte largo if decide qué se debe dibujar dependiendo de la hora
  //a partir de lo que pone en cada variable, se dibuja algo diferente al
  //desayuno,medias nueves, almuerzo,onces y comida,
  if(horasLorena >= 5 && horasLorena <8)
	{
    desayuno=1;
  }
  else if(horasLorena >= 8 && horasLorena <9)
	{
    desayuno=2;
    //este pinta solo las migajas del desayuno
    
  }
  else if(horasLorena >= 9 && horasLorena <12)
	{
    mediasnueves=1;
  }
  else if(horasLorena >= 12 && horasLorena <13)
	{
    mediasnueves=2;
    //este pinta solo las migajas de la medias nueves
  }
  else if(horasLorena >= 13 && horasLorena <16)
	{
    almuerzo=1;
    
  }
  else if(horasLorena >= 16 && horasLorena <17)
	{
    almuerzo=2;
    //este pinta solo las migajas del almuerzo
   
  }
  else if(horasLorena >= 17 && horasLorena <20)
	{
    onces=1;
  }
  else if(horasLorena >= 20 && horasLorena <21)
	{
    onces=2;
    //este pinta solo las migajas de las onces
    
  }
  else if(horasLorena >=21 && horasLorena <24)
	{
    comida=1;
  
  }
  else if( horasLorena < 1)
	{
    comida=2;
    //este pinta solo las migajas de la comida
  
  }
  else if (horasLorena  <= 5)
  {
    //despu{es de la 1 am no está sino el plato, porque uno en realidad poco come a
    //esas horas
    fill(255,255,255);
  	stroke(0);
  	ellipse(668,420,448,448);
  	ellipse(668,420,350,350);
    ellipse(668,420,335,335);
  }
  
 
  //esta impresión de la consloa, es una guía, para ver en qué valor (0,1 o 2) queda cada comida del día
  print(desayuno, " " , mediasnueves, " ", almuerzo, " ", onces, " ", comida);
  
  
  //este es el if que dibuja lo predeterminado para cada comida
  if(desayuno==1)
  {
    //si es de 5 a 8 debe dibujar el desayuno
    //DESAYUNOOOOOOOOOOOO
      //HUEVO
          //elipses para hacer la clara
          fill(247,246,179,255);
          ellipse(754,343,107,150);
          ellipse(690,317,150,107);
          ellipse(700,348,110,120);
          //yema
          fill(253,187,15);
          ellipse(742,351,70,65);
      ///TOSTADA
        //parte grande
         fill(161,109,21);
         rect(496,392,149,112);
         ellipse(535,395,80,53);
         ellipse(605,395,80,53);
        //parte chiquita
         fill(245,246,141);
         rect(501,392,140,107);
         ellipse(540,400,80,50);
         ellipse(600,400,80,50);
      //KIWI
          //elipses concentricas
          fill(161,109,21);
          ellipse(718,500,110,120);
          fill(113,232,42);
          ellipse(718,500,95,105);
          fill(199,248,169);
          ellipse(718,500,42,52);
          //pepitas
          fill(0);
          strokeWeight(5);
          stroke(0);
          point(696,480);
          point(695-2,490);
          point(695-4,500);
          point(695-3,510);
          point(695-1,520);

          point(705,472);	
          point(718,470);	
          point(730,473);	

          point(696+44,480);
          point(695+46,490);
          point(695+48,500);
          point(695+47,510);
          point(695+46,520);

          point(705,528);	
          point(718,533);	
          point(730,528);	

          noStroke();
    
  }
  else if(desayuno==2)
  {
    //si es de 8 a 9 debe dibujar lo que quedó del desayuno
      //DESAYUNOOOO MIGAJAS DESPUËS DE COMEEEER
      //HUEVO
      	//mancha de la yema
        	fill(253,187,15,255);
          ellipse(722,351,20,25);
  			  ellipse(735,340,20,25);
      ///TOSTADA
        //crumbs, migajitas
         fill(245,246,141);
  			 stroke(161,109,21);
				 strokeWeight(2);
         ellipse(540,400,8,8);
         ellipse(600,400,8,8);
  			 ellipse(550,500,8,8);
         ellipse(520,450,8,8);
  			 ellipse(620,520,8,8);
  			 strokeWeight(1);
      //KIWI
          //lo que queda, cascara del kiwi
          fill(161,109,21);
          ellipse(718,500,110,120);   
          noStroke();
    		  desayuno=0;
    
    	//en esta hora, como se está acabando el deayuno, las migajas se van desapareciendo mediante
    	//el dibujo de un plato que va cogiendo opacidad mientras suben los minutos
    	fill(255,255,255,0 + (minutosLorena*3));
  		stroke(0);
  		ellipse(668,420,448,448);
  		ellipse(668,420,350,350);
   		ellipse(668,420,335,335);
  }  
  else if(mediasnueves==1)
  {
    //si es de 9 a 12  debe dibujar las medias nueves
    ///MEDIAS NUEVES
      //CHOCORAMO
  	//Fondo naranja, papelito
  	noStroke();
  	fill(238,117,37,255);
  	rect(557,325,220,135);
  	//Circulito con el chocorramo 
   	fill(108,68,53);
  	stroke(255,255,255);
  	strokeWeight(2.5);
  	ellipse(670,393,157,100);
    //Rombo rojo de arriba en donde dice ramo
  	fill(255,0,0);
  	beginShape();
    vertex(557,353);
    vertex(603,329);
    vertex(648,353);
    vertex(603,377);
    endShape(CLOSE);
  	noStroke();
  	//ellipse blanca debajo de ramo
  	fill(255,255,255);
    ellipse(602,353,56,28);
  	//LETRAS RAMO en azul e itálica
  	fill(35,110,140);
  	textStyle(ITALIC);
  	textSize(15);
		text("RAMO", 578, 358);
  	//Figurilla extraña de abajo en donde dice CHOCORAMO
  	fill(255,255,255);
  	stroke(255,0,0);
  	strokeWeight(3);
  	beginShape();
    vertex(624,420);
  	vertex(628,417);
    vertex(628,412);
    vertex(637,413);
    vertex(643,408);
    vertex(650,412);
    vertex(661,408);
    vertex(669,412);
    vertex(680,408);
    vertex(687,412);
    vertex(696,408);
  	vertex(704,412);
    vertex(712,410);
  	vertex(721,415);
  	vertex(728,412);
    vertex(733,417);
  	vertex(741,416);
  	vertex(741,420);
  	vertex(744,423);
  	vertex(740,427);
  	vertex(740,431);
  	vertex(733,432);
  	vertex(728,438);
  	vertex(719,435);
  	vertex(709,439);
  	vertex(701,435);
  	vertex(692,439);
  	vertex(683,434);
  	vertex(672,438);
  	vertex(662,434);
  	vertex(654,437);
  	vertex(646,433);
  	vertex(637,436);
  	vertex(633,431);
  	vertex(626,430);
    endShape(CLOSE);
  
  	//LETRAS CHOCORAMO en azul e itálica
  	noStroke();
  	fill(35,110,140);
  	textStyle(BOLD);
  	textSize(15);
		text("CHOCORAMO", 633, 430);
  
  ///PATILLA
  	//arco verde (fondo)
  	fill(114,234,42);
  	arc(670, 480, 220 ,180, 0, PI);
  	//arco rosadito
  	fill(248,126,229);
  	arc(670, 480, 200 ,160, 0, PI);
  	//Fors que hacen las pepas negras de la patilla
    for(numerodepepas=0; numerodepepas < 9; numerodepepas = numerodepepas + 1)
    {
      fill(0); 
      ellipse(590+(20*numerodepepas),500,8,12);
    }
    for(numerodepepas=1; numerodepepas < 9; numerodepepas = numerodepepas + 1)
    {
      fill(0); 
      ellipse(580+(20*numerodepepas),520,8,12);
    }
    for(numerodepepas=2; numerodepepas < 7; numerodepepas = numerodepepas + 1)
    {
      fill(0); 
      ellipse(590+(20*numerodepepas),540,8,12);
    }
  }
  else if(mediasnueves==2)
  {
    //si es de 12 a 13 debe dibujar el papel de las medias nueves, y lo que queda de patilla
    ///MEDIAS 9  MIGAJAS (DESPUËS DE COMER)
      //CHOCORAMO
  	//Fondo naranja, papelito
  	noStroke();
  	fill(238,117,37,255);
  	rect(557,325,220,135);
  	//Circulito ahora vacío porque se comieron el chocorramo
   	fill(255,255,255);
  	stroke(255,255,255);
  	strokeWeight(2.5);
  	ellipse(670,393,157,100);
    //Rombo rojo de arriba en donde dice ramo
  	fill(255,0,0);
  	beginShape();
    vertex(557,353);
    vertex(603,329);
    vertex(648,353);
    vertex(603,377);
    endShape(CLOSE);
  	noStroke();
  	//ellipse blanca debajo de ramo
  	fill(255,255,255);
    ellipse(602,353,56,28);
  	//LETRAS RAMO en azul e itálica
  	fill(35,110,140);
  	textStyle(ITALIC);
  	textSize(15);
		text("RAMO", 578, 358);
  	//Figurilla extraña de abajo en donde dice CHOCORAMO
  	fill(255,255,255);
  	stroke(255,0,0);
  	strokeWeight(3);
  	beginShape();
    vertex(624,420);
  	vertex(628,417);
    vertex(628,412);
    vertex(637,413);
    vertex(643,408);
    vertex(650,412);
    vertex(661,408);
    vertex(669,412);
    vertex(680,408);
    vertex(687,412);
    vertex(696,408);
  	vertex(704,412);
    vertex(712,410);
  	vertex(721,415);
  	vertex(728,412);
    vertex(733,417);
  	vertex(741,416);
  	vertex(741,420);
  	vertex(744,423);
  	vertex(740,427);
  	vertex(740,431);
  	vertex(733,432);
  	vertex(728,438);
  	vertex(719,435);
  	vertex(709,439);
  	vertex(701,435);
  	vertex(692,439);
  	vertex(683,434);
  	vertex(672,438);
  	vertex(662,434);
  	vertex(654,437);
  	vertex(646,433);
  	vertex(637,436);
  	vertex(633,431);
  	vertex(626,430);
    endShape(CLOSE);
  
  	//LETRAS CHOCORAMO en azul e itálica
  	noStroke();
  	fill(35,110,140);
  	textStyle(BOLD);
  	textSize(15);
		text("CHOCORAMO", 633, 430);
  
  ///PATILLA
  	//arco verde (fondo)
  	fill(114,234,42);
  	arc(670, 480, 220 ,180, 0, PI);
  	//arco blanco porque se lo comieron
  	fill(255,255,255);
  	arc(670, 480, 200 ,160, 0, PI);
  	//Fors que hacen las pepas negras de la patilla que ya dejaron afuera
    for(numerodepepas=0; numerodepepas < 15; numerodepepas = numerodepepas + 1)
    {
      fill(0); 
      ellipse(600+(10*numerodepepas),480,8,12);
    }
    mediasnueves=0;
    //en esta hora, como se está acabando las medias nueves, las migajas se van desapareciendo mediante
    	//el dibujo de un plato que va cogiendo opacidad mientras suben los minutos
    	fill(255,255,255,0 + (minutosLorena*3));
  		stroke(0);
  		ellipse(668,420,448,448);
  		ellipse(668,420,350,350);
   		ellipse(668,420,335,335);
    	strokeWeight(1);
  }
  else if(almuerzo==1)
  {
    //si es de 13 a 16 debe dibujar el almuerzo
    ///ALMUERZOOOOO 
    //PIZZA
    fill(239,164,37,255);
    ellipse(668,420,320,320);
    fill(178,45,28);
    ellipse(668,420,290,290);
    fill(255,217,98);
    ellipse(668,420,245,245);
    stroke(0);
    line(668,260,668,580);
    line(508,420,828,420);
    line(555,307,780,532);
    line(555,532,780,307);

    //PEPPERONI- las piezas de pizza estan numeradas en los comentarios
    //en sentido de las manecillas del reloj
    fill(208,104,49);
    stroke(178,45,28);
    strokeWeight(2.5);
     //1
    ellipse(700,350,20,20);
    ellipse(690,325,20,20);
    ellipse(689,375,20,20);
    //2
    ellipse(760,400,20,20);

    //3
    ellipse(730,450,20,20);
    //4
    ellipse(714,489,20,20);
    ellipse(680,450,20,20);

    //6
     ellipse(580,459,20,20);

    //7
     ellipse(610,390,20,20);
     ellipse(570,395,20,20);

    //8
     ellipse(630,330,20,20);
    //ANCHOAS
      //circulito de las anchoas, no tiene fill
      noFill();
      stroke(0);
      strokeWeight(3);
      //las siguientes piezas de la pizza están numeradas en el
      //orden en sentido de las manecillas del reloj
      //1
          ellipse(730,340,8,8);
          //2
         ellipse(730,400,8,8);
         ellipse(760,360,8,8);
        //3
        ellipse(765,430,8,8);
        //4
        ellipse(690,510,8,8);
        //5
        ellipse(650,480,8,8);
        ellipse(630,510,8,8);
        //6
         ellipse(620,439,8,8);
        //7
         ellipse(595,370,8,8);

    //JAMON O ALGO PARECIDO RECTANGULAR
    strokeWeight(3);
    stroke(231,130,131);
    fill(255,152,153);
    //las siguientes piezas de la pizza están numeradas en el
      //orden en sentido de las manecillas del reloj
      //2
    rect(730,370,12,10);
     //3
    rect(760,460,12,10);
    rect(700,430,12,10);
    //4
    rect(675,475,12,10);
    //5
    rect(635,455,12,10);
    rect(620,485,12,10);
    rect(645,520,12,10);
    //6
    rect(595,435,12,10);
    //7
    rect(570,355,12,10);
    //8
    rect(635,355,12,10);
    rect(648,380,12,10);
    rect(645,315,12,10);

     noStroke();
    strokeWeight(1);
  }
  else if(almuerzo==2)
  {
    //si es de 16 a 17 debe dibujar las migajas que quedaron de la pizza
      
  ///ALMUERZOOOOO MIGAJASSS
    //mancha de salsa
    fill(178,45,28,255);
    ellipse(668,420,30,30);
    //PEPPERONII
  	fill(208,104,49);
    stroke(178,45,28);
    strokeWeight(2.5);
    ellipse(700,350,20,20);
    
    ellipse(760,400,20,20);

     ellipse(630,330,20,20);
    //ANCHOAS
      //circulito de las anchoas, no tiene fill
      noFill();
      stroke(0);
      strokeWeight(3);
        ellipse(690,510,8,8);
      
        ellipse(630,510,8,8);
    //JAMON O ALGO PARECIDO RECTANGULAR
    strokeWeight(3);
    stroke(231,130,131);
    fill(255,152,153);

    rect(675,475,12,10);
    rect(620,485,12,10);
     noStroke();
    strokeWeight(1);
 		almuerzo=0;
    //en esta hora, como se está acabando el almuerzo, las migajas se van desapareciendo mediante
    	//el dibujo de un plato que va cogiendo opacidad mientras suben los minutos
    	fill(255,255,255,0 + (minutosLorena*3));
  		stroke(0);
  		ellipse(668,420,448,448);
  		ellipse(668,420,350,350);
   		ellipse(668,420,335,335);
    strokeWeight(1);
  }
  else if(onces==1)
  {
    //si es de 17 a 20 debe dibujar las onces de la tarde que en este caso es solo
    // un chocorramo
    ///ONCES POR LA TARDEE
      //CHOCORAMO
  	//Fondo naranja, papelito
  	noStroke();
  	fill(238,117,37,255);
  	rect(557,325+ 20,220,135);
  	//Circulito con el chocorramo 
   	fill(108,68,53);
  	stroke(255,255,255);
  	strokeWeight(2.5);
  	ellipse(670,393+ 20,157,100);
    //Rombo rojo de arriba en donde dice ramo
  	fill(255,0,0);
  	beginShape();
    vertex(557,353+ 20);
    vertex(603,329+ 20);
    vertex(648,353+ 20);
    vertex(603,377+ 20);
    endShape(CLOSE);
  	noStroke();
  	//ellipse blanca debajo de ramo
  	fill(255,255,255);
    ellipse(602,353+ 20,56,28);
  	//LETRAS RAMO en azul e itálica
  	fill(35,110,140);
  	textStyle(ITALIC);
  	textSize(15);
		text("RAMO", 578, 358+ 20);
  	//Figurilla extraña de abajo en donde dice CHOCORAMO
  	fill(255,255,255);
  	stroke(255,0,0);
  	strokeWeight(3);
  	beginShape();
    vertex(624,420+ 20);
  	vertex(628,417+ 20);
    vertex(628,412+ 20);
    vertex(637,413+ 20);
    vertex(643,408+ 20);
    vertex(650,412+ 20);
    vertex(661,408+ 20);
    vertex(669,412+ 20);
    vertex(680,408+ 20);
    vertex(687,412+ 20);
    vertex(696,408+ 20);
  	vertex(704,412+ 20);
    vertex(712,410+ 20);
  	vertex(721,415+ 20);
  	vertex(728,412+ 20);
    vertex(733,417+ 20);
  	vertex(741,416+ 20);
  	vertex(741,420+ 20);
  	vertex(744,423+ 20);
  	vertex(740,427+ 20);
  	vertex(740,431+ 20);
  	vertex(733,432+ 20);
  	vertex(728,438+ 20);
  	vertex(719,435+ 20);
  	vertex(709,439+ 20);
  	vertex(701,435+ 20);
  	vertex(692,439+ 20);
  	vertex(683,434+ 20);
  	vertex(672,438+ 20);
  	vertex(662,434+ 20);
  	vertex(654,437+ 20);
  	vertex(646,433+ 20);
  	vertex(637,436+ 20);
  	vertex(633,431+ 20);
  	vertex(626,430+ 20);
    endShape(CLOSE);
  
  	//LETRAS CHOCORAMO en azul e itálica
  	noStroke();
  	fill(35,110,140);
  	textStyle(BOLD);
  	textSize(15);
		text("CHOCORAMO", 633, 430 + 20);
    strokeWeight(1);
  }
  else if(onces==2)
  {
    //si es de 20 a 21 debe dibujar solo el papel del chocorramo
    //ONCES POR LA TARDEE PAPEL DEL CHOCORAMO
      //CHOCORAMO (solo el papelitoo)
  	//Fondo naranja, papelito
  	noStroke();
  	fill(238,117,37,255);
  	rect(557,325+ 20,220,135);
  	//Circulito, esta vez SIN EL CHOCORAMO
   	fill(255,255,255);
  	stroke(255,255,255);
  	strokeWeight(2.5);
  	ellipse(670,393+ 20,157,100);
    //Rombo rojo de arriba en donde dice ramo
  	fill(255,0,0);
  	beginShape();
    vertex(557,353+ 20);
    vertex(603,329+ 20);
    vertex(648,353+ 20);
    vertex(603,377+ 20);
    endShape(CLOSE);
  	noStroke();
  	//ellipse blanca debajo de ramo
  	fill(255,255,255);
    ellipse(602,353+ 20,56,28);
  	//LETRAS RAMO en azul e itálica
  	fill(35,110,140);
  	textStyle(ITALIC);
  	textSize(15);
		text("RAMO", 578, 358+ 20);
  	//Figurilla extraña de abajo en donde dice CHOCORAMO
  	fill(255,255,255);
  	stroke(255,0,0);
  	strokeWeight(3);
  	beginShape();
    vertex(624,420+ 20);
  	vertex(628,417+ 20);
    vertex(628,412+ 20);
    vertex(637,413+ 20);
    vertex(643,408+ 20);
    vertex(650,412+ 20);
    vertex(661,408+ 20);
    vertex(669,412+ 20);
    vertex(680,408+ 20);
    vertex(687,412+ 20);
    vertex(696,408+ 20);
  	vertex(704,412+ 20);
    vertex(712,410+ 20);
  	vertex(721,415+ 20);
  	vertex(728,412+ 20);
    vertex(733,417+ 20);
  	vertex(741,416+ 20);
  	vertex(741,420+ 20);
  	vertex(744,423+ 20);
  	vertex(740,427+ 20);
  	vertex(740,431+ 20);
  	vertex(733,432+ 20);
  	vertex(728,438+ 20);
  	vertex(719,435+ 20);
  	vertex(709,439+ 20);
  	vertex(701,435+ 20);
  	vertex(692,439+ 20);
  	vertex(683,434+ 20);
  	vertex(672,438+ 20);
  	vertex(662,434+ 20);
  	vertex(654,437+ 20);
  	vertex(646,433+ 20);
  	vertex(637,436+ 20);
  	vertex(633,431+ 20);
  	vertex(626,430+ 20);
    endShape(CLOSE);
  
  	//LETRAS CHOCORAMO en azul e itálica
  	noStroke();
  	fill(35,110,140);
  	textStyle(BOLD);
  	textSize(15);
		text("CHOCORAMO", 633, 430 + 20);
    //en esta hora, como se están acabando las onces, las migajas se van desapareciendo mediante
    	//el dibujo de un plato que va cogiendo opacidad mientras suben los minutos
    	fill(255,255,255,0 + (minutosLorena*3));
  		stroke(0);
  		ellipse(668,420,448,448);
  		ellipse(668,420,350,350);
   		ellipse(668,420,335,335);
    	onces=0;
  }
  else if(comida==1)
  {
    strokeWeight(1);
    //si es de 21 a 24 debe dibujar la comida o cena
    ///COMIDA POR LA NOCHEEEE  
    //ARVEJAS

    for(arvejasY=5;arvejasY>0;arvejasY=arvejasY-1)
      {
        fill(148,179,100,255);
      stroke(36,91,10);
      strokeWeight(3);
      ellipse(515,410 - (arvejasY *15) ,20,20);
      }

    for(arvejas=0;arvejas<5;arvejas=arvejas+1)
    {
      fill(148,179,100);
      stroke(36,91,10);
      strokeWeight(3);
      ellipse(635 + (arvejas *15),260 ,20,20);
    }

    for(arvejas=0;arvejas<9;arvejas=arvejas+1)
    {
      fill(148,179,100);
      stroke(36,91,10);
      strokeWeight(3);
      ellipse(575 + (arvejas *15),275 ,20,20);
    }

    for(arvejas=0;arvejas<12;arvejas=arvejas+1)
    {
      for(arvejasY=8;arvejasY>0;arvejasY=arvejasY-1)
      {
        fill(148,179,100);
      stroke(36,91,10);
      strokeWeight(3);
      ellipse(530 + (arvejas *15),410 - (arvejasY *15) ,20,20);
      }
    }

    strokeWeight(1);

    //CARNE en forma de hambuerguesitas 1
    //hmburguesita de bien abajo 
    fill(134,82,30);
    ellipse(675-30,533-95,115,115);
    fill(172,104,58);
    ellipse(670-30,530-95,105,105);
    strokeWeight(3);
    stroke(134,82,30);
    line(620,400,620,470);
    line(670,400,670,470);
    line(645,400,645,470);
    line(610,425,685,425);
    line(610,445,685,445);
    strokeWeight(1);

    //haburguesita 1
    fill(134,82,30);
    ellipse(675,533,115,115);
    fill(172,104,58);
    ellipse(670,530,105,105);
    strokeWeight(3);
    stroke(134,82,30);
    line(620+30,400+95,620+30,470+95);
    line(670+30,400+95,670+30,470+95);
    line(645+30,400+95,645+30,470+95);
    line(610+30,425+95,685+30,425+95);
    line(610+30,445+95,685+30,445+95);
    strokeWeight(1);

    //hmburguesita 2
    fill(134,82,30);
    ellipse(675-100,533-15,115,115);
    fill(172,104,58);
    ellipse(670-100,530-15,105,105);
    strokeWeight(3);
    stroke(134,82,30);
    line(620-70,400+80,620-70,470+80);
    line(670-70,400+80,670-70,470+80);
    line(645-70,400+80,645-70,470+80);
    line(610-70,425+80,685-70,425+80);
    line(610-70,445+80,685-70,445+80);
    strokeWeight(1);

    //hmburguesita 3
    fill(134,82,30);
    ellipse(675-130,533-95,115,115);
    fill(172,104,58);
    ellipse(670-130,530-95,105,105);
    strokeWeight(3);
    stroke(134,82,30);
    line(620-100,400,620-100,470);
    line(670-100,400,670-100,470);
    line(645-100,400,645-100,470);
    line(610-100,425,685-100,425);
    line(610-100,445,685-100,445);
    strokeWeight(1);

    //AGUACATICOOOO
    noStroke(0);
    fill(122,160,66);
    ellipse(770,410,145,215);
    fill(227,228,63);
    stroke(138,187,83);
    strokeWeight(5);
    ellipse(770,410,130,200);

    noStroke();
    fill(160,108,67);
    ellipse(770,410,62,95);
    strokeWeight(1);
  }
  else if(comida==2)
  {
    //si es de las 00 dibujar solo las migas de comida, a la una
    //se desaparece la comdia
    ///MIGAS COMIDA POR LA NOCHEEE 
    //ARVEJAS

  		fill(148,179,100,255);
      stroke(36,91,10);
      strokeWeight(3);
    
      ellipse(515,410 ,20,20);
      ellipse(635 ,260 ,20,20);
      ellipse(575 ,275 ,20,20);
		  ellipse(530 ,410  ,20,20);
    
    //AGUACATICOOOO la pepish que no se comee
   
    noStroke();
    fill(160,108,67);
    ellipse(770,410,62,95);
    strokeWeight(1);
    //en esta hora, como se está acabando la comida, las migajas se van desapareciendo mediante
    	//el dibujo de un plato que va cogiendo opacidad mientras suben los minutos
    	fill(255,255,255,0 + (minutosLorena*3));
  		stroke(0);
  		ellipse(668,420,448,448);
  		ellipse(668,420,350,350);
   		ellipse(668,420,335,335);
    comida=0;

  }

  
}