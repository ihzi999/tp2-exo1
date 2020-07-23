function faireQuelqueChose () {
	
}
let led2 = 0
let dirc = [0, 1, 2, 3, 4]
led.plot(dirc, led2)
basic.forever(function () {
    if (led2 == 0) {
        for (let index = 0; index < 4; index++) {
            led.unplot(dirc, led2)
            led2 += 1
            led.plot(dirc, led2)
            basic.pause(100)
        }
    } else if (led2 == 4) {
        for (let index = 0; index < 4; index++) {
            led.unplot(dirc, led2)
            led2 += -1
            led.plot(dirc, led2)
            basic.pause(100)
        }
    }
})
