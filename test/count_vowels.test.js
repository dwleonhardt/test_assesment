const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const countVowel = require('../count_vowel').countVowel;
describe('countVowel', () => {
  it('countVowel should return the number of vowels in a string', function() {
    assert.equal(countVowel('hey count this!'), 4);
    assert.equal(countVowel('bbnmbff'), 0);
  });
  it('countVowel should return -1 if not a string', function() {
    assert.equal(countVowel(675), -1);
    assert.equal(countVowel(null), -1);
    assert.equal(countVowel(undefined), -1);
    assert.equal(countVowel(true), -1);
  });
});
