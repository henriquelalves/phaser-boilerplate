class Menu extends Phaser.State {

    constructor() {
	super();
    }
    
    create() {
	this.background = this.game.add.image(this.game.width/2.0,this.game.height/2.0,'background');
	this.background.anchor.set(0.5);

	this.input.onDown.add(this.startGame, this);
    }

    update() {}

    startGame () {
	// this.game.state.start('game');
    }
}

export default Menu;
