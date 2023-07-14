import React, { useRef, useState } from "react"
import { Button, Container } from "reactstrap"

interface ITime {
  hour: number
  minute: number
  seconds: number
}

const getTime = function ({ hour, minute, seconds }: ITime): ITime {
  seconds++

  if (seconds === 61) {
    seconds = 0
    minute++
  }

  if (minute === 61) {
    minute = 0
    hour++
  }

  if (hour === 13) {
    hour = 0
  }

  return { hour, minute, seconds }
}

export function DigitalClock(): React.ReactElement {
  const [time, setTime] = useState<ITime>({ hour: 0, minute: 0, seconds: 0 })
  const interVal = useRef<NodeJS.Timer>()

  const updateTime = function () {
    console.log("calling")
    setTime((time) => getTime(time))
  }

  const onStart = function () {
    console.log(interVal.current)
    if (!interVal.current) {
      interVal.current = setInterval(updateTime, 1000)
    }
  }

  const onStop = function () {
    clearInterval(interVal.current)
    interVal.current = undefined
  }

  const onClear = function () {
    setTime({ hour: 0, minute: 0, seconds: 0 })
  }

  // On load start clock
  // useEffect(function () {
  //   const interval = setInterval(updateTime, 1000)
  //   console.log("interval ", interval)
  //   return () => clearInterval(interval)
  // }, [])

  const { hour, minute, seconds } = time
  const _hour = hour >= 0 && hour <= 9 ? `0${hour}` : hour
  const _minute = minute >= 0 && minute <= 9 ? `0${minute}` : minute
  const _seconds = seconds >= 0 && seconds <= 9 ? `0${seconds}` : seconds

  return (
    <>
      <Container className="d-flex flex-column justify-content-center align-items-center h-100">
        <div className="d-flex mt-5 fs-3">CLOCK</div>
        <div className="d-flex mt-5 fs-1">{`${_hour}:${_minute}:${_seconds}`}</div>
        <div className="d-flex mt-5">
          <Button className="me-3" onClick={onStart}>
            Start
          </Button>
          <Button className="me-3" onClick={onStop}>
            Pause
          </Button>
          <Button className="me-3" onClick={onClear}>
            Clear
          </Button>
        </div>
      </Container>
    </>
  )
}
