function solution(s) {
    let answer = [];
    
    answer = getResult(s);
    
    return answer;
}

function getResult(s, count = 0, zeroCount = 0) {
    if(s === "1") return [count, zeroCount];
    const removeStr = s.replace(/0/g, "")
    const removCount = s.length - removeStr.length;
    
    const newStr = removeStr.length.toString(2);
    
    return getResult(newStr, count + 1, zeroCount + removCount)
}