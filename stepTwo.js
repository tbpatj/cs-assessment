

function addToZero(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i ++){
        result += arr[i];
    }
    return result === 0 ? true : false;
}
console.log(addToZero([1,2,3,4,-0]));

//Time complexity is O(n)
//Space complexity O(n)

function hasUniqueChars(str){
    let i = 0;
    let l = {};
    while(!l[str[i]] && i < str.length){
        console.log(l);
        l[str[i]] = i;
        i++;
    }
    if(i === str.length) return true;
    else return false;
    
}

console.log(hasUniqueChars("Moonday"));
//This function would probably be a O(n)
//space complexity O(n)

function findLongestWord(arr){
    let longest = {length: 0, index: -1}
    for(let i = 0; i < arr.length ; i ++){
        if(arr[i].length > longest.length){
            longest.length = arr[i].length;
            longest.index = i;
        }
    }
    return longest.length;
}

console.log(findLongestWord(["hi", "hello"]));

//O(n) due to it will always run the entire list, so thus it will get harder and harder for it to push through 
//space complexity O(n)