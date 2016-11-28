import MenuButton from 'objects/MenuButton';


export default class LevelSelect extends Phaser.State {

	create() {

		let background = this.game.add.image(0, 0, 'gameBackground');

		// let level = 'level' + this.game.global.level + 1;
		
		let level = 'level' + this.game.global.level;

		let buttonPlay = new MenuButton(this.game, this.game.width * 0.5 + 50, 700, 'playButton', 'Game', level);
		buttonPlay.scale.setTo(0.5);

		let level2 = this.game.add.text(650, 100, '2', {
			fontSize: '64px',
			fill: 'white'
		});

		let level3 = this.game.add.text(650, 200, '3', {
			fontSize: '64px',
			fill: 'white'
		});
	}
}