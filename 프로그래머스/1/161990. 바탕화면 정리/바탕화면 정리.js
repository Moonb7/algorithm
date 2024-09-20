function solution(wallpaper) {
    let answer = [];
    // 시작점은 원소들을 확인할때 처음으로 (#)이 있는 열을 세로, 가로는 원소중 먼저 가로길이 x위치 파일(#)이 있는 위치
    // 끝점은 끝에 열 (#)이 있으면 끝점 세로는 이 열이고, 그리고 가로는 원소중 가장 긴 가로길이 max위치 파일(#)이 있는 위치
    let findind = new Set();
    
    for(let i = 0; i < wallpaper.length; i++) {
        const paperArr = wallpaper[i].split("");
        // #이 있는 인덱스 확인 그리고 그중에서 가장 작은 수는 시작점의 가로, 가장 큰수는 끝점의 가로
        if(paperArr.includes("#")) {
            findind.add(paperArr.indexOf("#"));
            findind.add(paperArr.lastIndexOf("#"))
        }
        
        // 첫 시작점의 x좌표
        if(wallpaper[i].includes("#") && !answer[0] && answer[0] !== 0) {
            answer[0] = i;
        }
        
        // 끝 점의 x좌표
        if(wallpaper[wallpaper.length - i - 1].includes("#") && !answer[2]) {
            answer[2] = wallpaper.length - i;
        }
    }
    // 첫 시작점의 x좌표
    answer[1] = Math.min(...findind);
    // 끝 점의 y좌표
    answer[3] = Math.max(...findind) + 1;
    
    return answer;
}