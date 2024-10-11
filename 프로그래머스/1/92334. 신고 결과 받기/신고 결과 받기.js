function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0);
    
    let ids = {};
    // 신고를 당한 사람기준으로 만들 객체에 id별로 빈배열 초기화
    for(let i = 0; i < id_list.length; i++) {
        const id = id_list[i];
        ids[id] = [];
    }
    
    // 신고를 당한 사람기준으로 신고한 사람을 등록
    for(let i = 0; i < report.length; i++) {
        const [id, reported] = report[i].split(" ");
        // 어차피 신고를 많이 해도 한번만 신고등록이 되니 한번만 신고
        if(!ids[reported].includes(id)) {
            ids[reported].push(id);
        }
    }
    
    // 이제 등록한 신고이력들을 이용해서 확인
    for(const key in ids) {
        // 신고당한 이력이 k번이상이면 정지
        if(ids[key].length >= k){
            ids[key].forEach((id) => {
                const idx = id_list.indexOf(id);
                answer[idx] += 1
            })
        }
    }
    
    return answer;
}