var countVowel = (str) => {
  var count = 0
  if (typeof str === 'string') {
    for (var i = 0; i < str.length; i++) {
      if ((/^[aeiou]$/i).test(str[i])) {
        count ++;
      }
    }
    return count;
  }
  else {
    return - 1;
  }
}

module.exports = {
  countVowel
};
