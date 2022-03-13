export const getDateTime = (date) => {
    let hour = new Date(date).getHours();
    let minutes = new Date(date).getMinutes();
    let seconds = new Date(date).getSeconds();
    if (hour < 10) { hour = `0${hour}` };
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    return `Last request: ${hour}:${minutes}:${seconds}`
};