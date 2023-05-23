import { Actor, Engine, Vector, Sprite } from "excalibur"
import { Resources } from './resources'

export class Chicken extends Actor {
    sprite
    constructor(x,y) {
        super({x,y, width: Resources.Bird.width, height: Resources.Bird.height })
    }
    onInitialize(engine) {
        this.sprite = Resources.Bird.toSprite()
        this.graphics.use(this.sprite)
        this.vel = new Vector(200, 0)
        this.sprite.flipHorizontal = true
    }

    update(engine) {
        if (this.pos.x >= 207) {
            this.vel = new Vector(-200, 0)
            this.sprite.flipHorizontal = false
        } else if (this.pos.x <= -207) {
            this.vel = new Vector(200, 0)
            this.sprite.flipHorizontal = true
        }
    }

}