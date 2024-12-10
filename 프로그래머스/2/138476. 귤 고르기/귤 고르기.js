function solution(k, tangerine) {
    let answer = 0;
    const obj = {};
    
    for(let i = 0; i < tangerine.length; i++) {
        if(obj[tangerine[i]]) {
            obj[tangerine[i]] = obj[tangerine[i]] + 1;
            continue;
        }
        
        obj[tangerine[i]] = 1;
    }

    // 여기서 그나마 갯수가 가장 높은 수 를 찾고 그다음에 높은 갯수를 가진걸 찾고
    const values = Object.values(obj).sort((a, b) => b - a);

    let temp = k;
    for(let i = 0; i < values.length; i++) {
        if(temp <= 0) {
            break;
        }
        temp -= values[i];
        
        answer++;
    }
    
    return answer;
}