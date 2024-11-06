function solution(arr) {
    let biggestNum = arr[arr.length - 1]; // 배열 중 가장 큰수
    let check = 0; // 임의로 구한 배수를 배열의 숫자들로 나누어질때 카운트할 변수
    let mul = 0; // 최소공배수를 담을 변수
    let count = 1; // 실제 카운트 반복 횟수
    
    while(check !== arr.length) {
        check = 0; // 초기화
        mul = count * biggestNum;
        arr.forEach((num) => {
            if(Number.isInteger(mul/num)) {
                check++;
            }
        });
        count++;
    }
    return mul;
}