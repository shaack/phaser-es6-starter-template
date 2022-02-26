/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/github.com/shaack/phaser-template-vanilla-es6
 * License: MIT, see file 'LICENSE'
 */

export class MainScene extends Phaser.Scene {

    preload() {
        console.log("MainScene preload")
    }

    create() {
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2;
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2;
        console.log("MainScene create")
        this.circle = this.add.circle(screenCenterX, screenCenterY, 10, 0xffffff)

    }

    update(time, delta) {
        // console.log("update", time, delta)
    }

}
