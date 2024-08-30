function solution(X, Y) {
    let answer = '';
    const numsX = {};
    const numsY = {};
    const result = [];
    
    // 각각 숫자와 갯수 구하기
    for(const x of X) {
        if(numsX[x]) {
            numsX[x] += 1;
        } else {
            numsX[x] = 1;
        }
    }
    for(const y of Y) {
        if(numsY[y]) {
            numsY[y] += 1;
        } else {
            numsY[y] = 1;
        }
    }
    console.log(numsX);
    console.log(numsY);
    const numy = Object.keys(numsY);

    for(const numx in numsX) {
        if(numy.includes(numx)) {
            console.log(numx);
            const count = numsX[numx] > numsY[numx] ? numsY[numx] : numsX[numx]  
            for(let i = 0; i < count; i++){
                result.push(numx);
            }
            
        }
    }
    
    if(result.length <= 0){
        answer = '-1';
    } else { // 내림 차순하고 join으로 묶어 주기
        result.sort((a,b) => a > b ? -1 : 1);
        answer = result.join("");
        if(answer[0] === "0") {
            answer = "0";
        }
    }
    
    return answer;
}