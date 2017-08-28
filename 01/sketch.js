function setup() { 
  createCanvas(720, 620);
  
  //fondo raro esquina superior izquierda
  	noStroke();
  	fill(225,201,67,40);
  	beginShape();
  	vertex(0,0);
  	vertex(252,0);
  	vertex(118,137);
  	vertex(0,168);
  	endShape(CLOSE);
  
  //fondo amarillo
  	noStroke();
  	fill(245,244,208);
  	beginShape();
  	vertex(352,0);
  	vertex(573,0);
  	vertex(540,125);
  	vertex(524,147);
  	endShape(CLOSE);
	
  //blurry amarillo debajo del rojo
	fill(225,201,67,80);
  noStroke();
	ellipse (112,37,140,140);
  
  //blurry rojo debajo del negro
	fill(185,1,1,80);
  noStroke();
	ellipse (0,0,240,120);
  
  //Ciruculo rojo
	strokeWeight(1);
  stroke(0);
  fill(185,1,1);
  ellipse(112,37,104,104);
  
  //azul fondo
  	noStroke();
  	fill(146,192,212,50);
  	beginShape();
  	vertex(94,163);
  	vertex(252,0);
  	vertex(356,0);
  	vertex(607,223);
  	vertex(352,272);
  	vertex(182,238);
  	endShape(CLOSE);
  //verde fondo
  	noStroke();
  	fill(196,205,184,50);
  	beginShape();
  	vertex(343,280);
  	vertex(614,229);
  	vertex(621,236);
  	vertex(501,277);
  	vertex(482,341);
  	vertex(296,340);
  	endShape(CLOSE);
  
  //azul fondo otro pedazo
  	noStroke();
  	fill(146,192,212,50);
  	beginShape();
  	vertex(625,241);
  	vertex(720,309);
    vertex(720,343);
  	vertex(486,343);
  	vertex(502,277);
  	endShape(CLOSE);
  
  //fondo rosadito parte 1
  	noStroke();
  	fill(232,211,213,80);
  	beginShape();
  	vertex(522,147);
  	vertex(567,188);
    vertex(720,51);
  	vertex(720,0);
  	vertex(577,0);
  	vertex(541,130);
  	endShape(CLOSE);
  
  //linea verde con negro arriba
  	noStroke();
  	fill(0);
  	beginShape();
  	vertex(505,176);
  	vertex(632,0);
    vertex(639,0);
  	endShape(CLOSE);
  
  	beginShape();
  	vertex(648,0);
  	vertex(720,39);
    vertex(720,33);
  	vertex(662,0);
  	endShape(CLOSE);
  
  	fill(62,102,68);
  	beginShape();
  	vertex(639,0);
  	vertex(548,118);
    vertex(644,5);
  	vertex(720,42);
  	vertex(720,39);
  	vertex(648,0);
  	endShape(CLOSE);
  
  //circulos
  strokeWeight(3);
  stroke(198,51,43);
  fill(232,211,213,80);
  ellipse(639,116,72,72);
  strokeWeight(1);
  stroke(0);
  noFill();
  ellipse(639,116,70,70);
  
  strokeWeight(4);
  stroke(198,51,43);
  fill(232,211,213,80);
  ellipse(697,74,67,67);
  strokeWeight(3);
  stroke(0);
  noFill();
  ellipse(698,74,65,65);
  
  
  //blanco para tapar
  	noStroke();
  	fill(255,255,255);
  	beginShape();
  	vertex(567,188);
    vertex(720,51);
  	vertex(720,113);
  	vertex(587,203);
  	endShape(CLOSE);
  
  //fondo rosadito parte 2
  	noStroke();
  	fill(232,211,213,80);
  	beginShape();
  	vertex(567,188);
    vertex(720,51);
  	vertex(720,113);
  	vertex(587,203);
  	endShape(CLOSE);
  
  
  
  
  //triangulo
  	stroke(0);
  	strokeWeight(0.5);
  	fill(101,83,22);
  	beginShape();
  	vertex(720,222);
  	vertex(560,222);
    vertex(720,113);
  	endShape(CLOSE);
  
  //circulo negro
  stroke(0);
  strokeWeight(10);
  fill(232,211,213);
  ellipse(726,150,50,50);
  
  //flechita sobre circulo
  	stroke(0);
  	strokeWeight(0.5);
  	fill(255,255,255);
  	beginShape();
  	vertex(660,109);
  	vertex(720,137);
    vertex(720,140);
    vertex(656,124);
  	endShape(CLOSE);
  
  	noStroke();
  	fill(186,14,8);
  	beginShape();
  	vertex(685,131);
  	vertex(688,122);
    vertex(692,124);
    vertex(689,133);
  	endShape(CLOSE);
  
  	beginShape();
  	vertex(709,131);
  	vertex(720,137);
    vertex(720,140);
    vertex(705,137);
  	endShape(CLOSE);
  
  	stroke(0);
  	strokeWeight(2);
    line(704,136,707,131);
  
  	noStroke();
  	fill(110,103,87,190);
  	beginShape();
  	vertex(660,109);
  	vertex(656,124);
    vertex(680,130);
    vertex(682,119);
  	endShape(CLOSE);
  
  
  
  
  
  
  //Circulos blancos
  //azul
  strokeWeight(3);
  stroke(192,185,194);
  fill(255,255,255);
  ellipse(470,343,105,105);
  strokeWeight(1);
  stroke(0);
  noFill();
  ellipse(470,343,107,107);
  
  //amarillo
  strokeWeight(3);
  stroke(233,215,120);
  fill(255,255,255);
  ellipse(585,341,118,118);
  strokeWeight(1);
  stroke(0);
  noFill();
  ellipse(585,341,120,120);
  
  //rojo
  strokeWeight(3);
  stroke(198,51,43);
  fill(255,255,255);
  ellipse(700,343,105,105);
 
  
  
  
  //blanco parte de abajo
  	noStroke();
  	fill(255,255,2555);
  	beginShape();
  	vertex(720,343);
  	vertex(720,620);
  	vertex(50,620);
  	vertex(305,492);
  	vertex(441,497);
  	vertex(485,343);
  	endShape(CLOSE);
  
  //azul parte de abajo
    noStroke();
  	fill(146,192,212,50);
  	beginShape();
  	vertex(720,343);
  	vertex(720,620);
  	vertex(50,620);
  	vertex(305,492);
  	vertex(441,497);
  	vertex(485,343);
  	endShape(CLOSE);
  
  //arcos linea 1
  strokeWeight(3);
  stroke(210,160,178);
  noFill();
  ellipse(532,401,115,115);
  strokeWeight(1);
  stroke(0);
  noFill();
  ellipse(532,401,117,117);
  
  strokeWeight(1);
  stroke(0);
  noFill();
  ellipse(646,401,115,115);
  
  
  //blanco para tapar
  noStroke();
  	fill(255,255,255);
  	beginShape();
  	vertex();
  	vertex(476,410);
  	vertex(589,399);
  	vertex(704,408);
  	vertex(699,479);
  	vertex(473,482);
  	endShape(CLOSE);
  
  //azul para tapar
  noStroke();
  	fill(146,192,212,50);
  	beginShape();
  	vertex();
  	vertex(476,410);
  	vertex(589,399);
  	vertex(704,408);
  	vertex(699,479);
  	vertex(473,482);
  	endShape(CLOSE);
  
  
  //arco linea 2
  strokeWeight(1);
  stroke(0);
  noFill();
  ellipse(699,460,110,110);
  
  
  
  
  //blanco para tapar
  noStroke();
  	fill(255,255,255);
  	beginShape();
  	vertex(645,475);
  	vertex(720,475);
  	vertex(720,530);
  	vertex(645,530);
  	endShape(CLOSE);
  
  //azul para tapar
  noStroke();
  	fill(146,192,212,50);
  	beginShape();
  	vertex(645,475);
  	vertex(720,475);
  	vertex(720,530);
  	vertex(645,530);
  	endShape(CLOSE);
  
  
  //debajo fondo griss
  	noStroke();
  	fill(221,219,205,200);
  	beginShape();
  	vertex(0,263);
  	vertex(0,170);
  	vertex(114,138);
  	vertex(92,162);
  	vertex(185,237);
  	vertex(144,360);
  	endShape(CLOSE);
  
  //raya hacia abajo chiquis
  stroke(0);
  strokeWeight(2);
  line(294,0,294,43);
  
  //arco hueco 1
  stroke(238,233,133,190);
  strokeWeight(3.5);
  fill(222,211,191);
	ellipse (160,325,125,182);
  strokeWeight(1);
  stroke(0);
  noFill();
	ellipse (160,325,118,178);
  
  //arco hueco 3
  stroke(238,233,133,190);
  strokeWeight(4);
  noFill();
	ellipse (380,183,58,58);
  stroke(223,198,189);
  strokeWeight(4);
  fill(255,255,255);
	ellipse (380,183,50,50);
  stroke(138,162,169);
  strokeWeight(3);
  fill(255,255,255);
	ellipse (380,183,30,30);
  stroke(0);
  strokeWeight(1);
  fill(255,255,255);
	ellipse (380,183,18,18);
  strokeWeight(1);
  stroke(0);
  noFill();
	ellipse (160,325,118,178);
  
  
  
  //cubre el resto de la elipse de arriba
  	noStroke();
  	fill(221,219,205);
  	beginShape();
  	vertex(0,263);
  	vertex(0,633);
  	vertex(200,560);
  	vertex(296,496);
  	vertex(437,519);
  	vertex(486,343);
  	vertex(292,341);
  	vertex(231,412);
  	endShape(CLOSE);
  
  
	//Pedazo circulo negro
	fill(0);
	ellipse (-10,-10,240,90);
  
  //Linea 1
  strokeWeight(1);
  stroke(0);
  line(0,169,467,40);
  
  //Linea 2
  strokeWeight(1);
  line(92,162,252,0);
  
  //Linea 3
  strokeWeight(1);
  line(358,0,660,272);
  
  //blurry morado debajo circulo amarillo
  noStroke();
  fill(159,152,182,200);
  ellipse(-15,374,165,165);
  
  //blurry azul debajo circulo amarillo
  noStroke();
  fill(90,137,172,182,200);
  ellipse(-15,374,135,135);
  
  
  //Circulo amarillo
  strokeWeight(2);
  stroke(0);
  fill(225,201,67);
  ellipse(-15,374,95,95);
  
  //Acro hueco 2
  //rosado stroke amarillo
  strokeWeight(4);
  stroke(238,233,133,190);
  fill(215,165,176);
  ellipse(295,178,62,70);
  //verde strooke blanco
  strokeWeight(5);
  stroke(213,204,199);
  fill(48,74,55);
  ellipse(295,178,48,52);
  //blanco stroke negro
  strokeWeight(1);
  stroke(0);
  fill(213,204,199);
  ellipse(296,190,35,60);
  
  
  //Linea amarilla al rededor
  strokeWeight(4);
  stroke(238,233,133,190);
  line(185,239,230,132);
  line(266,165,230,131);
  line(323,161,335,145);
  
  
  //colores figuras
  	//cafe
  	noStroke();
  	fill(130,79,3);
  	beginShape();
  	vertex(144,344);
  	vertex(170,283);
  	vertex(215,327);
  	vertex(188,367);
  	endShape(CLOSE);
  
  	//blanco
  	noStroke();
  	fill(235,214,211);
  	beginShape();
  	vertex(171,282);
  	vertex(183,251);
  	vertex(237,293);
  	vertex(215,324);
  	endShape(CLOSE);
  
   	//verde
  	noStroke();
  	fill(64,100,31);
  	beginShape();
  	vertex(183,251);
  	vertex(196,222);
  	vertex(262,257);
  	vertex(236,294);
  	endShape(CLOSE);
  
    //blanco 2 linea 1
  	noStroke();
  	fill(213,204,199);
  	beginShape();
  	vertex(195,224);
  	vertex(212,184);
  	vertex(280,229);
  	vertex(262,256);
  	endShape(CLOSE);
  
  	//negro
  	noStroke();
  	fill(0);
  	beginShape();
  	vertex(210,184);
  	vertex(232,136);
  	vertex(299,202);
  	vertex(280,229);
  	endShape(CLOSE);
  
  	//azul clarito linea 2
  	noStroke();
  	fill(178,187,200);
  	beginShape();
  	vertex(190,368);
  	vertex(216,326);
  	vertex(228,338);
  	vertex(196,373);
  	endShape(CLOSE);
  
    //negro 1 linea 2
  	noStroke();
  	fill(0);
  	beginShape();
  	vertex(216,328);
  	vertex(238,295);
  	vertex(257,309);
  	vertex(228,339);
  	endShape(CLOSE);
  
  	//blanquish linea 2
  	noStroke();
  	fill(220,209,202);
  	beginShape();
  	vertex(239,295);
  	vertex(263,257);
  	vertex(292,273);
  	vertex(257,309);
  	endShape(CLOSE);
  
  	//azul mas oscuro linea 2
  	noStroke();
  	fill(95,146,175);
  	beginShape();
  	vertex(260,257);
  	vertex(282,230);
  	vertex(316,250);
  	vertex(293,273);
  	endShape(CLOSE);
  
  	//blanquish 2 linea 2
  	noStroke();
  	fill(215,207,197);
  	beginShape();
  	vertex(283,230);
  	vertex(299,203);
  	vertex(333,232);
  	vertex(316,250);
  	endShape(CLOSE);
  	
  	//negro 2 linea 2
  	noStroke();
  	fill(0);
  	beginShape();
  	vertex(299,203);
  	vertex(311,185);
  	vertex(347,219);
  	vertex(333,233);
  	endShape(CLOSE);
  
  	//blanquish 3 linea 2
  	noStroke();
  	fill(222,214,195);
  	beginShape();
  	vertex(312,185);
  	vertex(322,170);
  	vertex(360,205);
  	vertex(347,218);
  	endShape(CLOSE);
  
  	//negro 3 linea 2
  	noStroke();
  	fill(0);
  	beginShape();
  	vertex(322,170);
  	vertex(336,148);
  	vertex(377,188);
  	vertex(359,207);
  	endShape(CLOSE);
  
  	//blanco linea 3
  	noStroke();
  	fill(236,219,214,220);
  	beginShape();
  	vertex(197,371);
  	vertex(434,133);
  	vertex(442,141);
  	vertex(223,385);
  	endShape(CLOSE);
  
  	//verdecito linea 3
  	noStroke();
  	fill(210,207,180);
  	beginShape();
  	vertex(227,339);
  	vertex(258,309);
  	vertex(278,325);
  	vertex(245,358);
  	endShape(CLOSE);
  
  	//verde oscuro linea 3
  	noStroke();
  	fill(43,89,60);
  	beginShape();
  	vertex(316,252);
  	vertex(333,234);
  	vertex(347,247);
  	vertex(332,263);
  	endShape(CLOSE);
  
  //negro 1 linea 3
  	noStroke();
  	fill(0);
  	beginShape();
  	vertex(346,219);
  	vertex(360,207);
  	vertex(372,219);
  	vertex(361,232);
  	endShape(CLOSE);
  
  //rosadish linea 3
  	noStroke();
  	fill(222,205,198);
  	beginShape();
  	vertex(377,189);
  	vertex(412,156);
  	vertex(421,166);
  	vertex(390,199);
  	endShape(CLOSE);
  
  //negro 2 linea 3
  	noStroke();
  	fill(0);
  	beginShape();
  	vertex(434,134);
  	vertex(452,115);
  	vertex(461,123);
  	vertex(443,142);
  	endShape(CLOSE);
  
  //blanco linea 4
  	noStroke();
  	fill(236,219,214);
    beginShape();
  	vertex(247,358);
  	vertex(516,62);
  	vertex(526,68);
  	vertex(262,374);
  	endShape(CLOSE);
  
  
  //verde linea 4
  	noStroke();
  	fill(112,141,52);
  	beginShape();
  	vertex(216,387);
  	vertex(246,358);
  	vertex(265,374);
  	vertex(244,397);
  	endShape(CLOSE);
  
  //azul linea 4
  	noStroke();
  	fill(204,207,200);
  	beginShape();
  	vertex(275,325);
  	vertex(312,285);
  	vertex(333,295);
  	vertex(295,339);
  	endShape(CLOSE);
  
  
  //rosado linea 4
  	noStroke();
  	fill(246,168,163);
  	beginShape();
  	vertex(314,284);
  	vertex(334,262);
  	vertex(351,273);
  	vertex(333,293);
  	endShape(CLOSE);
  
  //negro linea 4
  	noStroke();
  	fill(0);
  	beginShape();
  	vertex(347,247);
  	vertex(361,232);
  	vertex(373,244);
  	vertex(361,260);
  	endShape(CLOSE);
  
  //cafe linea 4
  	noStroke();
  	fill(132,85,8);
  	beginShape();
  	vertex(373,219);
  	vertex(388,201);
  	vertex(401,214);
  	vertex(385,232);
  	endShape(CLOSE);
  
  //negro 2 linea 4
  	noStroke();
  	fill(0);
  	beginShape();
  	vertex(420,166);
  	vertex(442,142);
  	vertex(454,153);
  	vertex(433,178);
  	endShape(CLOSE);
  
  //negro 3 linea 4
  	noStroke();
  	fill(0);
  	beginShape();
  	vertex(459,122);
  	vertex(477,104);
  	vertex(487,116);
  	vertex(470,132);
  	endShape(CLOSE);
  
  //negro 4 linea 4
  	noStroke();
  	fill(0);
  	beginShape();
  	vertex(491,88);
  	vertex(504,73);
  	vertex(514,81);
  	vertex(502,96);
  	endShape(CLOSE);
  
  //negro 5 linea 4
  	noStroke();
  	fill(0);
  	beginShape();
  	vertex(516,61);
  	vertex(531,44);
  	vertex(540,52);
  	vertex(527,69);
  	endShape(CLOSE);
  
  	
  	
  
  	
  	
	//primera linea hacia arriba
  	strokeWeight(2);
  	stroke(0);
  	line(144,342,231,137);
  
  //segunda linea hacia arriba
  	strokeWeight(3)
  	stroke(0);
  	line(188,368,336,145);
  
  //tercera linea hacia arriba
  	strokeWeight(2.5);
  	stroke(0);
  	line(194,373,452,114);
  
  //cuarta linea hacia arriba
  	strokeWeight(2);
  	stroke(0);
  	line(221,385,531,43);
  
  //quinta linea hacia arriba
  	strokeWeight(2);
  	stroke(0);
  	line(242,397,541,51);
  
  
  
  //lineas divisoras
  //1
  	strokeWeight(2);
    stroke(0);
  	line(170,282,262,374);
  //2
  	line(184,250,292,339);
  //3
  	line(196,223,331,294);
  //4
  	line(211,185,350,273);
  //5
  	line(232,136,360,260);
  //6
  	line(310,185,373,245);
  //7
  	line(321,170,385,232);
  //8
  	line(337,147,401,213);
  //9
  	line(411,155,432,178);
  //10
  	line(433,133,453,153);  
  //11
  	line(452,114,470,133);
  //12
    line(475,105,487,114);
  //13
    line(492,88,501,96);
  //14
    line(504.5,74,515,82);
  //15
    line(517,61,527,68);
  //16
    line(531,43,541,51);
  
  //mini linea rara
  stroke(0);
  strokeWeight(1.5);
  line(414,0, 412,8);
  
  //lineas superior derecha
  stroke(0);
  strokeWeight(1);
  line(542,60,666,0);
  line(542,65,677,0);
  line(531,99,718,0);
  
  stroke(220,85,80);
  strokeWeight(2);
  line(531,98,716,0);
  
  stroke(0);
  strokeWeight(1);
  line(648,83,720,19);
  line(608,144,720,40);
  
  strokeWeight(2);
  line(687,97,720,70);
  strokeWeight(3);
  stroke(219,205,163);
  line(687,99,720,72);
  
  //lineas derecha abajo
  
  stroke(0);
  strokeWeight(1);
  line(587,423,694,312);
  line(599,435,720,303);
  strokeWeight(1.8);
  line(593,431,718,295);
  
  line(610,505,720,388);
  line(617,513,719,402);
  strokeWeight(1);
  line(613,510,719,395);
  
	strokeWeight(2);
  line(641,302,641,620);
  
 
  
  //circulos blancos de arriba
  
  //blanco stroke negra
  stroke(0);
  strokeWeight(1);
  fill(238,232,234);
  ellipse(512,0,88,88);
  //rojo stroke negra
  stroke(0);
  strokeWeight(5);
  fill(173,71,71);
  ellipse(512,0,60,60);
  //solo blanco
  noStroke();
  fill(238,232,234);
  ellipse(512,0,48,46);
  
  //cosa atravesada
  
  	noStroke();
  	fill(110,103,87,190);
  	beginShape();
  	vertex(633,348);
  	vertex(720,285);
  	vertex(720,295);
  	vertex(638,353);
  	endShape(CLOSE);
  
  strokeWeight(2.5);
  stroke(0);
  line(566,396,720,284);
  line(571,403,720,295);
  
  strokeWeight(2);
  line(608,366,612,373);
  line(612,363,616,370);
  line(616,360,620,367);
  line(620,358,624,364);
  line(624,355,628,360);
  line(628,351,634,358);
  line(633,348,637,354);
  
  	noStroke();
  	fill(0);
  	beginShape();
  	vertex(565,396);
  	vertex(570,403);
  	vertex(587,391);
  	vertex(585,383);
  	endShape(CLOSE);
  
 
  
  //Lineas horizontales debajo de la grues
  strokeWeight(2);
  stroke(0);
  line(398,448,485,450);
  stroke(0,0,0,180);
  strokeWeight(1.5);
  line(485,450,501,450);
  
  stroke(0);
  strokeWeight(2);
  line(400,476,501,478);
  stroke(0,0,0,180);
  strokeWeight(1.5);
  line(501,478,534,479);
  
  //lineas atravesadas (2)
  	//1
  	noStroke();
  	fill(0);
  	beginShape();
  	vertex(271,287);
  	vertex(667,212);
  	vertex(669,219);
  	vertex(273,295);
  	endShape(CLOSE);
  
  	//2
  	stroke(0);
  	strokeWeight(1);
  	fill(127,4,16);
  	beginShape();
  	vertex(261,342);
  	vertex(619,237);
  	vertex(623,239);
  	vertex(258,347);
  	endShape(CLOSE);
  
  //linea horizontal
  	stroke(0);
  	strokeWeight(2);
  	line(292,340,740,344);
  
  
  
  
  //Linea medio gruesa medio vertical
  strokeWeight(3);
  stroke(0);
  line(575,0,443,498);
  strokeWeight(2);
  line(443,498,435,532);
  
  //circulo amarillo medio transparente
  noStroke();
  fill(238,233,133,190);
  ellipse(371,528,104,115);
  //circulo rosadito sobre el amarillo
  stroke(0);
  strokeWeight(0.3);
  fill(228,163,138);
  ellipse(370,528,92,92);
  //circulo azul 
  noStroke();
  fill(26,79,126,190);
  ellipse(366,524,76,76);
  
  //lineas sobre el ciruclo de abajo
  strokeWeight(3);
  stroke(0);
  line(197,563,435,405);
  strokeWeight(1.5);
  line(238,617,405,456);
  
  //Raya negra gruesa abajo
  	noStroke();
  	fill(0);
  	beginShape();
  	vertex(28,281);
  	vertex(244,397);
  	vertex(231,411);
  	vertex(24,289);
  	endShape(CLOSE);
	
} 

