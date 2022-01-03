function getSolution(bug) {
  const indicatorsStatus = mapIndicatorsStatus(bug.indicators)
  if (bug.serialNumber.startsWith('24-X')) return 'please upgrade your device'
  if (bug.serialNumber.startsWith('36-X')) {
    if (indicatorsStatus.Off === 3) return 'turn on the device'
    if (indicatorsStatus.Blinking === 2) return 'please wait'
    if (indicatorsStatus.On === 3) return 'ALL is ok'
  }
  if (bug.serialNumber.startsWith('51-B')) {
    if (indicatorsStatus.Off === 3) return 'turn on the device'
    if (indicatorsStatus.Blinking === 1) return 'please wait'
    // if ((indicatorsStatus.On === 1 && indicatorsStatus.Off === 2) || (indicatorsStatus.On === 2 && indicatorsStatus.Off === 1) || indicatorsStatus.On === 3) return 'ALL is ok'
    if (indicatorsStatus.On >= 1 && indicatorsStatus.Off <= 2 && indicatorsStatus.Blinking === 0) return 'ALL is ok'
  }
  if (!isNaN(bug.serialNumber)) return 'Bad serial number'
  return 'Unknown device'
}

function mapIndicatorsStatus(indicators) {
  return indicators.reduce(
    (obj, indicator) => {
      //   if (!obj[indicator]) obj[indicator] = 0
      obj[indicator]++
      return obj
    },
    { On: 0, Off: 0, Blinking: 0 }
  )
}

module.exports = {
  getSolution,
}
