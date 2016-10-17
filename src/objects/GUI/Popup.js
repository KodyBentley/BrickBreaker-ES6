import BlankNumber from 'objects/GUI/BlankNumber';

export default class Popup {

    constructor(game, state) {
        this._game = game;
        this._state = state;
    }

    blurBackground(world) {
        this._world = world
        let blurX = this._game.add.filter('BlurX');
        let blurY = this._game.add.filter('BlurY');
        for (let i of world) {
            i.filters = [blurX, blurY];
        }
    }

    removeBlur() {
        for (let i of this._world) {
            i.filters = null;
        }
    }

    editSimpleNodePupop() {
        // create sign sprite
        this.numberGroup = this._game.add.group();

        for (let i = 0; i <= 9; i++) {
            let number = new BlankNumber(this._game, 100 * i + 300, 400, i, this, 'simple');
            this.numberGroup.add(number);
        }

        for (let i = 1; i <= 9; i++) {
            let number = new BlankNumber(this._game, 100 * i + 250, 550, i * -1, this, 'simple');
            this.numberGroup.add(number);
        }
    }

    editNegativeNodePupop() {
        // create sign sprite
        this.numberGroup = this._game.add.group();

        for (let i = 0; i <= 9; i++) {
            let number = new BlankNumber(this._game, 100 * i + 300, 150, i, this, 'negative');
            this.numberGroup.add(number);
        }

        for (let i = 1; i <= 9; i++) {
            let number = new BlankNumber(this._game, 100 * i + 250, 250, i * -1, this, 'negative');
            this.numberGroup.add(number);
        }

        for (let i = 0; i <= 9; i++) {
            let number = new BlankNumber(this._game, 100 * i + 300, 600, i, this, 'negative');
            this.numberGroup.add(number);
        }

        for (let i = 1; i <= 9; i++) {
            let number = new BlankNumber(this._game, 100 * i + 250, 700, i * -1, this, 'negative');
            this.numberGroup.add(number);
        }
    }

    simpleNodeCallback(val) {
        this.removeBlur();
        this.numberGroup.destroy();
        this._state.valueSelected(val);
    }

    negativeNodeCallback(val) {
        if (this.val1) {
            this.val2 = val;
            this.removeBlur();
            this.numberGroup.destroy();
            this._state.valueSelected(this.val1, this.val2);            
        } else {
            this.val1 = val;
        }
    }
}