export default class Score extends Phaser.Sprite {
	constructor(parent) {
		super(parent);
		// this._game = game;
		this._parent = parent;
		this._parent.add.existing(this);
		this.setup();
	}

	setup() {
		this._parent.physics.arcade.enable(this);
		this.inputEnabled = true;
		this.anchor.setTo(0.5);
		this.create();

	}

	create() {
		this.highScore;
		if (localStorage.getItem('HighScore') !== null) {
			this.highScore = this._parent.add.text(800, 30, 'Score: ' + localStorage.getItem('HighScore'), {
				fontSize: '32px',
				fill: 'white'
			});

		} else {
			this.highScore = this._parent.add.text(800, 30, 'Score: 0', {
				fontSize: '32px',
				fill: 'white'
			});

		}



		this.lives = 3;

		this.lifeOneFull = this.game.add.sprite(this._parent.world.width - 250, 60, 'lives');
		this.lifeOneFull.anchor.setTo(0.5);
		this.lifeOneFull.tint = '0xff00ff';
		this.lifeTwoFull = this.game.add.sprite(this._parent.world.width - 175, 60, 'lives');
		this.lifeTwoFull.anchor.setTo(0.5);
		this.lifeTwoFull.tint = '0xff00ff';
		this.lifeThreeFull = this.game.add.sprite(this._parent.world.width - 100, 60, 'lives');
		this.lifeThreeFull.anchor.setTo(0.5);
		this.lifeThreeFull.tint = '0xff00ff';

		this.lifeOneEmpty = this.game.add.sprite(this._parent.world.width - 250, 60, 'lives');
		this.lifeOneEmpty.anchor.setTo(0.5);
		this.lifeTwoEmpty = this.game.add.sprite(this._parent.world.width - 175, 60, 'lives');
		this.lifeTwoEmpty.anchor.setTo(0.5);
		this.lifeThreeEmpty = this.game.add.sprite(this._parent.world.width - 100, 60, 'lives');
		this.lifeThreeEmpty.anchor.setTo(0.5);

	}

	killLife() {
		this.lives--;
		this.updateLife();
	}

	increaseLife() {
		if (this.lives < 3) {
			this.lives++;
			switch (this.lives) {
				case 3:
					//Comment
					this._parent.add.tween(this.lifeOneFull.scale).to({
						x: 1,
						y: 1
					}, 250, Phaser.Easing.Linear.InOut, true, 150);
					this._parent.add.tween(this.lifeTwoFull.scale).to({
						x: 1,
						y: 1
					}, 250, Phaser.Easing.Linear.InOut, true, 150);
					this._parent.add.tween(this.lifeThreeFull.scale).to({
						x: 1,
						y: 1
					}, 250, Phaser.Easing.Linear.InOut, true, 150);

					break;
				case 2:
					//Comment
					this._parent.add.tween(this.lifeOneFull.scale).to({
						x: 1,
						y: 1
					}, 250, Phaser.Easing.Linear.InOut, true, 150);
					this._parent.add.tween(this.lifeTwoFull.scale).to({
						x: 1,
						y: 1
					}, 250, Phaser.Easing.Linear.InOut, true, 150);
					this._parent.add.tween(this.lifeThreeFull.scale).to({
						x: 0,
						y: 0
					}, 250, Phaser.Easing.Linear.InOut, true, 150);

					break;
				case 1:
					//Comment
					this._parent.add.tween(this.lifeOneFull.scale).to({
						x: 1,
						y: 1
					}, 250, Phaser.Easing.Linear.InOut, true, 150);
					this._parent.add.tween(this.lifeTwoFull.scale).to({
						x: 0,
						y: 0
					}, 250, Phaser.Easing.Linear.InOut, true, 150);
					this._parent.add.tween(this.lifeThreeFull.scale).to({
						x: 0,
						y: 0
					}, 250, Phaser.Easing.Linear.InOut, true, 150);
					break;
			}
		}
	}

	updateLife() {
		switch (this.lives) {
			case 3:
				//Comment
				this._parent.add.tween(this.lifeOneFull.scale).to({
					x: 1,
					y: 1
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				this._parent.add.tween(this.lifeTwoFull.scale).to({
					x: 1,
					y: 1
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				this._parent.add.tween(this.lifeThreeFull.scale).to({
					x: 1,
					y: 1
				}, 250, Phaser.Easing.Linear.InOut, true, 150);

				break;
			case 2:
				//Comment
				this._parent.add.tween(this.lifeOneFull.scale).to({
					x: 1,
					y: 1
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				this._parent.add.tween(this.lifeTwoFull.scale).to({
					x: 1,
					y: 1
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				this._parent.add.tween(this.lifeThreeFull.scale).to({
					x: 0,
					y: 0
				}, 250, Phaser.Easing.Linear.InOut, true, 150);

				break;
			case 1:
				//Comment
				this._parent.add.tween(this.lifeOneFull.scale).to({
					x: 1,
					y: 1
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				this._parent.add.tween(this.lifeTwoFull.scale).to({
					x: 0,
					y: 0
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				this._parent.add.tween(this.lifeThreeFull.scale).to({
					x: 0,
					y: 0
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				break;
			case 0:
				let tween = this._parent.add.tween(this.lifeOneFull.scale).to({
					x: 0,
					y: 0
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				this._parent.add.tween(this.lifeTwoFull.scale).to({
					x: 0,
					y: 0
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				this._parent.add.tween(this.lifeThreeFull.scale).to({
					x: 0,
					y: 0
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
				tween.onComplete.add(() => {
					this._parent.bricks.gameOver();

				});
				break;
		}
	}



}