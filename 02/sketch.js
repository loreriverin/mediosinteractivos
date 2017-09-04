function setup() { 
  createCanvas(680, 280);
  
  //rectanguo cafe linea 4
  	noStroke();
  	fill(156,105,62);
  	beginShape();
  	vertex(0,60);
  	vertex(680,60);
  	vertex(680,92.5);
  	vertex(0,92.5);
  	endShape(CLOSE);
  
  //semicirculos amarillos chiquis
	for(var posXsemicirrosa = 176 ;posXsemicirrosa >= 176 && posXsemicirrosa < 506; posXsemicirrosa = posXsemicirrosa + 28)
  {
	noStroke();
  fill(247,200,90);
	ellipse(posXsemicirrosa, 62, 31 , 18);
  }
  
  //rectàngulos amarillos chiquis
	for(var posXrectama = 23 ;posXrectama > 20 && posXrectama < 161; posXrectama = posXrectama + 55)
  {
	noStroke();
  fill(247,200,90);
	rect(posXrectama,60,28,10);
  }
  for(var posXrectama = 499 ;posXrectama >= 499 && posXrectama < 680; posXrectama = posXrectama + 60)
  {
	noStroke();
  fill(247,200,90);
	rect(posXrectama,60,28,10);
  }
  
  //rectàngulo fondo amarillo linea 3
  	noStroke();
  	fill(242,139,2);
  	beginShape();
  	vertex(0,40);
  	vertex(680,40);
  	vertex(680,60);
  	vertex(0,60);
  	endShape(CLOSE);
  
  //semicirculos rosaditos
	for(var posXsemicirrosa = 176 ;posXsemicirrosa >= 176 && posXsemicirrosa < 506; posXsemicirrosa = posXsemicirrosa + 28)
  {
	noStroke();
  fill(242,215,194);
	ellipse(posXsemicirrosa, 45, 31, 30);
  }
  
  //rectàngulos rosaditos
	for(var posXrectrosa = 23 ;posXrectrosa > 20 && posXrectrosa < 161; posXrectrosa = posXrectrosa + 55)
  {
	noStroke();
  fill(242,215,194);
	rect(posXrectrosa,40,28,20);
  }
  
  for(var posXrectrosa = 499 ;posXrectrosa >= 499 && posXrectrosa < 680; posXrectrosa = posXrectrosa + 60)
  {
	noStroke();
  fill(242,215,194);
	rect(posXrectrosa,40,28,20);
  }
	
  //rectangulo fondo azul 1
  	noStroke();
  	fill(60,35,40);
  	beginShape();
  	vertex(0,20);
  	vertex(680,20);
  	vertex(680,40);
  	vertex(0,40);
  	endShape(CLOSE);
  
  //semicirculos cafes
	for(var posXsemicir = 176 ;posXsemicir >= 176 && posXsemicir < 506; posXsemicir = posXsemicir + 28)
  {
	noStroke();
  fill(177,125,86);
	ellipse(posXsemicir, 25, 31, 30);
  }
  
  //rectàngulos cafes 
	for(var posXrectcafe = 23 ;posXrectcafe > 20 && posXrectcafe < 161; posXrectcafe = posXrectcafe + 55)
  {
	noStroke();
  fill(177,125,86);
	rect(posXrectcafe,20,28,20);
  }
  
  for(var posXrectcafe = 499 ;posXrectcafe >= 499 && posXrectcafe < 680; posXrectcafe = posXrectcafe + 60)
  {
	noStroke();
  fill(177,125,86);
	rect(posXrectcafe,20,28,20);
  }
 

  //rectangulo fondo rosadhish 1
  	noStroke();
  	fill(243,213,168);
  	beginShape();
  	vertex(0,0);
  	vertex(0,20);
  	vertex(680,20);
  	vertex(680,0);
  	endShape(CLOSE);
  
  //circulos rojos 
  
  for(var posXcirculos = -17 ;posXcirculos < 161; posXcirculos = posXcirculos + 58)
  {
	noStroke();
  fill(193,47,22);
	ellipse(posXcirculos, 11, 10, 10);
  }
  
  
  for(var posXcirculos = 514 ;posXcirculos >= 514 && posXcirculos < 680 ; posXcirculos = posXcirculos + 58)
  {
	noStroke();
  fill(193,47,22);
	ellipse(posXcirculos, 11, 10, 10);
  }
  
  //rayas naranjas
  for(posYlinea = 92.5; posYlinea >=92.5 && posYlinea < 110;posYlinea = posYlinea + 3.5)
  {
   	strokeWeight(2);
    stroke(175,65,4);
    line(161,posYlinea,505,posYlinea);
  }
  
  //rectangulos fondo naranja linea 5
  	noStroke();
  	fill(175,65,4);
  	beginShape();
  	vertex(0,75);
  	vertex(161,75);
  	vertex(161,110);
  	vertex(0,110);
  	endShape(CLOSE);
  
  	beginShape();
  	vertex(505,75);
  	vertex(680,75);
  	vertex(680,110);
  	vertex(505,110);
  	endShape(CLOSE);
  
  //rombos naranjas
  noStroke();
  	fill(175,65,4);
  
  for(var vertice1 = 130; vertice1>=130 && vertice1 < 506; vertice1 = vertice1 + 58)
	{
  	beginShape();
  	vertex((vertice1+29),75);
    vertex((vertice1+58),92.5);
  	vertex((vertice1+29),110);
  	vertex(vertice1,92.5);
  	endShape(CLOSE);
    
  }
  
  //rectangulos fondo azulea 6
  	noStroke();
  	fill(155,156,184);
  	beginShape();
  	vertex(0,110);
  	vertex(506,110);
  	vertex(506,120);
  	vertex(0,120);
  	endShape(CLOSE);
 
  //rectangulo fondo amarillento linea 7
  	noStroke();
  	fill(233,162,43);
  	beginShape();
  	vertex(0,120);
  	vertex(506,120);
  	vertex(506,130);
  	vertex(0,130);
  	endShape(CLOSE);
  //figuro roja rara
  
    for(var verticeama = 159; verticeama>=159 && verticeama < 500; verticeama = verticeama + 60)
	{
    noStroke();
    fill(195,2,2);
  	beginShape();
  	vertex((verticeama),110);
  	vertex((verticeama),120);
    vertex((verticeama+30),130);
    vertex((verticeama+60),120);
    vertex((verticeama+60),110);
  	vertex((verticeama+30),120);
  	endShape(CLOSE);  
  }
  
  //rectangulos amarillo y azul linea 6 y 7 para cubrir linea roja rara
  	noStroke();
  	fill(155,156,184);
  	beginShape();
  	vertex(506,110);
  	vertex(680,110);
  	vertex(680,120);
  	vertex(506,120);
  	endShape(CLOSE);

  	noStroke();
  	fill(233,162,43);
  	beginShape();
  	vertex(506,120);
  	vertex(680,120);
  	vertex(680,130);
  	vertex(506,130);
  	endShape(CLOSE);
  
  //rectangulo fondo rosadish linea 8
  	noStroke();
  	fill(230,188,141);
  	beginShape();
  	vertex(0,130);
  	vertex(680,130);
  	vertex(680,145);
  	vertex(0,145);
  	endShape(CLOSE);
  
  //rectangulo fondo raro linea 9
  	noStroke();
  	fill(229,223,230);
  	beginShape();
  	vertex(0,145);
  	vertex(680,145);
  	vertex(680,170);
  	vertex(0,170);
  	endShape(CLOSE);
  
  
  //triangulos fondo raro
  for(var verticeama = 159; verticeama>=159 && verticeama < 500; verticeama = verticeama + 60)
	{
    noStroke();
    fill(229,223,230);
  	beginShape();
  	vertex((verticeama+30),130);
  	vertex((verticeama+60),145);
  	vertex(verticeama,145);
  	endShape(CLOSE);  
  }
  
  //rayas rojas
  for(posYlinea = 155; posYlinea >=155 && posYlinea < 163;posYlinea = posYlinea + 3)
  {
   	strokeWeight(1.5);
    stroke(201,14,47);
    line(0,posYlinea,150,posYlinea);
    line(510,posYlinea,680,posYlinea);
  }
  
  //circulos rojos
  for(var centrorojox = 206; centrorojox>=206 && centrorojox < 327; centrorojox = centrorojox + 60)
	{
  	noStroke();
    fill(201,14,47);
    ellipse(centrorojox, 158, 10, 10) 
  }
  
  for(var centrorojox = 341; centrorojox>=341 && centrorojox < 507; centrorojox = centrorojox + 60)
	{
  	noStroke();
    fill(201,14,47);
    ellipse(centrorojox, 158, 10, 10) 
  }
  
  
  //rectangulo fondo rosadito linea 10
  	noStroke();
  	fill(221, 190,162);
  	beginShape();
  	vertex(0,170);
  	vertex(680,170);
  	vertex(680,195);
  	vertex(0,195);
  	endShape(CLOSE);
  
  //triangulos amarillos
  for(var verticeama = 333; verticeama<=333 && verticeama > 179; verticeama = verticeama - 30)
	{
    noStroke();
    fill(241,176,0);
  	beginShape();
  	vertex((verticeama-30),170);
  	vertex((verticeama-30),195);
  	vertex(verticeama,195);
  	endShape(CLOSE);  
  }
  
  for(var verticeama = 333; verticeama>=333 && verticeama < 500; verticeama = verticeama + 30)
	{
    noStroke();
    fill(241,176,0);
  	beginShape();
  	vertex((verticeama+30),170);
  	vertex((verticeama+30),195);
  	vertex(verticeama,195);
  	endShape(CLOSE);  
  }
  
  //rectangulo fondo amarillo verdoso linea 11
  	noStroke();
  	fill(208,178,67);
  	beginShape();
  	vertex(0,195);
  	vertex(680,195);
  	vertex(680,225);
  	vertex(0,225);
  	endShape(CLOSE);
  
  //triangulos amarillos
  for(var verticerosa = 333; verticerosa<=333 && verticerosa > 179; verticerosa = verticerosa- 30)
	{
    noStroke();
    fill(237,204,169);
  	beginShape();
  	vertex((verticerosa-30),195);
  	vertex((verticerosa-30),225);
  	vertex(verticerosa,225);
  	endShape(CLOSE);  
  }
  
  for(var verticerosa = 333; verticerosa>=333 && verticerosa < 500; verticerosa = verticerosa + 30)
	{
    noStroke();
    fill(237,204,169);
  	beginShape();
  	vertex((verticerosa+30),195);
  	vertex((verticerosa+30),225);
  	vertex(verticerosa,225);
  	endShape(CLOSE);  
  }
  
  //rectangulo fondo verde linea 12
  	noStroke();
  	fill(22,119,83);
  	beginShape();
  	vertex(0,225);
  	vertex(680,225);
  	vertex(680,245);
  	vertex(0,245);
  	endShape(CLOSE);
  
  //triangulos azules
  for(var verticeazul = 333; verticeazul<=333 && verticeazul> 179; verticeazul = verticeazul- 30)
	{
    noStroke();
    fill(20,140,177);
  	beginShape();
  	vertex((verticeazul-30),245);
  	vertex((verticeazul-30),225);
  	vertex(verticeazul,245);
  	endShape(CLOSE);  
  }
  
  for(var verticeazul = 333; verticeazul>=333 && verticeazul < 500; verticeazul = verticeazul + 30)
	{
    noStroke();
    fill(20,140,177);
  	beginShape();
  	vertex((verticeazul+30),245);
  	vertex((verticeazul+30),225);
  	vertex(verticeazul,245);
  	endShape(CLOSE);  
  }
  //rectangulos azules
  //rectàngulos amarillos chiquis
	for(var posXrectazul = 21 ;posXrectazul >= 21 && posXrectazul < 150; posXrectazul = posXrectazul + 27)
  {
	noStroke();
  fill(20,140,177);
	rect(posXrectazul,225,9,10);
  }
  for(var posXrectazul = 522 ;posXrectazul >= 522 && posXrectazul < 680; posXrectazul = posXrectazul + 30)
  {
	noStroke();
  fill(20,140,177);
	rect(posXrectazul,225,10,10);
  }
  
  for(var posXrectazul = 0 ;posXrectazul >= 0 && posXrectazul < 161; posXrectazul = posXrectazul + 27)
  {
	noStroke();
  fill(20,140,177);
	rect(posXrectazul,235,10,10);
  }
  for(var posXrectazul = 515 ;posXrectazul >= 515 && posXrectazul < 680; posXrectazul = posXrectazul + 29)
  {
	noStroke();
  fill(20,140,177);
	rect(posXrectazul,235,9,10);
  }
  
  
  //rectangulos rojas fondo linea 13
  noStroke();
  fill(166,19,1);
	beginShape();
  vertex(0,245);
  vertex(680,245);
  vertex(680,255);
  vertex(0,255);
  endShape(CLOSE);
  
  
  //rectangulo rosadish fondo linea 13
  noStroke();
  fill(238,219,203);
	beginShape();
  vertex(150,245);
  vertex(506,245);
  vertex(506,255);
  vertex(150,255);
  endShape(CLOSE);
  
  //cuadraditos amarilloa
  for(var chiquisamarilloX = 176 ;chiquisamarilloX >= 176 && chiquisamarilloX < 310; chiquisamarilloX = chiquisamarilloX + 58)
  {
	noStroke();
  fill(222,158,60);
	rect(chiquisamarilloX,245,10,10);
  }
  for(var chiquisamarilloX = 362 ;chiquisamarilloX >= 362 && chiquisamarilloX < 500; chiquisamarilloX = chiquisamarilloX + 59)
  {
	noStroke();
  fill(222,158,60);
	rect(chiquisamarilloX,245,10,10);
  }
  //rectangulos rosadish fondo linea 14
  noStroke();
  fill(238,219,203);
	beginShape();
  vertex(0,255);
  vertex(680,255);
  vertex(680,265);
  vertex(0,265);
  endShape(CLOSE);
  
  
  //rectangulo amarillo fondo linea 14
  noStroke();
  fill(222,158,60);
	beginShape();
  vertex(150,255);
  vertex(506,255);
  vertex(506,265);
  vertex(150,265);
  endShape(CLOSE);
  
  //cuadraditos rosaditos
  for(var chiquisrosadoX = 176 ;chiquisrosadoX >= 176 && chiquisrosadoX < 310; chiquisrosadoX = chiquisrosadoX + 58)
  {
	noStroke();
  fill(238,219,203);
	rect(chiquisrosadoX,255,10,10);
  }
  for(var chiquisrosadoX = 362 ;chiquisrosadoX >= 362 && chiquisrosadoX < 500; chiquisrosadoX = chiquisrosadoX + 59)
  {
	noStroke();
  fill(238,219,203);
	rect(chiquisrosadoX,255,10,10);
  }
  
  //rectangulos rosado fondo linea 15
  noStroke();
  fill(232,131,101);
	beginShape();
  vertex(0,265);
  vertex(680,265);
  vertex(680,275);
  vertex(0,275);
  endShape(CLOSE);
  
  
  //rectangulo morado fondo linea 15
  noStroke();
  fill(188,114,139);
	beginShape();
  vertex(155,265);
  vertex(506,265);
  vertex(506,275);
  vertex(155,275);
  endShape(CLOSE);
  
  //cuadraditos rosaditos
  for(var chiquisrosadoX = 176 ;chiquisrosadoX >= 176 && chiquisrosadoX < 330; chiquisrosadoX = chiquisrosadoX + 29)
  {
	noStroke();
  fill(218,167,130);
	rect(chiquisrosadoX,265,10,10);
  }
  for(var chiquisrosadoX = 331.5 ;chiquisrosadoX >= 331.5 && chiquisrosadoX < 500; chiquisrosadoX = chiquisrosadoX + 30)
  {
	noStroke();
  fill(218,167,130);
	rect(chiquisrosadoX,265,10,10);
  }
  
  //triangulos morados
  for(var verticemini = -10; verticemini>=-10 && verticemini < 150; verticemini = verticemini + 30)
	{
    noStroke();
    fill(188,114,139);
  	beginShape();
  	vertex((verticemini+15),275);
  	vertex((verticemini),275);
  	vertex(verticemini,265);
  	endShape(CLOSE);  
  }
  
  for(var verticemini = 525; verticemini>=525 && verticemini < 680; verticemini = verticemini + 30)
	{
    noStroke();
    fill(188,114,139);
  	beginShape();
  	vertex((verticemini+15),275);
  	vertex((verticemini),275);
  	vertex((verticemini+15),265);
  	endShape(CLOSE);  
  }
  
  
  //lineas rosadas verticales
  for(var posXverticales = 11 ;posXverticales >= 11 && posXverticales < 161; posXverticales = posXverticales + 55)
  {
	noStroke();
  fill(245,213,166);
	rect(posXverticales,75,10,190);
  }

  for(var posXverticales = 530 ;posXverticales >= 530 && posXverticales < 680; posXverticales = posXverticales + 60)
  {
	noStroke();
  fill(245,213,166);
	rect(posXverticales,75,10,190);
  }
  //lineas negras verticales
  for(var posXverticalesnegras = 36 ;posXverticalesnegras >= 36 && posXverticalesnegras < 161; posXverticalesnegras = posXverticalesnegras + 55)
  {
	noStroke();
  fill(23,36,39);
	rect(posXverticalesnegras,130,10,135);
  }
  
  for(var posXverticalesnegras = 506 ;posXverticalesnegras >= 506 && posXverticalesnegras < 680; posXverticalesnegras = posXverticalesnegras + 58)
  {
	noStroke();
  fill(23,36,39);
	rect(posXverticalesnegras,130,10,135);
  }
  
  
} 

