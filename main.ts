let semaforo1 = ""
let semaforo2 = ""
led.enable(false)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    semaforo2 = "rojo"
    pins.digitalWritePin(DigitalPin.P2, 1)
    semaforo1 = "verde"
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P13, 0)
    semaforo1 = "amarillo"
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(100)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    semaforo2 = "rojo"
    basic.pause(100)
})
