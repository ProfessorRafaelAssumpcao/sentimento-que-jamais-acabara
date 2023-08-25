function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("red");
    fill("white");
    textSize(12);
    textAlign (CENTER, CENTER);
    
    let máximo = width;
    let mínimo = 0;
    
    let palavra = "sssssssentimento que jamais acabará";
    let quantidade = map(mouseX,0,width,1,palavra.length);
    
    let parcial = palavra.substring (0,quantidade);
    text(parcial, 200,200);
    
    
  }