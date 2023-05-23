import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import hatImage from '../images/tophat.png'
import birdImage from '../images/bird.png'
import treeImage from '../images/tree.png'
import bgImage from '../images/bg.png'
import themeSong from '../sounds/watertheme.mp3'

const Resources = {
    Hat: new ImageSource(hatImage),
    Bird: new ImageSource(birdImage),
    Tree: new ImageSource(treeImage),
    BG: new ImageSource(bgImage),
    ThemeSong: new Sound(themeSong)
}

const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}

const ResourceLoader = new Loader(resourceArray)

export { Resources, ResourceLoader }