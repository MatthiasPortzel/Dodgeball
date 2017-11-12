class Player {
    constructor(id, team) {
        this.id = id;
        this.team = team;
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
            team: this.team,
            y: this.y,
        };
    }
}

module.exports = {
    Player: Player,
}
