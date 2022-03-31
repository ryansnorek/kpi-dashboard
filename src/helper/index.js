function getCurrentDate() {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1;
  //   const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  return [month, year];
}

function getCurrentQuarter(month) {
  let currentQuarter;
  if (month < 4) currentQuarter = "1";
  else if (month < 7) currentQuarter = "2";
  else if (month < 10) currentQuarter = "3";
  else currentQuarter = "4";
  return currentQuarter;
}

export function getQuarterlyPeriods() {
  const [month, year] = getCurrentDate();
  const currentQuarter = getCurrentQuarter(month);
  const currentYear = String(year).slice(2);
  const lastYear = String(currentYear - 1);
  return [currentQuarter, currentYear, lastYear];
}
