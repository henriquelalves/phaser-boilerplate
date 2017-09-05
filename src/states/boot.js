class Boot extends Phaser.State {

    constructor() {
	super();
    }

    preload() {
	this.load.image('preloader', 'assets/preloader.gif');

	// JSON
	this.game.load.json('assets', './assets.json');
    }

    create() {
	this.game.input.maxPointers = 1;

	this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
	this.game.scale.pageAlignHorizontally = true;
	this.game.scale.pageAlignVertically = true;

	// Setup game screen resolution
	let defaultWidth = 1280;
	let defaultHeight = 800;

	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;

	let defaultRatio = defaultWidth/defaultHeight;
	let currentRatio = windowWidth/windowHeight;
	console.log(currentRatio);

	let gameWidth = defaultWidth;
	let gameHeight = defaultHeight;
	console.log(currentRatio, ' ', defaultRatio);
	
	if (currentRatio < defaultRatio) {
	    gameHeight = Math.ceil((gameWidth / currentRatio) / 2.0) * 2;
	    gameHeight = Math.min(gameHeight, 960);
	} else {
	    gameWidth = Math.ceil((gameHeight * currentRatio) / 2.0) * 2;
	    gameWidth = Math.min(gameWidth, 1420);
	}

	let scaleX = windowWidth/gameWidth;
	let scaleY = windowHeight/gameHeight;
	
	console.log(scaleX, ' ', scaleY);
	
	this.game.scale.setGameSize(gameWidth,gameHeight);
	this.game.scale.setUserScale(scaleX,scaleY);
	
	
	this.initGlobalVariables();

	this.game.state.start('preloader');
    }

    initGlobalVariables(){
	this.game.global = {

	};
    }
}

export default Boot;

