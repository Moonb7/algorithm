function solution(s) {
    let answer = 0;
    const stack = [];
    
    for(let i = 0; i < s.length; i++) {
        stack.push(s[i]); // 값을 하나하나 집어 넣고
        
        const currentChar = stack.filter(char => char == stack[0]); // 처음들어온 문자의 갯수를 구하기위해 
        const compareChar = stack.filter(char => char !== stack[0]); // 처음들어온 문자가 아닌 다음에 들어온 문자의 수를 정하기 위해
        if(currentChar.length == compareChar.length) {
            answer++;
            stack.length = 0; // 초기화하여 다시 반복할 준비를 합니다.
        }
    }
    
    if(stack.length > 0) {
        answer++;
    }
    
    return answer;
}