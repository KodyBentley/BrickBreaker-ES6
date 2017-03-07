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
        this.game.load.image('playButton', 'assets/game/menues/btnplay.png');

        this.game.load.image('highScore', 'assets/game/menues/btnhighscore.png');

        this.game.load.image('btnHome', 'assets/game/menues/btnhome.png');

        this.game.load.image('btnYes', 'assets/game/menues/btnyes.png');

        this.game.load.image('btnNo', 'assets/game/menues/btnno.png');

        this.game.load.image('btnBack', 'assets/game/menues/btnback.png');

        this.game.load.image('btnContinue', 'assets/game/menues/btncontinue.png');

        this.game.load.image('menuBackground', 'assets/game/mainbackground.png');

        this.game.load.image('paddleM', 'assets/game/paddle/m.png');

        this.game.load.image('turretLeft', 'assets/game/paddle/turretleft.png');

        this.game.load.image('turretRight', 'assets/game/paddle/turretright.png');

        this.game.load.image('greenLaser', 'assets/game/lasergreen.png');

        this.game.load.image('ballM', 'assets/game/ball/steel/m.png');

        this.game.load.image('menuTitle', 'assets/game/menues/logo.png');

        this.game.load.image('gameBackground', 'assets/game/backgrounds/background01.png');

        this.game.load.image('blueBrick', 'assets/game/bricks/rectangle/blue/blank.png');

        this.game.load.image('damaged', 'assets/game/bricks/rectangle/damage.png');

        this.game.load.image('redBrick', 'assets/game/bricks/rectangle/red/stripes.png');

        this.game.load.image('greenBrick', 'assets/game/bricks/rectangle/green/inbox.png');

        this.game.load.image('blueStripe', 'assets/game/bricks/rectangle/blue/stripes.png');

        this.game.load.image('yellowSquare', 'assets/game/bricks/square/yellow/blank.png');

        this.game.load.image('blueParticle', 'assets/game/fragments/blue/2.png');

        this.game.load.image('redParticle', 'assets/game/fragments/red/2.png');

        this.game.load.image('yellowParticle', 'assets/game/fragments/yellow/2.png');

        this.game.load.image('greenParticle', 'assets/game/fragments/green/2.png');

        this.game.load.image('lives', 'assets/game/hud/lives.png');

        this.game.load.spritesheet('paddleGrow', 'assets/game/items/paddlegrow.png', 124, 124, 6);

        this.game.load.spritesheet('paddleShrink', 'assets/game/items/paddleshrink.png', 124, 124, 6);

        this.game.load.spritesheet('healthUp', 'assets/game/items/healthup.png', 124, 124, 6);

        this.game.load.spritesheet('healthDown', 'assets/game/items/healtminus.png', 124, 124, 6);

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

        this.game.stateChange.fadeOut(null, 'Menu');
    }
}