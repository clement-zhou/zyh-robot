def on_received_number(receivedNumber):
    global 舵机1号角度, 舵机2号角度
    if receivedNumber == 1:
        StartbitV2.startbit_setMotorSpeed(100, -100)
    elif receivedNumber == 2:
        StartbitV2.startbit_setMotorSpeed(-100, 100)
    elif receivedNumber == 3:
        StartbitV2.startbit_setMotorSpeed(-100, -100)
    elif receivedNumber == 4:
        StartbitV2.startbit_setMotorSpeed(100, 100)
    elif receivedNumber == 5:
        StartbitV2.startbit_setMotorSpeed(0, 0)
    if receivedNumber == 6:
        舵机1号角度 += 1
        if 舵机1号角度 > 180:
            舵机1号角度 = 180
        StartbitV2.set_pwm_servo(StartbitV2.startbit_servorange.RANGE1, 1, 舵机1号角度, 0)
    elif receivedNumber == 7:
        舵机1号角度 += -1
        if 舵机1号角度 < 0:
            舵机1号角度 = 0
        StartbitV2.set_pwm_servo(StartbitV2.startbit_servorange.RANGE1, 1, 舵机1号角度, 0)
    elif receivedNumber == 8:
        舵机2号角度 += -1
        if 舵机2号角度 < 限位1:
            舵机2号角度 = 0
        StartbitV2.set_pwm_servo(StartbitV2.startbit_servorange.RANGE1, 2, 舵机2号角度, 0)
    elif receivedNumber == 9:
        舵机2号角度 += 1
        if 舵机2号角度 > 限位2:
            舵机2号角度 = 限位2
        StartbitV2.set_pwm_servo(StartbitV2.startbit_servorange.RANGE1, 2, 舵机2号角度, 0)
    elif receivedNumber == 10:
        StartbitV2.set_pwm_servo(StartbitV2.startbit_servorange.RANGE1, 3, 130, 500)
        basic.pause(500)
    elif receivedNumber == 13:
        StartbitV2.set_pwm_servo(StartbitV2.startbit_servorange.RANGE1, 3, 夹取, 500)
        basic.pause(500)
radio.on_received_number(on_received_number)

限位2 = 0
限位1 = 0
舵机2号角度 = 0
舵机1号角度 = 0
夹取 = 0
StartbitV2.startbit_Init()
radio.set_group(1)
中位 = 90
夹取 = 70
舵机1号角度 = 中位
舵机2号角度 = 90
舵机3号角度 = 90
限位1 = 30
限位2 = 90
StartbitV2.set_pwm_servo(StartbitV2.startbit_servorange.RANGE1, 1, 中位, 500)
StartbitV2.set_pwm_servo(StartbitV2.startbit_servorange.RANGE1, 2, 舵机2号角度, 500)
StartbitV2.set_pwm_servo(StartbitV2.startbit_servorange.RANGE1, 3, 舵机3号角度, 500)
basic.pause(500)

def on_forever():
    pass
basic.forever(on_forever)
