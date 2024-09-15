function solution(survey, choices) {
    let answer = '';
    let personality_type= {
        "RT" : {"R":0, "T":0},
        "CF" : {"C":0, "F":0},
        "JM" : {"J":0, "M":0},
        "AN" : {"A":0, "N":0},
    };
    let score = [3, 2, 1, 0, 1, 2, 3];
    
    // survey 에서
    // "AN" 유형을 찾고 초이스 5번이라 "N" 네오형에 1점추가
    // "CF" 에 3번이면 "C" 콘형에 1점 추가 // 3번 이하면 앞에 성격점수 추가 5번이상이면 뒤에 성격점수 추가
    // "MJ" 에 2번이면 "M" 무지형에 2점 추가
    // "RT" 에 7번이면 "T" 튜브형에 3점 추가
    // "NA" 에 5번이면 "A" 콘형에 1점 추가
    // 최종적으로 각 성격 지표의 점수중 높은 것을 찾아 배열에 추가
    // 두 지표 점수가 같을떄는 둘중 사전이 빠른 순으로 설정 여기선 그냥 첫번째 지표 설정 미리 사전순으로 지정해놔서
    // 마지막으로 성격유형을 추가한 배열을 합쳐서 출력
    for(let i =0; i < survey.length; i++) {
        const indices = survey[i].split("");
        const indicesScore = score[choices[i] - 1]; // 실제 지표번호와 배열순서를 맟추기위해 -1
        
        const objkeys = Object.keys(personality_type);
        let objkey = "";
        for(let j = 0; j < objkeys.length; j++) {
            const isObjkey = objkeys[j].includes(indices[0]);
            if(isObjkey) {
                objkey = objkeys[j];
                break;
            }
        }
        if(choices[i] < 4) {
            // 앞에 성격유형에 점수 추가
            personality_type[objkey][indices[0]] += indicesScore
        } else if(choices[i] > 4) {
            // 뒤에 성격유형에 점수 추가
            personality_type[objkey][indices[1]] += indicesScore
        }
    }
    // console.log(personality_type);
    const result = [];
    for(const keys in personality_type) {
        // const value = Object.values(personality_type[keys]);
        const key = Object.keys(personality_type[keys]);
        
        if(personality_type[keys][key[0]] > personality_type[keys][key[1]]) {
            result.push(key[0]);
        } else if(personality_type[keys][key[0]] < personality_type[keys][key[1]]) {
            result.push(key[1]);
        } else {
            result.push(key[0]);
        }
    }
    // console.log(result);
    answer = result.join("");
    
    return answer;
}