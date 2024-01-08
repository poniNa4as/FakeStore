const sortArray = (nums) => {
    const result = []
    for (let num of nums) {
        let flag = false 
        for (let row of result) {
            if (!row.includes(num)) {
                row.push(num)
                flag = true
                break
            }
            
        }

        if (!flag) {
            result.push([num])
        }
    }
    return result
}
    
  
  const array = [1, 4, 2, 5, 6, 7, 4, 3, 6, 6, 3, 4, 3];
  console.log(sortArray(array));
  