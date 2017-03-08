(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _statesBoot = require('states/Boot');

var _statesBoot2 = _interopRequireDefault(_statesBoot);

var _statesPreload = require('states/Preload');

var _statesPreload2 = _interopRequireDefault(_statesPreload);

var _statesMenu = require('states/Menu');

var _statesMenu2 = _interopRequireDefault(_statesMenu);

var _statesGame = require('states/Game');

var _statesGame2 = _interopRequireDefault(_statesGame);

var _statesGameover = require('states/Gameover');

var _statesGameover2 = _interopRequireDefault(_statesGameover);

var _statesLevelSelect = require('states/LevelSelect');

var _statesLevelSelect2 = _interopRequireDefault(_statesLevelSelect);

var _statesHighScore = require('states/HighScore');

var _statesHighScore2 = _interopRequireDefault(_statesHighScore);

var _statesLevelCompleted = require('states/LevelCompleted');

var _statesLevelCompleted2 = _interopRequireDefault(_statesLevelCompleted);

var Game = (function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game() {
		_classCallCheck(this, Game);

		_get(Object.getPrototypeOf(Game.prototype), 'constructor', this).call(this, 1600, 960, Phaser.Canvas, 'content', null, true);
		this.state.add('Boot', _statesBoot2['default'], false);
		this.state.add('Preload', _statesPreload2['default'], false);
		this.state.add('Menu', _statesMenu2['default'], false);
		this.state.add('Game', _statesGame2['default'], false);
		this.state.add('GameOver', _statesGameover2['default'], false);
		this.state.add('LevelSelect', _statesLevelSelect2['default'], false);
		this.state.add('HighScore', _statesHighScore2['default'], false);
		this.state.add('LevelCompleted', _statesLevelCompleted2['default'], false);
		this.state.start('Boot');
	}

	return Game;
})(Phaser.Game);

new Game();

},{"states/Boot":12,"states/Game":13,"states/Gameover":14,"states/HighScore":15,"states/LevelCompleted":16,"states/LevelSelect":17,"states/Menu":18,"states/Preload":19}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ball = (function (_Phaser$Sprite) {
	_inherits(Ball, _Phaser$Sprite);

	function Ball(parent, x, y) {
		_classCallCheck(this, Ball);

		_get(Object.getPrototypeOf(Ball.prototype), 'constructor', this).call(this, parent, x, y, 'ballM');
		this._parent = parent;
		this._parent.add.existing(this);
		this.setup();
	}

	_createClass(Ball, [{
		key: 'setup',
		value: function setup() {
			console.log('balls setup working');
			this._parent.physics.arcade.enable(this);
			this.anchor.setTo(0.5);
			this.body.bounce.setTo(1);
			this.body.collideWorldBounds = true;
			this.ballOnPaddle = true;
			this._damage = 1;
			this.body.maxVelocity.set(500);
			this.create();
		}
	}, {
		key: 'create',
		value: function create() {
			this.ballOnPaddle = true;
			this._parent.input.onDown.add(this.releaseBall, this);
			this.ballSound = this._parent.add.audio('ballPaddle');
			this.brickSound = this._parent.add.audio('ballBrick');
		}
	}, {
		key: 'update',
		value: function update() {
			this._parent.physics.arcade.collide(this, this._parent.bricks.bricksGroup, this.onCollide, null, this);
			// this._parent.physics.arcade.collide(this, this._parent.bricks.bricksRed, this.onCollide, null, this);

			this._parent.physics.arcade.collide(this, this._parent.paddle, this.ballHitPaddle, null, this);
			// this._parent.physics.arcade.overlap(this, this._parent.powerUp, this.powerUpCollide, null, this);

			if (this.ballOnPaddle) {
				this.x = this._parent.paddle.x - 10;
				this.y = this._parent.paddle.y - 75;
			}
			if (this._parent.balls.y >= this._parent.world.height) {
				this.goneOffScreen();
			}
		}
	}, {
		key: 'releaseBall',
		value: function releaseBall() {
			if (this.ballOnPaddle) {
				this.body.velocity.y = -300;
				this.body.velocity.x = -75;
				this.ballOnPaddle = false;
			}
		}
	}, {
		key: 'onCollide',
		value: function onCollide(ball, bricks) {
			this.brickSound.play();
			bricks.kill();
			// this._parent.bricks.hit(this._damage);
			// this._parent.score.score += 10;
			this._parent.scoreKeep();
			// this._parent.score.highScore.text = 'Score: ' + this._parent.score.score;
			if (this._parent.bricks.brickAlive === true) {
				this._parent.emitter.emitter.x = this._parent.balls.x;
				this._parent.emitter.emitter.y = this._parent.balls.y;
				this._parent.emitter.emitter.start(true, 2000, null, 10);
			}
		}

		// powerUpCollide() {
		// 	console.log("destroy powerup");
		// 	this._parent.powerUp.destroy();
		// 	this.game.add.tween(this._parent.paddle.scale).to({
		// 		x: 1.5
		// 	}, 250, Phaser.Easing.Linear.InOut, true, 150);

		// 	this.game.time.events.add(Phaser.Timer.SECOND * 6, function() {
		// 		this.game.add.tween(this._parent.paddle.scale).to({
		// 			x: 1
		// 		}, 250, Phaser.Easing.Linear.InOut, true, 150);
		// 	}, this);
		// }

	}, {
		key: 'goneOffScreen',
		value: function goneOffScreen() {
			this._parent.score.killLife();
			if (this._parent.score.lives === 0) {
				this.destroy();
			} else {
				this.kill();
				this._parent.balls.reset(this._parent.paddle.x - 10, this._parent.paddle.y - 75);
				this.ballOnPaddle = true;
			}
		}
	}, {
		key: 'ballHitPaddle',
		value: function ballHitPaddle(paddle) {
			this.ballSound.play();
			var diff = 0;

			if (this.x < this._parent.paddle.x) {
				//  Ball is on the left-hand side of the paddle
				diff = this._parent.paddle.x - this.x;
				this.body.velocity.x = -10 * diff;
			} else if (this.x > this._parent.paddle.x) {
				//  Ball is on the right-hand side of the paddle
				diff = this.x - this._parent.paddle.x;
				this.body.velocity.x = 10 * diff;
			} else {
				//  Ball is perfectly in the middle
				//  Add a little random X to stop it bouncing straight up!
				this.body.velocity.x = 2 + Math.random() * 8;
			}
		}
	}]);

	return Ball;
})(Phaser.Sprite);

exports['default'] = Ball;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bricks = (function (_Phaser$Sprite) {
	_inherits(Bricks, _Phaser$Sprite);

	function Bricks(parent, JSON) {
		_classCallCheck(this, Bricks);

		_get(Object.getPrototypeOf(Bricks.prototype), 'constructor', this).call(this, parent, 0, 0);
		this._parent = parent;
		this._parent.add.existing(this);
		this._JSON = JSON;
		this.setup();
	}

	_createClass(Bricks, [{
		key: 'setup',
		value: function setup() {
			this._parent.physics.arcade.enable(this);
			this.body.bounce.setTo(1);
			this.anchor.setTo(0.5, 0.5);
			this._hp = 3;
			this.create();
		}
	}, {
		key: 'create',
		value: function create() {

			this.drawBricks();
		}
	}, {
		key: 'update',
		value: function update() {
			if (this.bricksGroup.countLiving() === 0) {
				this._parent.levelComplete();
			}
		}

		//Adding different health bricks down the line
		// hit(val, bricks) {
		// 	console.log(this._hp);
		// 	this._hp-= val;
		// 	if (this._hp < 1) {
		// 		bricks.kill();
		// 	}
		// }

	}, {
		key: 'drawBricks',
		value: function drawBricks() {
			this.bricksGroup = this._parent.add.group();
			this.bricksGroup.enableBody = true;
			for (var i = 0; i < this._JSON.length; i++) {
				this.brick = this.bricksGroup.create(this._JSON[i].x, this._JSON[i].y, this._JSON[i].texture, this._JSON[i].overlay);
				this.brick.body.bounce.set(1);
				this.brick.body.immovable = true;
				this.brickAlive = true;
			}
		}
	}, {
		key: 'gameOver',
		value: function gameOver() {
			if (this._parent.game.score >= localStorage.getItem('HighScore')) {
				localStorage.setItem('HighScore', this._parent.game.score);
			} else if (this._parent.game.score < localStorage.getItem('HighScore')) {
				localStorage.setItem('HighScore', this._parent.game.score);
			}
			this._parent.score.highScore.content = 'Score:  ' + localStorage.getItem('HighScore');
			this._parent.state.start('GameOver', true, false);
		}
	}]);

	return Bricks;
})(Phaser.Sprite);

exports['default'] = Bricks;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Emitter = (function (_Phaser$Sprite) {
	_inherits(Emitter, _Phaser$Sprite);

	function Emitter(parent, JSON) {
		_classCallCheck(this, Emitter);

		_get(Object.getPrototypeOf(Emitter.prototype), "constructor", this).call(this, parent, 0, 0);
		this._parent = parent;
		this._parent.add.existing(this);
		this._JSON = JSON;
		this.setup();
	}

	_createClass(Emitter, [{
		key: "setup",
		value: function setup() {
			this.anchor.setTo(0.5);
			this._parent.physics.arcade.enable(this);
			this.body.gravity.y = 50;
			this.create();
		}
	}, {
		key: "create",
		value: function create() {
			this.emitter = this._parent.add.emitter(0, 0, 100);
			this.emitter.makeParticles(this._parent.currentLevelData.general.emitter);
			this.emitter.gravity = 200;
		}
	}]);

	return Emitter;
})(Phaser.Sprite);

exports["default"] = Emitter;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
/*
List of animations:
    tweenTint:         For changing the tint of an object
    textChangeFade:    Fade out, change text, then fade back in
    shake:             Shake the object a few times left and right
    pop:               Object will grow and shrink to create a pop effect
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Animations = (function () {
    function Animations(game) {
        _classCallCheck(this, Animations);

        this.game = game;
    }

    _createClass(Animations, [{
        key: 'tweenTint',
        value: function tweenTint(obj, startColor, endColor) {
            var time = arguments.length <= 3 || arguments[3] === undefined ? 250 : arguments[3];

            var _this = this;

            var delay = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
            var callback = arguments.length <= 5 || arguments[5] === undefined ? null : arguments[5];

            if (obj) {
                (function () {
                    var colorBlend = { step: 0 };
                    var colorTween = _this.game.add.tween(colorBlend).to({ step: 100 }, time, Phaser.Easing.Linear.None, delay);
                    colorTween.onUpdateCallback(function () {
                        obj.tint = Phaser.Color.interpolateColor(startColor, endColor, 100, colorBlend.step);
                    });
                    obj.tint = startColor;
                    if (callback) {
                        colorTween.onComplete.add(function () {
                            callback();
                        });
                    }
                    colorTween.start();
                })();
            }
        }
    }, {
        key: 'textChangeFade',
        value: function textChangeFade(obj) {
            var text = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
            var x = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
            var y = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

            var fadeOut = this.game.add.tween(obj).to({ alpha: 0 }, 100, Phaser.Easing.Linear.None, true);
            var fadeIn = this.game.add.tween(obj).to({ alpha: 1 }, 100, Phaser.Easing.Linear.None, false);
            fadeOut.onComplete.add(function () {
                obj.setText(text);
                obj.x = x;
                obj.y = y;
                fadeIn.start();
            });
        }
    }, {
        key: 'shake',
        value: function shake() {
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
    }, {
        key: 'pop',
        value: function pop() {
            // create a pop animation
            var tweenGrow = this._game.add.tween(this.scale).to({
                x: 1.05,
                y: 1.05
            }, 50, Phaser.Easing.Linear.None);
            var tweenShrink = this._game.add.tween(this.scale).to({
                x: 1,
                y: 1
            }, 50, Phaser.Easing.Linear.None);
            tweenGrow.chain(tweenShrink);
            tweenGrow.start();
            tweenShrink.onComplete.add(function () {
                this._game.time.events.add(150, this.activate, this);
            }, this);
        }
    }]);

    return Animations;
})();

exports['default'] = Animations;
module.exports = exports['default'];

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StateChange = (function () {
    function StateChange(game) {
        _classCallCheck(this, StateChange);

        this._game = game;
    }

    _createClass(StateChange, [{
        key: "fadeOut",
        value: function fadeOut(group, key) {
            var clearWorld = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

            var _this = this;

            var clearCache = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
            var parameter = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];

            if (group) {
                var fadeOutTween = this._game.add.tween(group).to({ alpha: 0 }, 300, Phaser.Easing.Linear.InOut, true);
                fadeOutTween.onComplete.add(function () {
                    _this._game.state.start(key, clearWorld, clearCache, parameter);
                });
            } else {
                this._game.time.events.add(1000, function () {
                    _this._game.state.start(key, clearWorld, clearCache, parameter);
                });
            }
        }
    }]);

    return StateChange;
})();

exports["default"] = StateChange;
module.exports = exports["default"];

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuButton = (function (_Phaser$Sprite) {
	_inherits(MenuButton, _Phaser$Sprite);

	function MenuButton(game, x, y, key, state, params) {
		_classCallCheck(this, MenuButton);

		_get(Object.getPrototypeOf(MenuButton.prototype), "constructor", this).call(this, game, x, y, key);
		this._game = game;
		this._state = state;
		this._params = params;
		this._game.add.existing(this);
		this.setup();
	}

	_createClass(MenuButton, [{
		key: "setup",
		value: function setup() {
			this.anchor.setTo(0.5);
			this.frame = 1;
			this.inputEnabled = true;
			this.scale.setTo(2, 2);
			this.events.onInputUp.add(function () {
				this._game.state.start(this._state, true, false, this._params);
			}, this);
		}
	}]);

	return MenuButton;
})(Phaser.Sprite);

exports["default"] = MenuButton;
module.exports = exports["default"];

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paddle = (function (_Phaser$Sprite) {
	_inherits(Paddle, _Phaser$Sprite);

	function Paddle(parent, turrets, bullets) {
		_classCallCheck(this, Paddle);

		_get(Object.getPrototypeOf(Paddle.prototype), 'constructor', this).call(this, parent, 600, 925, 'paddleM');
		this._parent = parent;
		this._parent.add.existing(this);
		// this.createTurrets(turrets);
		this.setup();
	}

	_createClass(Paddle, [{
		key: 'setup',
		value: function setup() {
			console.log('paddle setup working');
			this._parent.physics.arcade.enable(this);
			this.inputEnabled = true;
			this.anchor.setTo(0.5);
			this.body.collideWorldBounds = true;
			this.body.immovable = true;
			this.fireRate = 1000;
			this.nextFire = 0;
			this.create();
		}
	}, {
		key: 'create',
		value: function create() {
			this.bullets = this._parent.add.group();
			this.bullets.enableBody = true;
			this.bullets.createMultiple(30, 'greenLaser', 0, false);
			this.bullets.setAll('anchor.x', 0.5);
			this.bullets.setAll('anchor.y', 0.5);
			this.bullets.setAll('outOfBoundsKill', true);
			this.bullets.setAll('checkWorldBounds', true);

			this.emitter = this._parent.add.emitter(0, 0, 100);
			this.emitter.makeParticles('blueParticle');
			this.emitter.gravity = 200;

			this.powerupSound = this._parent.add.audio('powerupSound');
		}
	}, {
		key: 'update',
		value: function update() {
			this._parent.physics.arcade.overlap(this, this._parent.powerUps.powerups, this.powerUpCollide, null, this);
			// this._parent.physics.arcade.collide(this.bullets, this._parent.bricks.blueBricks, this.onCollide, null, this);

			this.x = this._parent.input.x;
			// this.turretLeft.x = this.x - 150;
			// this.turretLeft.y = this.y - 25;
			// this.turretRight.x = this.x + 150;
			// this.turretRight.y = this.y - 25;

			if (this._parent.input.activePointer.isDown) {
				//  Boom!
				// console.log(this.bullets);
				this.fire();
			}
		}
	}, {
		key: 'onCollide',
		value: function onCollide(bullet, blueBricks) {
			blueBricks.kill();
			bullet.kill();
			// this._parent.paddle.bullet.kill();
			this._parent.score.score += 10;
			this._parent.score.scoreText.text = 'Score: ' + this._parent.score.score;
			this.emitter.x = bullet.x;
			this.emitter.y = bullet.y - 60;
			this.emitter.start(true, 2000, null, 10);
		}
	}, {
		key: 'createTurrets',
		value: function createTurrets(turret, x, y) {

			this.turretLeft = this._parent.add.sprite(x, y, 'turretLeft');
			this.turretLeft.anchor.setTo(3.5, 0.7);

			this.turretRight = this._parent.add.sprite(x, y, 'turretRight');
			this.turretRight.anchor.setTo(-2.5, 0.7);
			this.addChild(this.turretLeft);
			this.addChild(this.turretRight);
			this.turretsExist = true;
			this._parent.physics.arcade.enable(this);
		}
	}, {
		key: 'fire',
		value: function fire(paddle) {
			if (this._parent.time.now > this.nextFire && this.bullets.countDead() > 1 && this.turretsExist === true) {
				this.nextFire = this._parent.time.now + this.fireRate;
				console.log('fire workding');
				var bullet = this.bullets.getFirstExists(false);
				// this.turretLeft.addChild(bullet);
				if (bullet) {
					bullet.reset(this.turretLeft.x, this.turretLeft.ynpm);
					bullet.reset(this.turretRight.x, this.turretRight.y);
					bullet.body.velocity.y = -300;
				}
			}
		}
	}, {
		key: 'powerUpCollide',
		value: function powerUpCollide(paddle, powerUp) {
			this.powerupSound.play();
			switch (powerUp.powerType) {
				case 'growth':
					this.grow();
					break;
				case 'shrink':
					this.shrink();
					break;
				case 'healthUp':
					this.healthUp();
					break;
				case 'healthDown':
					this.healthDown();
					break;
			}
			powerUp.destroy();
		}
	}, {
		key: 'grow',
		value: function grow() {
			this._parent.add.tween(this.scale).to({
				x: 1.5
			}, 250, Phaser.Easing.Linear.InOut, true, 150);

			this._parent.time.events.add(Phaser.Timer.SECOND * 6, function () {
				this._parent.add.tween(this.scale).to({
					x: 1
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
			}, this);
		}
	}, {
		key: 'shrink',
		value: function shrink() {
			this._parent.add.tween(this.scale).to({
				x: 0.5
			}, 250, Phaser.Easing.Linear.InOut, true, 150);

			this._parent.time.events.add(Phaser.Timer.SECOND * 6, function () {
				this._parent.add.tween(this.scale).to({
					x: 1
				}, 250, Phaser.Easing.Linear.InOut, true, 150);
			}, this);
		}
	}, {
		key: 'healthUp',
		value: function healthUp() {
			this._parent.score.increaseLife();
		}
	}, {
		key: 'healthDown',
		value: function healthDown() {
			this._parent.score.killLife();
		}
	}]);

	return Paddle;
})(Phaser.Sprite);

exports['default'] = Paddle;
module.exports = exports['default'];

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PowerUp = (function (_Phaser$Sprite) {
	_inherits(PowerUp, _Phaser$Sprite);

	function PowerUp(parent, x, y) {
		_classCallCheck(this, PowerUp);

		_get(Object.getPrototypeOf(PowerUp.prototype), "constructor", this).call(this, parent, x, y);
		this._parent = parent;
		this._parent.add.existing(this);
		this.setup();
	}

	_createClass(PowerUp, [{
		key: "setup",
		value: function setup() {
			this.anchor.setTo(0.5);
			this._parent.physics.arcade.enable(this);
			this.body.bounce.setTo(1);
			this.scale.setTo(0.8);
			this.body.gravity.y = 50;
		}
	}]);

	return PowerUp;
})(Phaser.Sprite);

exports["default"] = PowerUp;
module.exports = exports["default"];

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsPowerUp = require('objects/PowerUp');

var _objectsPowerUp2 = _interopRequireDefault(_objectsPowerUp);

var PowerupManager = (function (_Phaser$Sprite) {
	_inherits(PowerupManager, _Phaser$Sprite);

	function PowerupManager(parent, JSON) {
		_classCallCheck(this, PowerupManager);

		_get(Object.getPrototypeOf(PowerupManager.prototype), 'constructor', this).call(this, parent);
		this._parent = parent;
		this._parent.add.existing(this);
		this._JSON = JSON;
		this.createGroup();
		this.startTimers();
	}

	_createClass(PowerupManager, [{
		key: 'startTimers',
		value: function startTimers() {

			// for each in the json file
			// start timer with min and max rnd times
			// create the powerup class
			this._parent.time.events.loop(this._JSON.general.dropTime, function () {
				var rand = this._JSON.powerups[Math.floor(Math.random() * this._JSON.powerups.length)];
				var x = Math.floor(Math.random() * rand.maxX) + rand.minX;
				var y = Math.floor(Math.random() * rand.maxY) + rand.minY;
				var powerUp = this.powerupGroup.create(x, y, rand.texture);
				powerUp.powerType = rand.powerType;
				var anim = powerUp.animations.add('shine');
				powerUp.animations.play('shine', 15, true);
				powerUp.body.gravity.y = 250;
			}, this);
		}
	}, {
		key: 'createGroup',
		value: function createGroup() {
			this.powerupGroup = this._parent.add.group();
			this.powerupGroup.enableBody = true;
		}
	}, {
		key: 'powerups',
		get: function get() {
			return this.powerupGroup;
		}
	}]);

	return PowerupManager;
})(Phaser.Sprite);

exports['default'] = PowerupManager;
module.exports = exports['default'];

},{"objects/PowerUp":9}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Score = (function (_Phaser$Sprite) {
	_inherits(Score, _Phaser$Sprite);

	function Score(parent) {
		_classCallCheck(this, Score);

		_get(Object.getPrototypeOf(Score.prototype), 'constructor', this).call(this, parent);
		// this._game = game;
		this._parent = parent;
		this._parent.add.existing(this);
		this.setup();
	}

	_createClass(Score, [{
		key: 'setup',
		value: function setup() {
			this._parent.physics.arcade.enable(this);
			this.inputEnabled = true;
			this.anchor.setTo(0.5);
			this.create();
		}
	}, {
		key: 'create',
		value: function create() {
			this.highScore;
			if (localStorage.getItem('HighScore') !== null) {
				this.highScore = this._parent.add.text(800, 30, 'Score: ' + localStorage.getItem('HighScore'), {
					fontSize: '32px',
					fill: 'white'
				});
			} else {
				this.highScore = this._parent.add.text(800, 30, 'Score: 0', {
					fontSize: '32px',
					fill: 'white'
				});
			}

			this.lives = 3;

			this.lifeOneFull = this.game.add.sprite(this._parent.world.width - 250, 60, 'lives');
			this.lifeOneFull.anchor.setTo(0.5);
			this.lifeOneFull.tint = '0xff00ff';
			this.lifeTwoFull = this.game.add.sprite(this._parent.world.width - 175, 60, 'lives');
			this.lifeTwoFull.anchor.setTo(0.5);
			this.lifeTwoFull.tint = '0xff00ff';
			this.lifeThreeFull = this.game.add.sprite(this._parent.world.width - 100, 60, 'lives');
			this.lifeThreeFull.anchor.setTo(0.5);
			this.lifeThreeFull.tint = '0xff00ff';

			this.lifeOneEmpty = this.game.add.sprite(this._parent.world.width - 250, 60, 'lives');
			this.lifeOneEmpty.anchor.setTo(0.5);
			this.lifeTwoEmpty = this.game.add.sprite(this._parent.world.width - 175, 60, 'lives');
			this.lifeTwoEmpty.anchor.setTo(0.5);
			this.lifeThreeEmpty = this.game.add.sprite(this._parent.world.width - 100, 60, 'lives');
			this.lifeThreeEmpty.anchor.setTo(0.5);
		}
	}, {
		key: 'killLife',
		value: function killLife() {
			this.lives--;
			this.updateLife();
		}
	}, {
		key: 'increaseLife',
		value: function increaseLife() {
			if (this.lives < 3) {
				this.lives++;
				switch (this.lives) {
					case 3:
						//Comment
						this._parent.add.tween(this.lifeOneFull.scale).to({
							x: 1,
							y: 1
						}, 250, Phaser.Easing.Linear.InOut, true, 150);
						this._parent.add.tween(this.lifeTwoFull.scale).to({
							x: 1,
							y: 1
						}, 250, Phaser.Easing.Linear.InOut, true, 150);
						this._parent.add.tween(this.lifeThreeFull.scale).to({
							x: 1,
							y: 1
						}, 250, Phaser.Easing.Linear.InOut, true, 150);

						break;
					case 2:
						//Comment
						this._parent.add.tween(this.lifeOneFull.scale).to({
							x: 1,
							y: 1
						}, 250, Phaser.Easing.Linear.InOut, true, 150);
						this._parent.add.tween(this.lifeTwoFull.scale).to({
							x: 1,
							y: 1
						}, 250, Phaser.Easing.Linear.InOut, true, 150);
						this._parent.add.tween(this.lifeThreeFull.scale).to({
							x: 0,
							y: 0
						}, 250, Phaser.Easing.Linear.InOut, true, 150);

						break;
					case 1:
						//Comment
						this._parent.add.tween(this.lifeOneFull.scale).to({
							x: 1,
							y: 1
						}, 250, Phaser.Easing.Linear.InOut, true, 150);
						this._parent.add.tween(this.lifeTwoFull.scale).to({
							x: 0,
							y: 0
						}, 250, Phaser.Easing.Linear.InOut, true, 150);
						this._parent.add.tween(this.lifeThreeFull.scale).to({
							x: 0,
							y: 0
						}, 250, Phaser.Easing.Linear.InOut, true, 150);
						break;
				}
			}
		}
	}, {
		key: 'updateLife',
		value: function updateLife() {
			var _this = this;

			switch (this.lives) {
				case 3:
					//Comment
					this._parent.add.tween(this.lifeOneFull.scale).to({
						x: 1,
						y: 1
					}, 250, Phaser.Easing.Linear.InOut, true, 150);
					this._parent.add.tween(this.lifeTwoFull.scale).to({
						x: 1,
						y: 1
					}, 250, Phaser.Easing.Linear.InOut, true, 150);
					this._parent.add.tween(this.lifeThreeFull.scale).to({
						x: 1,
						y: 1
					}, 250, Phaser.Easing.Linear.InOut, true, 150);

					break;
				case 2:
					//Comment
					this._parent.add.tween(this.lifeOneFull.scale).to({
						x: 1,
						y: 1
					}, 250, Phaser.Easing.Linear.InOut, true, 150);
					this._parent.add.tween(this.lifeTwoFull.scale).to({
						x: 1,
						y: 1
					}, 250, Phaser.Easing.Linear.InOut, true, 150);
					this._parent.add.tween(this.lifeThreeFull.scale).to({
						x: 0,
						y: 0
					}, 250, Phaser.Easing.Linear.InOut, true, 150);

					break;
				case 1:
					//Comment
					this._parent.add.tween(this.lifeOneFull.scale).to({
						x: 1,
						y: 1
					}, 250, Phaser.Easing.Linear.InOut, true, 150);
					this._parent.add.tween(this.lifeTwoFull.scale).to({
						x: 0,
						y: 0
					}, 250, Phaser.Easing.Linear.InOut, true, 150);
					this._parent.add.tween(this.lifeThreeFull.scale).to({
						x: 0,
						y: 0
					}, 250, Phaser.Easing.Linear.InOut, true, 150);
					break;
				case 0:
					var tween = this._parent.add.tween(this.lifeOneFull.scale).to({
						x: 0,
						y: 0
					}, 250, Phaser.Easing.Linear.InOut, true, 150);
					this._parent.add.tween(this.lifeTwoFull.scale).to({
						x: 0,
						y: 0
					}, 250, Phaser.Easing.Linear.InOut, true, 150);
					this._parent.add.tween(this.lifeThreeFull.scale).to({
						x: 0,
						y: 0
					}, 250, Phaser.Easing.Linear.InOut, true, 150);
					tween.onComplete.add(function () {
						_this._parent.bricks.gameOver();
					});
					break;
			}
		}
	}]);

	return Score;
})(Phaser.Sprite);

exports['default'] = Score;
module.exports = exports['default'];

},{}],12:[function(require,module,exports){
// import LocalStorage from 'objects/Network/LocalStorage';
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsGUIStateChange = require('objects/GUI/StateChange');

var _objectsGUIStateChange2 = _interopRequireDefault(_objectsGUIStateChange);

var _objectsGUIAnimations = require('objects/GUI/Animations');

var _objectsGUIAnimations2 = _interopRequireDefault(_objectsGUIAnimations);

var Boot = (function (_Phaser$State) {
    _inherits(Boot, _Phaser$State);

    function Boot() {
        _classCallCheck(this, Boot);

        _get(Object.getPrototypeOf(Boot.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Boot, [{
        key: 'init',
        value: function init() {
            var _this = this;

            this.game.orientation = 'landscape';
            this.game.scale.trackParentInterval = 1;
            this.game.scale.pageAlignHorizontally = true;
            this.game.scale.pageAlignVertically = true;

            window.addEventListener('resize', function () {
                return _this.customScale();
            });

            this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
            this.game.stage.disableVisibilityChange = true;

            this.customScale();

            this.game.time.advancedTiming = true;
            this.game.time.desiredFps = 60;
        }
    }, {
        key: 'customScale',
        value: function customScale() {
            var w = window.innerWidth;
            var h = window.innerHeight;

            var widthScale = w / this.game.width;
            var heightScale = h / this.game.height;

            if (widthScale > heightScale) {
                this.game.scale.setUserScale(heightScale, heightScale, 0, 0);
            } else {
                this.game.scale.setUserScale(widthScale, widthScale, 0, 0);
            }
            //By default if the browser tab loses focus the game will pause. You can stop that behaviour by setting this property to true.
            this.game.scale.refresh();
        }
    }, {
        key: 'preload',
        value: function preload() {
            this.load.image('preloadBarBackground', 'assets/game/loadingBar/background.png');
            this.load.image('preloadBarMain', 'assets/game/loadingBar/main.png');
            this.load.image('preloadBarShine', 'assets/game/loadingBar/shine.png');

            this.load.image('loadingScreenBackground', 'assets/game/loadingBar/screenBackground.png');
            this.load.image('mainLogo', 'assets/game/loadingBar/logo.png');
        }
    }, {
        key: 'create',
        value: function create() {
            var background = this.game.add.image(0, 0, 'loadingScreenBackground');

            var logo = this.game.add.image(this.game.world.centerX, this.game.world.centerY, 'mainLogo');
            logo.anchor.setTo(0.5);
            // this.game.localStorage = new LocalStorage();
            this.game.stateChange = new _objectsGUIStateChange2['default'](this.game);
            this.game.animations = new _objectsGUIAnimations2['default'](this.game);
            this.game.global = {};
            this.game.global.level = 1;
            this.game.global.score = 0;
            this.game.state.start('Preload');
        }
    }]);

    return Boot;
})(Phaser.State);

exports['default'] = Boot;
module.exports = exports['default'];

},{"objects/GUI/Animations":5,"objects/GUI/StateChange":6}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsPaddle = require('objects/Paddle');

var _objectsPaddle2 = _interopRequireDefault(_objectsPaddle);

var _objectsBall = require('objects/Ball');

var _objectsBall2 = _interopRequireDefault(_objectsBall);

var _objectsBricks = require('objects/Bricks');

var _objectsBricks2 = _interopRequireDefault(_objectsBricks);

var _objectsScore = require('objects/Score');

var _objectsScore2 = _interopRequireDefault(_objectsScore);

var _objectsPowerUp = require('objects/PowerUp');

var _objectsPowerUp2 = _interopRequireDefault(_objectsPowerUp);

var _objectsEmitter = require('objects/Emitter');

var _objectsEmitter2 = _interopRequireDefault(_objectsEmitter);

var _objectsPowerUpManager = require('objects/PowerUpManager');

var _objectsPowerUpManager2 = _interopRequireDefault(_objectsPowerUpManager);

var Game = (function (_Phaser$State) {
	_inherits(Game, _Phaser$State);

	function Game() {
		_classCallCheck(this, Game);

		_get(Object.getPrototypeOf(Game.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Game, [{
		key: 'init',
		value: function init(levelId) {
			this.levelData = JSON.parse(this.game.cache.getText('levels'));
			console.log(levelId);
			this.currentLevelData = this.levelData[levelId];
		}
	}, {
		key: 'create',
		value: function create() {

			var background = this.game.add.image(0, 0, 'gameBackground');

			this.score = new _objectsScore2['default'](this);

			this.game.physics.arcade.checkCollision.down = false;

			this.paddle = new _objectsPaddle2['default'](this, 'paddleM');

			this.balls = new _objectsBall2['default'](this, 'ballM');

			this.bricks = new _objectsBricks2['default'](this, this.currentLevelData.bricks);

			this.powerUps = new _objectsPowerUpManager2['default'](this, this.currentLevelData);

			this.emitter = new _objectsEmitter2['default'](this, this.currentLevelData.general.emitter);
		}
	}, {
		key: 'levelComplete',
		value: function levelComplete() {
			this.game.global.level++;
			if (this.game.global.level > 5) {

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
	}, {
		key: 'scoreKeep',
		value: function scoreKeep() {
			this.game.score += 10;
			this.score.highScore.text = 'Score: ' + this.game.score;
		}
	}, {
		key: 'render',
		value: function render() {
			this.game.debug.text(this.game.time.fps || '--', 20, 70, "#00ff00", "40px Courier");
			// // this.game.debug.spriteBounds(this.powerUp);
			// // this.game.debug.body(this.powerUp);
			// this.game.debug.text("Time until event: " + this.game.time.events.duration, 32, 32);
		}
	}]);

	return Game;
})(Phaser.State);

exports['default'] = Game;
module.exports = exports['default'];

},{"objects/Ball":2,"objects/Bricks":3,"objects/Emitter":4,"objects/Paddle":8,"objects/PowerUp":9,"objects/PowerUpManager":10,"objects/Score":11}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsMenuButton = require('objects/MenuButton');

var _objectsMenuButton2 = _interopRequireDefault(_objectsMenuButton);

var Gameover = (function (_Phaser$State) {
	_inherits(Gameover, _Phaser$State);

	function Gameover() {
		_classCallCheck(this, Gameover);

		_get(Object.getPrototypeOf(Gameover.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Gameover, [{
		key: 'init',
		value: function init() {}
	}, {
		key: 'create',
		value: function create() {
			var background = this.game.add.image(0, 0, 'gameBackground');

			this.gameOvertext = this.game.add.text(650, 30, 'Gameover', {
				fontSize: '64px',
				fill: 'white'
			});

			this.ranOutText = this.game.add.text(655, 115, 'You ran out of lives!', {
				fontSize: '32px',
				fill: 'white'
			});

			//Create menu button

			var level = 'level' + this.game.global.level;
			var buttonPlay = new _objectsMenuButton2['default'](this.game, this.game.width * 0.5, 800, 'btnContinue', 'Menu', level);
			buttonPlay.scale.setTo(0.5);

			//Added onOver and onOut tweens for play button
			buttonPlay.events.onInputOver.add(this.onOver, this);
			buttonPlay.events.onInputOut.add(this.onOut, this);
		}

		//Tween play button when the mouse is over
	}, {
		key: 'onOver',
		value: function onOver(buttonPlay) {
			this.game.add.tween(buttonPlay.scale).to({
				x: 0.8,
				y: 0.8
			}, 350, Phaser.Easing.Linear.In).start();
		}

		//Tween play button when mouse is no longer over
	}, {
		key: 'onOut',
		value: function onOut(buttonPlay) {
			this.game.add.tween(buttonPlay.scale).to({
				x: 0.5,
				y: 0.5
			}, 350, Phaser.Easing.Linear.In).start();
		}
	}]);

	return Gameover;
})(Phaser.State);

exports['default'] = Gameover;
module.exports = exports['default'];

},{"objects/MenuButton":7}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsMenuButton = require('objects/MenuButton');

var _objectsMenuButton2 = _interopRequireDefault(_objectsMenuButton);

var HighScore = (function (_Phaser$State) {
	_inherits(HighScore, _Phaser$State);

	function HighScore() {
		_classCallCheck(this, HighScore);

		_get(Object.getPrototypeOf(HighScore.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(HighScore, [{
		key: 'init',
		value: function init() {}
	}, {
		key: 'create',
		value: function create() {
			var background = this.game.add.image(0, 0, 'gameBackground');

			var buttonBack = new _objectsMenuButton2['default'](this.game, this.game.width * 0.5, 700, 'btnBack', 'Menu');
			buttonBack.scale.setTo(0.8);

			// let highScoreText = this.game.add.text(800, 30, 'HighScore!', {
			// 	fontSize: '32px',
			// 	fill: 'white'
			// });

			var highScoreImage = new _objectsMenuButton2['default'](this.game, this.game.width * 0.5, 150, 'highScore');
			highScoreImage.scale.setTo(0.5);

			this.highScore;
			if (localStorage.getItem('HighScore') !== null) {
				this.highScore = this.game.add.text(this.game.width * 0.5 - 50, 205, +localStorage.getItem('HighScore'), {
					fontSize: '64px',
					fill: 'white'
				});
			} else {
				this.highScore = this.game.add.text(this.game.width * 0.5 - 190, 205, 'No Highscore to display!', {
					fontSize: '32px',
					fill: 'white'
				});
			}

			//Added onOver and onOut tweens for play button
			buttonBack.events.onInputOver.add(this.onOver, this);
			buttonBack.events.onInputOut.add(this.onOut, this);
		}

		//Tween play button when the mouse is over
	}, {
		key: 'onOver',
		value: function onOver(buttonPlay) {
			this.game.add.tween(buttonPlay.scale).to({
				x: 1,
				y: 1
			}, 350, Phaser.Easing.Linear.In).start();
		}

		//Tween play button when mouse is no longer over
	}, {
		key: 'onOut',
		value: function onOut(buttonPlay) {
			this.game.add.tween(buttonPlay.scale).to({
				x: 0.8,
				y: 0.8
			}, 350, Phaser.Easing.Linear.In).start();
		}
	}]);

	return HighScore;
})(Phaser.State);

exports['default'] = HighScore;
module.exports = exports['default'];

},{"objects/MenuButton":7}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsMenuButton = require('objects/MenuButton');

var _objectsMenuButton2 = _interopRequireDefault(_objectsMenuButton);

var LevelCompleted = (function (_Phaser$State) {
	_inherits(LevelCompleted, _Phaser$State);

	function LevelCompleted() {
		_classCallCheck(this, LevelCompleted);

		_get(Object.getPrototypeOf(LevelCompleted.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(LevelCompleted, [{
		key: 'init',
		value: function init() {}
	}, {
		key: 'create',
		value: function create() {
			var background = this.game.add.image(0, 0, 'gameBackground');

			this.levelCompletedText = this.game.add.text(575, 30, 'Level Completed!', {
				fontSize: '64px',
				fill: 'white'
			});

			if (this.game.global.level <= 5) {
				var continuePlayingText = this.game.add.text(675, 500, 'Continue Playing?', {
					fontSize: '32px',
					fill: 'white'
				});

				var level = 'level' + this.game.global.level;

				var buttonYes = new _objectsMenuButton2['default'](this.game, this.game.width * 0.5 - 150, 700, 'btnYes', 'Game', level);
				buttonYes.scale.setTo(0.8);

				var buttonNo = new _objectsMenuButton2['default'](this.game, this.game.width * 0.5 + 150, 700, 'btnNo', 'Menu');
				buttonNo.scale.setTo(0.8);

				//Added onOver and onOut tweens for play button
				buttonYes.events.onInputOver.add(this.onOverYes, this);
				buttonYes.events.onInputOut.add(this.onOutYes, this);

				buttonNo.events.onInputOver.add(this.onOverNo, this);
				buttonNo.events.onInputOut.add(this.onOutNo, this);
			} else if (this.game.global.level > 5) {
				this.game.global.level = 1;
				var continuePlayingText = this.game.add.text(this.game.width * 0.5 - 350, 125, 'You have finsihed the game. Thank you for playing!', {
					fontSize: '32px',
					fill: 'white'
				});
				var buttonHighscore = new _objectsMenuButton2['default'](this.game, this.game.width * 0.5 + 50, 850, 'highScore', 'HighScore');
				buttonHighscore.scale.setTo(0.5);

				buttonHighscore.events.onInputOver.add(this.onOverHighscore, this);
				buttonHighscore.events.onInputOut.add(this.onOutHighScore, this);
			}
		}

		//Tween play button when the mouse is over
	}, {
		key: 'onOverYes',
		value: function onOverYes(buttonYes) {
			this.game.add.tween(buttonYes.scale).to({
				x: 1,
				y: 1
			}, 350, Phaser.Easing.Linear.In).start();
		}

		//Tween play button when mouse is no longer over
	}, {
		key: 'onOutYes',
		value: function onOutYes(buttonYes) {
			this.game.add.tween(buttonYes.scale).to({
				x: 0.8,
				y: 0.8
			}, 350, Phaser.Easing.Linear.In).start();
		}
	}, {
		key: 'onOverNo',
		value: function onOverNo(buttonNo) {
			this.game.add.tween(buttonNo.scale).to({
				x: 1,
				y: 1
			}, 350, Phaser.Easing.Linear.In).start();
		}

		//Tween play button when mouse is no longer over
	}, {
		key: 'onOutNo',
		value: function onOutNo(buttonNo) {
			this.game.add.tween(buttonNo.scale).to({
				x: 0.8,
				y: 0.8
			}, 350, Phaser.Easing.Linear.In).start();
		}
	}, {
		key: 'onOverHighscore',
		value: function onOverHighscore(buttonHighscore) {

			this.game.add.tween(buttonHighscore.scale).to({
				x: 0.8,
				y: 0.8
			}, 350, Phaser.Easing.Linear.In).start();
		}

		//Tween play button when mouse is no longer over
	}, {
		key: 'onOutHighScore',
		value: function onOutHighScore(buttonHighscore) {

			this.game.add.tween(buttonHighscore.scale).to({
				x: 0.5,
				y: 0.5
			}, 350, Phaser.Easing.Linear.In).start();
		}
	}]);

	return LevelCompleted;
})(Phaser.State);

exports['default'] = LevelCompleted;
module.exports = exports['default'];

},{"objects/MenuButton":7}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsMenuButton = require('objects/MenuButton');

var _objectsMenuButton2 = _interopRequireDefault(_objectsMenuButton);

var LevelSelect = (function (_Phaser$State) {
	_inherits(LevelSelect, _Phaser$State);

	function LevelSelect() {
		_classCallCheck(this, LevelSelect);

		_get(Object.getPrototypeOf(LevelSelect.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(LevelSelect, [{
		key: 'create',
		value: function create() {

			var background = this.game.add.image(0, 0, 'gameBackground');

			// let level = 'level' + this.game.global.level + 1;

			var level = 'level' + this.game.global.level;

			var buttonPlay = new _objectsMenuButton2['default'](this.game, this.game.width * 0.5 + 50, 700, 'playButton', 'Game', level);
			buttonPlay.scale.setTo(0.5);

			var level2 = this.game.add.text(650, 100, '2', {
				fontSize: '64px',
				fill: 'white'
			});

			var level3 = this.game.add.text(650, 200, '3', {
				fontSize: '64px',
				fill: 'white'
			});
		}
	}]);

	return LevelSelect;
})(Phaser.State);

exports['default'] = LevelSelect;
module.exports = exports['default'];

},{"objects/MenuButton":7}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _objectsMenuButton = require('objects/MenuButton');

var _objectsMenuButton2 = _interopRequireDefault(_objectsMenuButton);

var Menu = (function (_Phaser$State) {
	_inherits(Menu, _Phaser$State);

	function Menu() {
		_classCallCheck(this, Menu);

		_get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).apply(this, arguments);
	}

	_createClass(Menu, [{
		key: 'create',
		value: function create() {
			//Create background
			var background = this.game.add.image(0, 0, 'menuBackground');

			var logo = this.game.add.image(300, 100, 'menuTitle');

			//Create menu button
			var level = 'level' + this.game.global.level;
			var buttonPlay = new _objectsMenuButton2['default'](this.game, this.game.width * 0.5 + 50, 700, 'playButton', 'Game', level);
			buttonPlay.scale.setTo(0.5);

			var buttonHighscore = new _objectsMenuButton2['default'](this.game, this.game.width * 0.5 + 50, 850, 'highScore', 'HighScore');
			buttonHighscore.scale.setTo(0.5);

			// let buttoneContinue = new MenuButton(this.game, this.game.width * 0.5 + 50, 500, 'btnContinue', 'LevelSelect');
			// 	buttoneContinue.scale.setTo(0.5);

			//Added onOver and onOut tweens for play button
			buttonPlay.events.onInputOver.add(this.onOver, this);
			buttonPlay.events.onInputOut.add(this.onOut, this);

			buttonHighscore.events.onInputOver.add(this.onOverHighscore, this);
			buttonHighscore.events.onInputOut.add(this.onOutHighScore, this);
		}

		//Tween play button when the mouse is over
	}, {
		key: 'onOver',
		value: function onOver(buttonPlay, buttonHighscore) {
			this.game.add.tween(buttonPlay.scale).to({
				x: 0.8,
				y: 0.8
			}, 350, Phaser.Easing.Linear.In).start();
		}

		//Tween play button when mouse is no longer over
	}, {
		key: 'onOut',
		value: function onOut(buttonPlay, buttonHighscore) {
			this.game.add.tween(buttonPlay.scale).to({
				x: 0.5,
				y: 0.5
			}, 350, Phaser.Easing.Linear.In).start();
		}
	}, {
		key: 'onOverHighscore',
		value: function onOverHighscore(buttonHighscore) {

			this.game.add.tween(buttonHighscore.scale).to({
				x: 0.8,
				y: 0.8
			}, 350, Phaser.Easing.Linear.In).start();
		}

		//Tween play button when mouse is no longer over
	}, {
		key: 'onOutHighScore',
		value: function onOutHighScore(buttonHighscore) {

			this.game.add.tween(buttonHighscore.scale).to({
				x: 0.5,
				y: 0.5
			}, 350, Phaser.Easing.Linear.In).start();
		}
	}]);

	return Menu;
})(Phaser.State);

exports['default'] = Menu;
module.exports = exports['default'];

},{"objects/MenuButton":7}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preload = (function (_Phaser$State) {
    _inherits(Preload, _Phaser$State);

    function Preload() {
        _classCallCheck(this, Preload);

        _get(Object.getPrototypeOf(Preload.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Preload, [{
        key: 'create',
        value: function create() {
            this.game.load.onLoadStart.add(this.loadStart, this);
            this.game.load.onFileComplete.add(this.fileComplete, this);
            this.game.load.onLoadComplete.add(this.loadComplete, this);
            this.game.score = 0;

            this.start();
        }
    }, {
        key: 'start',
        value: function start() {
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
    }, {
        key: 'loadStart',
        value: function loadStart() {
            this.game.load.start();
        }
    }, {
        key: 'fileComplete',
        value: function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
            console.log("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
        }
    }, {
        key: 'loadComplete',
        value: function loadComplete() {
            console.log('preload complete');

            this.game.stateChange.fadeOut(null, 'Menu');
        }
    }]);

    return Preload;
})(Phaser.State);

exports['default'] = Preload;
module.exports = exports['default'];

},{}]},{},[1])
//# sourceMappingURL=game.js.map
