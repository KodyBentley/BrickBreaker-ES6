import MenuButton from 'objects/MenuButton';


export default class HighScore extends Phaser.State {

	init() {

	}

	create() {
		let background = this.game.add.image(0, 0, 'gameBackground');

		let buttonBack = new MenuButton(this.game, this.game.width * 0.5, 700, 'btnBack', 'Menu');
		buttonBack.scale.setTo(0.8);

		// let highScoreText = this.game.add.text(800, 30, 'HighScore!', {
		// 	fontSize: '32px',
		// 	fill: 'white'
		// });

		let highScoreImage = new MenuButton(this.game, this.game.width * 0.5, 150, 'highScore');
			highScoreImage.scale.setTo(0.5);


		this.highScore;
		if (localStorage.getItem('HighScore') !== null) {
			this.highScore = this.game.add.text(this.game.width * 0.5 - 50, 205, +localStorage.getItem('HighScore'), {
				fontSize: '64px',
				fill: 'white'
			});

		} else {
			this.highScore = this.game.add.text(this.game.width * 0.5 - 190, 205, 'No Highscore to display!', {
				fontSize: '32px',
				fill: 'white'
			});
		}



		//Added onOver and onOut tweens for play button
		buttonBack.events.onInputOver.add(this.onOver, this);
		buttonBack.events.onInputOut.add(this.onOut, this);


	}

	//Tween play button when the mouse is over
	onOver(buttonPlay) {
		this.game.add.tween(buttonPlay.scale).to({
			x: 1,
			y: 1
		}, 350, Phaser.Easing.Linear.In).start();

	}

	//Tween play button when mouse is no longer over
	onOut(buttonPlay) {
		this.game.add.tween(buttonPlay.scale).to({
			x: 0.8,
			y: 0.8
		}, 350, Phaser.Easing.Linear.In).start();

	}
}