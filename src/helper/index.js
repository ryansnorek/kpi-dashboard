function getCurrentDate() {
  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1;
  //   const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  return [month, year];
}

function getCurrentQuarter(month) {
  let currentQuarter;
  if (month < 4) currentQuarter = 1;
  else if (month < 7) currentQuarter = 2;
  else if (month < 10) currentQuarter = 3;
  else currentQuarter = 4;
  return currentQuarter;
}

export function getQuarterlyPeriods() {
  const [month, year] = getCurrentDate();
  const currentQuarter = getCurrentQuarter(month);
  const currentYear = String(year).slice(2);
  const lastYear = String(currentYear - 1);

  let q1 = "1Q";
  let q2 = "2Q";
  let q3 = "3Q";
  let q4 = "4Q";

  if (currentQuarter < 4) {
    q1 += lastYear;
    q2 += lastYear;
    q3 += lastYear;
    q4 += lastYear;
  } else if (currentQuarter < 7) {
    q1 += currentYear;
    q2 += lastYear;
    q3 += lastYear;
    q4 += lastYear;
  } else if (currentQuarter < 10) {
    q1 += currentYear;
    q2 += currentYear;
    q3 += lastYear;
    q4 += lastYear;
  } else {
    q1 += currentYear;
    q2 += currentYear;
    q3 += currentYear;
    q4 += lastYear;
  }
  const labels = [q1, q2, q3, q4];

  return [currentQuarter, labels];
}
