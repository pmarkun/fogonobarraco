function Game () {
        this.turn = 1;
        this.turn_lenght = 4500;
        this.last_turn = 4;
        this.players = [];
        this.board = {};
    }


function Player() {
        this.name = "Pedro Markun";
        this.fires = 0;
}

game = new Game();
p1 = new Player("human");
game.players.push(p1);

