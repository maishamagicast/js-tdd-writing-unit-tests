// Your code here

export function pointsForWord(word){
    const vowels = ['a','e','i','o','u'];

    let points =0;

    for(let i=0; i<word.length; i++){
        const letter = word[i].toLowerCase();
        if (vowels.includes(letter)){
            points +=1;
        }
        else{
            points +=2;
        }
    }
    return points;
}