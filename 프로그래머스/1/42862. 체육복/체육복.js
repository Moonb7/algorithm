function solution(n, lost, reserve) {
    // 여분이 있는 학생이 도난당한 경우를 먼저 처리
    let actualLost = lost.filter(l => !reserve.includes(l));
    let actualReserve = reserve.filter(r => !lost.includes(r));
    
    let answer = n - actualLost.length;
    
    // 정렬 (정확한 탐욕법 적용을 위해)
    actualLost.sort((a, b) => a - b);
    actualReserve.sort((a, b) => a - b);

    for (let i = 0; i < actualLost.length; i++) {
        let lostStudent = actualLost[i];
        
        if (actualReserve.includes(lostStudent - 1)) {
            // 앞 학생이 여분 체육복이 있는 경우
            answer++;
            actualReserve = actualReserve.filter(r => r !== lostStudent - 1);
        } else if (actualReserve.includes(lostStudent + 1)) {
            // 뒷 학생이 여분 체육복이 있는 경우
            answer++;
            actualReserve = actualReserve.filter(r => r !== lostStudent + 1);
        }
    }
    
    return answer;
}