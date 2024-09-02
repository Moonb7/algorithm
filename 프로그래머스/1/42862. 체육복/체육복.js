function solution(n, lost, reserve) {    
    
    let resultLost = lost.filter(l => !reserve.includes(l));
    let resultReserve = reserve.filter(r => !lost.includes(r));
    
    let answer = n - resultLost.length;
    
    resultLost.sort((a, b)=> a - b);
    resultReserve.sort((a, b)=> a - b);
    
    for(let i = 0; i < resultLost.length; i++) {
        if(resultReserve.includes(resultLost[i] - 1)) {
            answer++;
            
            resultReserve = resultReserve.filter(r => r !== resultLost[i] - 1);
        } else if(resultReserve.includes(resultLost[i] + 1)) {
            answer++;
            
            resultReserve = resultReserve.filter(r => r !== resultLost[i] + 1);
        }
    }
    return answer;
}