function solution(num_list) {
    let arrayRevers = num_list.reverse()
    return arrayRevers
}

//원본을 유지한채로 뒤집고 싶다면

function solution(num_list) {
    return [...num_list].reverse(); 
}
