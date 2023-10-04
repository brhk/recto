export interface ValidateNumberInput {
  existingCount: number
  newValue: string
  fieldName: string
  range: { start: number; end: number }
}

export const validateNumberInput = function ({
  existingCount,
  newValue,
  fieldName,
  range,
}: ValidateNumberInput) {
  const _newValue = Number(newValue)
  const isNaN = Number.isNaN(_newValue)
  let error = ""

  if (isNaN || _newValue === 0) {
    error = "Invalid input!"
    return { error }
  }

  const totalValue =
    Math.sign(_newValue) > 0
      ? _newValue + existingCount
      : existingCount + _newValue

  if (totalValue < range.start) {
    error = fieldName + " cannot be set below zero!"
  }

  if (totalValue > range.end) {
    error = fieldName + ` cannot be set greater than ${range.end}!`
  }

  return { totalValue, error }
}

