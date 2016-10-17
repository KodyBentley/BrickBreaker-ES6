export default class Bricks extends Phaser.Sprite {
	constructor(parent, JSON) {
		super(parent, 0, 0);
		this._parent = parent;
		this._parent.add.existing(this);
		this._JSON = JSON;
		this.setup();
	}

	setup() {
		this._parent.physics.arcade.enable(this);
		this.body.bounce.setTo(1);
		this.anchor.setTo(0.5, 0.5);
		this._hp = 3;
		this.create();

	}

	create() {

		this.drawBricks();
	}

	update() {
		if(this.bricksGroup.countLiving() === 0) {
			this._parent.levelComplete();
		}
	}

	//Adding different health bricks down the line
	// hit(val, bricks) {
	// 	console.log(this._hp);
	// 	this._hp-= val;
	// 	if (this._hp < 1) {
	// 		bricks.kill();
	// 	}
	// }

	drawBricks() {
		this.bricksGroup = this._parent.add.group();
		this.bricksGroup.enableBody = true;
		for(let i = 0; i < this._JSON.length; i++) {
			this.brick = this.bricksGroup.create(this._JSON[i].x, this._JSON[i].y, this._JSON[i].texture, this._JSON[i].overlay);
			this.brick.body.bounce.set(1);
			this.brick.body.immovable = true;
			this.brickAlive = true;
		}
	}


	gameOver() {	
		 if (this._parent.game.score >= localStorage.getItem('HighScore')) {
            localStorage.setItem('HighScore', this._parent.game.score);
        } else if (this._parent.game.score < localStorage.getItem('HighScore')) {
            localStorage.setItem('HighScore', this._parent.game.score);
        }
        this._parent.score.highScore.content = 'Score:  ' + localStorage.getItem('HighScore');
		this._parent.state.start('GameOver', true, false);
	}


}