function solution(n, lost, reserve) {    
    
    let resultLost = lost.filter(l => !reserve.includes(l));
    let resultReserve = reserve.filter(r => !lost.includes(r));
    
    let answer = n - resultLost.length;
    
    resultLost.sort((a, b)=> a - b);
    resultReserve.sort((a, b)=> a - b);
    
    for(let i = 0; i < resultLost.length; i++) {
        if(resultReserve.includes(resultLost[i] - 1)) {
            answer++;
            
            resultReserve = resultReserve.filter(r => r !== resultLost[i] - 1); // 옷 빌려준애는 빠지면서 재정의
        } else if(resultReserve.includes(resultLost[i] + 1)) {
            answer++;
            
            resultReserve = resultReserve.filter(r => r !== resultLost[i] + 1); // 옷 빌려준애는 빠지면서 재정의
        }
    }
    return answer;
}