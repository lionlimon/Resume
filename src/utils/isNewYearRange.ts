export default function isNewYearRange() {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();

  return (month === 0 && day < 15) || (month === 11 && day > 15);
}
