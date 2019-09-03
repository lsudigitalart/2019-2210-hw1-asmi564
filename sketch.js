function setup () {
    createCanvas(700, 700);
    background(249,233,153);
    //noStroke();
  
    let colorScheme = [
      color(255,201,201),
      color(180,210,228),
      color(204,255,204),
      color(248,248,248),
      color(142,66,133),
    ];
    
    drawCluster(100, 100, colorScheme);
    drawCluster(500, 200, colorScheme);
    drawCluster(200, 500, colorScheme);
}

function draw () {

}

function drawCluster(x, y, colors) {
  var size = 200;
  for (var i = 5; i >= 1; i--) {
    fill(random(colors));
    circle(random(size) + x, random(size) + y, size * 1.2);
    size -= 40;
  }
}