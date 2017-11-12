class Projectile{
  constructor(currentX, currentY, angle, shooterId){
    this.currentX = currentX;
    this.currentY = currentY;
    this.angle = angle;
    this.shooterId = shooterId;
  }

  update() {
      this.currentX += Math.cos(this.angle)*5;
      this.currentY += Math.sin(this.angle)*5;
  }

  toObj() {
      return {
          x: this.currentX,
          y: this.currentY,
          angle: this.angle,
          shooterId: this.shooterId,
      }
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

module.exports = {
    Projectile: Projectile,
}
