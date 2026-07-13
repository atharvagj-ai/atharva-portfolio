const CAREER_START_DATE = new Date(2022, 4, 23);

/** Returns completed career months as a one-decimal year value. */
export function getYearsOfExperience(referenceDate = new Date()): string {
  const months =
    (referenceDate.getFullYear() - CAREER_START_DATE.getFullYear()) * 12 +
    referenceDate.getMonth() -
    CAREER_START_DATE.getMonth() -
    (referenceDate.getDate() < CAREER_START_DATE.getDate() ? 1 : 0);

  return (Math.max(0, months) / 12).toFixed(1);
}
