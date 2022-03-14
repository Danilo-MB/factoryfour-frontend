export const getDateTime = (date) => {
    if (!date) return;
    let hour = new Date(date).getHours();
    let minutes = new Date(date).getMinutes();
    let seconds = new Date(date).getSeconds();
    if (hour < 10) { hour = `0${hour}` };
    if (minutes < 10) minutes = `0${minutes}`;
    if (seconds < 10) seconds = `0${seconds}`;

    return `${hour}:${minutes}:${seconds}`
};

export const trimTextValue = (text, breakPoint) => {
    const indexOfBreakpoint = text.indexOf(breakPoint, 0);
    const modifiedText = text.substring(0, indexOfBreakpoint);

    return modifiedText;
};