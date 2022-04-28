export const cleanText = (text) => {

    if(text.includes("&amp;")){
       text.replace("&amp;", '&');
    }

    return text;
}