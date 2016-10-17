export default class Emitter extends Phaser.Sprite {

	constructor(parent, JSON) {
		super(parent, 0, 0);
		this._parent = parent;
		this._parent.add.existing(this);
		this._JSON = JSON;
		this.setup();

	}

	setup() {
		this.anchor.setTo(0.5);
		this._parent.physics.arcade.enable(this);
		this.body.gravity.y = 50;
		this.create();
	}

	create() {
		this.emitter = this._parent.add.emitter(0, 0, 100);
		this.emitter.makeParticles(this._parent.currentLevelData.general.emitter);
		this.emitter.gravity = 200;

	}


}