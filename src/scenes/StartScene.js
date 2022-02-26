/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/github.com/shaack/phaser-template-vanilla-es6
 * License: MIT, see file 'LICENSE'
 */

export class StartScene extends Phaser.Scene {
    constructor() {
        super({key: 'PreloadScene'})
    }

    preload() {
        console.log("StartScene preload")
        // this.load.image('phaser-logo', 'assets/img/phaser-logo.png')
    }

    create() {
        this.scene.start('MainScene')
    }
}
