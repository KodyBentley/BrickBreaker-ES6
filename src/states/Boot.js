// import LocalStorage from 'objects/Network/LocalStorage';
import StateChange from 'objects/GUI/StateChange';
import Animations from 'objects/GUI/Animations';

export default class Boot extends Phaser.State {

    init() {
        this.game.orientation = 'landscape';
        this.game.scale.trackParentInterval = 1;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;

        window.addEventListener('resize', () => this.customScale());

        this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
        this.game.stage.disableVisibilityChange = true;

        this.customScale();

        this.game.time.advancedTiming = true;
        this.game.time.desiredFps = 60;

        
    }

    customScale() {
        let w = window.innerWidth;
        let h = window.innerHeight;

        let widthScale = w / this.game.width;
        let heightScale = h / this.game.height;

        if (widthScale > heightScale) {
            this.game.scale.setUserScale(heightScale, heightScale, 0, 0);
        } else {
            this.game.scale.setUserScale(widthScale, widthScale, 0, 0);
        }
        //By default if the browser tab loses focus the game will pause. You can stop that behaviour by setting this property to true.
        this.game.scale.refresh();
    }

    preload() {
        this.load.image('preloadBarBackground', 'assets/game/loadingBar/background.png');
        this.load.image('preloadBarMain', 'assets/game/loadingBar/main.png');
        this.load.image('preloadBarShine', 'assets/game/loadingBar/shine.png');

        this.load.image('loadingScreenBackground', 'assets/game/loadingBar/screenBackground.png');
        this.load.image('mainLogo', 'assets/game/loadingBar/logo.png');
    }

    create() {
        let background = this.game.add.image(0, 0, 'loadingScreenBackground');

        let logo = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'mainLogo');
        logo.anchor.setTo(0.5);
        // this.game.localStorage = new LocalStorage();
        this.game.stateChange = new StateChange(this.game);
        this.game.animations = new Animations(this.game);
        this.game.global = {};
        this.game.global.level = 1;
        this.game.global.score = 0;
        this.game.state.start('Preload');
    }
}