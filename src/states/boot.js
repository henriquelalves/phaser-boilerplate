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

	this.initGlobalVariables();
	
	// Setup game screen resolution
	let defaultWidth = 1280;
	let defaultHeight = 800;

	let windowWidth = window.innerWidth;
	let windowHeight = window.innerHeight;

	let defaultRatio = defaultWidth/defaultHeight;
	let windowRatio = windowWidth/windowHeight;
	console.log(windowRatio);

	let gameWidth = defaultWidth;
	let gameHeight = defaultHeight;
	console.log(windowRatio, ' ', defaultRatio);
	
	if (windowRatio < defaultRatio) {
	    gameHeight = Math.ceil((gameWidth / windowRatio) / 2.0) * 2;
	    gameHeight = Math.min(gameHeight, 960);
	} else {
	    gameWidth = Math.ceil((gameHeight * windowRatio) / 2.0) * 2;
	    gameWidth = Math.min(gameWidth, 1420);
	}

	let scaleX = windowWidth/gameWidth;
	let scaleY = windowHeight/gameHeight;
	
	console.log(scaleX, ' ', scaleY);
	
	this.game.scale.setGameSize(gameWidth,gameHeight);
	this.game.scale.setUserScale(scaleX,scaleY);	

	this.game.screenSettings.windowWidth = windowWidth;
	this.game.screenSettings.windowHeight = windowHeight;
	this.game.screenSettings.gameWidth = gameWidth;
	this.game.screenSettings.gameHeight = gameHeight;
	this.game.screenSettings.offsetX = (gameWidth - defaultWidth)/2.0;
	this.game.screenSettings.offsetY = (gameHeight - defaultHeight)/2.0;
	
	this.game.state.start('preloader');
    }
    
    initGlobalVariables(){
	this.game.screenSettings = {
	    windowWidth: 0,
	    windowHeight: 0,
	    gameWidth: 0,
	    gameHeight: 0,
	    offsetX: 0,
	    offsetY: 0,
	};
	
	this.game.global = {

	};
    }
}

export default Boot;

