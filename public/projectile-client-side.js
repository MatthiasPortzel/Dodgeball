class Projectile{
  constructor(currentX, currentY, angle, shooterId){
    this.currentX = currentX;
    this.currentY = currentY;
    this.angle = angle;
    if (typeof this.angle === "object") {
        this.angle = Math.atan2(angle.y - currentY, angle.x - currentX);
    }
    this.shooterId = shooterId;
  }

    display() {
        fill(0);
      ellipse(this.currentX, this.currentY, 10, 10);
    }

    update() {
        this.currentX += Math.cos(this.angle)*10;
        this.currentY += Math.sin(this.angle)*10;
    }
}

function isCollided() {
  var condition = true;
  function conditionIsFalse(){
    condition = false;
  }

  while(condition){
    window.setTimeout(conditionIsFalse, 3000)
    for(var i = 0; i < players.length; i++){
      if(this.currentX == 20 || this.currentX == windowWidth - 2*20){ //replace 20 with the width of the player
        if(this.currentY == players[i].y){
          players[projectile.shooterId].ammoCount += players[i].ammoCount;
          players[i] = null;
          break;
        }
      }
    }
  }
}

function delayIsCollided() {
  window.setTimeout(isCollided, 1000);
}

delayIsCollided();
