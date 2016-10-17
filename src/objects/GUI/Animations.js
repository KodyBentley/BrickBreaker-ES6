/*
List of animations:
    tweenTint:         For changing the tint of an object
    textChangeFade:    Fade out, change text, then fade back in
    shake:             Shake the object a few times left and right
    pop:               Object will grow and shrink to create a pop effect
 */

export default class Animations {
    constructor(game) {
        this.game = game;
    }

    tweenTint(obj, startColor, endColor, time = 250, delay = 0, callback = null) {
        if (obj) {
            let colorBlend = { step: 0 };
            let colorTween = this.game.add.tween(colorBlend).to({ step: 100 }, time, Phaser.Easing.Linear.None, delay);
            colorTween.onUpdateCallback(() => {
                obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
            });
            obj.tint = startColor;
            if (callback) {
                colorTween.onComplete.add(() => {
                    callback();
                });
            }
            colorTween.start(); 
        }
    }

    textChangeFade(obj, text = '', x = 0, y = 0) {
        let fadeOut = this.game.add.tween(obj).to({ alpha: 0 }, 100, Phaser.Easing.Linear.None, true);
        let fadeIn = this.game.add.tween(obj).to({ alpha: 1 }, 100, Phaser.Easing.Linear.None, false);
        fadeOut.onComplete.add(() => {
            obj.setText(text);
            obj.x = x;
            obj.y = y;
            fadeIn.start();
        });
    }

    shake() {
        // create a wobble animation
        var tween1 = this.game.add.tween(this).to({
            x: this.x - 15
        }, 20, Phaser.Easing.Sinusoidal.InOut).to({
            x: this.x + 15
        }, 20, Phaser.Easing.Sinusoidal.InOut, false, 15);
        var tween2 = this.game.add.tween(this).to({
            x: this.x - 15
        }, 20, Phaser.Easing.Sinusoidal.InOut).to({
            x: this.x + 15
        }, 20, Phaser.Easing.Sinusoidal.InOut, false, 15);
        var tween3 = this.game.add.tween(this).to({
            x: this.x
        }, 50, Phaser.Easing.Sinusoidal.InOut);
        tween1.chain(tween2);
        tween2.chain(tween3);
        tween1.start();
    }

    pop() {
        // create a pop animation
        let tweenGrow = this._game.add.tween(this.scale).to({
            x: 1.05,
            y: 1.05
        }, 50, Phaser.Easing.Linear.None);
        let tweenShrink = this._game.add.tween(this.scale).to({
            x: 1,
            y: 1
        }, 50, Phaser.Easing.Linear.None);
        tweenGrow.chain(tweenShrink);
        tweenGrow.start();
        tweenShrink.onComplete.add(function() {
            this._game.time.events.add(150, this.activate, this);
        }, this)
    }
}