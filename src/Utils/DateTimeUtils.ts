import moment from "moment"
import { isNaN, toNumber, toString } from "lodash"

const defaultDateFormat = "DD MMM, YYYY"
const defaultDateTimeFormat = "DD MMM, YYYY hh:mm A"
export const defaultTimeFormat = "hh:mm A"
const defaultTimeSecondsFormat = "hh:mm:ss A"
const defaultNullValue = "-"

export const gearShipmentStatusFormat = "D/M/YY h:mm A"

export const isValidDate = (date: any) => {
  const mDate = moment(date)
  return mDate.isValid()
}

interface IGetFormattedDateTime {
  date: string
  format?: string
  includeDate?: boolean
  includeTime?: boolean
  includeSeconds?: boolean
  nullValue?: string
}

interface IGetSlot {
  startTime: string
  endTime: string
  date?: string
  is24HFormat?: boolean
  includeDate?: boolean
}

export const getDefaultDateTimeFromat = function (
  includeDate: boolean,
  includeTime: boolean,
  includeSeconds?: boolean
): string {
  if (includeDate && includeTime) {
    return defaultDateTimeFormat
  }
  if (!includeDate && includeTime) {
    return includeSeconds ? defaultTimeSecondsFormat : defaultTimeFormat
  }

  return defaultDateFormat
}

export const getFormattedTimeString = function (
  timeString: string,
  format: string,
  nullValue: string = defaultNullValue
): string {
  const minuteFormats = [
    "LT",
    "hh:mm A",
    "hh:mmA",
    "h:mm A",
    "h:mmA",
    "HH:mm",
    "H:mm",
  ]
  const secondFormats = [
    "hh:mm:ss A",
    "hh:mm:ssA",
    "h:mm:ss A",
    "h:mm:ssA",
    "HH:mm:ss",
    "H:mm:ss",
  ]
  const formats = [...minuteFormats, ...secondFormats]
  const mTime = moment(timeString, formats, true)

  return mTime.isValid() ? mTime.format(format) : nullValue
}

export const getFormattedDateTime = function ({
  date,
  format,
  includeDate = true,
  includeTime = true,
  includeSeconds = false,
  nullValue = defaultNullValue,
}: IGetFormattedDateTime): string {
  if (!date) {
    return nullValue
  }

  format = format
    ? format
    : getDefaultDateTimeFromat(includeDate, includeTime, includeSeconds)

  // #TimeStamp
  const timeStamp = toNumber(date)
  if (!isNaN(timeStamp)) {
    return toString(timeStamp).length < 13
      ? moment(timeStamp * 1000).format(format)
      : moment(timeStamp).format(format)
  }

  // #Date
  if (moment(date).isValid()) {
    return moment(date).format(format)
  }

  // If date is strictly a Time String then
  // Parse it to default/specified time format
  if (!includeDate && includeTime) {
    return getFormattedTimeString(date, format, nullValue)
  }

  return nullValue
}

export const getFormattedSlot = function ({
  startTime,
  endTime,
  date,
  includeDate = false,
}: IGetSlot) {
  // REf. https://stackoverflow.com/questions/40394282/how-to-format-custom-time-in-moment-js

  // #StartTime
  const _startTime = getFormattedDateTime({
    date: startTime,
    includeDate: false,
    nullValue: "",
  })

  // #EndTime
  const _endTime = getFormattedDateTime({
    date: endTime,
    includeDate: false,
    nullValue: "",
  })

  // #Date
  date = includeDate && !date ? startTime : date
  const _date =
    date && includeDate
      ? getFormattedDateTime({
          date: startTime,
          includeTime: false,
          nullValue: "",
        })
      : ""

  // #Slot
  if (_date) {
    return `${_date} [${_startTime} ${_endTime && "-" + _endTime}]`
  }
  if (_startTime && _endTime) {
    return `${_startTime} - ${_endTime}`
  }
  if (_startTime) {
    return _startTime
  }
  if (_endTime) {
    return _endTime
  }

  return ""
}

export const getDaysCount = function ({
  startDate,
  endDate,
}: {
  startDate: string
  endDate: string
}): number {
  const _startDate = moment(startDate)
  const _endDate = moment(endDate)

  return _endDate.diff(_startDate, "days")
}
