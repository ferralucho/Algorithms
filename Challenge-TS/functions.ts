function simpleIsPalindrome(str: string): boolean {
    return str.split('').reverse().join('') === str;
}

export default simpleIsPalindrome;