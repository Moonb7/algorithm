function solution(park, routes) {
    let answer = [];
    const parkArea = [park.length, park[0].length];
    const directions = {
        "E": [0, 1],
        "W": [0, -1],
        "S": [1, 0],
        "N": [-1, 0],
    }
    
    // 시작위치 구하기
    for(let i = 0; i < park.length; i++) {
        if(park[i].includes("S")) {
            const idx = park[i].split("").findIndex((element) => {return element === "S"});
            answer = [i, idx]
            break;
        }
    }
    
    // 위치 이동
    for(let i = 0; i < routes.length; i++) {
        const [dir, moveLength] = routes[i].split(" ");
        let [h, w] = answer;
        let isValidation = true;
        for(let j = 0; j < moveLength; j++) {
            h += directions[dir][0];
            w += directions[dir][1];
            if(h < 0 || w < 0 || h >= parkArea[0] || w >= parkArea[1] || park[h][w] === "X") {
                isValidation = false;
                // console.log(h, w, park[h][w]);
                break;
            }
        }
        if(isValidation){
            answer = [h, w];
        }
    }
    
    return answer;
}