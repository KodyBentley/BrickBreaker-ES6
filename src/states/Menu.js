import MenuButton from 'objects/MenuButton';

export default class Menu extends Phaser.State {

	create() {
		//Create background
		let background = this.game.add.image(0, 0, 'menuBackground');

		let logo = this.game.add.image(300, 100, 'menuTitle');


		//Create menu button
		let level = 'level' + this.game.global.level;
		let buttonPlay = new MenuButton(this.game, this.game.width * 0.5 + 50, 700, 'playButton', 'Game', level);
			buttonPlay.scale.setTo(0.5);
		let buttonHighscore = new MenuButton(this.game, this.game.width * 0.5 + 50, 850, 'highScore', 'HighScore');
			buttonHighscore.scale.setTo(0.5);


		//Added onOver and onOut tweens for play button
		buttonPlay.events.onInputOver.add(this.onOver, this);
		buttonPlay.events.onInputOut.add(this.onOut, this);

		buttonHighscore.events.onInputOver.add(this.onOverHighscore, this);
		buttonHighscore.events.onInputOut.add(this.onOutHighScore, this);


		

	}

	//Tween play button when the mouse is over
	onOver(buttonPlay, buttonHighscore) {
		this.game.add.tween(buttonPlay.scale).to({
			x: 0.8,
			y: 0.8
		}, 350, Phaser.Easing.Linear.In).start();	

	}

	//Tween play button when mouse is no longer over
	onOut(buttonPlay, buttonHighscore) {
		this.game.add.tween(buttonPlay.scale).to({
			x: 0.5,
			y: 0.5
		}, 350, Phaser.Easing.Linear.In).start();

		
	}

	onOverHighscore(buttonHighscore) {

		this.game.add.tween(buttonHighscore.scale).to({
			x: 0.8,
			y: 0.8
		}, 350, Phaser.Easing.Linear.In).start();

		

	}

	//Tween play button when mouse is no longer over
	onOutHighScore(buttonHighscore) {

		this.game.add.tween(buttonHighscore.scale).to({
			x: 0.5,
			y: 0.5
		}, 350, Phaser.Easing.Linear.In).start();
		

	}


}