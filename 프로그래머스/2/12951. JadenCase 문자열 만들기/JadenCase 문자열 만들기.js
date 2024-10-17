function solution(s) {
    const answer = [];
    
    const strArray = s.split(" ");
    
    strArray.forEach((word, idx) => {
        if(word.length > 0) {
            const str = word.split("");
            for(let i = 1; i < str.length; i++) {
            str[i] = str[i].toLowerCase();
            }
            str[0] = str[0].toUpperCase();
            answer.push(str.join(""))
        } else {
            answer.push("");
        }
    })
    let result = "";
    result = answer.join(" ");
    
    return result;
}