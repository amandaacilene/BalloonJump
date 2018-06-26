var yo, xo; //coordenadas do cacto 0
var y1, x1; //coordenadas do cacto 1
var y2, x2; //coordenadas do cacto 2
var parx, pary; // passarin
var tela=1

var naTela = true;
var x = 640, y = 480; // tela
var z = 580, j= 405; // coordenadas do balão
var a = 597, s = 405; //chão
var cont=0;
var colisao = false;
var raioB = 5; //balão
var raioC = 10; //cacto
var vidas = 3;
var pontos = 0;

function setup() {

	createCanvas (x,y);
	yo = 405;
	xo = -10;
	y1 = 405;
	x1 = -250;
	y2 = 405;
	x2 = -800;
	pary= y/1.5;
	parx= -10
	frameRate(38);
}

function keyPressed(){
   if (keyCode===UP_ARROW){
       if(cont<3){
           j-=100;
           cont ++;
	}
       
}

}

function draw() {
	if(j>400){
      cont = 0;
	}
	if(tela==1){
	background (0, 200, 1000);
	textSize(50);
	text ("🎈", 100, 50);
	textSize(50);
	text ("🎈", 220, 150);
	textSize(50);
	text ("🎈", 300, 330);
	textSize(50);
	text ("🎈", 400, 50);
	textSize(50);
	text ("🎈", 500, 450);
	textSize(50);
	text ("🎈", 580, 350);
	textSize(50);
	text ("🎈", 20, 180);
	textSize(50);
	text ("🎈", 70, 460);
	textSize(50);
	text ("🎈", 530, 190);

		textSize(70);
	fill (0);
	text("BALLOON",x/6.9,y/2);
	textSize(70);
	fill (0);
	text("JUMP",x/1.8,y/1.65);
	textSize(25);
	fill (0);
	text("PRESSIONE ENTER PARA JOGAR",x/5,y/1.3);

		if(keyIsDown(ENTER)){
			tela=2;
		}
			
		text("OU ⬆️ PARA INSTRUÇÕES",x/3.9,y/1.22);

		if(keyIsDown(UP_ARROW)){
			tela=3;
		}
}
	if (tela==3) {
		background (0, 200, 1000);
		textSize (20);
		text ("Use a seta ⬆️ para pular e as setas", x/4.2, y/6);
		text ("⬅️➡️ para se movimentar.", x/3.3, y/4.6);
		text ("São permitidos apenas 3 pulos por vez.", x/4.8, y/3.8);
		text ("Quando detectada a colisão", x/3.3, y/3.2);
		text ("uma vida será retirada.", x/3, y/2.8);
		textSize (23);
		text ("PRESSIONE ⬇️ PARA RETORNAR", x/5, y/1.2);
		textSize (40);
		text ("BOA SORTE!", x/3.4, y/1.01);
		
		if (keyIsDown (DOWN_ARROW)) {
			tela = 1;
		}
	}

	if(tela==2){
		if(vidas>0){
		background (0, 200, 1000);
   		if(j<405){
       j+=3;
   		}
   		if(naTela){
       xo += 5;
			 x1 += 5;
			 x2 += 5;
			 parx +=10
   		}
   		else {
       xo = -10;
			 x1 = -250;
			 x2 = -800;
			 parx= -10;
       naTela = true;
   		}
   		if(xo > width && x1 > width && x2 > width && parx > width) {
       naTela = false;
   		}

	
	textSize(25);
	fill(0);
	text("Vidas: "+vidas, 500, 4, 100, 100);
	text("Pontos: "+pontos, 5, 4, 200, 200);
	text ("❤️", 595, 27);
	
			// Cacto que se mexe
	textSize(55);
	text("🌵",xo,yo, 405, 405);
	stroke (0, 200, 1000);
	fill (0, 200, 1000);
	ellipse (z, j, 3, 3);
	textSize(55);
	text("🌵",x1,y1, 405, 405);
	stroke (0, 200, 1000);
	
	fill (0, 200, 1000);
	text("🌵",x2,y2, 405, 405);
	stroke (0, 200, 1000);
	fill (0, 200, 1000);
	

			// Chão
	fill (0, 200, 0);
	stroke (0, 200, 0);
	rect (0, 450, 640, 480);

			// Nuvens
	textSize(80);
	text ("🌤️",40, 50, 1000, 1000);

			// Nuvens
	textSize(80);
	text ("☁️",170, 30, 1000, 1000);

			// Nuvens
	textSize(70);
	text ("☁️",210, 40, 1000, 1000);

			// Nuvens
	textSize(70);
	text ("☁️",330, 50, 1000, 1000);

			// Nuvens
	textSize(80);
	text ("☁️",460, 40, 1000, 1000);

			// Nuvens
	textSize(70);
	text ("☁️",500, 50, 1000, 1000);

		if (keyIsDown(LEFT_ARROW)) {
			if(z > 0){
				z -= 15;
			}
		}

		if (keyIsDown(RIGHT_ARROW)) {
			if(z < 580){
				z += 15;
			}
			if(j > 405){
				j =405;
			}
		}
			
			//Balão
textSize(50);
text ("🎈",z, j, 1000, 1000);
stroke (0, 200, 1000);
fill (0, 200, 1000);
ellipse (z, j, 3, 3);
   
	if ( dist(z, j, xo, yo) < (raioB + raioC) || dist(z, j, x1, y1) < (raioB + raioC) ||dist(z, j, x2, y2) < (raioB + raioC) || dist(z, j, parx, pary) < (raioB + raioC)) {
   if (colisao == false) {
       colisao = true;
       vidas = vidas-1;
    }
   }
   else if ( vidas == 0 ) {
		fill (0, 200, 0);
		textSize(70);
		text ("GAME OVER",x/5, y/2);
   }
   else {
   colisao = false;
	 }
			
	if(frameCount%10==0 && vidas>0) pontos++;
		if(pontos==50){
			fill (0, 0, 0);
			textSize(70);
  	 text ("Nivel 2",x/3, y/2);
			frameRate (44);
		}
			if(pontos>=200 && pontos<=400){
			textSize(30);
	    text ("🕊️",parx, pary, 1000, 1000);
		}
		if(pontos==100){
			fill (0, 0, 0);
			textSize(70) 
   	text ("Nivel 3",x/3, y/2);
			frameRate (48);
		}
		if(pontos==200){
			fill (0, 0, 0);
			textSize(70) 
   	text ("Nivel 4",x/3, y/2);
			frameRate (52);
		}
		if(pontos==300){
			fill (0, 0, 0);
			textSize(70) 
   		text ("Nivel 5",x/3, y/2);
			frameRate (56);
   }
			if (pontos==400) {
				tela = 4;
			}
			if (tela==4) {
				pontos = 0;
				background (0, 200, 1000);
				fill (0, 0, 0);
				textSize(70);
				text("PARABÉNS!",x/5.2,y/2);
				textSize(40);
				text("VOCÊ CUMPRIU O DESAFIO", x/12.2, y/1.6);
				
	textSize(50);
	text ("✨", 100, 50);
	textSize(50);
	text ("✨", 250, 150);
	textSize(50);
	text ("✨", 196, 370);
	textSize(50);
	text ("✨", 400, 50);
	textSize(50);
	text ("✨", 540, 450);
	textSize(50);
	text ("✨", 570, 350);
	textSize(50);
	text ("✨", 20, 180);
	textSize(50);
	text ("✨", 30, 460);
	textSize(50);
	text ("✨", 530, 190);
	textSize(50);
	text ("✨", 290, 460);	
				if(keyIsDown(ENTER)){
					tela=1;
				}
			}
							
}
	else if(colisao == true){
		background (0, 200, 1000);
		textSize(65);
  	text("☠️", x/2.2,y/1.53);
		fill (0, 0, 0);
		textSize(70);
		text("GAME OVER",x/5.8,y/2);
		fill (0, 0, 0);
		textSize(25);
		text("PRECIONE ENTER PARA JOGAR NOVAMENTE",x/12,y/1.3);
		text ("OU PRESSIONE ⬇️ PARA RETORNAR", x/6, y/1.2);
		
			if(keyIsDown(ENTER)){
				
				
	yo = 405;
	xo = -10;
	y1 = 405;
	x1 = -250;
	y2 = 405;
	x2 = -800;
	pary= y/1.5;
	parx= -10
				
				frameRate (38);


	naTela = true;
   x = 640, y = 480; // tela
   z = 580, j= 405; // coordenadas do balão
   a = 597, s = 405; //chão
   cont=0;
   colisao = false;
		raioB = 5; //cacto
    raioC = 10; //balão
    vidas = 3;
    pontos = 0;
			
			
			}
		if (keyIsDown (DOWN_ARROW)) {
			tela = 1;
		}
  }	
 }
}
