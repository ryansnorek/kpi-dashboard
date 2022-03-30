

export function getQuarter() {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; 
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    
    let quarter;
    if (month < 4) quarter = "1";
    else if (month < 7) quarter = "2";
    else if (month < 10) quarter = "3";
    else quarter = "4";

    return quarter;
}