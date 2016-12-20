import Paddle from 'objects/Paddle';
import Ball from 'objects/Ball';
import Bricks from 'objects/Bricks';
import Score from 'objects/Score';
import PowerUp from 'objects/PowerUp';
import Emitter from 'objects/Emitter';
import PowerUpManager from 'objects/PowerUpManager';



export default class Game extends Phaser.State {

	init(levelId) {
		this.levelData = JSON.parse(this.game.cache.getText('levels'));
		console.log(levelId);
		this.currentLevelData = this.levelData[levelId];
	}

	create() {

		let background = this.game.add.image(0, 0, 'gameBackground');

		this.score = new Score(this);

		this.game.physics.arcade.checkCollision.down = false;

		this.paddle = new Paddle(this, 'paddleM');

		this.balls = new Ball(this, 'ballM');

		this.bricks = new Bricks(this, this.currentLevelData.bricks);

		this.powerUps = new PowerUpManager(this, this.currentLevelData);

		this.emitter = new Emitter(this, this.currentLevelData.general.emitter);

	}


	levelComplete() {
		this.game.global.level++;
		if(this.game.global.level > 5) {
			
			this.state.start('LevelCompleted');
		}
		if (this.game.score >= localStorage.getItem('HighScore')) {
			localStorage.setItem('HighScore', this.game.score);
		} else if (this.game.score < localStorage.getItem('HighScore')) {
			localStorage.setItem('HighScore', this.game.score);
		}
		this.score.highScore.content = 'Score:  ' + localStorage.getItem('HighScore');
		this.game.state.start('LevelCompleted');
	}

	scoreKeep() {
		this.game.score += 10
		this.score.highScore.text = 'Score: ' + this.game.score;
	}


	render() {
		this.game.debug.text(this.game.time.fps || '--', 20, 70, "#00ff00", "40px Courier");
		// // this.game.debug.spriteBounds(this.powerUp);
		// // this.game.debug.body(this.powerUp);
		// this.game.debug.text("Time until event: " + this.game.time.events.duration, 32, 32);


	}


}