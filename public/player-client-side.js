class Player{
  constructor(playerData) {
      this.id = playerData.id;
      this.username = playerData.username;
      this.team = playerData.team;
      this.x = this.team === -1 ? 0 : windowWidth-20;
      this.y = playerData.y;
  }

  display() {
      rect(this.x, this.y, 20, 20);
  }

  move () {
      if (movement.up && this.y > 0) {
          this.y -= 2;
      }
      if (movement.down && this.y < height - 20) {
          this.y += 2;
      }
  }
  //Username setter
  setUsername(new_username) {
      this.username = new_username;
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
    case 119: //W
    case 38: // up arrow
      movement.up = true;
      break;
    case 115: //S
    case 40: // down arrow
      movement.down = true;
      break;
  }
});
document.addEventListener('keyup', function(event){
  switch(event.keyCode){
    case 119: //W
    case 38: // up arrow
      movement.up = false;
      break;
    case 115: //S
    case 40: // down arrow
      movement.down = false;
      break;
  }
});
document.addEventListener('click', function(event){
  mousePosition.x = event.x;
  mousePosition.y = event.y;
  shoot();
});

function shoot(){
  var counter = 3;
  if(counter > 0){
    projectiles.push(new Projectile(player.x, player.y, mousePosition.x, mousePosition.y));
    counter--;
  }
}
