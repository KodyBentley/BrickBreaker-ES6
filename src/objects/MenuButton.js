export default class MenuButton extends Phaser.Sprite {
	constructor(game, x, y, key, state, params) {
		super(game, x, y, key);
		this._game = game;
		this._state = state;
		this._params = params
		this._game.add.existing(this);
		this.setup();
	}

	setup() {
		this.anchor.setTo(0.5);
		this.frame = 1;
		this.inputEnabled = true;
		this.scale.setTo(2, 2);
		this.events.onInputUp.add(function() {
			this._game.state.start(this._state, true, false, this._params);
		}, this);


	}
}