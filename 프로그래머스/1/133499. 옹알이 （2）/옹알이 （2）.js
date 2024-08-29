function solution(babbling) {
    let answer = 0;
    let strArr = ["aya", "ye", "woo", "ma"];
     for(let i = 0; i < babbling.length; i++){
        let babble = babbling[i];
        
        for(let j = 0; j < strArr.length; j++){
            if(babble.includes(strArr[j].repeat(2))) { // 일단 같은 발음이 두번 이상 반복시 아웃
                break;
            }
            
            babble = babble.split(strArr[j]).join(" "); // strArr[j] 발음 기준으로 전부 쪼개주면 ayaye 에서 먼저 aya쪼개져서 공백 + ye 이상태에서 두번째 ye발음으로 쪼개지면서 공백 + 공백
        }
         // 전부 검사해서 발음할 수 있는 단어는 공백이기에 공백을 기준으로 쪼개면서 공백제거 후 남은 단어들 조인하기 했을때 이미 발음할 수 있는 것은 삭제해 주었기에 문자열의 길이가 남아있으면 발음 할 수 없는 단어 라는 것 즉 길이가 없으면 발음을 완벽히 소화하는 것
         if(babble.split(" ").join("").length === 0){
            answer += 1;
        }
     }
    return answer;
}