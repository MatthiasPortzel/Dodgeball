class Projectile{
  constructor(currentX, currentY, mouseX, mouseY){
    this.currentX = currentX;
    this.currentY = currentY;
    this.slope = (mouseY - currentY)/(mouseX - currentX); //how fast y increases relative to x as a decimal
  }
}

document.getElementById("projectile").style.top = currentY + 'px';
document.getElementById("projectile").style.left = currentX + 'px';
