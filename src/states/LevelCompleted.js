import MenuButton from 'objects/MenuButton';


export default class LevelCompleted extends Phaser.State {

	init() {

	}

	create() {
		let background = this.game.add.image(0, 0, 'gameBackground');

		this.levelCompletedText = this.game.add.text(575, 30, 'Level Completed!', {
			fontSize: '64px',
			fill: 'white'
		});

		this.continuePlayingText = this.game.add.text(675, 500, 'Continue Playing?', {
			fontSize: '32px',
			fill: 'white'
		});

		let level = 'level' + this.game.global.level;

		let buttonYes = new MenuButton(this.game, this.game.width * 0.5 - 150, 700, 'btnYes', 'Game', level);
		buttonYes.scale.setTo(0.8);

		let buttonNo = new MenuButton(this.game, this.game.width * 0.5 + 150, 700, 'btnNo', 'Menu');
		buttonNo.scale.setTo(0.8);



		//Added onOver and onOut tweens for play button
		buttonYes.events.onInputOver.add(this.onOverYes, this);
		buttonYes.events.onInputOut.add(this.onOutYes, this);

		buttonNo.events.onInputOver.add(this.onOverNo, this);
		buttonNo.events.onInputOut.add(this.onOutNo, this);
	}

	//Tween play button when the mouse is over
	onOverYes(buttonYes) {
		this.game.add.tween(buttonYes.scale).to({
			x: 1,
			y: 1
		}, 350, Phaser.Easing.Linear.In).start();

	}

	//Tween play button when mouse is no longer over
	onOutYes(buttonYes) {
		this.game.add.tween(buttonYes.scale).to({
			x: 0.8,
			y: 0.8
		}, 350, Phaser.Easing.Linear.In).start();

	}

	onOverNo(buttonNo) {
		this.game.add.tween(buttonNo.scale).to({
			x: 1,
			y: 1
		}, 350, Phaser.Easing.Linear.In).start();

	}

	//Tween play button when mouse is no longer over
	onOutNo(buttonNo) {
		this.game.add.tween(buttonNo.scale).to({
			x: 0.8,
			y: 0.8
		}, 350, Phaser.Easing.Linear.In).start();

	}
}