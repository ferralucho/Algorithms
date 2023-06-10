function sentencePalindrome(s) {
    let l = 0;
    let h =  s.length - 1;

    s = s.ToLowerCase();

    while(l <= h)
    {
          
        let getAtl = str[l];
        let getAth = str[h];
          
        if (!(getAtl >= 'a' && getAtl <= 'z'))
            l++;
        else if(!(getAth >= 'a' && getAth <= 'z'))
            h--;
        else if( getAtl == getAth)
        {
            l++;
            h--;
        }
          
        else
            return false;
    }

}


let str = "Too hot to hoot.";
