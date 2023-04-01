export const formatDate = (rawDate: string) => {
  try {
    const date = new Date(rawDate)
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  } catch {
    return rawDate
  }
}
