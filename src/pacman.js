var canvas, ctx, sprites,
    width = 200,
    height = 200,
    rightKey = false,
    leftKey = false,
    upKey = false,
    downKey = false,
    ship_x = (width / 2) - 10, ship_y = height - 45, ship_w = 17, ship_h = 17,
    srcX = 26, srcY = 23;

var rightSwitch = false;
var leftSwitch = false;
var downSwitch = false;
var upSwitch = false;

function clearCanvas() {
  ctx.clearRect(0,0,2000,2000);
}
function drawShip() {
  if (rightKey) {
      if(rightSwitch === false){
          ship_x += 5;
          srcX = 26;
          srcY = 23;
          rightSwitch = true;
      } else if(rightSwitch === true){
          ship_x += 5;
          srcX = 6;
          srcY = 23;
          rightSwitch = false;
      }

  } else if (leftKey) {
      if(leftSwitch === false){
          ship_x -= 5;
          srcX = 6;
          srcY = 3;
          leftSwitch = true;
      } else if(leftSwitch === true){
          ship_x -= 5;
          srcX = 26;
          srcY = 3;
          leftSwitch = false;
      }
  } else if (downKey) {
      if (downSwitch === false) {
          ship_y += 5;
          srcX = 6;
          srcY = 63;
          downSwitch = true;
      } else if (downSwitch === true) {
          ship_y += 5;
          srcX = 26;
          srcY = 63;
          downSwitch = false;
      }
  }
  else if (upKey) {
      if (upSwitch === false) {
          ship_y -= 5;
          srcX = 6;
          srcY = 43;
          upSwitch = true;
      } else if (upSwitch === true) {
          ship_y -= 5;
          srcX = 26;
          srcY = 43;
          upSwitch = false;
      }
  }
    //context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
  ctx.drawImage(sprites,srcX,srcY,ship_w,ship_h,ship_x,ship_y,ship_w,ship_h);
  if (rightKey == false || leftKey == false) {
    srcX = 6;
  }
}
function loop() {
  // console.log("clientHeight: ",document.body.clientHeight)
  // console.log("clientWidth: ",document.body.clientWidth)
  clearCanvas();
  drawShip();
  if(window.dancers.length > 0){
    // console.log('pacman: ', ship_y+20);
    // console.log('ghost: ', Math.round(window.dancers[0].$node.position().top));
    if(Math.abs(Math.round(ship_x) - Math.round(window.dancers[0].$node.position().left)) < 17 && Math.abs(Math.round(ship_y + 20) - Math.round(window.dancers[0].$node.position().top)) < 17){
      console.log("collided");
    }
  }
  
}
function keyDown(e) {
  if (e.keyCode == 39) rightKey = true;
  else if (e.keyCode == 37) leftKey = true;
    else if(e.keyCode == 38) upKey = true;
    else if(e.keyCode == 40) downKey = true;
}
function keyUp(e) {
  if (e.keyCode == 39) rightKey = false;
  else if (e.keyCode == 37) leftKey = false;
  else if(e.keyCode == 38) upKey = false;
  else if(e.keyCode == 40) downKey = false;
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

