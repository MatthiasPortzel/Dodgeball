class Projectile{
  constructor(currentX, currentY, mouseX, mouseY){
    this.currentX = currentX;
    this.currentY = currentY;
    this.angle = Math.atan2(mouseY - currentY, mouseX - currentX);
  }


    display() {
      ellipse(this.currentX, this.currentY, 10, 10);
    }

    update() {
      this.currentX += (Math.sqrt(Math.pow(mouseY-currentY, 2) - Math.pow(mouseX-currentX, 2)) * Math.cos(this.angle)*5);
      this.currentY += (Math.sqrt(Math.pow(mouseY-currentY, 2) - Math.pow(mouseX-currentX, 2)) * Math.sin(this.angle)*5;
    }

  isCollided() {
      for(var i = 0; i < players.length; i++){
          if(this.currentX == 20 || this.currentX == windowWidth - 2*20){ //replace 20 with the width of the player
              if(this.currentY == players[i].y)
              return true;
          }
      }
      return false;
  }
}
