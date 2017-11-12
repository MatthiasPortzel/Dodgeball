class Player {
    static get height() {
        return 20;
    }
    static get width() {
        return 20;
    }

    constructor(id, team) {
        this.id = id;
        this.team = team;
        this.y = 314;
        this.ammoCount = 3;
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
            ammoCount: this.ammoCount,
        };
    }
}

module.exports = {
    Player: Player,
}
