export default class PowerUp extends Phaser.Sprite {

	constructor(parent, x, y) {
		super(parent, x, y);
		this._parent = parent;
		this._parent.add.existing(this);
		this.setup();

	}

	setup() {
		this.anchor.setTo(0.5);
		this._parent.physics.arcade.enable(this);
		this.body.bounce.setTo(1);
		this.scale.setTo(0.8);
		this.body.gravity.y = 50;
	}

}