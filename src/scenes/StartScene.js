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
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2
        this.add.text(screenCenterX, screenCenterY, "Click to start").setOrigin(0.5)
        console.log("StartScene create")
        this.input.on("pointerdown", (event) => {
            console.log("pointerdown", event)
            this.startMain()
        })
    }

    startMain() {
        this.scene.start("Main")
    }

}
