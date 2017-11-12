class Player {
    constructor(id, socket) {
        this.id = id;
        this.socket = socket;
    }

    //Username setter
    setUsername(new_username) {
        this.username = new_username;
    }
}

module.exports = {
    Player: Player,
}
