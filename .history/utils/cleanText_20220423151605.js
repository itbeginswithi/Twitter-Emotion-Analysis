export const cleanText = (text) => {
    
    if(text.include("&amp;")){
       text.replace("&amp;", '&');
    }

    return text;
}