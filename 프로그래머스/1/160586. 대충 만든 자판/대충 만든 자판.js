function solution(keymap, targets) {
    let answer = [];
    let k = 0;
    
    for(let i = 0; i < targets.length; i++) {
        let count = 0;
        
        for(let j = 0; j < targets[i].length; j++) {
            if(k === targets[i].length){
                k = 0;
            }
            
            let targetkey = targets[i][j];
            const minCounts = [];
            for(let keys of keymap) {
                if(keys.includes(targetkey)){
                    minCounts.push(keys.indexOf(targetkey) + 1);
                }
            }
            let minCount = Math.min(...minCounts);
            console.log(minCount);
            
            if(answer[i]){
                answer[i] += minCount;
            } else {
                answer.push(minCount);
            }
            
            // console.log(targetkey);
            k++;
        }
        // targets[i][j]가 각각 keymap[i]에 포함되었는지 알아보고 그중 keymap[i]에 포함된값의 인덱스 값을 비교해 작은 인덱스를 구해서 더해주어 최종으로 최소 횟수를 구할 수 있다
    }
    answer.forEach((item, index) => {
    if (item === Infinity || item === -Infinity) {
        answer[index] = -1;
    }
    });
    return answer;
}