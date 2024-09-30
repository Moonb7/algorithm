function solution(players, callings) {
    let answer = [];
    let playersArr = players;
    const playerMap = {};
    
    // 따로 선수목록과 순위 데이터 Mapping
    for(let i =0; i < playersArr.length; i++) {
        playerMap[playersArr[i]] = i;
    }
    
    for(let i =0; i < callings.length; i++) {
        // find로 찾지 말고 다른방식으로 player를 찾으면 시간초과가 안날 것 같은데
        const idx = playerMap[callings[i]] // 해당 추월한 선수의 원래 인덱스를 가져온다
        const nextPlayer = playersArr[idx - 1]; // 해당 선수보다 앞순위의 선수를 읽어오고
        
        playersArr[idx - 1] = callings[i]; // 추월 선수 앞으로 이동
        playersArr[idx] = nextPlayer; // 앞순위 선수는 뒤로 이동
        
        // 순위 조정 
        playerMap[callings[i]] -= 1;
        playerMap[nextPlayer] += 1;
    }
    
    answer = playersArr;
    return answer;
}