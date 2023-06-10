function checkPalindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < j / 2; i++) {
    if (str[i] != str[j - i]) {
      return false;
    }
  }
  return true;
}

function isPalindrome(str) {
  let ans = checkPalindrome(str);
  if (ans == true) {
    console.log("passed string is palindrome ");
  }
  else {
    console.log("passed string not a palindrome");
  }
}
let testtr = "racecar";
isPalindrome(testtr);

describe('checkPalindrome', () => {
  test('returns true for palindromic strings', () => {
    expect(checkPalindrome('racecar')).toBe(true);
    expect(checkPalindrome('level')).toBe(true);
    expect(checkPalindrome('madam')).toBe(true);
    expect(checkPalindrome('12321')).toBe(true);
  });

  test('returns false for non-palindromic strings', () => {
    expect(checkPalindrome('hello')).toBe(false);
    expect(checkPalindrome('world')).toBe(false);
    expect(checkPalindrome('12345')).toBe(false);
  });
});

const clean = (s) => {
  const alphaChars = [];
  const regex = /[a-z0-9]/i;

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (regex.test(c)) {
      alphaChars.push(c.toLowerCase());
    }
  }

  return alphaChars.join('');
}

const isForOfPalindrome = (s) => {
  const cleanStr = clean(s);
  const charArr = cleanStr.split('');

  for (let c of charArr) {
    if (c !== charArr.pop()) {
      return false;
    }
  }
  return true;
};

describe('isForOfPalindrome', () => {
  test('returns true for palindromic strings', () => {
    expect(isForOfPalindrome('racecar')).toBe(true);
    expect(isForOfPalindrome('level')).toBe(true);
    expect(isForOfPalindrome('madam')).toBe(true);
    expect(isForOfPalindrome('12321')).toBe(true);
  });

  test('returns false for non-palindromic strings', () => {
    expect(isForOfPalindrome('hello')).toBe(false);
    expect(isForOfPalindrome('world')).toBe(false);
    expect(isForOfPalindrome('12345')).toBe(false);
  });
});

const simpleIsPalindrome = (s) => {
  const cleanStr = clean(s);
  const reverseStr = cleanStr.split('').reverse().join('');
  return reverseStr === cleanStr
}

describe('simpleIsPalindrome', () => {
  test('returns true for palindromic strings', () => {
    expect(simpleIsPalindrome('racecar')).toBe(true);
    expect(simpleIsPalindrome('level')).toBe(true);
    expect(simpleIsPalindrome('madam')).toBe(true);
    expect(simpleIsPalindrome('12321')).toBe(true);
  });

  test('returns false for non-palindromic strings', () => {
    expect(simpleIsPalindrome('hello')).toBe(false);
    expect(simpleIsPalindrome('world')).toBe(false);
    expect(simpleIsPalindrome('12345')).toBe(false);
  });
});

const isPalindromeForEach = (s) => {
  const cs = clean(s);

  let isPalindrome = true;

  cs.split('').forEach((c, i) => {
    if (c !== cs[cs.length - 1 - i]) {
      isPalindrome = false;
    }
  })
  return isPalindrome;
}

describe('isPalindromeForEach', () => {
  test('returns true for palindromic strings', () => {
    expect(isPalindromeForEach('racecar')).toBe(true);
    expect(isPalindromeForEach('level')).toBe(true);
    expect(isPalindromeForEach('madam')).toBe(true);
    expect(isPalindromeForEach('12321')).toBe(true);
  });

  test('returns false for non-palindromic strings', () => {
    expect(isPalindromeForEach('hello')).toBe(false);
    expect(isPalindromeForEach('world')).toBe(false);
    expect(isPalindromeForEach('12345')).toBe(false);
  });
});

const isPalindromeMap = (s) => {
  const cs = clean(s);

  const letterMatches = cs.split('').map((c, i) => {
    return c !== cs[cs.length - 1 - i];
  });

  const isPal = customSome(letterMatches, (m => m));
  return !isPal;
}

function customSome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

describe('isPalindromeMap', () => {
  test('returns true for palindromic strings', () => {
    expect(isPalindromeMap('racecar')).toBe(true);
    expect(isPalindromeMap('level')).toBe(true);
    expect(isPalindromeMap('madam')).toBe(true);
    expect(isPalindromeMap('12321')).toBe(true);
  });

  test('returns false for non-palindromic strings', () => {
    expect(isPalindromeMap('hello')).toBe(false);
    expect(isPalindromeMap('world')).toBe(false);
    expect(isPalindromeMap('12345')).toBe(false);
  });
});

const isPalindromeReduce = (s) => {
  const cleanStr = clean(s);

  return cleanStr.split('').reduce((match, c, i) => {
    if (!match) {
      return false;
    }
    return c === cleanStr[cleanStr.length - 1 - i];
  }, true);
}

describe('isPalindromeReduce', () => {
  test('returns true for palindromic strings', () => {
    expect(isPalindromeReduce('racecar')).toBe(true);
    expect(isPalindromeReduce('level')).toBe(true);
    expect(isPalindromeReduce('madam')).toBe(true);
    expect(isPalindromeReduce('12321')).toBe(true);
  });

  test('returns false for non-palindromic strings', () => {
    expect(isPalindromeReduce('hello')).toBe(false);
    expect(isPalindromeReduce('world')).toBe(false);
    expect(isPalindromeReduce('12345')).toBe(false);
  });
});

const isPalindromeEvery = (s) => {
  const cleanStr = clean(s);

  return cleanStr.split('').every((c, i) => c === cleanStr[cleanStr.length - 1 - i]
  )
}

describe('isPalindromeEvery', () => {
  test('returns true for palindromic strings', () => {
    expect(isPalindromeEvery('racecar')).toBe(true);
    expect(isPalindromeEvery('level')).toBe(true);
    expect(isPalindromeEvery('madam')).toBe(true);
    expect(isPalindromeEvery('12321')).toBe(true);
  });

  test('returns false for non-palindromic strings', () => {
    expect(isPalindromeEvery('hello')).toBe(false);
    expect(isPalindromeEvery('world')).toBe(false);
    expect(isPalindromeEvery('12345')).toBe(false);
  });
});

const palindromeProximity = (s) => {
  const cleanStr = clean(s);

  const letterMatches = cleanStr.split('').map((c, i) => {
    return c !== cleanStr[cleanStr.length - 1 -i];
  });

  const matches = letterMatches.filter(m => !m);
  const proximity = matches.length / s.length * 100;

  return proximity.toFixed(2) + '%';
}

describe('palindromeProximity', () => {
  test('returns true for palindromic strings', () => {
    expect(palindromeProximity('racecar')).toBe('100.00%');
  });

  test('returns false for non-palindromic strings', () => {
    expect(palindromeProximity('hello')).toBe('20.00%');
  });
});
