namespace SpriteKind {
    export const alien = SpriteKind.create()
    export const UFO = SpriteKind.create()
    export const Turret = SpriteKind.create()
}
// Aliens die when a bullet hits it, and it also destroys the bullet. Sets the wave requirements as well.
// 
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
// asks you if you are ready. If you say anything other than yes, the question will repeat itself.
function AskReady (): any {
    while (Ready_check != "Yes") {
        Ready_check = game.askForString("Are you ready?", 3)
        if (Ready_check == "Yes") {
            Username = game.askForString("What is your name")
            game.splash("Welcome " + Username)
        } else {
            game.splash("You must type yes to proceed")
            return AskReady()
        }
    }
}
// Every 100ms, if an alien is detected, then the bullets fire.
// 
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
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
// Sets up the alien to damage the turret with a pause in between attacks.
// 
// 
sprites.onOverlap(SpriteKind.alien, SpriteKind.Turret, function (sprite, otherSprite) {
    info.changeLifeBy(-5)
    pause(500)
})
// Spawns scrawny aliens for waves 1-4/ Whether wave is 5 or 6, or 7 or 8, it spawns buff alien. If the wave is 9, it spawns a UFO BOSS. 
// 
function StartWave (Wavenum: number) {
    if (Wavenum <= 5) {
        for (let index = 0; index < 20; index++) {
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
            scrawny_alien.setStayInScreen(false)
            scrawny_alien.setPosition(155, 37)
            scrawny_alien.setVelocity(-70, 0)
            pause(200)
        }
    } else if (Wavenum >= 6 && Wavenum <= 8) {
        for (let index = 0; index < 30; index++) {
            Buff_alien = sprites.create(img`
                . . . . . 7 7 7 7 7 7 7 . . . . 
                . . . . 7 7 7 7 7 7 7 7 7 . . . 
                . . . . 7 7 f f 7 f f 7 7 . . . 
                . . . . 7 7 7 f 7 f 7 7 7 . . . 
                . . . . 7 7 7 7 7 7 7 7 7 . . . 
                . . . . 7 7 7 f f f 7 7 7 . . . 
                . . . . 7 7 7 f 3 f 7 7 7 . . . 
                . . . . . 7 7 7 7 7 7 7 . . . . 
                . . . . . . 7 7 7 7 7 . . . . . 
                . . 7 7 f f f f f f f f 7 . . . 
                . . 7 7 f f f f f f f f 7 7 7 . 
                . 7 7 7 f f f f f f f f 7 7 7 . 
                . 7 7 7 f f f f f f f f 7 7 7 . 
                . 7 f f f f f f f f f f f f 7 . 
                7 7 f f f f f f f f f f f f 7 7 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.alien)
            Buff_alien.setStayInScreen(false)
            Buff_alien.setPosition(155, 37)
            Buff_alien.setVelocity(-100, 0)
            pause(200)
        }
    } else {
        for (let index = 0; index < 50; index++) {
            Mothership = sprites.create(img`
                ..................................................
                ..................................................
                ..................................................
                ..................................................
                ..................................................
                ..................................................
                ..................................................
                .........................7777.....................
                .....................7777777777...................
                ...................7777777777777..................
                .................7777777777777777.................
                ................7bbb7777777bb77777................
                ..............777bbb777777bbb777777...............
                .............777bbb7777777bbb777777...............
                .............777bbb7777777bbb7777777..............
                ............777fbbffffffffbbfff777777.............
                ...........fffff7777777777777ffffff77.............
                .........fff777777777777777777777fffff7...........
                .........777777777777777777777777777777...........
                .........777777777777777777777777777777...........
                ........77777777777777777777777777777777..........
                .......7777777777777777777777777777777777.........
                ...7.7777777777777777777777777777777777777........
                ...77777777777777777777777777777777777777777......
                ....77777777777777777777777777777777777777777.....
                .....7777777777777777777777777777777777777777.....
                ......777777777777777777777777777777777777777.....
                .......77777777777777777777777777777777777777.....
                .........7777777777777777777777777777777777.......
                ...........7777777777777777777777777777777........
                ............77777777777777777777777777777.........
                ..............777777777777777777777777............
                .................777777bb77777....................
                ...................b..bb..........................
                ..................b..bb......b....................
                ................bb..bb.bbb...b....................
                ...............b..bbbbbbbb....b...................
                ..............b..bb..bbbb......b..................
                .............b.bbbb.bb.b.......b..................
                ............bbbb.b..b.b.........b.................
                ...........b....b...bb..........b.................
                ...........b...b...bbbbbbbbb.....b................
                ..........b...bb..b....bb.b.......b...............
                .........b....b.bb...bbb.b........b...............
                ........b....bbb.b.bb.b..bbb..bb...b..............
                .......b....bbb.bbb..b..bbbbbb.....b..............
                ......b....bbb.bb...b.bbbbbb........b.............
                ......b...bb.......bbb..bb..........b.............
                .....b....b............bb............b............
                ...bb.................................b...........
                `, SpriteKind.alien)
            Mothership.setStayInScreen(true)
            Mothership.setPosition(155, 37)
            Mothership.setVelocity(-5, 0)
        }
        game.gameOver(true)
    }
}
// When the ufo hits the turret, game over=lose.
sprites.onOverlap(SpriteKind.UFO, SpriteKind.Turret, function (sprite, otherSprite) {
    game.gameOver(false)
})
// Background is set up, sets the tower to the sprite of a kind player, sets the position of the turret, sets the wave to 1, sets lives to 10,000 and then starts the first wave.
// 
let Mothership: Sprite = null
let Buff_alien: Sprite = null
let scrawny_alien: Sprite = null
let Bullet: Sprite = null
let Username = ""
let Ready_check = ""
let Wave = 0
let Gun_Turret: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
music.play(pianoRoll.createSong(hex`005a000408020200001c00010a006400f401640000040000000000000000000000000005000006600000000400010104000800010108000c0001020c001000010210001400010114001800010118001c0001021c002000010220002400010124002800010528002c0001012c003000010530003400010134003800010138003c0001023c004000010201001c00010a006400f401640000040000000000000000000000000005000005420000000400010d04000800010d08000c00010e0c001000010e10001400010d14001800010b18001c00010d1c002000010b20002400010d24002800010d28002c00010d`), music.PlaybackMode.LoopingInBackground)
Gun_Turret = sprites.create(img`
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
AskReady()
info.setLife(1000)
info.setScore(0)
StartWave(1)
pause(8000)
StartWave(2)
pause(8000)
StartWave(3)
pause(8000)
StartWave(4)
pause(5000)
StartWave(5)
pause(3000)
StartWave(6)
pause(3000)
StartWave(7)
pause(3000)
StartWave(8)
pause(1000)
StartWave(9)
