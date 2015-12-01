var canvas, ctx, sprites,
    width = 100,
    height = 100,
    rightKey = false,
    leftKey = false,
    upKey = false,
    downKey = false,
    ship_x = (width / 2) - 30, ship_y = height - 145, ship_w = 15, ship_h = 65,
    srcX = 6, srcY = -20;

var rightSwitch = false;
var leftSwitch = false;

function clearCanvas() {
  ctx.clearRect(0,0,500,400);
}
function drawShip() {
  if (rightKey) {
      if(rightSwitch === false){
          ship_x += 5;
          srcX = 26;
          srcY = -20;
          rightSwitch = true;
      } else if(rightSwitch === true){
          ship_x += 5;
          srcX = 6;
          srcY = -20;
          rightSwitch = false;
      }

  } else if (leftKey) {
      if(leftSwitch === false){
          ship_x -= 5;
          srcX = 6;
          srcY = -40;
          leftSwitch = true;
      } else if(leftSwitch === true){
          ship_x -= 5;
          srcX = 26;
          srcY = -40;
          leftSwitch = false;
      }
  }
    //context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
  ctx.drawImage(sprites,srcX,srcY,ship_w,ship_h,ship_x,ship_y,ship_w,ship_h);
  //if (rightKey == false || leftKey == false) {
  //  srcX = 6;
  //}
}
function loop() {
  clearCanvas();
  drawShip();
}
function keyDown(e) {
  if (e.keyCode == 39) rightKey = true;
  else if (e.keyCode == 37) leftKey = true;
}
function keyUp(e) {
  if (e.keyCode == 39) rightKey = false;
  else if (e.keyCode == 37) leftKey = false;
}
(function init() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  sprites = new Image();
  sprites.src = './src/pacman.png';
  setInterval(loop, 1000/30);
  document.addEventListener('keydown', keyDown, false);
  document.addEventListener('keyup', keyUp, false);
})();
//init();

