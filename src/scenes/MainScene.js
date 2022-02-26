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
        const bounciness = 0.99
        const startSpeed = 500
        const screenCenterX = this.cameras.main.worldView.x + this.cameras.main.width / 2
        const screenCenterY = this.cameras.main.worldView.y + this.cameras.main.height / 2
        console.log("MainScene create")
        this.balls = []
        for (let i = 0; i < 10; i++) {
            const size = Phaser.Math.Between(4, 30)
            const circle = this.add.circle(screenCenterX, screenCenterY, size, 0xffffff)
            this.physics.add.existing(circle)
            circle.body.setCollideWorldBounds(true, bounciness, bounciness)
            circle.body.setVelocity(Phaser.Math.Between(-startSpeed, startSpeed), Phaser.Math.Between(-startSpeed, startSpeed))
            circle.body.bounce.setTo(bounciness, bounciness)
            circle.body.setMass(size ^ 2)
            for (const ball of this.balls) {
                this.physics.add.collider(ball, circle)
            }
            this.balls.push(circle)
        }
    }

    update(time, delta) {
        // console.log("update", time, delta)
    }

}
