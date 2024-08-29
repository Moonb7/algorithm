function solution(nums) {
    const mypoketCount = Math.floor(nums.length / 2);
    const ponketmon = new Set;
    
    for(let i = 0; i < nums.length; i++) {
        if(ponketmon.size < mypoketCount) {
            ponketmon.add(nums[i]);
        }
        else break;
    }
    
    return ponketmon.size;
}