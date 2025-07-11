function truncateText(str , length) {
    if(str.length < length) {
        return str;
    }
    else {
        str.slice(0 , length) + "...";
    }   
};
export default truncateText;