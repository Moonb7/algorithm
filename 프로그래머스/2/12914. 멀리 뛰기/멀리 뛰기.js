function solution (n) {
    
  const dp = Array.from(n + 1).fill(0); // n길이의 dp배열을 생성후 0으로 초기화
    dp[0] = 1; // 0번과 1번에 1 할당
    dp[1] = 1; 
    
  	for (let i=2; i<=n; i++) {
        dp[i] = (dp[i - 2] + dp[i - 1])%1234567;
    }
    
  return dp[n];
}