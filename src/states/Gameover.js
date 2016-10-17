import MenuButton from 'objects/MenuButton';


export default class Gameover extends Phaser.State {

	init() {

	}

	create() {
		let background = this.game.add.image(0, 0, 'gameBackground');

		this.gameOvertext = this.game.add.text(650, 30, 'Gameover', {
			fontSize: '64px',
			fill: 'white'
		});



		//Create menu button
		
		let level = 'level' + this.game.global.level;
		let buttonPlay = new MenuButton(this.game, this.game.width * 0.5, 800, 'btnContinue', 'Menu', level);
		buttonPlay.scale.setTo(0.5);


		//Added onOver and onOut tweens for play button
		buttonPlay.events.onInputOver.add(this.onOver, this);
		buttonPlay.events.onInputOut.add(this.onOut, this);
	}

	//Tween play button when the mouse is over
	onOver(buttonPlay) {
		this.game.add.tween(buttonPlay.scale).to({
			x: 0.8,
			y: 0.8
		}, 350, Phaser.Easing.Linear.In).start();

	}

	//Tween play button when mouse is no longer over
	onOut(buttonPlay) {
		this.game.add.tween(buttonPlay.scale).to({
			x: 0.5,
			y: 0.5
		}, 350, Phaser.Easing.Linear.In).start();

	}
}