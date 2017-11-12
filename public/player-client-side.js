class Player{
  constructor(playerData) {
      this.id = playerData.id;
      this.username = playerData.username;
      this.x = playerData.x;
      this.y = playerData.y;
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
    case 38: // up arrow
      movement.up = true;
      break;
    case 40: // down arrow
      movement.down = true;
      break;
  }
});
document.addEventListener('keyup', function(event){
  switch(event.keyCode){
    case 38: // up arrow
      movement.up = false;
      break;
    case 40: // down arrow
      movement.down = false;
      break;
  }
});
document.addEventListener('click', function(event){
  mousePosition.x = event.x;
  mousePosition.y = event.y;
});

function shoot(){
  projectiles.push(new Projectile(player.x, player.y, mousePosition.x, mousePosition.y));
}
