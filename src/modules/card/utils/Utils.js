
 function formatTextLength(text,maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

export function ramdonNumber() {
    return Math.floor(Math.random() * (100 - 0 + 1) + 0);
}

export default formatTextLength;


