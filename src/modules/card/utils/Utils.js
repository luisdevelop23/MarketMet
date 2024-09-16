
function formatTextLength(text,maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}


export default formatTextLength