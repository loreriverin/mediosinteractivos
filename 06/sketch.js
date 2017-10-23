var miImagen1;
var miFiltro1;
var miImagen2;
var miFiltro2;
var miImagen3;
var miFiltro3;
var miImagen4;
var miFiltro4;
var miImagen5;
var miFiltro5;
var dibujarimagen=7;
var dibujarfiltro=7;
var miFiltro;

var botontam = 40;

var boton1x = 0;
var boton1y = 460;

var boton2x = 50;
var boton2y = 460;

var boton3x = 100;
var boton3y = 460;

var boton4x = 150;
var boton4y =460;

var boton5x = 200;
var boton5y = 460;

var boton6x = 0;
var boton6y = 510;

var boton7x = 50;
var boton7y = 510;

var boton8x = 100;
var boton8y = 510;

var boton9x = 150;
var boton9y = 510;

var boton10x = 200;
var boton10y = 510;

var boton11x = 250;
var boton11y = 510;


function preload() {
  
  //cada una de las imagenes y filtros se guardan en una variable
  
  miImagen1 = loadImage("Imagen1.jpg");
  miFiltro1 = loadImage("Filtro1.png");
  miImagen2 = loadImage("Imagen2.jpg");
  miFiltro2 = loadImage("Filtro2.png");
  miImagen3 = loadImage("Imagen3.jpg");
  miFiltro3 = loadImage("Filtro3.png");
  miImagen4 = loadImage("Imagen4.jpg");
  miFiltro4 = loadImage("Filtro4.1.png");
  miImagen5 = loadImage("Imagen5.jpg");
  miFiltro5 = loadImage("Filtro5.png");
  miFiltronegro=loadImage("Filtronegro.png");
  
  //la imagen de los botones también la guardé en una variable para evitar que cuando cambiara
  //la imagen cambiara también el botón

  miImagenboton1 = loadImage("Imagen1.jpg");
  miImagenboton2 = loadImage("Imagen2.jpg");
  miImagenboton3 = loadImage("Imagen3.jpg");
  miImagenboton4 = loadImage("Imagen4.jpg");
  miImagenboton5 = loadImage("Imagen5.jpg");
  
}

function setup() { 
  createCanvas(450, 560);

}

function draw() { 
  
  //BOTONES DE Im{agenes y flitros
    //Las imágenes se encuentran en la linea de arriba, 
    //Los filtros se encuentran en la linea de abajo
    //y para saber cuál es cual se utilizan las imágenes


    //el paisaje
    image(miImagenboton1, boton1x, boton1y, botontam, botontam);
    //la foto esa que marea
    image(miImagenboton2, boton2x, boton2y, botontam, botontam);
    //la foto de pinceles y manchas de pintura
    image(miImagenboton3, boton3x, boton3y, botontam, botontam);
    //la foto de muchos dulces
    image(miImagenboton4, boton4x, boton4y, botontam, botontam);
  	//la foto del perro
    image(miImagenboton5, boton5x, boton5y, botontam, botontam);
  	//FILTRO del globo t
    image(miFiltro1, boton6x, boton6y, botontam, botontam);
    //FILTRO de los arboles raros
    image(miFiltro2, boton7x, boton7y, botontam, botontam);
    //FILTRO de las manitoos
    image(miFiltro3, boton8x, boton8y, botontam, botontam);
    //FILTRO de los triangulos y rayas
    image(miFiltro4, boton9x, boton9y, botontam, botontam);
    //FILTRO de las ondas
    image(miFiltro5, boton10x, boton10y, botontam, botontam);

    //botón de borrar todo
    fill(255,255,255);
    rect(boton11x, boton11y, botontam, botontam);
    fill(0,0,0);
    textSize(15);
    text("Clear", 253, 535);

  
  if (mouseIsPressed) {
    
    //borra todo el espacio, es el primer bton, y el que dice CLEAR
    //La idea de los botones de aca para abajo es que cuando el mouse se 
    //espiche dentro del espacio de cada boton se escoja una imagen diferente
    //adicionalmente, se podría un filtro diferente encima cada vez, SIN EMBARGO
    //ESTO FUE PRECISAMENTE LO QUE NO LOGRE!
    
    if (mouseX > boton11x && mouseX < boton11x + botontam &&
			mouseY > boton11y && mouseY < boton11y + botontam) {
      dibujarimagen=5;
		}
		if (mouseX > boton1x && mouseX < boton1x + botontam &&
			mouseY > boton1y && mouseY < boton1y + botontam) {
			dibujarimagen = 0;
		}
    //los primeros doce botones, ( la fila de arriba )son para 
    //cambiar el color
		if (mouseX > boton2x && mouseX < boton2x + botontam &&
			mouseY > boton2y && mouseY < boton2y + botontam) {
			dibujarimagen = 1;
		}
		
		if (mouseX > boton3x && mouseX < boton3x + botontam &&
			mouseY > boton3y && mouseY < boton3y + botontam) {
			dibujarimagen = 2;
		}
		if (mouseX > boton4x && mouseX < boton4x + botontam &&
			mouseY > boton4y && mouseY < boton4y + botontam) {
			dibujarimagen = 3;
		}
    if (mouseX > boton5x && mouseX < boton5x + botontam &&
			mouseY > boton5y && mouseY < boton5y + botontam) {
			dibujarimagen = 4;
		}
    if (mouseX > boton6x && mouseX < boton6x + botontam &&
			mouseY > boton6y && mouseY < boton6y + botontam) {
			dibujarfiltro = 1;
      miFiltro=miFiltro1;

		}
    if (mouseX > boton7x && mouseX < boton7x + botontam &&
			mouseY > boton7y && mouseY < boton7y + botontam) {
			dibujarfiltro = 2;
      miFiltro=miFiltro2;
     
		}
    if (mouseX > boton8x && mouseX < boton8x + botontam &&
			mouseY > boton8y && mouseY < boton8y + botontam) {
			dibujarfiltro = 3;
      miFiltro=miFiltro3;
       
		}
    if (mouseX > boton9x && mouseX < boton9x + botontam &&
			mouseY > boton9y && mouseY < boton9y + botontam) {
			dibujarfiltro = 4;
        miFiltro=miFiltro4;
       
		}
    if (mouseX > boton10x && mouseX < boton10x + botontam &&
			mouseY > boton10y && mouseY < boton10y + botontam) {
			dibujarfiltro = 5;
        miFiltro=miFiltro5;
		}
    
    
    //Este if sirve para decir qué imágen o filtro debe realizar dependiendo de lo
    //que haya arrojado el IF anterior según los botones espichados por el usuario
    
  if (dibujarimagen == 0)
  	{  
      
    
      noStroke();
      fill(255,255,255);
			rect(0,0,450,450);
      
       miImagen1.mask(miFiltronegro);
       miImagen1.mask(miFiltro);
       image(miImagen1,0,0);             
     
      
    } 
    else if (dibujarimagen == 1)
  	{
      
      noStroke();
      fill(255,255,255);
			rect(0,0,450,450);
      
     miImagen2.mask(miFiltro);

      image(miImagen2,0,0);
      
    }
  else if (dibujarimagen == 2)
  	{
      
    
      noStroke();
      fill(255,255,255);
			rect(0,0,450,450);
      
      miImagen3.mask(miFiltro);
        image(miImagen3,0,0);
      
    }
  else if (dibujarimagen == 3)
  	{
      
    
      noStroke();
      fill(255,255,255);
			rect(0,0,450,450);
      
      miImagen4.mask(miFiltro);
        image(miImagen4,0,0);
      
    }
  else if (dibujarimagen == 4)
  	{
      
      noStroke();
      fill(255,255,255);
			rect(0,0,450,450);
      
      
      miImagen5.mask(miFiltro);
        image(miImagen5,0,0);
      
    }
  else if (dibujarimagen==5)
    {
      //La idea de esto era que se borrara el espacio y todo empezara de nuevo
      //casi como en el paint. Sin embargo, se borra todo pero los filtros además 
      //de que se suman NO SE BORRAN, es como si se quedaran pegados, so esto no funciona :(
      
      noStroke();
      fill(255,255,255);
			rect(0,0,450,450);
    }
    
	
	}
    
}
