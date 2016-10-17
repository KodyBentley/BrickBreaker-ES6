export default class Paddle extends Phaser.Sprite {
	constructor(parent, turrets, bullets) {
		super(parent, 600, 925, 'paddleM');
		this._parent = parent;
		this._parent.add.existing(this);
		// this.createTurrets(turrets);
		this.setup();
	}

	setup() {
		console.log('paddle setup working');
		this._parent.physics.arcade.enable(this);
		this.inputEnabled = true;
		this.anchor.setTo(0.5);
		this.body.collideWorldBounds = true;
		this.body.immovable = true;
		this.fireRate = 1000;
		this.nextFire = 0;
		this.create();
	}

	create() {
		this.bullets = this._parent.add.group();
		this.bullets.enableBody = true;
		this.bullets.createMultiple(30, 'greenLaser', 0, false);
		this.bullets.setAll('anchor.x', 0.5);
		this.bullets.setAll('anchor.y', 0.5);
		this.bullets.setAll('outOfBoundsKill', true);
		this.bullets.setAll('checkWorldBounds', true);

		this.emitter = this._parent.add.emitter(0, 0, 100);
		this.emitter.makeParticles('blueParticle');
		this.emitter.gravity = 200;

		this.powerupSound = this._parent.add.audio('powerupSound');

	}



	update() {
		this._parent.physics.arcade.overlap(this, this._parent.powerUps.powerups, this.powerUpCollide, null, this);
		this._parent.physics.arcade.collide(this.bullets, this._parent.bricks.blueBricks, this.onCollide, null, this);


		this.x = this._parent.input.x;
		// this.turretLeft.x = this.x - 150;
		// this.turretLeft.y = this.y - 25;
		// this.turretRight.x = this.x + 150;
		// this.turretRight.y = this.y - 25;

		if (this._parent.input.activePointer.isDown) {
			//  Boom!
			// console.log(this.bullets);
			this.fire();
		}

	}

	onCollide(bullet, blueBricks) {
		blueBricks.kill();
		bullet.kill();
		// this._parent.paddle.bullet.kill();
		this._parent.score.score += 10;
		this._parent.score.scoreText.text = 'Score: ' + this._parent.score.score;
		this.emitter.x = bullet.x;
		this.emitter.y = bullet.y - 60;
		this.emitter.start(true, 2000, null, 10);

	}

	createTurrets(turret, x, y) {

		this.turretLeft = this._parent.add.sprite(x, y, 'turretLeft');
		this.turretLeft.anchor.setTo(3.5, 0.7);

		this.turretRight = this._parent.add.sprite(x, y, 'turretRight');
		this.turretRight.anchor.setTo(-2.5, 0.7);
		this.addChild(this.turretLeft);
		this.addChild(this.turretRight);
		this.turretsExist = true;
		this._parent.physics.arcade.enable(this);

	}

	fire(paddle) {
		if (this._parent.time.now > this.nextFire && this.bullets.countDead() > 1 && this.turretsExist === true) {
			this.nextFire = this._parent.time.now + this.fireRate;
			console.log('fire workding');
			let bullet = this.bullets.getFirstExists(false);
			// this.turretLeft.addChild(bullet);
			if (bullet) {
				bullet.reset(this.turretLeft.x, this.turretLeft.ynpm);
				bullet.reset(this.turretRight.x, this.turretRight.y);
				bullet.body.velocity.y = -300;

			}

		}
	}

	powerUpCollide(paddle, powerUp) {
		this.powerupSound.play();
		switch (powerUp.powerType) {
			case 'growth':
				this.grow();
				break;
			case 'shrink':
				this.shrink();
				break;
			case 'healthUp':
				this.healthUp();
				break;
			case 'healthDown':
				this.healthDown();
				break;
		}
		powerUp.destroy();

	}

	grow() {
		this._parent.add.tween(this.scale).to({
			x: 1.5
		}, 250, Phaser.Easing.Linear.InOut, true, 150);

		this._parent.time.events.add(Phaser.Timer.SECOND * 6, function() {
			this._parent.add.tween(this.scale).to({
				x: 1
			}, 250, Phaser.Easing.Linear.InOut, true, 150);
		}, this);
	}

	shrink() {
		this._parent.add.tween(this.scale).to({
			x: 0.5
		}, 250, Phaser.Easing.Linear.InOut, true, 150);

		this._parent.time.events.add(Phaser.Timer.SECOND * 6, function() {
			this._parent.add.tween(this.scale).to({
				x: 1
			}, 250, Phaser.Easing.Linear.InOut, true, 150);
		}, this);
	}

	healthUp() {
		this._parent.score.increaseLife();
	}

	healthDown() {
		this._parent.score.killLife();

	}


}