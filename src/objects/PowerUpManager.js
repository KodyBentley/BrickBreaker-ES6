import PowerUp from 'objects/PowerUp';

export default class PowerupManager extends Phaser.Sprite {
	constructor(parent, JSON) {
		super(parent);
		this._parent = parent;
		this._parent.add.existing(this);
		this._JSON = JSON;
		this.createGroup();
		this.startTimers();
	}


	startTimers() {

		// for each in the json file
		// start timer with min and max rnd times
		// create the powerup class
		this._parent.time.events.loop(this._JSON.general.dropTime, function() {
			let rand = this._JSON.powerups[Math.floor(Math.random() * this._JSON.powerups.length)];
			let x = Math.floor(Math.random() * rand.maxX) + rand.minX;
			let y = Math.floor(Math.random() * rand.maxY) + rand.minY;
			let powerUp = this.powerupGroup.create(x, y, rand.texture);
			powerUp.powerType = rand.powerType;
			let anim = powerUp.animations.add('shine');
			powerUp.animations.play('shine', 15, true);
			powerUp.body.gravity.y = 250;
		}, this);
	}

	createGroup() {
		this.powerupGroup = this._parent.add.group();
		this.powerupGroup.enableBody = true;
	}

	get powerups() {
		return this.powerupGroup;
	}
}