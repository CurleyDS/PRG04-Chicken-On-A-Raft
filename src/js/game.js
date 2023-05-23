import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Tree } from './tree'
import { Chicken } from './chicken'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        const bg = new Actor()
        bg.graphics.use(Resources.BG.toSprite())
        bg.pos = new Vector(400, 300)
        this.add(bg)

        for (let x = 0; x < 2; x++) {
            const tree = new Tree()
            tree.graphics.use(Resources.Tree.toSprite())
            tree.pos = new Vector(Math.random()*400 + 300, Math.random()*300 + 200)
            this.add(tree)
    
            const chicken = new Chicken()
            chicken.graphics.use(Resources.Bird.toSprite())
            chicken.pos = new Vector(0, -60)
            tree.addChild(chicken)
    
            const hat = new Actor({
                width: Resources.Hat.width,
                height: Resources.Hat.height
            })
            hat.graphics.use(Resources.Hat.toSprite())
            hat.pos = new Vector(0, -50)
            chicken.addChild(hat)
        }

        // Resources.ThemeSong.play(0.4)
    }
}

new Game()
