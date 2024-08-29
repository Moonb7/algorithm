function solution(nums) {
    // 해시 테이블 역할을 하는 객체 생성
    let pokemonCount = {};
    
    // 폰켓몬 종류별로 개수를 세기
    for (let num of nums) {
        if (pokemonCount[num]) {
            pokemonCount[num] += 1;
        } else {
            pokemonCount[num] = 1;
        }
    }
    
    // 고를 수 있는 폰켓몬의 최대 종류 수
    const maxTypes = Object.keys(pokemonCount).length;
    // 실제로 선택할 수 있는 폰켓몬의 수
    const maxPokemon = nums.length / 2;
    
    // 최대 가능한 종류와 실제 선택 가능한 수 중 작은 값을 반환
    return Math.min(maxTypes, maxPokemon);
}