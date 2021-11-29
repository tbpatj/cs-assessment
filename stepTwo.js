

function addToZero(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i ++){
        result += arr[i];
    }
    return result === 0 ? true : false;
}
console.log("adds to zero " + addToZero([1,2,3,4,-0]));

//Time complexity is O(n)
//Space complexity O(n)

function hasUniqueChars(str){
    let i = 0;
    let l = {};
    while(!l[str[i]] && i < str.length){
        l[str[i]] = i;
        i++;
    }
    if(i === str.length) return true;
    else return false;
}
    

console.log("has unique chars " + hasUniqueChars("Moonday"));
//This function would probably be a O(n)
//space complexity O(n)


function isPangram(input){
    let set = new Set();
    for(let i = 0; i < input.length; i ++){
        if(input.charCodeAt(i) <= 122 && input.charCodeAt(i) >= 97){
            set.add(input[i]);
        }
    }
    if(set.size == 26)return true;
    else return false
}
//isPangram('abcdefghijklmnopqrstuvwxyz');
console.log("is pangram " + isPangram('The quick brown fox jumps over the lazy dog!'));
//o(n)
//space complexity o(n)

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

console.log("find longest word " + findLongestWord(["hi", "hello"]));

//O(n) due to it will always run the entire list, so thus it will get harder and harder for it to push through 
//space complexity O(n)