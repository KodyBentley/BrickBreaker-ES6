export default class StateChange {
    constructor(game) {
        this._game = game;
    }

    fadeOut(group, key, clearWorld = true, clearCache = false, parameter = null) {
        if (group) {
            let fadeOutTween = this._game.add.tween(group).to({ alpha: 0 }, 300, Phaser.Easing.Linear.InOut, true);
            fadeOutTween.onComplete.add(() => {
                this._game.state.start(key, clearWorld, clearCache, parameter);
            });
        } else {
        	this._game.time.events.add(1000, () => {
        		this._game.state.start(key, clearWorld, clearCache, parameter);
        	});
        }
    }
}