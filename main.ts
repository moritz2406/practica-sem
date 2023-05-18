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
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(100)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    semaforo2 = "rojo"
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P9, 1)
    semaforo1 = "rojo"
    pins.digitalWritePin(DigitalPin.P14, 1)
    semaforo2 = "verde"
    basic.pause(100)
    semaforo1 = "amarillo"
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(100)
    }
    pins.digitalWritePin(DigitalPin.P9, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
})
basic.forever(function () {
    while (semaforo1 == "verde" || semaforo1 == "amarillo") {
    	
    }
})
