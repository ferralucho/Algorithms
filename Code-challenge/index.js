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


  module.exports = { isForOfPalindrome } ;