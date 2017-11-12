class Player{
  static get height() {
      return 50;
  }
  static get width() {
      return 20;
  }

  constructor(playerData) {
      this.id = playerData.id;
      this.username = playerData.username;
      this.team = playerData.team;
      this.x = this.team === -1 ? 0 : 720-20;
      this.y = playerData.y;
  }

  display() {
        push();
        translate(this.team === -1 ? 0 : 720, this.y + 25);
        scale(-this.team, 1);

        if (this.id === player.id) {
            push();
            translate(20, 0);
            rotate(Math.atan2(mouseY * 450/height - this.y - 25, this.team * (this.x - mouseX * 720/width + 20)));
            fill(255, 0, 0);
            rect(20, -2.5, 30, 5);
            pop();
        }

        fill(0, 235, 172);
        ellipse(20, 0, 40, 40);
        fill(143, 139, 13);
        rect(0, -25, 20, 50);
        pop();
  };

  move () {
      if (movement.up && this.y > 0) {
          this.y -= 2;
      }
      if (movement.down && this.y < 450 - 20) {
          this.y += 2;
      }
  }
  //Username setter
  setUsername(new_username) {
      this.username = new_username;
  }
  setAmmoCount(ammoCount) {
      this.ammoCount = ammoCount;
  }
}

var movement = {
  up: false,
  down: false
}
var mousePosition = {
  x: 0,
  y: 0
}

document.addEventListener('keydown', function(event){
  switch(event.keyCode){
    case 87: //W
    case 38: // up arrow
      movement.up = true;
      break;
    case 83: //S
    case 40: // down arrow
      movement.down = true;
      break;
  }
});
document.addEventListener('keyup', function(event){
  switch(event.keyCode){
    case 87: //W
    case 38: // up arrow
      movement.up = false;
      break;
    case 83: //S
    case 40: // down arrow
      movement.down = false;
      break;
  }
});
document.addEventListener('click', function(event){
<<<<<<< HEAD
  if(player.ammoCount > 0) {
    ammoCount--;
    mousePosition.x = event.clientX;
    mousePosition.y = event.clientX;
    projectiles.push(new Projectile(player.x + Player.width/2, player.y + Player.height/2, mousePosition, player.id));
=======
  mousePosition.x = mouseX * 720/width;
  mousePosition.y = mouseY * 450/height;
<<<<<<< HEAD
  projectiles.push(new Projectile(player.x + Player.width/2, player.y + Player.height/2, mousePosition));
>>>>>>> a50ea828dbe45526e77861bafb5f7ff1eebb30b8
=======
  projectiles.push(new Projectile(player.x + 20, player.y + Player.height/2, mousePosition));
>>>>>>> 70f9dd7e6c113ea4292d76c13b40785966808ba8

    socket.emit("shoot", JSON.stringify(projectiles[projectiles.length-1].angle))
  }
});
