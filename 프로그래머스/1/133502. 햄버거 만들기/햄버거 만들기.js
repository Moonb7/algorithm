function solution(ingredient) {
    let answer = 0;
    const stack = []
    
    // 스택구조 특정 값이 들어오면 들어온 값 탈출
    for(let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);
        
        // 4개 이상 값이 들어오면 검사시작
        if(stack.length >= 4){
            // stack에서 뒤 4번쨰 값부터 찾아서 자연스레 4개의 값을 가져옵니다. 그리고 합쳐서 햄버거 찾기
            const burger = stack.slice(-4).join(""); 
            if(burger === "1231") {
                stack.splice(-4); // 뒤에서 찾은것이 맞으니깐 그 부분들만 제거
                answer++;
            }
        }
    }
    
    return answer;
}