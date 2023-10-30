/**
 *
 * @param classes Array of classes to be joined
 * @returns A string of classes, filtered to remove any falsey values
 */
export function filterClassnames(classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatIsoTimestamp(isoTimestamp: string) {
  const date = new Date(isoTimestamp)

  // Get the various components
  const day = date.getDate()
  const monthIndex = date.getMonth()
  const year = date.getFullYear()
  let hour = date.getHours()
  const minute = date.getMinutes()

  // Convert to 12-hour clock and set AM/PM
  let ampm = 'AM'
  if (hour > 12) {
    hour -= 12
    ampm = 'PM'
  } else if (hour === 12) {
    ampm = 'PM'
  } else if (hour === 0) {
    hour = 12
  }

  // Pad single digit minute values with leading zeros
  const paddedMinute = String(minute).padStart(2, '0')

  // Map month index to month name
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const monthName = monthNames[monthIndex]

  // Assemble the final string
  return `${monthName} ${day}, ${year} @ ${hour}:${paddedMinute} ${ampm}`
}