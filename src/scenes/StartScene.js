/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/github.com/shaack/phaser-template-vanilla-es6
 * License: MIT, see file 'LICENSE'
 */

export class StartScene extends Phaser.Scene {

    preload() {
        console.log("StartScene preload")
        // this.load.image('image-name', 'assets/images/image.png')
    }

    create() {
        console.log("StartScene create")
        this.scene.start("Main")
    }

}
