
//Phone Number Format
function solution(S) {
    let blocks = [];
    let sNoDash = S.replace(/-+/g,'')
    let cleanS = sNoDash.replace(/\s+/g, '');   

    for (let i = 0, cLength = cleanS.length; i < cLength; i += 3) {
        if(cLength - i === 4)
        {
            blocks.push(cleanS.substring(i, cLength - 2));
            blocks.push(cleanS.substring(i + 2, cLength));
            break;
        }
        else if(cLength - i === 2){
            blocks.push(cleanS.substring(i, cLength));
        }
        else{
            blocks.push(cleanS.substring(i, i + 3));
        }       
    }
    return blocks.join('-');
}

console.log(solution("0 - 22 1985--324  "));