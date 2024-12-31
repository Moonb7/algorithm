function solution(s) {
    const x = s.length - 1;
    const arrS = [...s];
    
    let answer = 0;
    for(let i = 0; i < x; i++) {
        if(check(arrS)) {
            answer++;
        }
        const ss = arrS.shift();
        arrS.push(ss);
    }
    
    return answer;
}

function check(arrS) {
    const checkMap = {
        ')': '(',
        '}': '{',
        ']': '[',
    }
    const stack = [];
    
    for(const char of arrS) {
        if(Object.values(checkMap).includes(char)) {
            stack.push(char);
        } else if (Object.keys(checkMap).includes(char)) {
            if(stack.length > 0 && stack[stack.length - 1] === checkMap[char]){
                stack.pop();
            } else {
                return false; // 닫는 괄호가 먼저 들어오면 false 
            }
        }
    }
    
    return stack.length === 0; // 여기까지 실행이 되고 비어 있다면 true
}