export const trimTextValue = (text, breakPoint) => {
    const indexOfBreakpoint = text.indexOf(breakPoint, 0);
    const modifiedText = text.substring(0, indexOfBreakpoint);

    return modifiedText;
};