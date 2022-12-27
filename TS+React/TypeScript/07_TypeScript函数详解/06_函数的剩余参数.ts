function sum(...nums: number[]){
    let total = 0
    for(const num of nums){
        total += num
    }
    return total
}

sum(20,30)
sum(20,30,40)