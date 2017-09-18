
function setup() { 
  createCanvas(400, 400); 
} 

function draw() { 
  background(255,255,255);
  
  //el tiempo se guarda en la variable tiempo (milisegundos)
  var tiempo = millis();
  
  //mini introducción
  //cicurlo rojo que se desvanece
  if ( tiempo > 400 && tiempo <  6000) 
  { 
    noStroke();
    fill(255,0,0,255-(tiempo/20));
    ellipse (200,200,(tiempo/8) ,(tiempo/8));
    
  }
  //circulos amarillos centro
  if (tiempo > 700 && tiempo <  3300 )
  {
    stroke(0);
    fill(255,255,0);
    ellipse (185,215,30,30);
  }
  
   if (tiempo > 1100 && tiempo < 3300 )
  {
    fill(255,255,0);
    ellipse (215,215,30,30);
  }
    if (tiempo > 1500 && tiempo <  3300 )
  {
    fill(255,255,0);
    ellipse (200,190,30,30);
  }
  
  //circulos amarillos al rededor
   if (tiempo > 1900 && tiempo < 3300 )
  {
    fill(255,255,0);
    ellipse (200,80,30,30);
  }
   if (tiempo > 2300 && tiempo <  3300 )
  {
    fill(255,255,0);
    ellipse (60,215,30,30);
  }
   if (tiempo > 2700 && tiempo <  3300 )
  {
    fill(255,255,0);
    ellipse (200,340,30,30);
  }
   if (tiempo > 3100 && tiempo <  3300 )
  {
    fill(255,255,0);
    ellipse (340,215,30,30);
  }
  
  //fondo negro que se agranda rectangulo
  rectMode(CORNER);
  if (tiempo > 3300 && tiempo < 30000)
  {
  fill(0,0,0,100);
  rect(0,400,1 + (tiempo/32), 1 - (tiempo/32));
  }
  
  //circulillos naranjas primera vez (ta ta ta)
  
   if (tiempo > 3300 && tiempo <  4500 )
  {
    fill(255, 153, 51);
    ellipse (50 + (tiempo/60), 450 - (tiempo/60) ,50 - (tiempo/250) ,50 - (tiempo/250));
  }
  if (tiempo > 3600 && tiempo <  4500 )
  {
    fill(255, 153, 51);
    ellipse (100+ (tiempo/60),450 - (tiempo/60),50 - (tiempo/250),50 - (tiempo/250));
  }
  if (tiempo > 3900 && tiempo <  4500 )
  {
    fill(255, 153, 51);
    ellipse (150+ (tiempo/60),450 - (tiempo/60),50 - (tiempo/250),50 - (tiempo/250));
  }
  
  
  //circulillos naranjas segunda vez
   if (tiempo > 4200 && tiempo <  5400 )
  {
    fill(255, 153, 51);
    ellipse (50 + (tiempo/100), 380 - (tiempo/100) ,50 - (tiempo/300) ,50 - (tiempo/300));
  }
  if (tiempo > 4500 && tiempo <  5400 )
  {
    fill(255, 153, 51);
    ellipse (100+ (tiempo/100),380 - (tiempo/100),50 - (tiempo/300),50 - (tiempo/300));
  }
  if (tiempo > 4800 && tiempo <  5400 )
  {
    fill(255, 153, 51);
    ellipse (150+ (tiempo/100),380 - (tiempo/100),50 - (tiempo/300),50 - (tiempo/300));
  }
    
  //circulillos naranjas tercera vez
   if (tiempo > 5100 && tiempo <  7000 )
  {
    fill(255, 153, 51);
    ellipse (0 + (tiempo/120), 350 - (tiempo/120) ,50 - (tiempo/350) ,50 - (tiempo/350));
  }
  if (tiempo > 5400 && tiempo <  7000 )
  {
    fill(255, 153, 51);
    ellipse (50+ (tiempo/120),350 - (tiempo/120),50 - (tiempo/350),50 - (tiempo/350));
  }
  if (tiempo > 5600 && tiempo <  7000 )
  {
    fill(255, 153, 51);
    ellipse (100+ (tiempo/120),350 - (tiempo/120),50 - (tiempo/350),50 - (tiempo/350));
  }
   if (tiempo > 5800 && tiempo <  7000 )
  {
    fill(255, 153, 51);
    ellipse (150+ (tiempo/120),350 - (tiempo/120),50 - (tiempo/350),50 - (tiempo/350));
  }
  if (tiempo > 6000 && tiempo <  7000 )
  {
    fill(255, 153, 51);
    ellipse (200+ (tiempo/120),350 - (tiempo/120),50 - (tiempo/350),50 - (tiempo/350));
  }
  
  if (tiempo > 6100 && tiempo <  7000 )
  {
    fill(255, 153, 51);
    ellipse (200+ (tiempo/120),350 - (tiempo/120),50 - (tiempo/350),50 - (tiempo/350));
  }
  
  
  //circulillos tres otra vez, cuarta vez (amarillooo)
	if (tiempo > 6200 && tiempo <  9000 )
  {
    fill(255, 255, 51);
    ellipse (50+ (tiempo/140),300 - (tiempo/140),50 - (tiempo/400),50 - (tiempo/400));
  }
  if (tiempo > 6400 && tiempo <  9000 )
  {
    fill(255, 255, 51);
    ellipse (100+ (tiempo/140),300 - (tiempo/140),50 - (tiempo/400),50 - (tiempo/400));
  }
  if (tiempo > 6600 && tiempo <  9000 )
  {
    fill(255, 255, 51);
    ellipse (150+ (tiempo/140),300 - (tiempo/140),50 - (tiempo/400),50 - (tiempo/400));
  }
  
  //circulillos tres otra vez, quinta vez (amarillooo segunda)
	if (tiempo > 6900 && tiempo <  9000 )
  {
    fill(255, 255, 51);
    ellipse (100+ (tiempo/160),250 - (tiempo/160),50 - (tiempo/450),50 - (tiempo/450));
  }
  if (tiempo > 7100 && tiempo <  9000 )
  {
    fill(255, 255, 51);
    ellipse (150+ (tiempo/160),250 - (tiempo/160),50 - (tiempo/450),50 - (tiempo/450));
  }
  if (tiempo > 7300 && tiempo <  9000 )
  {
    fill(255, 255, 51);
    ellipse (200+ (tiempo/160),250 - (tiempo/160),50 - (tiempo/450),50 - (tiempo/450));
  }
  
  //circulillos tres otra vez, sexta vez (amarillooo tercera)
	if (tiempo > 7600 && tiempo <  9000 )
  {
    fill(255, 255, 51);
    ellipse (150+ (tiempo/200),200- (tiempo/180),50 - (tiempo/500),50 - (tiempo/500));
  }
  if (tiempo > 7800 && tiempo <  9000 )
  {
    fill(255, 255, 51);
    ellipse (200+ (tiempo/200),200- (tiempo/180),50 - (tiempo/500),50 - (tiempo/500));
  }
  if (tiempo > 8000 && tiempo <  9000 )
  {
    fill(255, 255, 51);
    ellipse (250+ (tiempo/200),200- (tiempo/180),50 - (tiempo/500),50 - (tiempo/500));
  }
  
  //circulos varios amarillos, septima vez (amarillo cuarta)
  
   if (tiempo > 8300 && tiempo <  10000 )
  {
    fill(255, 255, 51);
    ellipse (50 + (tiempo/220), 150-(tiempo/220) ,50 - (tiempo/550) ,50 - (tiempo/550));
  }
  if (tiempo > 8600 && tiempo <  10000 )
  {
    fill(255, 255, 51);
    ellipse (100+ (tiempo/220),150 - (tiempo/220),50 - (tiempo/550),50 - (tiempo/550));
  }
  if (tiempo > 8800 && tiempo <  10000 )
  {
    fill(255, 255, 51);
    ellipse (150+ (tiempo/220),150 - (tiempo/220),50 - (tiempo/550),50 - (tiempo/550));
  }
   if (tiempo > 9000 && tiempo <  10000 )
  {
    fill(255, 255, 51);
    ellipse (200+ (tiempo/220),150 - (tiempo/220),50 - (tiempo/550),50 - (tiempo/550));
  }
  if (tiempo > 9200 && tiempo <  10000 )
  {
    fill(255, 255, 51);
    ellipse (250+ (tiempo/220),150 - (tiempo/220),50 - (tiempo/550),50 - (tiempo/550));
  }
  
  if (tiempo > 9400 && tiempo <  10000 )
  {
    fill(255, 255, 51);
    ellipse (300+ (tiempo/220),150 - (tiempo/220),50 - (tiempo/550),50 - (tiempo/550));
  }

  
  
  //circulos medionaranjish de arriba hacia abajo (primera con naranjish) ta ta ta
  if (tiempo > 9600 && tiempo <  12000 )
  {
    fill(255, 204, 102);
    ellipse (50+ (tiempo/260),0 + (tiempo/260),50 - (tiempo/600),50 - (tiempo/600));
  }
  if (tiempo > 9900 && tiempo <  12000 )
  {
    fill(255, 204, 102);
    ellipse (100+ (tiempo/260),0 + (tiempo/260),50 - (tiempo/600),50 - (tiempo/600));
  }
  
  if (tiempo > 10200 && tiempo <  12000 )
  {
    fill(255, 204, 102);
    print(tiempo/260);
    ellipse (150+ (tiempo/260),0 + (tiempo/260),50 - (tiempo/600),50 - (tiempo/600));
  }
  
  
  //circulos medionaranjish de arriba hacia abajo (SEGUNDA con naranjish) ta ta ta
  if (tiempo > 10500 && tiempo <  12000 )
  {
    fill(255, 204, 102);
    ellipse (100+ (tiempo/280),50 + (tiempo/280),50 - (tiempo/650),50 - (tiempo/650));
  }
  if (tiempo > 10800 && tiempo <  12000 )
  {
    fill(255, 204, 102);
    ellipse (150+ (tiempo/280),50 + (tiempo/280),50 - (tiempo/650),50 - (tiempo/650));
  }
  
  if (tiempo > 11000 && tiempo <  12000 )
  {
    fill(255, 204, 102);
    print(tiempo/260);
    ellipse (200+ (tiempo/280),50 + (tiempo/280),50 - (tiempo/650),50 - (tiempo/650));
  }

  //circulos medionaranjish de arriba hacia abajo (TERCERA con naranjish) ta ta ta
  if (tiempo > 11300 && tiempo <  13200 )
  {
    fill(255, 204, 102);
    ellipse (150+ (tiempo/300),100 + (tiempo/300),50 - (tiempo/700),50 - (tiempo/700));
  }
  if (tiempo > 11600 && tiempo <  13200 )
  {
    fill(255, 204, 102);
    ellipse (200+ (tiempo/300),100 + (tiempo/300),50 - (tiempo/700),50 - (tiempo/700));
  }
  
  if (tiempo > 11900 && tiempo <  13200 )
  {
    fill(255, 204, 102);
    print(tiempo/260);
    ellipse (250+ (tiempo/300),100 + (tiempo/300),50 - (tiempo/700),50 - (tiempo/700));
  }
  
  //circulos medionaranjish de arriba hacia abajo (CUARTA con naranjish) ta ta ta
  if (tiempo > 12000 && tiempo <  14000 )
  {
    fill(255, 204, 102);
    ellipse (50+ (tiempo/320),150 + (tiempo/320),50 - (tiempo/700),50 - (tiempo/700));
  }
  if (tiempo > 12200 && tiempo <  14000 )
  {
    fill(255, 204, 102);
    ellipse (100+ (tiempo/320),150 + (tiempo/320),50 - (tiempo/700),50 - (tiempo/700));
  }
  
  if (tiempo > 12400 && tiempo <  14000 )
  {
    fill(255, 204, 102);
    print(tiempo/260);
    ellipse (150+ (tiempo/320),150 + (tiempo/320),50 - (tiempo/700),50 - (tiempo/700));
  }

  if (tiempo > 12600 && tiempo <  14000 )
  {
    fill(255, 204, 102);
    ellipse (200+ (tiempo/320),150 + (tiempo/320),50 - (tiempo/700),50 - (tiempo/700));
  }
  if (tiempo > 12800 && tiempo <  14000 )
  {
    fill(255, 204, 102);
    ellipse (250+ (tiempo/320),150 + (tiempo/320),50 - (tiempo/700),50 - (tiempo/700));
  }
  
  if (tiempo > 13000 && tiempo <  14000 )
  {
    fill(255, 204, 102);
    print(tiempo/260);
    ellipse (300+ (tiempo/320),150 + (tiempo/320),50 - (tiempo/700),50 - (tiempo/700));
  }

  //circulos mas verdosos (PRIMERA VERDOSOS)
  if (tiempo > 13200 && tiempo <  14400 )
  {
    fill(204, 255, 102);
    ellipse (300- (tiempo/360),200 + (tiempo/360),50 - (tiempo/750),50 - (tiempo/750));
  }

   if (tiempo > 13500 && tiempo <  14400 )
  {
    fill(204, 255, 102);
    ellipse (250- (tiempo/360),200 + (tiempo/360),50 - (tiempo/750),50 - (tiempo/750));
  }
  
  if (tiempo > 13800 && tiempo <  14400 )
  {
    fill(204, 255, 102);
    ellipse (200- (tiempo/360),200 + (tiempo/360),50 - (tiempo/750),50 - (tiempo/750));
  }
  
  //circulos mas verdosos (SEGUNDA VERDOSOS)
  if (tiempo > 14100 && tiempo <  15600 )
  {
    fill(204, 255, 102);
    ellipse (250- (tiempo/380),250 + (tiempo/380),50 - (tiempo/750),50 - (tiempo/750));
  }

   if (tiempo > 14400 && tiempo <  15600 )
  {
    fill(204, 255, 102);
    ellipse (200- (tiempo/380),250 + (tiempo/380),50 - (tiempo/750),50 - (tiempo/750));
  }
  
  if (tiempo > 14700 && tiempo <  15600 )
  {
    fill(204, 255, 102);
    ellipse (150- (tiempo/380),250 + (tiempo/380),50 - (tiempo/750),50 - (tiempo/750));
  }
  
  //circulos mas verdosos (TERCERA VERDOSOS)
  if (tiempo > 15000 && tiempo <  16800 )
  {
    fill(204, 255, 102);
    ellipse (200- (tiempo/380),300 + (tiempo/380),50 - (tiempo/800),50 - (tiempo/800));
  }

   if (tiempo > 15300 && tiempo <  16800 )
  {
    fill(204, 255, 102);
    ellipse (150- (tiempo/380),300 + (tiempo/380),50 - (tiempo/800),50 - (tiempo/800));
  }
  
  if (tiempo > 15600 && tiempo < 16800 )
  {
    fill(204, 255, 102);
    ellipse (100- (tiempo/380),300 + (tiempo/380),50 - (tiempo/800),50 - (tiempo/800));
  }
  
  //circulos mas verdosos (CUARTA VERDOSOS)
  if (tiempo > 15900 && tiempo <  18000 )
  {
    fill(204, 255, 102);
    ellipse (350- (tiempo/440),350 + (tiempo/440),50 - (tiempo/800),50 - (tiempo/800));
  }

   if (tiempo > 16200 && tiempo <  18000 )
  {
    fill(204, 255, 102);
    ellipse (300- (tiempo/440),350 + (tiempo/440),50 - (tiempo/800),50 - (tiempo/800));
  }
  
  if (tiempo > 16400 && tiempo < 18000 )
  {
    fill(204, 255, 102);
    ellipse (250- (tiempo/440),350 + (tiempo/440),50 - (tiempo/800),50 - (tiempo/800));
  }
  
  if (tiempo > 16600&& tiempo <  18000 )
  {
    fill(204, 255, 102);
    ellipse (200- (tiempo/440),350 + (tiempo/440),50 - (tiempo/800),50 - (tiempo/800));
  }

   if (tiempo > 16800 && tiempo <  18000 )
  {
    fill(204, 255, 102);
    ellipse (150- (tiempo/440),350 + (tiempo/440),50 - (tiempo/800),50 - (tiempo/800));
  }
  
  if (tiempo > 17000 && tiempo < 18000 )
  {
    fill(204, 255, 102);
    ellipse (100- (tiempo/440),350 + (tiempo/440),50 - (tiempo/800),50 - (tiempo/800));
  }

 //cuadadros verdes ultimosss
  rectMode(CENTER);
  if (tiempo > 17200 && tiempo < 30000)
  {
    fill(51, 204, 51);
    rect (150,200,0 + (tiempo/700),0 + (tiempo/700));
  }

   if (tiempo > 17350 && tiempo <  30000 )
  {
    fill(51, 204, 51);
    rect (150,150,0 + (tiempo/700),0 + (tiempo/700));
  }
  
  if (tiempo > 17400 && tiempo < 30000 )
  {
    fill(51, 204, 51);
    rect (200,200,0 + (tiempo/700),0 + (tiempo/700));
  }
  
  if (tiempo > 17550 && tiempo < 30000 )
  {
    fill(51, 204, 51);
    rect (200,150,0 + (tiempo/700),0 + (tiempo/700));
  }
  
  if (tiempo > 17600 && tiempo < 30000 )
  {
    fill(51, 204, 51);
    rect (250,200,0 + (tiempo/700),0 + (tiempo/700));
  }
  
  if (tiempo > 17650 && tiempo < 30000 )
  {
    fill(51, 204, 51);
    rect (250,150,0 + (tiempo/700),0 + (tiempo/700));
  }
  
  
  //RECT BLANCOS ta ta ta otra vez
  if (tiempo > 18550 && tiempo < 20000 )
  {
    fill(255,255,255,255-(tiempo/900));
    rect (160,160,10,10);
  }
  if (tiempo > 18700 && tiempo < 20000 )
  {
    fill(255,255,255,255-(tiempo/900));
    rect (175,160,10,10);
  }
  if (tiempo > 18900 && tiempo < 20000 )
  {
    fill(255,255,255,255-(tiempo/900));
    rect (190,160,10,10);
  
    //RECT BLANCOS PARTE 2 ta ta ta otra vez
  if (tiempo > 19100 && tiempo < 20000 )
  {
    fill(255,255,255,255-(tiempo/900));
    rect (170,175,10,10);
  }
  if (tiempo > 19300 && tiempo < 20000 )
  {
    fill(255,255,255,255-(tiempo/900));
    rect (185,175,10,10);
  }
  if (tiempo > 19500 && tiempo < 20000 )
  {
    fill(255,255,255,255-(tiempo/900));
    rect (200,175,10,10);
  }
    
    //RECT BLANCOS PARTE 3 ta ta ta otra vez
  if (tiempo > 19700 && tiempo < 21000 )
  {
    fill(255,255,255,255-(tiempo/900));
    rect (180,190,10,10);
  }
  if (tiempo > 19900 && tiempo < 21000 )
  {
    fill(255,255,255,255-(tiempo/900));
    rect (195,190,10,10);
  }
  if (tiempo > 20100 && tiempo < 21000 )
  {
    fill(255,255,255,255-(tiempo/900));
    rect (210,190,10,10);
  }
    
    //RECT BLANCOS PARTE 3 ta ta ta otra vez
  if (tiempo > 20300 && tiempo < 22000 )
  {
    fill(255,255,255,255-(tiempo/900));
    rect (160,205,10,10);
  }
  if (tiempo > 20400 && tiempo < 22000 )
  {
    fill(255,255,255,255-(tiempo/900));
    rect (175,205,10,10);
  }
  if (tiempo > 20500 && tiempo < 22000 )
  {
    fill(255,255,255,255-(tiempo/900));
    rect (190,205,10,10);
  }
    if (tiempo > 20600 && tiempo < 22000 )
  {
    fill(255,255,255,255-(tiempo/1000));
    rect (205,205,10,10);
  }
  if (tiempo > 20700 && tiempo < 22000 )
  {
    fill(255,255,255,255-(tiempo/1000));
    rect (220,205,10,10);
  }
  if (tiempo > 20800 && tiempo < 22000 )
  {
    fill(255,255,255,255-(tiempo/1000));
    rect (235,205,10,10);
  }
    
    //TATATA otra vez rect{angulos aguamarina
  if (tiempo > 21000 && tiempo < 23000 )
  {
    //porque no funciona??
    rectMode(CORNER);
    fill(102, 255, 204);
    rect (200,200,100,100);
  }
  if (tiempo > 21200 && tiempo < 23000 )
  {
    rect (150,100,100,100);
  }
  if (tiempo > 21400 && tiempo < 23000 )
  {

    rect (250,100,100,100);
  }
    
  }
}