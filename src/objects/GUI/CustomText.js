export default class CustomText extends Phaser.BitmapText {
	constructor(game, x, y, font, text, size, align) {
		super(game, x, y, font, text.toString(), size, align);
		this._game = game;
		this.setup();
	}

	setup() {
		this.anchor.setTo(0.5);
		this._game.add.existing(this);
	}
}