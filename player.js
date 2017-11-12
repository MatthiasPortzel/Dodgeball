class Player {
    constructor(id, socket) {
        this.id = id;
        this.socket = socket;
    }

    //Username setter
    setUsername(new_username) {
        this.username = new_username;
    }

    toObj() {
        return {
            id: this.id,
            username: this.username,
        };
    }
}

module.exports = {
    Player: Player,
}
