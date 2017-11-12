class Player {
    constructor(id) {
        this.id = id;
        this.x = 314;
        this.y = 314;
    }

    //Username setter
    setUsername(new_username) {
        this.username = new_username;
    }

    toObj() {
        return {
            id: this.id,
            username: this.username,
            x: this.x;
            y: this.y;
        };
    }
}

module.exports = {
    Player: Player,
}
