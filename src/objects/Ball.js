export default class Ball extends Phaser.Sprite {
	constructor(parent, x, y) {
		super(parent, x, y, 'ballM');
		this._parent = parent;
		this._parent.add.existing(this);
		this.setup();
	}

	setup() {
		console.log ('balls setup working');
		this._parent.physics.arcade.enable(this);
		this.anchor.setTo(0.5);
		this.body.bounce.setTo(1);
		this.body.collideWorldBounds = true;
		this.ballOnPaddle = true;
		this._damage = 1;
		this.body.maxVelocity.set(500);
		this.create();

	}

	create() {
		this.ballOnPaddle = true;
		this._parent.input.onDown.add(this.releaseBall, this);
		this.ballSound = this._parent.add.audio('ballPaddle');
		this.brickSound = this._parent.add.audio('ballBrick');
	}

	update() {
		this._parent.physics.arcade.collide(this, this._parent.bricks.bricksGroup, this.onCollide, null, this);
		// this._parent.physics.arcade.collide(this, this._parent.bricks.bricksRed, this.onCollide, null, this);

		this._parent.physics.arcade.collide(this, this._parent.paddle, this.ballHitPaddle, null, this);
		// this._parent.physics.arcade.overlap(this, this._parent.powerUp, this.powerUpCollide, null, this);

		if (this.ballOnPaddle) {
			this.x = this._parent.paddle.x - 10;
			this.y = this._parent.paddle.y - 75;
		}
		if (this._parent.balls.y >= this._parent.world.height) {
			this.goneOffScreen();
		}



	}

	releaseBall() {
		if (this.ballOnPaddle) {
			this.body.velocity.y = -300;
			this.body.velocity.x = -75;
			this.ballOnPaddle = false;

		}
	}

	onCollide(ball, bricks) {
		this.brickSound.play();
		bricks.kill();
		// this._parent.bricks.hit(this._damage);
		// this._parent.score.score += 10;
		this._parent.scoreKeep();
		// this._parent.score.highScore.text = 'Score: ' + this._parent.score.score;
		if (this._parent.bricks.brickAlive === true) {
			this._parent.emitter.emitter.x = this._parent.balls.x;
			this._parent.emitter.emitter.y = this._parent.balls.y;
			this._parent.emitter.emitter.start(true, 2000, null, 10);
		} 
		
		
	}



	// powerUpCollide() {
	// 	console.log("destroy powerup");
	// 	this._parent.powerUp.destroy();
	// 	this.game.add.tween(this._parent.paddle.scale).to({
	// 		x: 1.5
	// 	}, 250, Phaser.Easing.Linear.InOut, true, 150);

	// 	this.game.time.events.add(Phaser.Timer.SECOND * 6, function() {
	// 		this.game.add.tween(this._parent.paddle.scale).to({
	// 			x: 1
	// 		}, 250, Phaser.Easing.Linear.InOut, true, 150);
	// 	}, this);
	// }

	goneOffScreen() {
		this._parent.score.killLife();
		if (this._parent.score.lives === 0) {
			this.destroy();
		} else {
			this.kill();
			this._parent.balls.reset(this._parent.paddle.x - 10, this._parent.paddle.y - 75);
			this.ballOnPaddle = true;
		}
	}

	ballHitPaddle(paddle) {
		this.ballSound.play();
		let diff = 0;

		if (this.x < this._parent.paddle.x) {
			//  Ball is on the left-hand side of the paddle
			diff = this._parent.paddle.x - this.x;
			this.body.velocity.x = (-10 * diff);
		} else if (this.x > this._parent.paddle.x) {
			//  Ball is on the right-hand side of the paddle
			diff = this.x - this._parent.paddle.x;
			this.body.velocity.x = (10 * diff);
		} else {
			//  Ball is perfectly in the middle
			//  Add a little random X to stop it bouncing straight up!
			this.body.velocity.x = 2 + Math.random() * 8;
		}
	}



}