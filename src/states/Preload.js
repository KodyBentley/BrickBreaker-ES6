export default class Preload extends Phaser.State {

    create() {
        this.game.load.onLoadStart.add(this.loadStart, this);
        this.game.load.onFileComplete.add(this.fileComplete, this);
        this.game.load.onLoadComplete.add(this.loadComplete, this);
        this.game.score = 0;

        this.start();
    }

    start() {
        //load game
        this.game.load.image('playButton', 'assets/game/menues/BtnPlay.png');

        this.game.load.image('highScore', 'assets/game/menues/BtnHighscore.png');

        this.game.load.image('btnHome', 'assets/game/menues/BtnHome.png');

        this.game.load.image('btnYes', 'assets/game/menues/BtnYes.png');

        this.game.load.image('btnNo', 'assets/game/menues/BtnNo.png');

        this.game.load.image('btnBack', 'assets/game/menues/BtnBack.png');

        this.game.load.image('btnContinue', 'assets/game/menues/BtnContinue.png');

        this.game.load.image('menuBackground', 'assets/game/mainBackground.png');

        this.game.load.image('paddleM', 'assets/game/Paddle/M.png');

        this.game.load.image('turretLeft', 'assets/game/Paddle/turretLeft.png');

        this.game.load.image('turretRight', 'assets/game/Paddle/turretRight.png');

        this.game.load.image('greenLaser', 'assets/game/LaserGreen.png');

        this.game.load.image('ballM', 'assets/game/Ball/Steel/M.png');

        this.game.load.image('menuTitle', 'assets/game/menues/logo.png');

        this.game.load.image('gameBackground', 'assets/game/backgrounds/background01.png');

        this.game.load.image('blueBrick', 'assets/game/Bricks/Rectangle/Blue/Blank.png');

        this.game.load.image('damaged', 'assets/game/Bricks/Rectangle/Damage.png');

        this.game.load.image('redBrick', 'assets/game/Bricks/Rectangle/Red/Stripes.png');

        this.game.load.image('greenBrick', 'assets/game/Bricks/Rectangle/Green/Inbox.png');

        this.game.load.image('blueStripe', 'assets/game/Bricks/Rectangle/Blue/Stripes.png');

        this.game.load.image('yellowSquare', 'assets/game/Bricks/square/Yellow/Blank.png');

        this.game.load.image('blueParticle', 'assets/game/fragments/blue/2.png');

        this.game.load.image('redParticle', 'assets/game/fragments/red/2.png');

        this.game.load.image('yellowParticle', 'assets/game/fragments/yellow/2.png');

        this.game.load.image('greenParticle', 'assets/game/fragments/green/2.png');

        this.game.load.image('lives', 'assets/game/hud/lives.png');

        this.game.load.spritesheet('paddleGrow', 'assets/game/items/PaddleGrow.png', 124, 124, 6);

        this.game.load.spritesheet('paddleShrink', 'assets/game/items/PaddleShrink.png', 124, 124, 6);

        this.game.load.spritesheet('healthUp', 'assets/game/items/HealthUp.png', 124, 124, 6);

        this.game.load.spritesheet('healthDown', 'assets/game/items/HealtMinus.png', 124, 124, 6);

        this.game.load.audio('ballPaddle', 'assets/sound/ball-paddle.mp3');

        this.game.load.audio('ballBrick', 'assets/sound/ball-brick.mp3');

        this.game.load.audio('powerupSound', 'assets/sound/powerup.mp3');

        this.game.load.text('levels', 'assets/data/levels.json');

        // this.game.load.text('powerUps', 'assets/data/powerUps.json');



        this.loadStart();
    }

    loadStart() {
        this.game.load.start();

    }

    fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
        console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles)
    }

    loadComplete() {
        console.log('preload complete')

        this.game.stateChange.fadeOut(null, 'LevelCompleted');
    }
}