function solution(today, terms, privacies) {
    let answer = [];
    let curentDate = new Date(today) // 해당 날짜 기입

    const objTerms = {};
    
    for(let i = 0; i < terms.length; i++) {
        const [key, limitMonth] = terms[i].split(" ");
        objTerms[key] = limitMonth;
    }
    
    for(let i = 0; i < privacies.length; i++) {
        const [date, key] = privacies[i].split(" ");
        const priDate = new Date(date);
        priDate.setMonth(priDate.getMonth() + Number(objTerms[key]));
        if(curentDate >= priDate) {
            answer.push(i + 1);
        }
    }
    
    
    return answer;
}