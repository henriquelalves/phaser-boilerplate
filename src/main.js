import Boot from './states/boot';
import Preloader from './states/preloader';
import Menu from './states/menu';

const game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'game_canvas');

game.state.add('boot', new Boot());
game.state.add('preloader', new Preloader());
game.state.add('menu', new Menu());

game.state.start('boot');
