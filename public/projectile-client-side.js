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
        this.isCollided();
    }

    isCollided() {
        for(var i = 0; i < players.length; i++){
            var p = players[i];
          if(p && p.team !== players[this.shooterId].team){
              if (((p.team === -1 && this.currentX > 0 && this.currentX < 20) || (p.team === 1 && this.currentX < 720 && this.currentX > 720-20)) && this.currentY > p.y - 25 && this.currentY < p.y + 25) {
                  players[this.shooterId].ammoCount += players[i].ammoCount;
                  players[i] = null;
                  break;
                }
            }
          }
    }
}
