radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    if (receivedNumber == 1) {
        StartbitV2.startbit_setMotorSpeed(100, -100)
    } else if (receivedNumber == 2) {
        StartbitV2.startbit_setMotorSpeed(-100, 100)
    } else if (receivedNumber == 3) {
        StartbitV2.startbit_setMotorSpeed(-100, -100)
    } else if (receivedNumber == 4) {
        StartbitV2.startbit_setMotorSpeed(100, 100)
    } else if (receivedNumber == 5) {
        StartbitV2.startbit_setMotorSpeed(0, 0)
    }
    
    if (receivedNumber == 6) {
        舵机1号角度 += 1
        if (舵机1号角度 > 180) {
            舵机1号角度 = 180
        }
        
        StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 舵机1号角度, 0)
    } else if (receivedNumber == 7) {
        舵机1号角度 += -1
        if (舵机1号角度 < 0) {
            舵机1号角度 = 0
        }
        
        StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 舵机1号角度, 0)
    } else if (receivedNumber == 8) {
        舵机2号角度 += -1
        if (舵机2号角度 < 限位1) {
            舵机2号角度 = 0
        }
        
        StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 舵机2号角度, 0)
    } else if (receivedNumber == 9) {
        舵机2号角度 += 1
        if (舵机2号角度 > 限位2) {
            舵机2号角度 = 限位2
        }
        
        StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 舵机2号角度, 0)
    } else if (receivedNumber == 10) {
        StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 130, 500)
        basic.pause(500)
    } else if (receivedNumber == 13) {
        StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 夹取, 500)
        basic.pause(500)
    }
    
})
let 限位2 = 0
let 限位1 = 0
let 舵机2号角度 = 0
let 舵机1号角度 = 0
let 夹取 = 0
StartbitV2.startbit_Init()
radio.setGroup(1)
let 中位 = 90
夹取 = 70
舵机1号角度 = 中位
舵机2号角度 = 90
let 舵机3号角度 = 90
限位1 = 30
限位2 = 90
StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 1, 中位, 500)
StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 2, 舵机2号角度, 500)
StartbitV2.setPwmServo(StartbitV2.startbit_servorange.range1, 3, 舵机3号角度, 500)
basic.pause(500)
basic.forever(function on_forever() {
    
})
