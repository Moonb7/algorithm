function solution(s) {
    const strArray = s.split(" ");
    
    let answer = '';
    
    let min = null;
    let max = null;
    for(let i = 0; i < strArray.length; i++) {
        if(Number(strArray[i]) < min || min === null) min = Number(strArray[i]);
        if(Number(strArray[i]) > max || max === null) max = Number(strArray[i]);
    }
    answer = `${min} ${max}`
    
    return answer;
}