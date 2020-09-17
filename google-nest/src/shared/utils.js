export const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

export const isPartOfElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    debugger;
    return (
        rect.top <= window.innerHeight && (rect.bottom >= 0)
    );
}