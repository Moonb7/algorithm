function solution(brown, yellow) {
    let answer = [];
    // 아 카펫의 가로 세로 최소 길이는 3이네 노란 격자가 1일때의 예시를 보면 알수 있다.
    // brown + yellow = 가로 * 세로
    // (brown + yellow) / 가로 = 세로
    // 가로 >= 세로
    // 가로 세로의 가장자리를 뺀 (가로 - 2) * (세로 - 2) = yellow가 된다
    const area = brown + yellow;
    
    // 가로 세로의 모든 조합을 일단 찾습니다.
    for(let i = 3; i <= Math.floor(Math.sqrt(area)); i++) {
        if(area % i === 0 ) {
            const width = area / i;
            
            // (가로 - 2) * (세로 - 2) = yellow 맞는지 체크
            if((width - 2) * (i - 2) === yellow) {
                answer = [width, i];
                break;
            }
        }
    }
    return answer;
}