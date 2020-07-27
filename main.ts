function vague () {
	
}
let led2 = 0
let led22 = 0
let led3 = 0
let led4 = 0
let led5 = 0
let dirc = 0
let d2 = 1
let d3 = 2
let d4 = 3
let d5 = 4
led.plot(dirc, led2)
led.plot(d2, led22)
led.plot(d3, led3)
led.plot(d4, led4)
led.plot(d5, led5)
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
    if (led22 == 0) {
        for (let index = 0; index < 4; index++) {
            led.unplot(d2, led22)
            led22 += 1
            led.plot(d2, led22)
            basic.pause(100)
        }
    } else if (led22 == 4) {
        for (let index = 0; index < 4; index++) {
            led.unplot(d2, led22)
            led22 += -1
            led.plot(d2, led22)
            basic.pause(100)
        }
    }
    if (led3 == 0) {
        for (let index = 0; index < 4; index++) {
            led.unplot(d3, led3)
            led3 += 1
            led.plot(d3, led3)
            basic.pause(100)
        }
    } else if (led3 == 4) {
        for (let index = 0; index < 4; index++) {
            led.unplot(d3, led3)
            led3 += -1
            led.plot(d3, led3)
            basic.pause(100)
        }
    }
    if (led4 == 0) {
        for (let index = 0; index < 4; index++) {
            led.unplot(d4, led4)
            led4 += 1
            led.plot(d4, led4)
            basic.pause(100)
        }
    } else if (led4 == 4) {
        for (let index = 0; index < 4; index++) {
            led.unplot(d4, led4)
            led4 += -1
            led.plot(d4, led4)
            basic.pause(100)
        }
    }
    if (led5 == 0) {
        for (let index = 0; index < 4; index++) {
            led.unplot(d5, led5)
            led5 += 1
            led.plot(d5, led5)
            basic.pause(100)
        }
    } else if (led5 == 4) {
        for (let index = 0; index < 4; index++) {
            led.unplot(d5, led5)
            led5 += -1
            led.plot(d5, led5)
            basic.pause(100)
        }
    }
})
