class Projectile{
  constructor(currentX, currentY, mouseX, mouseY){
    this.currentX = currentX;
    this.currentY = currentY;
    this.angle = Math.atan2(mouseY - currentY, mouseX - currentX); //slope is how fast y increases relative to x
  }
}

function isCollided(){
  for(var i = 0; i < players.length; i++){
    if(this.currentX == 20 || this.currentX == windowWidth - 2*20){ //replace 20 with the width of the player
      if(this.currentY == players[i].y)
        return true;
    }
  }
  return false;
}
