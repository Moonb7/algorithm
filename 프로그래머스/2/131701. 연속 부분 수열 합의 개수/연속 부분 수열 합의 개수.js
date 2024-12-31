function solution(elements) {
    const answer = new Set();
    
    // 수열 길이가 1에서 elements.length까지 순회
    for(let i = 1; i <= elements.length; i++) {
        for(let j = 0; j < elements.length; j++) {
            let sum = 0;
            // i 만큼 해당 요소 더해주기
            for(let k = 0; k < i; k++) {
                // console.log("요소------------ : ",elements[(j + k) % elements.length])
                sum += elements[(j + k) % elements.length]; // 둥근 수열을 생각해서 길이만큼 나눈 나머지를 구해줍니다.
                // console.log((j + k))
            }
            // console.log("sum : ", sum)
            
            answer.add(sum); // 집합에 추가
        }
    }
    return answer.size;
}