export function getYearDifferenceFromDate(startDateStr: string): number {
  const startDate = new Date(startDateStr);
  const now = new Date();

  let yearDiff = now.getFullYear() - startDate.getFullYear();
  const monthDiff = now.getMonth() - startDate.getMonth();
  const dayDiff = now.getDate() - startDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    yearDiff--;
  }

  return yearDiff;
}
