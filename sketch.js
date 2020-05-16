//권태주(5646307)
//Draw a Deck of Cards
//CS099
//Spring 2020

function setup() {
  createCanvas(750, 450);
}

function draw() {
  background(220);
  
  var x = 50 ; 
  var y = 50 ; 
  var shape = 0
  var value = 0
  
  for( y = 50 ; y<=450 ; y+=100 ){
    for( x = 50 ; x < 700 ; x += 50){
      square(x,y,50);
      textSize(25)
      
      switch(value) {
        case 0:
          text("A",x+5,y+35);
          break;
          
        case 1:  
          text("2",x+5,y+35);
          break;
        case 2 :
          text("3",x+5,y+35);
          break;
        case 3 :
          text("4",x+5,y+35);
          break;  
        case 4:
          text("5",x+5,y+35);
          break;
        case 5 :
          text("6",x+5,y+35);
          break;
        case 6:
          text("7",x+5,y+35);
          break;
        case 7 :
          text("8",x+5,y+35);
          break;
        case 8 :
          text("9",x+5,y+35);
          break;
        case 9:
          text("10",x+5,y+35);
          break;
        case 10 :
          text("J",x+5,y+35);
          break;
        case 11:
          text("Q",x+5,y+35);
          break;
        case 12:
          text("K",x+5,y+35);
          break;
      }
      value ++
        if ( value >12){
            value = 0 }
      
      
      
      switch(shape){
        case 0 : //Heart
          push()
          noStroke()
          fill("#DC143C")
           beginShape()
           vertex(x+35,y+19); //위 센터
           vertex(x+30,y+9);
           vertex(x+23,y+21);
           vertex(x+35,y+39);//밑 센터
           vertex(x+47,y+19);
           vertex(x+40,y+9);
           endShape(CLOSE);
          pop()
          break;
          
        case 1 ://Spade
          push()
          noStroke()
          fill(0);
          beginShape();
          vertex(x+37,y+10)// 위 센터
          vertex(x+25,y+28)
          vertex(x+32,y+35)
          vertex(x+37,y+30)//밑 센터
          vertex(x+42,y+35)
          vertex(x+50,y+28);
          endShape(CLOSE);
          triangle(x+37,y+30,x+29,y+50 ,x+45,y+50);
          pop()
        break;
          
        case 2 : // Diamond
          push()
          noStroke()
          fill("#DC143C")
          beginShape()
          vertex( x+37, y+10)
          vertex( x+27, y+25);
          vertex( x+37, y+40);
          vertex( x+47, y+25);
          endShape(CLOSE)
          pop()
        break;
          
        case 3 : //Clover
          push()
          noStroke()
          fill(0)
          circle(x+35,y+12,15);
          circle(x+30, y+22,15);
          circle(x+40, y+22,15);
          triangle(x+35, y+22, x+27,y+45, x+43, y+45);
          pop()
        break;  
      }
       shape ++
  if ( shape >3){
    shape = 0 }
    }
  }

  
}