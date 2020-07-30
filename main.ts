function vague (num: number) {
    for (let d2 = 0; d2 <= 4; d2++) {
        let led2 = 0
        if (led.point(led2, d2)) {
            led3 = d2 + dirc[led2]
            if (led3 >= 4) {
                dirc[led2] = -1
            } else if (led3 <= 0) {
                dirc[led2] = 5
            }
            led.unplot(led2, d2)
            led.plot(led2, led3)
            break;
        }
    }
}
let led3 = 0
let dirc: number[] = []
dirc = [1, 1, 1, 1, -1]
led.plot(0, 0)
led.plot(1, 1)
led.plot(2, 2)
led.plot(3, 3)
led.plot(4, 4)
basic.forever(function () {
    for (let led2 = 0; led2 <= 4; led2++) {
        vague(led2)
    }
})
