function solution(n) {
    let answer = 0;
        let f0 = 0;
        let f1 = 1;
        let f2 = 1;

        for(let i=1; i<n; i++){
            f2 = (f0 + f1) % 1234567;
            f0 = f1;
            f1 = f2;
        }
        answer = f2;

        return answer;
}
