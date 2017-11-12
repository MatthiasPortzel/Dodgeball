<<<<<<< HEAD
class Player {
  var movement = {
    left: false,
    right: false
  }
document.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 37: // left arrow
      movement.left = true;
      break;
    case 39: // right arrow
      movement.right = true;
      break;
  }
});
document.addEventListener('keyup', function(event) {
  switch (event.keyCode) {
    case 37: // left arrow
      movement.left = false;
      break;
    case 39: // right arrow
      movement.right = false;
      break;
  }
});
=======
var players = [];

class Player {
    constructor(id) {
        this.id = id;
    }

    //Username setter
    setUsername(new_username) {
        this.username = new_username;
    }

}

module.exports = {
    Player: Player,
>>>>>>> 08dd1a9e6f81ba722ae1fd3188b092f2658456fd
}
