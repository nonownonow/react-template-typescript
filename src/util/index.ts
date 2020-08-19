export function dateToString(date: any) {
  const year = date.getYear()
  const month = date.getMonth()
  const day = date.getDate()
  const time = date.getTime()
  return `${year}/${month}/${date} ${time}`
}
