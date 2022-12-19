export default function isNewYearRange() {
  const now = new Date();
  const today = now.getTime();
  const year = now.getFullYear();
  const from = new Date(`12/15/${year}`).getTime();
  const to = new Date(`01/15/${year + 1}`).getTime();

  return today >= from && today <= to;
}
