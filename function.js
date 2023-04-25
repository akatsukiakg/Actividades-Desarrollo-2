function validateDate(day, month, year) {
    if (month === 2 && day <=28 || month === 4 && day <= 31 || month === 6 && day <=31 || month === 1 && day <=31 || month === 3 && day <=31 || month === 5 && day <=31 || month === 7 && day <=31 || month === 8 && day <=31 || month === 9 && day <=30 || month === 10 && day <=31 || month === 11 && day <=30 || month === 12 && day <=31) {
        return true;
    }else {
        return false
    }
    if (year % 4 === 0 && day <=29) {
        return true;
    } else {
        return false;
    }
}
console.log(validateDate(31,9,2002))
