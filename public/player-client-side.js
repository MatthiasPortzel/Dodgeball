class player{
  constructor(id) {
      this.id = id;
  }

  //Username setter
  setUsername(new_username) {
      this.username = new_username;
  }

  var movement = {
    up: false,
    down: false
  }
  var shoot = false;

  /*document.addEventListener('keydown', function(event){
    switch(event.keyCode){
      case 38: // up arrow
        movement.up = true;
        alert('up');
        break;
      case 40: // right arrow
        movement.down = true;
        alert('down');
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
  document.addEventListener('keypress', function(event){
    switch(event.keyCode){
      case 32: // spacebar
        shoot = true;
        break;
    }
  }*/

  document.addEventListener("keydown", move(keyCode));

  function move(keyCode) {
    switch(keyCode){
      case 38:
        movement.up = true;
        alert('up');
        break;
    }
  }
}
