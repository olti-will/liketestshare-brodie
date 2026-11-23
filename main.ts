namespace SpriteKind {
    export const alien = SpriteKind.create()
    export const UFO = SpriteKind.create()
    export const Turret = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.alien, function (sprite, otherSprite) {
    let AliensKilled = 0
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
    if (AliensKilled == 20) {
        Wave = 2
        StartWave(Wave)
    }
    if (AliensKilled == 40) {
        Wave = 3
        StartWave(Wave)
    }
    if (AliensKilled == 60) {
        Wave = 4
        StartWave(Wave)
    }
    if (AliensKilled == 80) {
        Wave = 5
        StartWave(Wave)
    }
})
function AskReady () {
    while (Ready_check != "Yes") {
        Ready_check = game.askForString("Are you ready?", 3)
        if (Ready_check == "Yes") {
            Username = game.askForString("What is your name")
            game.splash("Welcome " + Username)
        } else {
            game.splash("You must type yes to proceed")
        }
    }
}
sprites.onOverlap(SpriteKind.alien, SpriteKind.Turret, function (sprite, otherSprite) {
    info.changeLifeBy(-5)
    pause(500)
})
function StartWave (Wavenum: number) {
    for (let index = 0; index < Wavenum * 20; index++) {
        scrawny_alien = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 7 7 7 f 7 7 7 . . . . . 
            . . . 7 7 f f f f f 7 7 . . . . 
            . . . 7 f f f d f f f 7 . . . . 
            . . . . 7 f d f d f 7 . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . . . 7 7 7 . . . . . . . 
            7 . . . . . 7 7 7 . . . . . 7 . 
            . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . . 7 7 7 7 7 . . . . . . 
            . . . . . 7 . . . 7 . . . . . . 
            . . . . . 7 . . . 7 . . . . . . 
            . . . . . 7 . . . 7 . . . . . . 
            . . . . . 7 . . . 7 . . . . . . 
            `, SpriteKind.alien)
        scrawny_alien.setStayInScreen(true)
        scrawny_alien.setPosition(155, 37)
        scrawny_alien.setVelocity(-30, 0)
        pause(200)
    }
}
let Bullet: Sprite = null
let scrawny_alien: Sprite = null
let Username = ""
let Ready_check = ""
let Wave = 0
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999d99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999dd999999d9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999ddd99999d999999999999d999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999ddddd9999dd9999999999ddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999ddddddd999dd9999999999ddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999d9dddd999ddd999999999ddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999ddddd999dddd99999999dddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999ddddddd999dd9999999999dddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999dddd9dd99ddd9999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999dddddd999ddd999999999dddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999dd9ddddd99dddd9999999ddddd9dd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999dddddddddddd999999ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999ddddddddddddddddddd99dddddd999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999d9999999999ddddddddddddddddddddd99dddddd9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d999999999999999999
    999999999999ddd99999999999ddddddddddddddddddddddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999d9999dd999999999999999999
    999999999999dd9999999999dddddddddddddddddddddddddd9999999999999999999999999999999999d99999999999999999999999999999999999999999999999999dd999dd999999999999999999
    99999999999ddd999999999dddddddddddddddddddddddddddd999999999999999999999999999999999dd9999999999999999999999999999999999999999999999999dd99ddd999999999999999999
    9999999999ddddd999999ddddddddddddddddddddddddddddddd99999999999999999999999999999999dd99999999999999999999999999999999999999999999d999dddd9ddddd9999999999999999
    99999999999ddd99999dddddddddddddddddddddddddddddddddd999999999999999999999999999999dddd999999999999999999999999999999999999999999ddd99dddd99dd999999999999999999
    999999999999ddd999dddddddddddddddddddddddddddddddddddd99999999999999999999999999999dddd9999d9999999999999999999999999999999999999ddd999dd99dddddd999999999999999
    9999999999dddd99ddddddddddddddddddddddddddddddddddddddd999999999999999999999dd999999dd99999d999999999999999999999999999999999999dddd9ddddddddd999999999d99999999
    99999999999ddddddddddddddddddddddddddddddddddddddddddddd9999999999999999999ddd9999dddddd999dd9999999999999999999999999999999999999ddd9dddd999dd99999999d99999999
    999999999999ddddddddddddddddddddddddddddddddddddddddddddd99999999999999999dddd99999dddd9999dd999999999999999999999999999999999999ddd99ddddd99d99999999dddd999999
    999999999999dddddddddddddddddddddddddddddddddddddddddddddd999999999999999999ddd9999ddddd99ddd9999999999999d99999999999999999999ddddddddddddd9d999999999d99999999
    99999999999ddddddddddddddddddddddddddddddddddddddddddddddd9999999999999999dddddd9dddddddd9dddd99999999999dd999999999999999999999ddddddddddddddddd9999dddd9999999
    9999999999ddddddddddddddddddddddddddddddddddddddddddddddddd99999999999999dddddd9dddddddddd9dd999999999999ddd9999999999999d99999ddddd99ddddddddddddd999ddd9999999
    99999999dddddddddddddddddddddddddddddddddddddddddddddddddddd999999999999999dddddd99dddd9999ddd9999999999ddddd999999999999d9999dddddddddddddddddddddd99ddddd99999
    9999999dddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999dddddd99dddddd99ddd9999999999ddddddd99999999999dd99999dddddddddddddddddddddddddd999999
    999999dddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999ddddddddddddddddddddddd9999999d9dddd999999999999dd9999dddddddddddddddddddddddddd9999999
    99999dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999999ddddddddddddddddddddddd99999ddddd99999999999ddd9999dddddddddddddddddddddddddd9999999
    999ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddd99ddddddd99999999999d9999dddddddddddddddddddddddddddd999999
    99ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999999dddddddddddddddddddddddddddddd9dddd9d9999999999dddd99dddddddddddddddddddddddddddddd9999
    9dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99999ddddddddddddddddddddddddddddddddddddd999999999999dd99ddddddddddddddddddddddddddddddddd99
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd999ddddddddddddddddddddddddddddddddddddddd999999999ddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999dddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999999ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999999ddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd9999dddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
let Gun_Turret = sprites.create(img`
    ................................................................
    ................................................................
    ................................................................
    ......................ffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbb..
    ......................ffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbb..
    ......................ffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbb..
    ......................ffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbb..
    ......................ffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbb..
    ......................ffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbb..
    ......................ffffffffffffffff..........................
    ......................ffffffffffffffff..........................
    ......................ffffffffffffffff..........................
    ......................ffffffffffffffff..........................
    ......................ffffffffffffffff..........................
    ......................ffffffffffffffff..........................
    ......................ffffffffffffffff..........................
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeebbbbbbbbbeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    .bbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbb..
    ................................................................
    `, SpriteKind.Turret)
Gun_Turret.setPosition(4, 61)
Wave = 1
let Turret_damage = 5
let Aliens_alive = 0
AskReady()
info.setLife(10000)
info.setScore(0)
StartWave(1)
game.onUpdateInterval(100, function () {
    if (sprites.allOfKind(SpriteKind.alien).length > 0) {
        Bullet = sprites.create(img`
            ........................
            ........................
            ........................
            ..f.f...................
            .fefeeeeeeeee...........
            .fdbebbbbbbbbdddfff.....
            .fbbeddddddddfffbbbf....
            .febeffffffffeeebbbff...
            .fefeeeeeeeeedddbbbff...
            .fbfeddddddddbbbbbbf....
            .fdfeeeeeeeeeffffff.....
            .fefeffffffff...........
            ..f.f...................
            ........................
            ........................
            ........................
            `, SpriteKind.Projectile)
        Bullet.setFlag(SpriteFlag.AutoDestroy, true)
        Bullet.x = Gun_Turret.x + 8
        Bullet.y = Gun_Turret.y - 30
        Bullet.vx = 100
    }
})
