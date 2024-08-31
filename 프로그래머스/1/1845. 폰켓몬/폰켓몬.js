function solution(nums) {
    let pokemons = {};
    const maxPokemon = Math.floor(nums.length / 2); // 최대로 가질 수 있는 수
    let pokemonTypeNum = 0; // 종류수
    
    for (let num of nums) {
        if (!pokemons[num]) { 
            pokemons[num] = 1;
        } else{
            pokemons[num] += 1;
        }
    }
    pokemonTypeNum = Object.keys(pokemons).length;
    
    return pokemonTypeNum > maxPokemon ? maxPokemon : pokemonTypeNum;
}