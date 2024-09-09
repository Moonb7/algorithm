function solution(s, skip, index) {
    let answer = '';
    let changedCharArray = s.split("");
    // 아스키코드
    for(let i = 0; i < index; i++){
        
        changedCharArray= changedCharArray.map(char=> {
            let changedChar = String.fromCharCode(char.charCodeAt() + 1);
            if(changedChar > 'z') {
                changedChar = 'a';
            }
            
          while(skip.split("").includes(changedChar)) {
              changedChar = String.fromCharCode(changedChar.charCodeAt() + 1);
              if(changedChar > 'z') {
                  changedChar = 'a';
              }
          }
          return changedChar;
        })
    }
    
    answer = changedCharArray.join("");
    
    return answer;
}