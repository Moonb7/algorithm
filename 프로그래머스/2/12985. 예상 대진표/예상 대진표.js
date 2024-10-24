function solution(n,a,b) {
    let answer = 0;
    // a b 가 항상 이기고 몇번쨰 라운드에서 만나는지 라운드를 구해야한다 return 라운드
    // 한 게임의 인원수는 n 이라고 한다면
    answer = getRound(a, b)
    return answer;
}

function getRound(a, b, count = 0) {
    if(a === b) return count;
    const aNumber = Math.ceil(a / 2)
    const bNumber = Math.ceil(b / 2)
    count++;
    
    return getRound(aNumber, bNumber, count)
}

// 1 2 , 3 4, 5 6, 7 8
//  1     2 ,  3    4 
//     1          2    
//          1
