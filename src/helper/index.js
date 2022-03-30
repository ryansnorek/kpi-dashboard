

export function getQuarter() {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; 
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    
    let qtr;
    if (month < 4) qtr = "1";
    else if (month < 7) qtr = "2";
    else if (month < 10) qtr = "3";
    else qtr = "4";

    return qtr;
}