function vowelsCount(str){
    let count = 0;
    let vowels = ["a","e","i","o","u"];
for(let word of str){
        for(let v of vowels){
            if(word===v){
                count++;
        }
         }
    }
    return count;
}
var string =prompt("enter the word");
alert(vowelsCount(string));