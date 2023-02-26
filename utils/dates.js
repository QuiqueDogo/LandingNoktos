export const setYearMonthDayFormat = (date) => {
    const dateObj = date;
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const newDate = year + '-' + month + '-' + day;
    return newDate;
};
