function solution(n) {
    let answer = 0;
    answer = getFibonacciNumber(n);
    
    return answer;
}
// 0 1 1 2 3 5 8 13 21 34
function getFibonacciNumber(n) {
    let a = 0;
    let b = 1; // 초기 설정
    
    for(let i = 1; i < n; i++) {
        const num = (a + b) % 1234567;
        a = b;
        b = num;
        // console.log(num)
    }
    return b
}